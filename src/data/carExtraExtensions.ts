// Used to extension cars on the Product
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

export interface carExtraExtension {
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

export const carExtraExtensions: carExtraExtension[] = [
  // Vehicles Green
  {
    id: "minio-green",
    name: "Minio Green",
    isFeatured: true,
    tagline: "điện nhỏ gọn, tiết kiệm",
    description:
      "Mẫu xe điện Minio Green thích hợp cho đô thị, nhỏ gọn, dễ di chuyển.",
    basePrice: "269.000.000 VNĐ",
    isNew: true,
    colors: [
      {
        name: "Đen",
        code: "den",
        hex: "#000000",
        image: "/asset/Green/Minio/minio-black.png",
      },
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image: "/asset/Green/Minio/minio-white.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#67100C",
        image: "/asset/Green/Minio/minio-red.png",
      },
      {
        name: "Vàng",
        code: "vang",
        hex: "#FFD700",
        image: "/asset/Green/Minio/minio-yellow.png",
      },
    ],
    specs: [
      { label: "Động cơ", value: "01 Motor, 32 kW / 43.5 PS" },
      { label: "Mô-men xoắn", value: "110 Nm" },
      { label: "Quãng đường", value: "200 km/lần sạc" },
      { label: "Tốc độ tối đa", value: "120 km/h" },
    ],
  },
  {
    id: "herio-green",
    name: "Herio Green",
    isFeatured: false,
    tagline: "Thiết kế hiện đại, mạnh mẽ",
    description:
      "Herio Green mang đến trải nghiệm lái xe điện năng động với hiệu suất cao.",
    basePrice: "499.000.000 VNĐ",
    colors: [
      {
        name: "Đen",
        code: "den",
        hex: "#000000",
        image: "/asset/Green/Herio/herio-black.png",
      },
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image: "/asset/Green/Herio/herio-white.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#67100C",
        image: "/asset/Green/Herio/herio-red.png",
      },
      {
        name: "Vàng",
        code: "vang",
        hex: "#FFD700",
        image: "/asset/Green/Herio/herio-yellow.png",
      },
    ],
    specs: [
      { label: "Động cơ", value: "02 Motor, 55 kW / 75 PS" },
      { label: "Mô-men xoắn", value: "180 Nm" },
      { label: "Quãng đường", value: "320 km/lần sạc" },
      { label: "Tốc độ tối đa", value: "150 km/h" },
    ],
  },
  {
    id: "nerio-green",
    name: "Nerio Green",
    isFeatured: true,
    tagline: "Tiện nghi cao cấp",
    description:
      "Nerio Green dành cho gia đình với không gian rộng và nhiều tiện ích.",
    basePrice: "668.000.000 VNĐ",
    colors: [
      {
        name: "Đen",
        code: "den",
        hex: "#000000",
        image: "/asset/Green/Nerio/nerio-black.png",
      },
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image: "/asset/Green/Nerio/nerio-white.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#67100C",
        image: "/asset/Green/Nerio/nerio-red.png",
      },
      {
        name: "Vàng",
        code: "vang",
        hex: "#FFD700",
        image: "/asset/Green/Nerio/nerio-yellow.png",
      },
    ],
    specs: [
      { label: "Động cơ", value: "02 Motor, 75 kW / 100 PS" },
      { label: "Mô-men xoắn", value: "220 Nm" },
      { label: "Quãng đường", value: "400 km/lần sạc" },
      { label: "Tốc độ tối đa", value: "160 km/h" },
    ],
  },
  {
    id: "limo-green",
    name: "Limo Green",
    isFeatured: false,
    tagline: "Sang trọng và đẳng cấp",
    description:
      "Limo Green là mẫu xe điện hạng sang, thiết kế limousine hiện đại.",
    basePrice: "749.000.000 VNĐ",
    colors: [
      {
        name: "Đen",
        code: "den",
        hex: "#000000",
        image: "/asset/Green/Limo/limo-black.png",
      },
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image: "/asset/Green/Limo/limo-white.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#67100C",
        image: "/asset/Green/Limo/limo-red.png",
      },
      {
        name: "Vàng",
        code: "vang",
        hex: "#FFD700",
        image: "/asset/Green/Limo/limo-yellow.png",
      },
    ],
    specs: [
      { label: "Động cơ", value: "04 Motor, 110 kW / 150 PS" },
      { label: "Mô-men xoắn", value: "400 Nm" },
      { label: "Quãng đường", value: "550 km/lần sạc" },
      { label: "Tốc độ tối đa", value: "200 km/h" },
    ],
  },
];
