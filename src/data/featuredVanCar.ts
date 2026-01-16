
export interface CarColor {
  name: string;
  code: string;
  hex: string;
  image: string;
}

export interface CarSpec {
  label: string;
  value: string;
  icon?: string;
}

export interface featuredVanCar {
  id: string;
  name: string;
  isFeatured: boolean;
  tagline: string;
  description: string;
  basePrice: string;
  isNew?: boolean;
  colors: CarColor[];
  specs: CarSpec[];
}

export const featuredVanCars: featuredVanCar[] = [
  // EC Van
  {
    id: "ec-van-standard",
    name: "EC Van (Tiêu chuẩn)",
    isFeatured: true,
    tagline: "thương mại điện hiệu quả cho doanh nghiệp",
    description:
      "VinFast EC Van là mẫu xe thương mại chạy điện thiết kế tối ưu cho vận chuyển hàng hóa và dịch vụ - tiết kiệm chi phí vận hành, thân thiện môi trường.",
    basePrice: "285,000,000 VNĐ",
    colors: [
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image: "/asset/EC/ecvan-white.png",
      },
      {
        name: "Xanh rêu",
        code: "xanh-reu",
        hex: "#4B6F3F",
        image:
          "/asset/EC/ecvan-xanh-reu.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#B22222",
        image: "/asset/Green/EC-Van/ecvan-red.png",
      },
      {
        name: "Vàng",
        code: "vang",
        hex: "#FFD700",
        image: "/asset/EC/ecvan-yellow.png",
      },
    ],
    specs: [
      { label: "Động cơ", value: "01 Motor, 75 kW (≈ 102 PS)" },
      { label: "Mô-men xoắn", value: "220 Nm" },
      { label: "Dung lượng pin", value: "50 kWh (tùy cấu hình)" },
      { label: "Quãng đường", value: "≈ 300 km / lần sạc (NEDC, ước tính)" },
      { label: "Tốc độ tối đa", value: "120 km/h" },
      { label: "Thời gian sạc nhanh", value: "≈ 40 phút (10% → 80%)" },
      { label: "Sức chở/Trọng tải",
        value: "Tùy cấu hình - phù hợp cho hàng hóa nhẹ/ trung bình"},
    ],
  },
  {
    id: "ec-van-advanced",
    name: "EC Van (Nâng cao)",
    isFeatured: false,
    tagline: "thương mại điện hiệu quả cho doanh nghiệp",
    description:
      "VinFast EC Van là mẫu xe thương mại chạy điện thiết kế tối ưu cho vận chuyển hàng hóa và dịch vụ - tiết kiệm chi phí vận hành, thân thiện môi trường.",
    basePrice: "305,000,000 VNĐ",
    colors: [
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image: "/asset/EC/ecvan-white.png",
      },
      {
        name: "Xanh rêu",
        code: "xanh-reu",
        hex: "#4B6F3F",
        image:
          "/asset/EC/ecvan-xanh-reu.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#B22222",
        image: "/asset/Green/EC-Van/ecvan-red.png",
      },
      {
        name: "Vàng",
        code: "vang",
        hex: "#FFD700",
        image: "/asset/EC/ecvan-yellow.png",
      },
    ],
    specs: [
      { label: "Động cơ", value: "01 Motor, 75 kW (≈ 102 PS)" },
      { label: "Mô-men xoắn", value: "220 Nm" },
      { label: "Dung lượng pin", value: "50 kWh (tùy cấu hình)" },
      { label: "Quãng đường", value: "≈ 300 km / lần sạc (NEDC, ước tính)" },
      { label: "Tốc độ tối đa", value: "120 km/h" },
      { label: "Thời gian sạc nhanh", value: "≈ 40 phút (10% → 80%)" },
      { label: "Sức chở/Trọng tải",
        value: "Tùy cấu hình - phù hợp cho hàng hóa nhẹ/ trung bình"},
    ],
  },
];