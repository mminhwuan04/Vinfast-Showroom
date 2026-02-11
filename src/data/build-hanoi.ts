import fs from "fs";
import path from "path";

const BASE = path.join(process.cwd(), "data-2025");
const CACHE = path.join(BASE, "cache-hanoi");

fs.mkdirSync(CACHE, { recursive: true });

// --------------------------------------------------
// DANH SÁCH 126 XÃ/PHƯỜNG (rút gọn ví dụ)
// Anh dán đủ 126 tên của anh vào đây
// --------------------------------------------------

const HANOI_2025 = [
  "Phường Hoàn Kiếm",
  "Phường Cửa Nam",
  "Phường Ba Đình",
  "Phường Ngọc Hà",
  "Phường Giảng Võ",
  "Phường Hai Bà Trưng",
  "Phường Vĩnh Tuy",
  "Phường Bạch Mai",
  "Phường Đống Đa",
  "Phường Kim Liên",
  "Phường Văn Miếu - Quốc Tử Giám",
  "Phường Láng",
  "Phường Ô Chợ Dừa",
  "Phường Hồng Hà",
  "Phường Lĩnh Nam",
  "Phường Hoàng Mai",
  "Phường Vĩnh Hưng",
  "Phường Tương Mai",
  "Phường Định Công",
  "Phường Hoàng Liệt",
  "Phường Yên Sở",
  "Phường Thanh Xuân",
  "Phường Khương Đình",
  "Phường Phương Liệt",
  "Phường Cầu Giấy",
  "Phường Nghĩa Đô",
  "Phường Yên Hòa",
  "Phường Tây Hồ",
  "Phường Phú Thượng",
  "Phường Tây Tựu",
  "Phường Phú Diễn",
  "Phường Xuân Đỉnh",
  "Phường Đông Ngạc",
  "Phường Thượng Cát",
  "Phường Từ Liêm",
  "Phường Xuân Phương",
  "Phường Tây Mỗ",
  "Phường Đại Mỗ",
  "Phường Long Biên",
  "Phường Bồ Đề",
  "Phường Việt Hưng",
  "Phường Phúc Lợi",
  "Phường Hà Đông",
  "Phường Dương Nội",
  "Phường Yên Nghĩa",
  "Phường Phú Lương",
  "Phường Kiến Hưng",
  "Xã Thanh Trì",
  "Xã Đại Thanh",
  "Xã Nam Phù",
  "Xã Ngọc Hồi",
  "Phường Thanh Liệt",
  "Xã Thượng Phúc",
  "Xã Thường Tín",
  "Xã Chương Dương",
  "Xã Hồng Vân",
  "Xã Phú Xuyên",
  "Xã Phượng Dực",
  "Xã Chuyên Mỹ",
  "Xã Đại Xuyên",
  "Xã Thanh Oai",
  "Xã Bình Minh",
  "Xã Tam Hưng",
  "Xã Dân Hòa",
  "Xã Vân Đình",
  "Xã Ứng Thiên",
  "Xã Hòa Xá",
  "Xã Ứng Hòa",
  "Xã Mỹ Đức",
  "Xã Hồng Sơn",
  "Xã Phúc Sơn",
  "Xã Hương Sơn",
  "Phường Chương Mỹ",
  "Xã Phú Nghĩa",
  "Xã Xuân Mai",
  "Xã Trần Phú",
  "Xã Hòa Phú",
  "Xã Quảng Bị",
  "Xã Minh Châu",
  "Xã Quảng Oai",
  "Xã Vật Lại",
  "Xã Cổ Đô",
  "Xã Bất Bạt",
  "Xã Suối Hai",
  "Xã Ba Vì",
  "Xã Yên Bài",
  "Phường Sơn Tây",
  "Phường Tùng Thiện",
  "Xã Đoài Phương",
  "Xã Phúc Thọ",
  "Xã Phúc Lộc",
  "Xã Hát Môn",
  "Xã Thạch Thất",
  "Xã Hạ Bằng",
  "Xã Tây Phương",
  "Xã Hòa Lạc",
  "Xã Yên Xuân",
  "Xã Quốc Oai",
  "Xã Hưng Đạo",
  "Xã Kiều Phú",
  "Xã Phú Cát",
  "Xã Hoài Đức",
  "Xã Dương Hòa",
  "Xã Sơn Đồng",
  "Xã An Khánh",
  "Xã Đan Phượng",
  "Xã Ô Diên",
  "Xã Liên Minh",
  "Xã Gia Lâm",
  "Xã Thuận An",
  "Xã Bát Tràng",
  "Xã Phù Đổng",
  "Xã Thư Lâm",
  "Xã Đông Anh",
  "Xã Phúc Thịnh",
  "Xã Thiên Lộc",
  "Xã Vĩnh Thanh",
  "Xã Mê Linh",
  "Xã Yên Lãng",
  "Xã Tiến Thắng",
  "Xã Quang Minh",
  "Xã Sóc Sơn",
  "Xã Đa Phúc",
  "Xã Nội Bài",
  "Xã Trung Giã",
  "Xã Kim Anh"
];
function safeFileName(name: string) {
  return name
    .normalize("NFC")
    .replace(/[\/\\:*?"<>|]/g, "_");
}

function normalizeName(n: string) {
  return n.normalize("NFC").trim();
}
// --------------------------------------------------
// 1. Hàm gọi Overpass CHO TỪNG XÃ
// --------------------------------------------------

async function fetchOne(name: string) {

  name = normalizeName(name);

  const cacheFile = path.join(
    CACHE,
    safeFileName(name) + ".json"
  );

  if (fs.existsSync(cacheFile)) {
    console.log("📦 cache hit:", name);
    return JSON.parse(fs.readFileSync(cacheFile, "utf-8"));
  }

  const query = `
[out:json][timeout:120];

area["boundary"="administrative"]["admin_level"="4"]["name"="Thành phố Hà Nội"]->.hanoi;

(
  relation(area.hanoi)
    ["boundary"="administrative"]
    ["admin_level"~"8|9"]
    ["name"="${name}"];

  relation(area.hanoi)
    ["boundary"="administrative"]
    ["admin_level"~"8|9"]
    ["name:vi"="${name}"];

  way(area.hanoi)
    ["boundary"="administrative"]
    ["admin_level"~"8|9"]
    ["name"="${name}"];
);

out body;
>;
out skel qt;
`;

  console.log("🔎 Query:", name);

  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: query,
  });

  const text = await res.text();

  if (text.trim().startsWith("<")) {
    console.warn("⚠️ Rate limit – đợi 10s:", name);
    await new Promise(r => setTimeout(r, 10000));
    return fetchOne(name);
  }

  const json = JSON.parse(text);

  fs.writeFileSync(cacheFile, JSON.stringify(json, null, 2));

  await new Promise(r => setTimeout(r, 2500));

  return json;
}


// --------------------------------------------------
// 2. Tính centroid từ nodes
// --------------------------------------------------

function centroidOf(elements: any[]) {
  const nodes = elements.filter(e => e.lat && e.lon);

  if (!nodes.length) return null;

  const lat =
    nodes.reduce((a, b) => a + b.lat, 0) / nodes.length;

  const lon =
    nodes.reduce((a, b) => a + b.lon, 0) / nodes.length;

  return [lat, lon];
}

// --------------------------------------------------
// 3. Chạy toàn bộ
// --------------------------------------------------

async function run() {

  const result: any[] = [];

  for (const name of HANOI_2025) {

    try {
      const data = await fetchOne(name);

      const elements = data.elements || [];

      result.push({
        name,
        total_osm_objects: elements.length,

        centroid: centroidOf(elements),

        osm_ids: elements
          .filter((x: any) => x.id)
          .map((x: any) => `${x.type}/${x.id}`),

        raw: elements
      });

    } catch (e) {
      console.error("❌ Lỗi xã:", name, e);

      result.push({
        name,
        error: String(e)
      });
    }
  }

  // --------------------------------------------------
  // 4. Xuất file MỚI – KHÔNG phụ thuộc gì cũ
  // --------------------------------------------------

  const out = path.join(BASE, "hanoi_from_overpass_2025.json");

  fs.writeFileSync(
    out,
    JSON.stringify(
      {
        meta: {
          total_expected: 126,
          built: result.length,
          time: new Date().toISOString()
        },
        communes: result
      },
      null,
      2
    )
  );

  console.log("✅ Hoàn tất:", result.length);
  console.log("📁 File:", out);
}

run();
