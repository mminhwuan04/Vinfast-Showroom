import PRELOADED_BOUNDARIES from "./preloaded-boundaries.json";

/**
 * Trả về ranh giới hành chính đã preload theo tên xã/phường.
 * KHÔNG fetch runtime – tuyệt đối ổn định.
 */
export async function getCommuneBoundary(
  communeName: string
): Promise<any | null> {
  const preloaded = (PRELOADED_BOUNDARIES as Record<string, any>)[communeName];

  if (preloaded) {
    return preloaded;
  }

  console.warn(
    `[Boundary] Chưa có boundary preload cho: ${communeName}`
  );

  return null;
}

/* =========================================================
   PHẦN CODE MỚI THÊM – TUYỆT ĐỐI KHÔNG ĐỤNG CODE CŨ
   ========================================================= */

/**
 * Kiểm tra point nằm trong polygon (Ray Casting)
 * GeoJSON dùng [lng, lat]
 */
function isPointInPolygon(
  point: [number, number],
  polygon: [number, number][]
): boolean {
  let inside = false;
  const [x, y] = point;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0];
    const yi = polygon[i][1];
    const xj = polygon[j][0];
    const yj = polygon[j][1];

    const intersect =
      yi > y !== yj > y &&
      x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

    if (intersect) inside = !inside;
  }

  return inside;
}

/**
 * Kiểm tra point với Polygon / MultiPolygon
 */
function isPointInGeometry(
  point: [number, number],
  geometry: any
): boolean {
  if (!geometry) return false;

  if (geometry.type === "Polygon") {
    return geometry.coordinates.some(
      (ring: [number, number][]) =>
        isPointInPolygon(point, ring)
    );
  }

  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates.some(
      (polygon: [number, number][][]) =>
        polygon.some((ring) =>
          isPointInPolygon(point, ring)
        )
    );
  }

  return false;
}

/**
 * Compute bbox for a geometry.
 * Returns [minX, minY, maxX, maxY] where coords are [lng, lat]
 */
function computeBBoxForGeometry(geometry: any): [number, number, number, number] | null {
  if (!geometry) return null;

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

  if (geometry.type === "Polygon") {
    for (const ring of geometry.coordinates) {
      for (const coord of ring) {
        const [x, y] = coord;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  } else if (geometry.type === "MultiPolygon") {
    for (const polygon of geometry.coordinates) {
      for (const ring of polygon) {
        for (const coord of ring) {
          const [x, y] = coord;
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
      }
    }
  } else {
    return null;
  }

  if (!isFinite(minX)) return null;
  return [minX, minY, maxX, maxY];
}

/**
 * Try to extract province name from feature properties.
 * We attempt a list of common property keys used by Overpass/OSM exports.
 * If not found, we will later fallback to parsing the key name.
 */
function detectProvinceFromProperties(props: Record<string, any> | undefined): string | null {
  if (!props) return null;

  const candidates = [
    "province",
    "is_in:province",
    "is_in:state",
    "is_in:region",
    "addr:province",
    "province_name",
    "state",
    "region",
    "is_in"
  ];

  for (const k of candidates) {
    const v = props[k];
    if (typeof v === "string" && v.trim()) return v.trim();
  }

  // some datasets use array or object; try "is_in" compound
  if (props["is_in"]) {
    const v = props["is_in"];
    if (typeof v === "string" && v.trim()) return v.trim();
    if (Array.isArray(v) && v.length > 0 && typeof v[0] === "string") return v[0].trim();
  }

  return null;
}

/* Precompute bbox + province fallback map once at module load */
const PRELOADED_META: Record<string, { bbox: [number, number, number, number] | null; province: string | null; feature?: any; }> = (() => {
  const map: Record<string, { bbox: [number, number, number, number] | null; province: string | null; feature?: any }> = {};
  try {
    const entries = Object.entries(PRELOADED_BOUNDARIES as Record<string, any>);
    for (const [communeName, boundary] of entries) {
      const feature = boundary?.features?.[0];
      const geometry = feature?.geometry;
      const bbox = computeBBoxForGeometry(geometry);
      // try detect province from properties
      const props = feature?.properties;
      const prov = detectProvinceFromProperties(props);
      map[communeName] = { bbox: bbox, province: prov ?? null, feature };
    }
  } catch (e) {
    console.warn("[Boundary init] failed to compute bboxes/province", e);
  }
  return map;
})();

/**
 * Xác định xã/phường của trạm dựa trên lat/lng
 * => Mở rộng: quét TẤT CẢ mục trong PRELOADED_BOUNDARIES.
 * Nếu match, trả về { commune: <key trong PRELOADED_BOUNDARIES>, province: <nếu tìm thấy> }
 * Nếu không có trường province trong properties, sẽ cố dò bằng parsing tên key; nếu vẫn không, trả "Unknown".
 *
 * LƯU Ý: để hệ thống nhận boundary mới, chỉ cần thêm mục vào preloaded-boundaries.json
 * và load lại ứng dụng (module load). Nếu muốn hot-reload runtime, cần đọc file JSON vào lúc runtime (cần thay đổi khác).
 */
export function findDongNaiCommuneByLatLng(
  lat: number,
  lng: number
): { commune: string; province: string } | null {
  const point: [number, number] = [lng, lat];

  for (const [communeName, boundary] of Object.entries(
    PRELOADED_BOUNDARIES as Record<string, any>
  )) {
    const meta = PRELOADED_META[communeName];

    // quick reject by bbox if available
    if (meta?.bbox) {
      const [minX, minY, maxX, maxY] = meta.bbox;
      if (lng < minX || lng > maxX || lat < minY || lat > maxY) {
        continue;
      }
    }

    const feature = boundary?.features?.[0];
    const geometry = feature?.geometry;
    if (!geometry) continue;

    if (isPointInGeometry(point, geometry)) {
      // found — determine province
      let province = meta?.province ?? null;

      // try to derive province from feature.properties if not detected earlier
      if (!province) {
        const props = feature?.properties;
        province = detectProvinceFromProperties(props);
      }

      // last-resort: parse communeName if it contains comma like "Xã A, Tỉnh B"
      if (!province && typeof communeName === "string" && communeName.includes(",")) {
        const parts = communeName.split(",").map(p => p.trim());
        if (parts.length >= 2) {
          province = parts.slice(1).join(", ");
        }
      }

      if (!province) province = "Unknown";

      return {
        commune: communeName,
        province,
      };
    }
  }

  return null;
}
