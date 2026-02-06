import fs from "fs";
import path from "path";

const OUT_DIR = path.join(process.cwd(), "data-2025");
const CACHE_DIR = path.join(OUT_DIR, "cache");

fs.mkdirSync(CACHE_DIR, { recursive: true });

/* =====================================================
   DANH SÁCH 126 TÊN CHUẨN HÀ NỘI (sau sắp xếp)
   ===================================================== */
const HANOI_OFFICIAL = [
  "Phường Hoàn Kiếm","Phường Cửa Nam","Phường Ba Đình","Phường Ngọc Hà",
  "Phường Giảng Võ","Phường Hai Bà Trưng","Phường Vĩnh Tuy","Phường Bạch Mai",
  "Phường Đống Đa","Phường Kim Liên","Phường Văn Miếu - Quốc Tử Giám","Phường Láng",
  "Phường Ô Chợ Dừa","Phường Hồng Hà","Phường Lĩnh Nam","Phường Hoàng Mai",
  "Phường Vĩnh Hưng","Phường Tương Mai","Phường Định Công","Phường Hoàng Liệt",
  "Phường Yên Sở","Phường Thanh Xuân","Phường Khương Đình","Phường Phương Liệt",
  "Phường Cầu Giấy","Phường Nghĩa Đô","Phường Yên Hòa","Phường Tây Hồ",
  "Phường Phú Thượng","Phường Tây Tựu","Phường Phú Diễn","Phường Xuân Đỉnh",
  "Phường Đông Ngạc","Phường Thượng Cát","Phường Từ Liêm","Phường Xuân Phương",
  "Phường Tây Mỗ","Phường Đại Mỗ","Phường Long Biên","Phường Bồ Đề",
  "Phường Việt Hưng","Phường Phúc Lợi","Phường Hà Đông","Phường Dương Nội",
  "Phường Yên Nghĩa","Phường Phú Lương","Phường Kiến Hưng","Xã Thanh Trì",
  "Xã Đại Thanh","Xã Nam Phù","Xã Ngọc Hồi","Phường Thanh Liệt","Xã Thượng Phúc",
  "Xã Thường Tín","Xã Chương Dương","Xã Hồng Vân","Xã Phú Xuyên",
  "Xã Phượng Dực","Xã Chuyên Mỹ","Xã Đại Xuyên","Xã Thanh Oai","Xã Bình Minh",
  "Xã Tam Hưng","Xã Dân Hòa","Xã Vân Đình","Xã Ứng Thiên","Xã Hòa Xá",
  "Xã Ứng Hòa","Xã Mỹ Đức","Xã Hồng Sơn","Xã Phúc Sơn","Xã Hương Sơn",
  "Phường Chương Mỹ","Xã Phú Nghĩa","Xã Xuân Mai","Xã Trần Phú","Xã Hòa Phú",
  "Xã Quảng Bị","Xã Minh Châu","Xã Quảng Oai","Xã Vật Lại","Xã Cổ Đô",
  "Xã Bất Bạt","Xã Suối Hai","Xã Ba Vì","Xã Yên Bài","Phường Sơn Tây",
  "Phường Tùng Thiện","Xã Đoài Phương","Xã Phúc Thọ","Xã Phúc Lộc",
  "Xã Hát Môn","Xã Thạch Thất","Xã Hạ Bằng","Xã Tây Phương","Xã Hòa Lạc",
  "Xã Yên Xuân","Xã Quốc Oai","Xã Hưng Đạo","Xã Kiều Phú","Xã Phú Cát",
  "Xã Hoài Đức","Xã Dương Hòa","Xã Sơn Đồng","Xã An Khánh","Xã Đan Phượng",
  "Xã Ô Diên","Xã Liên Minh","Xã Gia Lâm","Xã Thuận An","Xã Bát Tràng",
  "Xã Phù Đổng","Xã Thư Lâm","Xã Đông Anh","Xã Phúc Thịnh","Xã Thiên Lộc",
  "Xã Vĩnh Thanh","Xã Mê Linh","Xã Yên Lãng","Xã Tiến Thắng","Xã Quang Minh",
  "Xã Sóc Sơn","Xã Đa Phúc","Xã Nội Bài","Xã Trung Giã","Xã Kim Anh"
];

async function searchOne(name: string) {

  const q = `
[out:json][timeout:120];

area["boundary"="administrative"]["admin_level"="4"]["name"="Thành phố Hà Nội"]->.city;

(
  relation(area.city)["name"="${name.replace(/^Phường |^Xã /, "")}"];
  way(area.city)["name"="${name.replace(/^Phường |^Xã /, "")}"];
  node(area.city)["name"="${name.replace(/^Phường |^Xã /, "")}"];
);

out body;
>;
out skel qt;
`;

  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: q,
  });

  const text = await res.text();

  if (text.startsWith("<")) {
    console.log("⚠ rate limit với:", name);
    return null;
  }

  return JSON.parse(text);
}
