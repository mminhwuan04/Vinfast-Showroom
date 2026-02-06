import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { Profile } from "@/config/globalconfig";
import { dongnaiCommunes } from "@/data/dongnaiCommunes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCommuneBoundary } from "@/data/boundary.service";
import stations from "@/data/charging-stations.raw.json";
import { findDongNaiCommuneByLatLng } from "@/data/boundary.service";

/* =========================
   BOUNDARY LAYER (CORE)
   ========================= */
function CommuneBoundary({ name }: { name: string }) {
  const map = useMap();
  const layerRef = React.useRef<L.GeoJSON | null>(null);
  const requestIdRef = React.useRef(0);

  useEffect(() => {
    if (!name) return;

    const requestId = ++requestIdRef.current;
    let cancelled = false;

    async function run() {
      const boundary = await getCommuneBoundary(name);

      if (cancelled || requestId !== requestIdRef.current) return;
      if (!boundary) return;

      if (layerRef.current) {
        map.removeLayer(layerRef.current);
        layerRef.current = null;
      }

      const layer = L.geoJSON(boundary, {
        style: {
          color: "#ff0000",
          weight: 3,
          opacity: 0.9,
          fillOpacity: 0.05,
        },
        interactive: false,
      });

      layer.addTo(map);
      layerRef.current = layer;

      const bounds = layer.getBounds();
      if (bounds && bounds.isValid()) {
        map.fitBounds(bounds, { padding: [24, 24] });
      }
    }

    run();

    return () => {
      cancelled = true;
      if (layerRef.current) {
        map.removeLayer(layerRef.current);
        layerRef.current = null;
      }
    };
  }, [name, map]);

  return null;
}

function findNearestCommune(lat: number, lng: number) {
  let nearest = null;
  let minDist = Infinity;

  for (const c of dongnaiCommunes) {
    const dLat = lat - c.lat;
    const dLng = lng - c.lng;
    const dist = dLat * dLat + dLng * dLng;

    if (dist < minDist) {
      minDist = dist;
      nearest = c;
    }
  }

  return nearest;
}

function ChargingStationsLayer() {
  const map = useMap();
  const layerRef = useRef<L.LayerGroup | null>(null);

  // ─── CACHE NHẸ ───────────────────────────────
  const locationCache = useRef<Record<string, any>>({});
  const builtRef = useRef(false);

  useEffect(() => {
    // Chỉ build 1 lần
    if (builtRef.current) return;
    builtRef.current = true;

    if (layerRef.current) {
      map.removeLayer(layerRef.current);
      layerRef.current = null;
    }

    const group = L.layerGroup();

    // ─── RENDER THEO CHUNK ĐỂ KHÔNG BLOCK UI ───
    const items = [...stations];
    const CHUNK_SIZE = 40;

    function processChunk() {
      const chunk = items.splice(0, CHUNK_SIZE);

      chunk.forEach((s: any) => {
        if (!s.lat || !s.lng) return;

        const marker = L.circleMarker([s.lat, s.lng], {
          radius: 6,
          color: "#2563eb",
          weight: 2,
          fillOpacity: 0.9,
        });

        // ─── CACHE vị trí xã ───
        const cacheKey = `${s.lat}-${s.lng}`;
        let location = locationCache.current[cacheKey];

        if (!location) {
          location = findDongNaiCommuneByLatLng(s.lat, s.lng);
          locationCache.current[cacheKey] = location;
        }

        const portsHtml =
          s.chargingPorts
            ?.map(
              (p: any) =>
                `<div>🔌 ${p.count} × ${p.powerKW} kW</div>`
            )
            .join("") ?? "<div>N/A</div>";

        // ─── LAZY BIND POPUP (không đổi 1 chữ markup) ───
        marker.on("click", () => {
          marker.bindPopup(
        `
        <div style="min-width:260px;font-size:13px;line-height:1.4">
          <strong style="font-size:14px">${s.name}</strong>

          <div style="margin-top:6px">
            📍 ${s.address ?? "N/A"}
          </div>

          <hr style="margin:6px 0"/>

          <div>
            ⚡ <strong>Cổng sạc</strong>
            ${portsHtml}

            <div style="margin-top:4px">
              🔢 Tổng cổng: ${s.socketCount ?? "N/A"}<br/>
              🚀 Công suất tối đa: ${s.maxPowerKW ?? "N/A"} kW
            </div>
          </div>

          <hr style="margin:6px 0"/>

          <div>
            🕒 Hoạt động: ${s.operatingTime ?? "N/A"}<br/>
            🚗 Gửi xe: ${s.parking ?? "N/A"}<br/>
            🏷️ Loại trạm: ${s.stationType ?? "N/A"}
          </div>

          <hr style="margin:6px 0"/>

          <div>
            🗺️ ${
              location
                ? `${location.commune}, ${location.province}`
                : ("N/A")
            }
          </div>

          <div style="margin-top:4px;font-size:11px;color:#666">
            ⏱️ Cập nhật: ${s.lastUpdated ?? "N/A"}
          </div>
        </div>
        `
          ).openPopup();
        });

        group.addLayer(marker);
      });

      if (items.length > 0) {
        (window as any).requestIdleCallback
          ? (window as any).requestIdleCallback(processChunk)
          : setTimeout(processChunk, 16);
      }
    }

    processChunk();

    group.addTo(map);
    layerRef.current = group;

    return () => {
      if (layerRef.current) {
        map.removeLayer(layerRef.current);
        layerRef.current = null;
      }
    };
  }, [map]);

  return null;
}


/* =========================
   MAIN COMPONENT
   ========================= */
export default function KhuyenMai() {
  const [selectedProvince] = useState("dongnai");
  const [selectedCommune, setSelectedCommune] = useState(
    dongnaiCommunes[0].name
  );
  const [statusMessage, setStatusMessage] = useState("");

  function handleCommuneSelect(name: string) {
    setSelectedCommune(name);
    setStatusMessage(`Đã hiển thị ranh giới ${name}`);
  }

  return (
    <>
      <div>
        <h1 className="flex justify-center text-center items-center lg:text-5xl md:text-4xl font-semibold mt-5 m-5 sm:text-3xl sm:pt-0 pt-6">
          Giới thiệu về các chương trình khuyến mãi tại Vinfast Showroom
          Miền nam - Chi nhánh Đồng Nai
        </h1>

        <div className="mt-5 m-20">
          <p className="mt-5">
            Chúng tôi xây dựng các chương trình ưu đãi sở hữu xe VinFast
            một cách đồng bộ, trong đó khuyến mãi, chính sách bán hàng
            và mức giá được thiết kế như một gói quyền lợi thống nhất
            dành cho khách hàng tại từng thời điểm.
          </p>

          <p className="mt-5">
            Nhờ chính sách bán hàng linh hoạt và định hướng lấy khách
            hàng làm trung tâm, showroom có thể liên tục đưa ra các
            chương trình khuyến mãi hấp dẫn, giúp Quý khách tiếp cận
            mức giá sở hữu tối ưu cùng nhiều quyền lợi gia tăng mà
            không cần chờ đợi hay so sánh phức tạp.
          </p>

          <p className="mt-5">
            Đây chính là lý do showroom được đánh giá là một trong
            những điểm bán có chính sách ưu đãi tốt nhất cả nước,
            đồng thời mang đến cho Quý khách cơ hội mua xe đúng thời
            điểm – đúng giá – ngay gần nhà, thuận tiện từ khâu tư vấn
            đến chăm sóc lâu dài sau khi nhận xe.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 mb-6 justify-center m-10">
          <a
            href={Profile.zalo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/t11-tr.jpg"
              alt="Hình qc"
              className="h-15 rounded-lg"
            />
          </a>

          <a
            href={Profile.zalo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/t11-tl.jpg"
              alt="Hình qc"
              className="h-15 rounded-lg"
            />
          </a>

          <img
            src="/t11-bl.jpg"
            alt="Hình qc"
            className="h-15 rounded-lg"
          />
          <img
            src="/t11-br.jpg"
            alt="Hình qc"
            className="h-15 rounded-lg"
          />
        </div>
      </div>

      <div className="m-10 flex h-[70vh]">
        <aside className="w-[30%] min-w-[260px] p-4 border-r bg-white">
          <h1 className="text-lg font-semibold mb-2">
            Hệ thống Trạm sạc ô tô điện VinFast tỉnh Đồng Nai
          </h1>

          <div className="mb-6">
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Tỉnh / Thành
            </label>

            <Select value={selectedProvince}>
              <SelectTrigger className="h-10 rounded border px-3">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="dongnai">
                  Đồng Nai
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Xã / Phường
            </label>

            <Select
              value={selectedCommune}
              onValueChange={handleCommuneSelect}
            >
              <SelectTrigger className="h-10 rounded border px-3">
                <SelectValue />
              </SelectTrigger>

              <SelectContent className="max-h-80 overflow-auto">
                {dongnaiCommunes.map((c) => (
                  <SelectItem key={c.name} value={c.name}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mt-3 text-sm text-gray-600">
            {statusMessage}
          </div>
        </aside>

        <main className="w-[70%] h-full">
          <MapContainer
            center={[10.95, 106.82]}
            zoom={10}
            className="w-full h-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <CommuneBoundary name={selectedCommune} />
            <ChargingStationsLayer />
          </MapContainer>
        </main>
      </div>
    </>
  );
}
