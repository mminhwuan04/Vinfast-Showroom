import React, { useEffect, useRef, useState } from "react";

type Props = {
  modelKey: string;
  maxFramesToSearch?: number;
  pollIntervalMs?: number;
};


const DEFAULT_EXTS = ["jfif", "jpg", "jpeg", "png", "webp"];
const DEFAULT_MAX_FRAMES = 200;
const DEFAULT_POLL_MS = 3000;
const CONSECUTIVE_MISS_THRESHOLD = 1; // stop after N consecutive missing indices

export default function Car360Viewer({
  modelKey,
  maxFramesToSearch = DEFAULT_MAX_FRAMES,
  pollIntervalMs = DEFAULT_POLL_MS,
}: Props) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Drag state
  const dragRef = useRef({
    dragging: false,
    startX: 0,
    startIndex: 0,
  });

  // helper: check URL existence via HEAD request (fast if same-origin)
  function urlExists(url: string): Promise<boolean> {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}


  // attempt patterns for a given index: unpadded and padded(3)
  function candidateUrlsForIndex(idx: number): string[] {
    const i = idx;
    const padded = String(idx).padStart(3, "0");
    const basePath = `/360degree/${modelKey}/`;
    const candidates: string[] = [];
    for (const ext of DEFAULT_EXTS) {
      candidates.push(`${basePath}${modelKey}_${i}.${ext}`);
      candidates.push(`${basePath}${modelKey}_${padded}.${ext}`);
    }
    return candidates;
  }

  // discover images by probing sequential indices
  async function discoverImages(): Promise<string[]> {
    if (!modelKey) return [];
    const found: string[] = [];
    let consecutiveMisses = 0;
    let foundAny = false;
    for (let i = 1; i <= maxFramesToSearch; i++) {
      let foundForIndex = false;
      const candidates = candidateUrlsForIndex(i);
      for (const url of candidates) {
      const ok = await urlExists(url);
      if (ok) {
        found.push(url);
        foundForIndex = true;
        foundAny = true; // <-- ĐÁNH DẤU ĐÃ CÓ ÍT NHẤT 1 FRAME
        break;
      }
    }

    if (!foundForIndex) {
      if (!foundAny) {
        // frame đầu tiên đã miss → xe này KHÔNG có 360
        break;
      }
      consecutiveMisses++;
      if (consecutiveMisses >= CONSECUTIVE_MISS_THRESHOLD) break;
    } else {
      consecutiveMisses = 0;
    }
  }
    return found;
  }

  // Preload a specific image URL
  function preloadUrl(url: string) {
    if (loadedMap[url]) return;
    const img = new Image();
    img.onload = () => {
      setLoadedMap((m) => ({ ...m, [url]: true }));
    };
    img.onerror = () => {
      setLoadedMap((m) => ({ ...m, [url]: false }));
    };
    img.src = url;
  }

  // Main discovery + preload flow
  useEffect(() => {
    let mounted = true;
    let pollHandle: number | null = null;

    async function runDiscovery() {
      setLoading(true);
      setError(null);
      try {
        const found = await discoverImages();
        if (!mounted) return;
        if (found.length === 0) {
          setImageUrls([]);
          setLoadedMap({});
          setCurrentIndex(0);
        } else {
          // dedupe & keep order
          const unique = Array.from(new Set(found));
          setImageUrls((prev) => {
            // if set changed from previous, reset currentIndex to 0
            const prevJoined = prev.join("|");
            const newJoined = unique.join("|");
            if (prevJoined !== newJoined) {
              setCurrentIndex(0);
            }
            return unique;
          });

          // preload first window (e.g., first 6 frames)
          unique.slice(0, 6).forEach(preloadUrl);

          // progressively preload rest (non-blocking)
          unique.slice(6).forEach((u, idx) => {
            // staggered timeout to avoid burst
            setTimeout(() => preloadUrl(u), 200 + idx * 50);
          });
        }
      } catch (err: any) {
        setError(String(err?.message ?? err));
      } finally {
        if (mounted) setLoading(false);
      }
    }

    // initial discovery
    runDiscovery();

    // poll periodically to detect newly added images
    pollHandle = window.setInterval(() => {
      runDiscovery();
    }, pollIntervalMs);

    return () => {
      mounted = false;
      if (pollHandle) window.clearInterval(pollHandle);
    };
    // re-run effect whenever modelKey changes
  }, [modelKey, maxFramesToSearch, pollIntervalMs]);

  // when imageUrls change and we have at least one, ensure currentIndex in bounds
  useEffect(() => {
    if (imageUrls.length === 0) {
      setCurrentIndex(0);
    } else if (currentIndex >= imageUrls.length) {
      setCurrentIndex(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrls.length]);

  // Drag handlers
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const pxPerFrame = 6; // sensitivity - pixels per frame shift

    function onDown(e: MouseEvent | TouchEvent) {
      dragRef.current.dragging = true;
      dragRef.current.startIndex = currentIndex;
      dragRef.current.startX =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      // prevent image drag ghosting
      e.preventDefault?.();
    }

    function onMove(e: MouseEvent | TouchEvent) {
      if (!dragRef.current.dragging || imageUrls.length === 0) return;
      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const deltaX = clientX - dragRef.current.startX;
      // positive deltaX: user moved right -> previous frames (we choose animate accordingly)
      const shift = Math.floor(deltaX / pxPerFrame);
      // we'll make dragging left (negative deltaX) increase index
      const newIndex =
        ((dragRef.current.startIndex + shift) % imageUrls.length + imageUrls.length) %
        imageUrls.length;
      setCurrentIndex(newIndex);
    }

    function onUp() {
      dragRef.current.dragging = false;
    }

    container.addEventListener("mousedown", onDown);
    container.addEventListener("touchstart", onDown, { passive: false });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);

    return () => {
      container.removeEventListener("mousedown", onDown);
      container.removeEventListener("touchstart", onDown as any);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove as any);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrls, currentIndex]);

  // keyboard left/right (optional)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (imageUrls.length === 0) return;
      if (e.key === "ArrowLeft") {
        setCurrentIndex((p) => (p === 0 ? imageUrls.length - 1 : p - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((p) => (p + 1) % imageUrls.length);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [imageUrls.length]);

  // ensure current image preloaded (lazy)
  useEffect(() => {
    if (!imageUrls[currentIndex]) return;
    const url = imageUrls[currentIndex];
    if (!loadedMap[url]) {
      preloadUrl(url);
    }
    // preload neighbors
    const left = imageUrls[(currentIndex - 1 + imageUrls.length) % imageUrls.length];
    const right = imageUrls[(currentIndex + 1) % imageUrls.length];
    if (left) preloadUrl(left);
    if (right) preloadUrl(right);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, imageUrls]);

  // UI
  const hasImages = imageUrls.length > 0;

  return (
    <div className="w-full">
      {loading && !hasImages ? (
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">
            Đang kiểm tra ảnh 360°...
          </p>
        </div>
      ) : !hasImages ? (
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center" ref={containerRef}>
          <p className="text-muted-foreground">
            Demo xem 360° (sẽ tích hợp thực tế)
          </p>
        </div>
      ) : (
        <div className="aspect-video bg-black rounded-lg relative select-none" ref={containerRef}>
          {/* image */}
          <img
            src={imageUrls[currentIndex]}
            alt={`360 ${modelKey} frame ${currentIndex + 1}`}
            className="w-full h-full object-contain"
            draggable={false}
            style={{ userSelect: "none", pointerEvents: "none" }}
          />

          {/* overlay: index / loading status */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
            <div className="flex-1">
              <input
                type="range"
                min={0}
                max={Math.max(0, imageUrls.length - 1)}
                value={currentIndex}
                onChange={(e) => setCurrentIndex(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div className="text-sm text-white/90 ml-3">
              {currentIndex + 1}/{imageUrls.length}
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="text-red-500 mt-2 text-sm">Lỗi: {error}</div>
      )}
    </div>
  );
}
