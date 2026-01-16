import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { dongnaiCommunes, Commune } from "@/data/dongnaiCommunes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

/* =========================
   MAP CONTROLLER
========================= */
function MapController({ commune }: { commune: Commune }) {
  const map = useMap();

  useEffect(() => {
    map.setView([commune.lat, commune.lng], commune.zoom, {
      animate: true
    });
  }, [commune, map]);

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

  const currentCommune =
    dongnaiCommunes.find(c => c.name === selectedCommune) ||
    dongnaiCommunes[0];

  /* =========================
     HANDLE SELECT
  ========================= */
  function handleCommuneSelect(name: string) {
    const commune = dongnaiCommunes.find(c => c.name === name);
    if (!commune) {
      setStatusMessage(`Không thể hiển thị ${name}`);
      return;
    }

    setSelectedCommune(name);
    setStatusMessage(`Đã hiển thị ${commune.name}`);
  }

  /* =========================
     RENDER SELECT ITEMS
  ========================= */
  function renderSelectItems() {
    return dongnaiCommunes.map(c => (
      <SelectItem key={c.name} value={c.name}>
        {c.name}
      </SelectItem>
    ));
  }

  /* =========================
     JSX
  ========================= */
  return (
    <div className="m-10 flex h-[70vh]">
      {/* LEFT PANEL */}
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
              <SelectItem value="dongnai">Đồng Nai</SelectItem>
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
              {renderSelectItems()}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          Danh sách xã / phường theo Nghị quyết sắp xếp đơn vị hành chính
          (01/07/2025)
        </div>

        <div className="mt-3 text-sm text-gray-600">
          {statusMessage}
        </div>
      </aside>

      {/* MAP */}
      <main className="w-[70%] relative h-full">
        <MapContainer
          center={[currentCommune.lat, currentCommune.lng]}
          zoom={currentCommune.zoom}
          minZoom={9}
          maxZoom={16}
          className="w-full h-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapController commune={currentCommune} />
        </MapContainer>
      </main>
    </div>
  );
}
