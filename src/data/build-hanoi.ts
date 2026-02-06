import fs from "fs";
import path from "path";

const BASE = path.join(process.cwd(), "data-2025");

const RAW_FILE = path.join(BASE, "Hà Nội.elements.raw.json");
const MAPPED_FILE = path.join(BASE, "Hà Nội.elements.mapped.json");

interface OSM {
  id: number;
  type: string;
  tags?: any;
  lat?: number;
  lon?: number;
  nodes?: number[];
  members?: any[];
}

// --------------------------------------------------
// 1. Đọc dữ liệu gốc
// --------------------------------------------------

const raw: OSM[] = JSON.parse(fs.readFileSync(RAW_FILE, "utf-8"));
const mapped: OSM[] = JSON.parse(fs.readFileSync(MAPPED_FILE, "utf-8"));

// Ưu tiên cái đã map đúng trước
const all = [...mapped, ...raw];

// --------------------------------------------------
// 2. Hàm lấy tên chuẩn xã/phường
// --------------------------------------------------

function getName(tags: any) {
  return (
    tags?.["name:vi"] ||
    tags?.official_name ||
    tags?.name ||
    null
  );
}

// --------------------------------------------------
// 3. Gom nhóm theo tên xã/phường
// --------------------------------------------------

const groups: Record<string, OSM[]> = {};

for (const el of all) {
  const name = getName(el.tags || {});
  if (!name) continue;

  // Chỉ lấy đối tượng có vẻ là đơn vị hành chính
  const isAdmin =
    el.tags?.boundary === "administrative" ||
    ["suburb", "quarter", "town", "village"].includes(el.tags?.place);

  if (!isAdmin) continue;

  if (!groups[name]) groups[name] = [];
  groups[name].push(el);
}

// --------------------------------------------------
// 4. Tạo bản ghi xã/phường chuẩn
// --------------------------------------------------

function centroidOf(list: OSM[]) {
  const pts = list.filter(x => x.lat && x.lon);

  if (pts.length === 0) return null;

  const lat =
    pts.reduce((a, b) => a + (b.lat || 0), 0) / pts.length;

  const lon =
    pts.reduce((a, b) => a + (b.lon || 0), 0) / pts.length;

  return [lat, lon];
}

const communes = Object.entries(groups).map(([name, items]) => {
  const ids = items.map(i => `${i.type}/${i.id}`);

  const center = centroidOf(items);

  return {
    name: `${name}, Hà Nội`,
    shortName: name,

    osm_ids: ids,

    centroid: center,

    sources: items.map(i => ({
      id: i.id,
      type: i.type,
      admin_level: i.tags?.admin_level,
      place: i.tags?.place,
    })),
  };
});

// --------------------------------------------------
// 5. Xuất kết quả
// --------------------------------------------------

const outFile = path.join(BASE, "hanoi_communes_2025.json");

fs.writeFileSync(
  outFile,
  JSON.stringify(
    {
      meta: {
        total: communes.length,
        note: "Built from raw + mapped OSM objects 2025",
      },
      communes,
    },
    null,
    2
  )
);

console.log("✅ Tổng xã/phường:", communes.length);
console.log("📁 File:", outFile);

// In thử 10 dòng đầu
console.log(
  communes.slice(0, 10).map(x => x.name)
);
