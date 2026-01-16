// dongnaiCommunes.ts
export type Commune = {
  name: string;        // tên xã / phường mới
  oldName: string[];   // DANH SÁCH ĐƠN VỊ CŨ (đúng nghị quyết)
  lat: number;         // trọng tâm tổng hợp
  lng: number;
  zoom: number;
}

// Danh sách 95 đơn vị cấp xã (Đồng Nai mới, hiệu lực 01/07/2025) với các "đơn vị cũ" trong ngoặc.
export const dongnaiCommunes: Commune[] = [
  {
  name: "Phường Biên Hòa",
  oldNames: ["Tân Hạnh", "Hóa An", "Bửu Hòa", "Tân Vạn"],
  lat: 10.9576,
  lng: 106.8429,
  zoom: 12.6
},
{
  name: "Phường Trấn Biên",
  oldNames: ["Bửu Long", "Quang Vinh", "Trung Dũng", "Thống Nhất", "Hiệp Hòa", "An Bình"],
  lat: 10.9493,
  lng: 106.8236,
  zoom: 12.7
},
{
  name: "Phường Tam Hiệp",
  oldNames: ["Tân Hiệp", "Tân Mai", "Bình Đa", "Tam Hiệp"],
  lat: 10.9379,
  lng: 106.8168,
  zoom: 12.6
},
{
  name: "Phường Long Bình",
  oldNames: ["Hố Nai", "Tân Biên", "Long Bình"],
  lat: 10.9794,
  lng: 106.8421,
  zoom: 12.5
},
{
  name: "Phường Trảng Dài",
  oldNames: ["Trảng Dài", "Thiện Tân"],
  lat: 10.9924,
  lng: 106.8173,
  zoom: 12.4
},
{
  name: "Phường Hố Nai",
  oldNames: ["Tân Hòa", "Hố Nai 3"],
  lat: 10.9731,
  lng: 106.8046,
  zoom: 12.6
},
{
  name: "Phường Long Hưng",
  oldNames: ["Long Bình Tân", "An Hòa", "Long Hưng"],
  lat: 10.9148,
  lng: 106.8709,
  zoom: 12.1
},
{
  name: "Phường Phước Tân",
  oldNames: ["Phước Tân"],
  lat: 10.9062,
  lng: 106.9308,
  zoom: 12.0
},
{
  name: "Phường Tam Phước",
  oldNames: ["Tam Phước"],
  lat: 10.8826,
  lng: 106.9134,
  zoom: 12.0
},
{
  name: "Phường Bình Lộc",
  oldNames: ["Suối Tre", "Xuân Thiện", "Bình Lộc"],
  lat: 10.9552,
  lng: 107.2308,
  zoom: 13
},
{
  name: "Phường Long Khánh",
  oldNames: ["Xuân An", "Xuân Bình", "Xuân Hòa", "Phú Bình", "Bàu Trâm"],
  lat: 10.9449,
  lng: 107.2417,
  zoom: 12
},
{
  name: "Phường Bảo Vinh",
  oldNames: ["Bảo Vinh", "Bảo Quang"],
  lat: 10.9628,
  lng: 107.2489,
  zoom: 13
},
{
  name: "Phường Xuân Lập",
  oldNames: ["Bàu Sen", "Xuân Lập"],
  lat: 10.9314,
  lng: 107.2646,
  zoom: 13
},
{
  name: "Phường Hàng Gòn",
  oldNames: ["Xuân Tân", "Hàng Gòn"],
  lat: 10.8869,
  lng: 107.2683,
  zoom: 12
},
{
  name: "Phường Tân Triều",
  oldNames: ["Tân Phong", "Tân Bình", "Bình Lợi", "Thạnh Phú"],
  lat: 10.8462,
  lng: 106.8209,
  zoom: 13
},
// ===== NHƠN TRẠCH =====
  {
    name: "Xã Đại Phước",
    oldNames: ["Phú Hữu", "Phú Đông", "Phước Khánh", "Đại Phước"],
    lat: 10.7715,
    lng: 106.8752,
    zoom: 13
  },
  {
    name: "Xã Nhơn Trạch",
    oldNames: ["Hiệp Phước", "Long Tân (Nhơn Trạch)", "Phú Thạnh", "Phú Hội", "Phước Thiền"],
    lat: 10.7429,
    lng: 106.8904,
    zoom: 12
  },
  {
    name: "Xã Phước An",
    oldNames: ["Phước An (Nhơn Trạch)", "Vĩnh Thanh", "Long Thọ"],
    lat: 10.7138,
    lng: 106.9181,
    zoom: 12
  },

  // ===== LONG THÀNH =====
  {
    name: "Xã Phước Thái",
    oldNames: ["Tân Hiệp (Long Thành)", "Phước Bình", "Phước Thái"],
    lat: 10.7836,
    lng: 107.0354,
    zoom: 12
  },
  {
    name: "Xã Long Phước",
    oldNames: ["Bàu Cạn", "Long Phước"],
    lat: 10.8269,
    lng: 106.9983,
    zoom: 12
  },
  {
    name: "Xã Long Thành",
    oldNames: ["Thị trấn Long Thành", "Lộc An", "Bình Sơn (Long Thành)", "Long An"],
    lat: 10.7933,
    lng: 106.9496,
    zoom: 13
  },
  {
    name: "Xã Bình An",
    oldNames: ["Long Đức", "Bình An"],
    lat: 10.8098,
    lng: 106.9174,
    zoom: 13
  },
  {
    name: "Xã An Phước",
    oldNames: ["Tam An", "An Phước"],
    lat: 10.8421,
    lng: 106.9592,
    zoom: 12
  },
  {
    name: "Xã An Viễn",
    oldNames: ["Đồi 61", "An Viễn"],
    lat: 10.9136,
    lng: 106.9678,
    zoom: 12
  },

  // ===== TRẢNG BOM =====
  {
    name: "Xã Bình Minh",
    oldNames: ["Bình Minh (Trảng Bom)", "Bắc Sơn"],
    lat: 10.9792,
    lng: 107.0195,
    zoom: 12
  },
  {
    name: "Xã Trảng Bom",
    oldNames: ["Thị trấn Trảng Bom", "Quảng Tiến", "Sông Trầu", "Giang Điền"],
    lat: 10.9627,
    lng: 106.9851,
    zoom: 13
  },
  {
    name: "Xã Bàu Hàm",
    oldNames: ["Thanh Bình (Trảng Bom)", "Cây Gáo", "Sông Thao", "Bàu Hàm"],
    lat: 11.0226,
    lng: 107.0389,
    zoom: 12
  },
  {
    name: "Xã Hưng Thịnh",
    oldNames: ["Đông Hòa", "Tây Hòa", "Trung Hòa", "Hưng Thịnh"],
    lat: 11.0534,
    lng: 107.0048,
    zoom: 12
  },
  // ===== HUYỆN THỐNG NHẤT – ĐỒNG NAI =====

{
  name: "Xã Dầu Giây",
  oldNames: ["Thị trấn Dầu Giây", "Hưng Lộc", "Bàu Hàm 2", "Lộ 25"],
  lat: 10.9746,
  lng: 107.2432,
  zoom: 12
},
{
  name: "Xã Gia Kiệm",
  oldNames: ["Quang Trung", "Gia Tân 3", "Gia Kiệm"],
  lat: 10.9652,
  lng: 107.1758,
  zoom: 12
},
{
  name: "Xã Thống Nhất",
  oldNames: ["Gia Tân 1", "Gia Tân 2", "Phú Cường", "Phú Túc"],
  lat: 10.9413,
  lng: 107.1974,
  zoom: 12
},
{
  name: "Xã Xuân Quế",
  oldNames: ["Sông Nhạn", "Xuân Quế"],
  lat: 10.9161,
  lng: 107.2576,
  zoom: 12
},
{
  name: "Xã Xuân Đường",
  oldNames: ["Cẩm Đường", "Thừa Đức", "Xuân Đường"],
  lat: 10.9028,
  lng: 107.2219,
  zoom: 12
},
// ===== HUYỆN CẨM MỸ =====

{
  name: "Xã Cẩm Mỹ",
  oldNames: ["Long Giao", "Nhân Nghĩa", "Xuân Mỹ", "Bảo Bình"],
  lat: 10.8336,
  lng: 107.2938,
  zoom: 12
},
{
  name: "Xã Sông Ray",
  oldNames: ["Lâm San", "Sông Ray"],
  lat: 10.7879,
  lng: 107.3356,
  zoom: 11.8
},
// ===== HUYỆN XUÂN LỘC =====

{
  name: "Xã Xuân Đông",
  oldNames: ["Xuân Tây", "Xuân Đông", "một phần Xuân Tâm"],
  lat: 10.8994,
  lng: 107.4301,
  zoom: 12
},
{
  name: "Xã Xuân Định",
  oldNames: ["Xuân Bảo", "Bảo Hòa", "Xuân Định"],
  lat: 10.8618,
  lng: 107.4709,
  zoom: 12
},
{
  name: "Xã Xuân Phú",
  oldNames: ["Lang Minh", "Xuân Phú"],
  lat: 10.8392,
  lng: 107.4456,
  zoom: 11.9
},
{
  name: "Xã Xuân Lộc",
  oldNames: ["Thị trấn Gia Ray", "Xuân Thọ", "Xuân Trường", "Suối Cát", "Xuân Hiệp"],
  lat: 10.9208,
  lng: 107.4023,
  zoom: 12
},
{
  name: "Xã Xuân Hòa",
  oldNames: ["Xuân Hưng", "Xuân Hòa", "phần còn lại của Xuân Tâm"],
  lat: 10.8786,
  lng: 107.3882,
  zoom: 11.9
},
{
  name: "Xã Xuân Thành",
  oldNames: ["Suối Cao", "Xuân Thành"],
  lat: 10.9441,
  lng: 107.4597,
  zoom: 11.9
},
{
  name: "Xã Xuân Bắc",
  oldNames: ["Suối Nho", "Xuân Bắc"],
  lat: 10.9627,
  lng: 107.4948,
  zoom: 11.8
},
// ===== HUYỆN ĐỊNH QUÁN =====

{
  name: "Xã La Ngà",
  oldNames: ["Túc Trưng", "La Ngà"],
  lat: 11.1036,
  lng: 107.3649,
  zoom: 11.8
},
{
  name: "Xã Định Quán",
  oldNames: ["Thị trấn Định Quán", "Phú Ngọc", "Gia Canh", "Ngọc Định"],
  lat: 11.2182,
  lng: 107.3514,
  zoom: 12
},
{
  name: "Xã Thanh Sơn",
  oldNames: ["Thanh Sơn (Định Quán)"],
  lat: 11.1719,
  lng: 107.3037,
  zoom: 11.8
},
// ===== HUYỆN TÂN PHÚ =====

{
  name: "Xã Đak Lua",
  oldNames: ["Đak Lua"],
  lat: 11.4164,
  lng: 107.1219,
  zoom: 11.6
},
{
  name: "Xã Phú Lý",
  oldNames: ["Phú Lý"],
  lat: 11.3651,
  lng: 107.1884,
  zoom: 11.7
},
{
  name: "Xã Phú Vinh",
  oldNames: ["Phú Tân", "Phú Vinh"],
  lat: 11.3008,
  lng: 107.2269,
  zoom: 11.8
},
{
  name: "Xã Phú Hòa",
  oldNames: ["Phú Điền", "Phú Lợi", "Phú Hòa"],
  lat: 11.2846,
  lng: 107.2593,
  zoom: 11.8
},
{
  name: "Xã Tà Lài",
  oldNames: ["Phú Thịnh", "Phú Lập", "Tà Lài"],
  lat: 11.4189,
  lng: 107.2096,
  zoom: 11.6
},
{
  name: "Xã Nam Cát Tiên",
  oldNames: ["Phú An", "Nam Cát Tiên"],
  lat: 11.4317,
  lng: 107.3678,
  zoom: 11.6
},
{
  name: "Xã Tân Phú",
  oldNames: ["Thị trấn Tân Phú", "Phú Lộc", "Trà Cổ", "Phú Thanh", "Phú Xuân"],
  lat: 11.2729,
  lng: 107.3651,
  zoom: 12
},
{
  name: "Xã Phú Lâm",
  oldNames: ["Thanh Sơn (Tân Phú)", "Phú Sơn (Tân Phú)", "Phú Bình", "Phú Lâm"],
  lat: 11.2418,
  lng: 107.3124,
  zoom: 11.8
},
// ===== HUYỆN VĨNH CỬU =====

{
  name: "Xã Trị An",
  oldNames: ["Vĩnh An", "Mã Đà", "Trị An"],
  lat: 11.0937,
  lng: 107.0394,
  zoom: 11.7
},
{
  name: "Xã Tân An",
  oldNames: ["Vĩnh Tân", "Tân An"],
  lat: 11.0412,
  lng: 107.0798,
  zoom: 11.8
},
{
  name: "Phường Bình Phước",
  oldNames: ["Tân Phú", "Tân Đồng", "Tân Thiện", "Tân Bình", "Tân Xuân", "Tiến Hưng"],
  lat: 11.5346,
  lng: 106.8929,
  zoom: 12.6
},
{
  name: "Phường Đồng Xoài",
  oldNames: ["Tiến Thành", "Tân Thành (Đồng Xoài)"],
  lat: 11.5368,
  lng: 106.8883,
  zoom: 12.8
},
{
  name: "Phường Minh Hưng",
  oldNames: ["Minh Long", "Minh Hưng"],
  lat: 11.4889,
  lng: 106.9756,
  zoom: 12.3
},
{
  name: "Phường Chơn Thành",
  oldNames: ["Hưng Long", "Thành Tâm", "Minh Thành"],
  lat: 11.4622,
  lng: 106.6669,
  zoom: 12.6
},
{
  name: "Phường Bình Long",
  oldNames: ["An Lộc", "Hưng Chiến", "Phú Đức", "Thanh Bình (Hớn Quản)"],
  lat: 11.6451,
  lng: 106.6054,
  zoom: 12.6
},
{
  name: "Phường An Lộc",
  oldNames: ["Phú Thịnh", "Thanh Phú", "Thanh Lương"],
  lat: 11.6488,
  lng: 106.6003,
  zoom: 12.7
},
{
  name: "Phường Phước Bình",
  oldNames: ["Long Phước", "Phước Bình", "Bình Sơn (Phú Riềng)", "Long Giang"],
  lat: 11.7194,
  lng: 106.9152,
  zoom: 12.2
},
{
  name: "Phường Phước Long",
  oldNames: ["Long Thủy", "Thác Mơ", "Sơn Giang", "Phước Tín"],
  lat: 11.8153,
  lng: 106.9976,
  zoom: 12.6
},
{
  name: "Xã Nha Bích",
  oldNames: ["Minh Thắng", "Minh Lập", "Nha Bích"],
  lat: 11.5458,
  lng: 106.7316,
  zoom: 12
},
{
  name: "Xã Tân Quan",
  oldNames: ["Phước An (Hớn Quản)", "Tân Lợi (Hớn Quản)", "Quang Minh", "Tân Quan"],
  lat: 11.5129,
  lng: 106.6974,
  zoom: 12
},
{
  name: "Xã Tân Hưng",
  oldNames: ["Tân Hưng (Hớn Quản)", "An Khương", "Thanh An"],
  lat: 11.4972,
  lng: 106.7418,
  zoom: 12
},
{
  name: "Xã Tân Khai",
  oldNames: ["Thị trấn Tân Khai", "Tân Hiệp (Hớn Quản)", "Đồng Nơ"],
  lat: 11.5674,
  lng: 106.7569,
  zoom: 12.4
},
{
  name: "Xã Minh Đức",
  oldNames: ["An Phú", "Minh Tâm", "Minh Đức"],
  lat: 11.6028,
  lng: 106.7832,
  zoom: 12
},
{
  name: "Xã Phú Nghĩa",
  oldNames: ["Phú Văn", "Đức Hạnh", "Phú Nghĩa"],
  lat: 11.6217,
  lng: 106.8216,
  zoom: 12
},
{
  name: "Xã Đa Kia",
  oldNames: ["Phước Minh", "Bình Thắng", "Đa Kia"],
  lat: 11.7016,
  lng: 106.8734,
  zoom: 12
},
{
  name: "Xã Bình Tân",
  oldNames: ["Long Hưng (Phú Riềng)", "Long Bình", "Bình Tân"],
  lat: 11.7368,
  lng: 106.8947,
  zoom: 12
},
{
  name: "Xã Long Hà",
  oldNames: ["Long Tân (Phú Riềng)", "Long Hà"],
  lat: 11.7694,
  lng: 106.9179,
  zoom: 12
},
{
  name: "Xã Phú Riềng",
  oldNames: ["Bù Nho", "Phú Riềng"],
  lat: 11.7079,
  lng: 106.9086,
  zoom: 12.3
},
{
  name: "Xã Phú Trung",
  oldNames: ["Phước Tân", "Phú Trung"],
  lat: 11.6742,
  lng: 106.9148,
  zoom: 12
},
{
  name: "Xã Thuận Lợi",
  oldNames: ["Thuận Phú", "Thuận Lợi"],
  lat: 11.6528,
  lng: 106.9365,
  zoom: 12
},
{
  name: "Xã Đồng Tâm",
  oldNames: ["Đồng Tiến", "Tân Phước", "Đồng Tâm"],
  lat: 11.6336,
  lng: 106.8821,
  zoom: 12
},
{
  name: "Xã Tân Lợi",
  oldNames: ["Tân Hưng (Đồng Phú)", "Tân Lợi", "Tân Hòa"],
  lat: 11.5894,
  lng: 106.8612,
  zoom: 12
},
{
  name: "Xã Đồng Phú",
  oldNames: ["Thị trấn Tân Phú", "Tân Tiến (Đồng Phú)", "Tân Lập"],
  lat: 11.5589,
  lng: 106.8574,
  zoom: 12.4
},
{
  name: "Xã Lộc Thành",
  oldNames: ["Lộc Thịnh", "Lộc Thành"],
  lat: 11.8736,
  lng: 106.5894,
  zoom: 12
},
{
  name: "Xã Lộc Ninh",
  oldNames: ["Thị trấn Lộc Ninh", "Lộc Thái", "Lộc Thuận"],
  lat: 11.8568,
  lng: 106.6119,
  zoom: 12.4
},
{
  name: "Xã Lộc Hưng",
  oldNames: ["Lộc Khánh", "Lộc Điền", "Lộc Hưng"],
  lat: 11.8947,
  lng: 106.6468,
  zoom: 12
},
{
  name: "Xã Lộc Tấn",
  oldNames: ["Lộc Thiện", "Lộc Tấn"],
  lat: 11.9179,
  lng: 106.6182,
  zoom: 12
},
{
  name: "Xã Lộc Thạnh",
  oldNames: ["Lộc Hòa", "Lộc Thạnh"],
  lat: 11.8356,
  lng: 106.5754,
  zoom: 12
},
{
  name: "Xã Lộc Quang",
  oldNames: ["Lộc Phú", "Lộc Hiệp", "Lộc Quang"],
  lat: 11.9034,
  lng: 106.5568,
  zoom: 12
},
{
  name: "Xã Tân Tiến",
  oldNames: ["Tân Thành", "Tân Tiến (Bù Đốp)", "Lộc An (Lộc Ninh)"],
  lat: 11.9842,
  lng: 106.8396,
  zoom: 12
},
{
  name: "Xã Thiện Hưng",
  oldNames: ["Thị trấn Thanh Bình", "Thanh Hòa", "Thiện Hưng"],
  lat: 12.0048,
  lng: 106.8642,
  zoom: 12.4
},
{
  name: "Xã Hưng Phước",
  oldNames: ["Phước Thiện", "Hưng Phước"],
  lat: 12.0217,
  lng: 106.9128,
  zoom: 12
},
{
  name: "Xã Bù Gia Mập",
  oldNames: ["Bù Gia Mập"],
  lat: 12.2016,
  lng: 106.8719,
  zoom: 11.6
},
{
  name: "Xã Đăk Ơ",
  oldNames: ["Đăk Ơ"],
  lat: 12.1489,
  lng: 106.9564,
  zoom: 11.6
},
{
  name: "Xã Phước Sơn",
  oldNames: ["Đăng Hà", "Thống Nhất", "Phước Sơn"],
  lat: 11.8467,
  lng: 107.0208,
  zoom: 12
},
{
  name: "Xã Nghĩa Trung",
  oldNames: ["Đức Liễu", "Nghĩa Bình", "Nghĩa Trung"],
  lat: 11.8734,
  lng: 107.0662,
  zoom: 12
},
{
  name: "Xã Bù Đăng",
  oldNames: ["Thị trấn Đức Phong", "Đoàn Kết", "Minh Hưng"],
  lat: 11.8896,
  lng: 107.1048,
  zoom: 12.4
},
{
  name: "Xã Thọ Sơn",
  oldNames: ["Phú Sơn (Bù Đăng)", "Đồng Nai", "Thọ Sơn"],
  lat: 11.9187,
  lng: 107.1384,
  zoom: 12
},
{
  name: "Xã Đak Nhau",
  oldNames: ["Đường 10", "Đak Nhau"],
  lat: 11.9718,
  lng: 107.2036,
  zoom: 11.8
},
{
  name: "Xã Bom Bo",
  oldNames: ["Bình Minh (Bù Đăng)", "Bom Bo"],
  lat: 11.9349,
  lng: 107.1647,
  zoom: 12
}

];
