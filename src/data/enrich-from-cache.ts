import fs from "fs";
import path from "path";

const BASE = path.join(process.cwd(), "data-2025");
const CACHE = path.join(BASE, "cache-hanoi");
const OUT = path.join(BASE, "geojson-hanoi");

fs.mkdirSync(OUT, { recursive: true });

// ----------------------------------------------------
// 1. Gom node theo id để dựng geometry
// ----------------------------------------------------

function buildGeometry(elements: any[]) {
  const nodes = new Map<number, [number, number]>();

  for (const el of elements) {
    if (el.type === "node" && el.lat && el.lon) {
      nodes.set(el.id, [el.lon, el.lat]);
    }
  }

  const ways = elements.filter(e => e.type === "way" && e.nodes);

  const polygons = ways
    .map(w =>
      w.nodes
        .map((id: number) => nodes.get(id))
        .filter(Boolean)
    )
    .filter((coords: any) => coords.length >= 3);

  if (!polygons.length) return null;

  return {
    type: "Polygon",
    coordinates: [polygons[0]]
  };
}

// ----------------------------------------------------
// 2. Tính centroid từ geometry
// ----------------------------------------------------

function centroid(geom: any) {
  if (!geom) return null;

  const pts = geom.coordinates[0];

  const lon =
    pts.reduce((a: number, b: any) => a + b[0], 0) / pts.length;

  const lat =
    pts.reduce((a: number, b: any) => a + b[1], 0) / pts.length;

  return [lat, lon];
}

// ----------------------------------------------------
// 3. Chạy enrich
// ----------------------------------------------------

const files = fs.readdirSync(CACHE);

const summary: any[] = [];

for (const file of files) {
  const name = file.replace(/_/g, " ").replace(".json", "");

  const json = JSON.parse(
    fs.readFileSync(path.join(CACHE, file), "utf-8")
  );

  const elements = json.elements || [];

  const geom = buildGeometry(elements);

  const feature = {
    type: "Feature",
    properties: {
      name,
      total_osm_objects: elements.length
    },
    geometry: geom
  };

  // ghi geojson riêng
  fs.writeFileSync(
    path.join(OUT, file.replace(".json", ".geojson")),
    JSON.stringify(feature, null, 2)
  );

  summary.push({
    name,
    total_osm_objects: elements.length,
    centroid: centroid(geom),
    has_geometry: !!geom
  });
}

// ----------------------------------------------------
// 4. Vá lại file tổng
// ----------------------------------------------------

fs.writeFileSync(
  path.join(BASE, "hanoi_from_overpass_2025.enriched.json"),
  JSON.stringify(
    {
      meta: {
        built: summary.length,
        with_geometry: summary.filter(x => x.has_geometry).length,
        time: new Date().toISOString()
      },
      communes: summary
    },
    null,
    2
  )
);

console.log("✅ Enrich xong!");
