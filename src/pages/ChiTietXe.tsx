import { motion } from "framer-motion"
import { useState } from "react"
import { 
  Car, 
  Battery, 
  Shield, 
  Zap, 
  Settings, 
  RotateCw,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { cars } from "@/data/cars"
import { vinFastData } from "@/data/specifications"
import { vinFastGreenData } from "@/data/specificationsGreen"
import { VanData } from "@/data/specificationsVan"
import { featuredDataCars } from "@/data/featuredCars";
import { featuredVanCars } from "@/data/featuredVanCar"
import Car360Viewer from "@/components/Car360/Car360Viewer";

export default function ChiTietXe() {
  const [is360Open, setIs360Open] = useState(false)
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const resolve360Key = (key: string) => {
  if (key.startsWith("vf6")) return "vf6";
  if (key.startsWith("vf7")) return "vf7";
  if (key.startsWith("vf8")) return "vf8";
  if (key.startsWith("vf9")) return "vf9";
  if (key.startsWith("minio")) return "minio";
  if (key.startsWith("herio")) return "herio";
  if (key.startsWith("nerio")) return "nerio";
  if (key.startsWith("limo")) return "limo";
  if (key.startsWith("ec")) return "ec";
  return key;
};

  const [activeIndex, setActiveIndex] = useState(0)
  const normalizeKey = (v?: string) =>
  v
    ?.toLowerCase()
    .replace(/vinfast/gi, "")
    .replace(/\s+/g, "")
    .replace(/-/g, "")
    .trim()

  const normalizeToBanner = (item: any) => ({
  model: item.model ?? item.name ?? "",
  tagline: item.tagline ?? "",
  colors: item.colors ?? [],
  raw: item,
  })
  
  const bannerCars = [
  ...vinFastData.map(normalizeToBanner),
  ...vinFastGreenData.map(normalizeToBanner),
  ...VanData.map(normalizeToBanner),
  ]

  const currentCar = bannerCars[activeIndex]
  
  const currentKey = normalizeKey(currentCar.model)
const featuredCar = featuredDataCars.find(
  f => normalizeKey(f.name) === currentKey
)
const featuredVanCar = featuredVanCars.find(
  v => normalizeKey(v.name) === currentKey
)



const carFromCars = cars.find(
  c =>
    normalizeKey(c.name) === currentKey ||
    currentKey.startsWith(normalizeKey(c.name))
)

const specFromSpecifications = vinFastData.find(
  v => normalizeKey(v.model) === currentKey
)
const extractBatteryCapacity = (car: {
  specVF?: any
  specGreen?: any
  specVan?: any
}): string | undefined => {
  const { specVF, specGreen, specVan } = car

  // ===== helper: parse "xx kWh" =====
  const parseKWh = (text?: string): string | undefined => {
    if (!text) return undefined
    const clean = text.replace(/<[^>]*>/g, " ")
    const match = clean.match(/(\d+[.,]?\d*)\s*kwh/i)
    return match ? `${match[1].replace(",", ".")} kWh` : undefined
  }

  // ===== ƯU TIÊN 1 =====
  // VF – comparisons: Dung lượng pin
  if (specVF?.comparisons) {
    const row = specVF.comparisons.find(
      (c: any) =>
        c.parameter?.toLowerCase().includes("dung lượng pin")
    )
    if (row?.values?.[0]) {
      const v = parseKWh(row.values[0])
      if (v) return v
    }
  }

  // Green / Van – specs
  if (specGreen?.specs?.["Dung lượng pin"])
    return parseKWh(specGreen.specs["Dung lượng pin"])

  if (specVan?.specs?.["Dung lượng pin"])
    return parseKWh(specVan.specs["Dung lượng pin"])

  // ===== ƯU TIÊN 2 =====
  const contentSources = [
    specVF?.content,
    specGreen?.content,
    specVan?.content,
  ]

  for (const content of contentSources) {
    if (!content) continue
    for (const key of Object.keys(content)) {
      const v = parseKWh(content[key])
      if (v) return v
    }
  }

  // ===== ƯU TIÊN 3 (CHỈ values[0]) =====
  const rangeRow =
    specVF?.comparisons?.find(
      (c: any) => c.parameter === "Phạm vi hoạt động"
    ) ||
    specGreen?.comparisons?.find(
      (c: any) => c.parameter === "Phạm vi hoạt động"
    )

  if (rangeRow?.values?.[0]) {
    const v = parseKWh(rangeRow.values[0])
    if (v) return v
  }

  return undefined
}
const stripHtml = (value: any): string => {
  if (typeof value !== "string") return String(value ?? "")
  return value.replace(/<[^>]*>/g, "").trim()
}
const specVan = VanData.find(
  v => normalizeKey(v.model) === currentKey
)
const specGreen = vinFastGreenData.find(
  g => normalizeKey(g.model) === currentKey
)
const comparisonSpec =
  specFromSpecifications ||
  specGreen ||
  specVan ||
  null

const normalizedModel = normalizeKey(currentCar.model)

const isVF3 = normalizeKey(currentCar.model) === "vf3"
const isVF5 = normalizeKey(currentCar.model) === "vf5"
const isVF7 = normalizedModel.startsWith("vf7")
const isVF9 = normalizedModel.startsWith("vf9")
const isMinioGreen = normalizeKey(currentCar.model) === "miniogreen"
const isHerioGreen = normalizeKey(currentCar.model) === "heriogreen"
const isNerioGreen = normalizeKey(currentCar.model) === "neriogreen"
const isLimoGreen = normalizeKey(currentCar.model) === "limogreen"

const extractSafetyFeatures = (value: any): string[] => {
  if (!value || typeof value !== "string") return []

  const clean = value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  // 🚫 chặn text marketing của VF8
  if (
    clean.includes("ưu tiên trên hết") ||
    clean.includes("tiêu chuẩn an toàn nghiêm ngặt")
  ) {
    return []
  }

  // xử lý dạng "5 sao (...)"
  const withoutStars = clean.replace(/^\s*\d+\s*sao\s*/i, "")
  const noBrackets = withoutStars.replace(/[()]/g, "")

  return noBrackets
    .split(/[;,]/)
    .map(s => s.trim())
    .filter(Boolean)
}

const extractSafetyFromComparisons = (car: any): string[] => {
  if (!car?.comparisons) return []

  const safetyRow = car.comparisons.find(
    (c: any) => c.parameter === "Điểm an toàn"
  )

  if (!safetyRow || !Array.isArray(safetyRow.values)) return []

  return safetyRow.values
}

let safetySource: string | undefined

if (isVF5 && specFromSpecifications?.content) {

  safetySource = [
    specFromSpecifications.content.ct41,
    specFromSpecifications.content.ct52,
  ].filter(Boolean).join("\n")

} else if (isVF3 || isVF7 || isVF9) {

  safetySource = undefined

} else if (isHerioGreen) {

  const safetyFromComparisons =
    extractSafetyFromComparisons(carFromCars).join("\n")

  const safetyFromContent =
    specGreen?.content?.ct14

  safetySource = [
    safetyFromComparisons,
    safetyFromContent,
  ].filter(Boolean).join("\n")

} else if (isMinioGreen && specGreen?.content) {

  safetySource = [
    specGreen.content.ct51,
    specGreen.content.ct52,
  ].filter(Boolean).join("\n")
  
} else if (isNerioGreen) {
  safetySource = undefined
} else if (isLimoGreen && specGreen?.content) {


  safetySource = [
    specGreen.content.ct46, // mô tả an toàn hợp lệ
  ]
    .filter(Boolean)
    .join("\n")



} else {

  safetySource =
    featuredCar?.safety ||
    specFromSpecifications?.content?.ct5 ||
    specVan?.content?.ct22
}

const safetyList = isLimoGreen
  ? (
      safetySource
        ? [stripHtml(safetySource)]
        : []
    )
  : extractSafetyFeatures(safetySource)


// ===== Technical specs rows (FINAL SOURCE) =====
type TechnicalRow = {
  label: string
  value: any
}

let technicalRows: TechnicalRow[] = []

// VF: dùng comparisons
if (specFromSpecifications?.comparisons) {
  technicalRows = specFromSpecifications.comparisons.map((row: any) => ({
    label: row.parameter,
    value: Array.isArray(row.values) ? row.values[0] : row.values,
  }))
}

// Green & EC Van: dùng specs
else if (specGreen?.specs) {
  technicalRows = Object.entries(specGreen.specs).map(
    ([key, value]) => ({
      label: key,
      value,
    })
  )
} else if (specVan?.specs) {
  technicalRows = Object.entries(specVan.specs).map(
    ([key, value]) => ({
      label: key,
      value,
    })
  )
}


  const nextCar = () => {
    setActiveIndex((prev) => (prev + 1) % bannerCars.length)
  }

  const prevCar = () => {
    setActiveIndex((prev) =>
      prev === 0 ? bannerCars.length - 1 : prev - 1
    )
  }
  let vf5BatteryType: string | undefined

if (isVF5 && specFromSpecifications?.comparisons) {
  const priceRow = specFromSpecifications.comparisons.find(
    (c: any) => c.parameter === "Giá bán (ước tính)"
  )

  if (priceRow?.values) {
    const batteryMatch = priceRow.values
      .join(" ")
      .match(/\s*(LFP|Ternary)/i)

    if (batteryMatch) {
      vf5BatteryType = batteryMatch[0]
    }
  }
}

const extractBatteryType = (sources: any[]): string | undefined => {
  const text = sources
    .filter(Boolean)
    .map(v =>
      typeof v === "string"
        ? v
        : JSON.stringify(v)
    )
    .join(" ")

  const match = text.match(
    /(pin\s*(lithium-ion|lithium ion|lithium|lfp|ternary))/i
  )

  return match ? match[0].replace(/^pin\s*/i, "") : undefined
}

const batteryType = extractBatteryType([
  // VinFast thường
  specFromSpecifications?.comparisons,
  specFromSpecifications?.specs,
  specFromSpecifications?.content,

  // Green
  specGreen?.specs,
  specGreen?.content,
  carFromCars?.specs,
  carFromCars?.comparisons,

  // Van
  specVan?.specs,
  specVan?.content,
])

const batteryDescription =
  vf5BatteryType ?? batteryType ?? ""

const vehicle = currentCar?.raw
const charging = vehicle?.charging
const distance = vehicle?.distance

const extractNumberFromHtml = (value?: string): number | undefined => {
  if (!value) return undefined

  // bỏ HTML
  const text = value.replace(/<[^>]*>/g, " ")

  // tìm số dạng 362,4 hoặc 362.4 hoặc 362
  const match = text.match(/(\d+[.,]?\d*)/)

  if (!match) return undefined

  // đổi dấu phẩy thành dấu chấm
  const normalized = match[1].replace(",", ".")

  const num = Number(normalized)
  return Number.isFinite(num) ? Math.round(num) : undefined
}
let vf7Warranty: string | undefined

if (normalizedModel.startsWith("vf7")) {
  const ct12 = specFromSpecifications?.content?.ct12
  if (typeof ct12 === "string") {
    const clean = ct12.replace(/<[^>]*>/g, " ")

    const match = clean.match(
      /(bảo hành[^.;]*?(?:năm|km|kilômét)[^.;]*)/i
    )

    vf7Warranty = match?.[0].trim()
  }
}

let vf9Warranty: string | undefined

if (normalizedModel.startsWith("vf9")) {
  const tt5 = specFromSpecifications?.specs?.tt5
  if (typeof tt5 === "string") {
    const clean = tt5.replace(/<[^>]*>/g, " ")
    const match = clean.match(
      /(\d+\s*năm\s*bảo hành[^.;]*\d*\.?\d*\s*km?)/i
    )
    vf9Warranty = match?.[0]
  }
}

let greenWarranty: string | undefined

if (isMinioGreen || isHerioGreen || isLimoGreen || isNerioGreen) {
  // tìm Minio Green làm nguồn chuẩn
  const minioSource = vinFastGreenData.find(
    g => normalizeKey(g.model) === "miniogreen"
  )

  const baseText = minioSource?.content?.ct13
  const nerioExtra = minioSource?.content?.ct14

  const combined =
    isNerioGreen
      ? [baseText, nerioExtra].filter(Boolean).join(" ")
      : baseText

  if (typeof combined === "string") {
    const clean = combined.replace(/<[^>]*>/g, " ")
    const match = clean.match(
      /(\d+\s*năm[^.;]*?(?:km|kilômét)[^.;]*)/i
    )
    greenWarranty = match?.[0]
  }
}

const extractWarranty = (sources: any[]): string | undefined => {
  const text = sources
    .filter(Boolean)
    .map(v =>
      typeof v === "string" ? v : JSON.stringify(v)
    )
    .join(" ")

  // match: "8 năm", "160.000 km", "không giới hạn km"
  const match = text.match(
    /(\d+\s*năm[^.,]*?(?:km|kilômét)[^.,]*)/i
  )

  return match?.[0]
}
const warrantyText =
vf7Warranty ??
vf9Warranty ??
greenWarranty ??
  extractWarranty([
    // VinFast thường
    specFromSpecifications?.content,
    specFromSpecifications?.specs,
    specFromSpecifications?.comparisons,

    // Green
    specGreen?.content,
    specGreen?.specs,

    // Van
    specVan?.content,
    specVan?.specs,

    // fallback
    carFromCars?.description,
  ]) ?? "Chưa công bố"

  const batteryCapacity =
  extractBatteryCapacity({
    specVF: specFromSpecifications,
    specGreen,
    specVan,
  }) ?? "Chưa công bố"

  const safetyFromComparisons: string | undefined = (() => {
  if (!comparisonSpec?.comparisons) return undefined

  const row = comparisonSpec.comparisons.find(
    (c: any) => c.parameter === "Điểm an toàn"
  )

  if (!row || !Array.isArray(row.values) || !row.values[0]) {
    return undefined
  }

  return row.values[0]
})()
  const finalSafetySource = safetyFromComparisons ?? safetySource
  const finalSafetyList = isLimoGreen
  ? finalSafetySource
    ? [stripHtml(finalSafetySource)]
    : []
  : extractSafetyFeatures(finalSafetySource)

  

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className=" relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* WRAPPER dùng làm mốc căn giữa */}
            <div className="relative flex flex-col items-center text-center">

              {/* CHEVRON TRÁI */}
              <button
                onClick={prevCar}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>

              {/* CHEVRON PHẢI */}
              <button
                onClick={nextCar}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
              >
                <ChevronRight className="w-10 h-10" />
              </button>

              {/* ===== NHÓM NỘI DUNG 1: TÊN XE ===== */}
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {currentCar.model}
              </h1>

              {/* ===== NHÓM NỘI DUNG 2: TAGLINE ===== */}
              <p className="mt-6 text-lg leading-8 text-white/90 max-w-2xl mx-auto">
                Khám phá mọi chi tiết của chiếc xe {" "}
                <span className="font-semibold">
                  {currentCar.tagline}
                </span>{" "}
                từ VinFast
              </p>

              {/* ===== NHÓM NỘI DUNG 3: BUTTON ===== */}
              <div className="mt-8 flex justify-center">
                <Dialog open={is360Open} onOpenChange={setIs360Open}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <RotateCw className="mr-2 h-5 w-5" />
                      Xem 360°
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{currentCar.model} – Góc nhìn 360°</DialogTitle>
                    </DialogHeader>

                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <Car360Viewer modelKey={resolve360Key(normalizeKey(currentCar.model))} />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>


        </div>
      </section>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        {/* Technical bannerCars */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Thông số kỹ thuật
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chi tiết đầy đủ về hiệu suất và tính năng của VinFast {currentCar.model}
            </p>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px] font-semibold">Danh mục</TableHead>
                    <TableHead className="font-semibold">Chi tiết</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {technicalRows.length > 0 ? (
                    technicalRows.map((row, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">
                          {row.label}
                        </TableCell>
                        <TableCell>
                          {row.value ?? ""}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={2}
                        className="text-center text-muted-foreground py-6"
                      >
                        Chưa có dữ liệu kỹ thuật
                      </TableCell>
                    </TableRow>
                  )}

                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.section>

        {/* Safety Features */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Tính năng an toàn
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tính năng an toàn tiên tiến đảm bảo an toàn cho mọi hành trình đô thị
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                Hệ thống an toàn toàn diện
              </CardTitle>
              <CardDescription>
                {currentCar.model} được trang bị đầy đủ các tính năng an toàn hiện đại
              </CardDescription>
            </CardHeader>
            <CardContent>
              {finalSafetyList.length === 0 ? (
                <p className="text-muted-foreground text-center">
                  Chưa có dữ liệu an toàn cho mẫu xe này
                </p>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {finalSafetyList.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

            </CardContent>

          </Card>
        </motion.section>

        {/* Battery & Performance */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Pin & Hiệu suất
            </h2>
          </div>
          
          <Tabs defaultValue="battery" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="battery" className="flex items-center">
                <Battery className="mr-2 h-4 w-4" />
                Pin
              </TabsTrigger>
              <TabsTrigger value="performance" className="flex items-center">
                <Zap className="mr-2 h-4 w-4" />
                Hiệu suất
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="battery" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Hệ thống pin tiên tiến</CardTitle>
                  <CardDescription>
                    Pin {batteryDescription} hiệu suất cao với công nghệ quản lý nhiệt thông minh
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Dung lượng pin</h4>
                      <div className="flex items-center space-x-2">
                        <Progress value={85} className="flex-1" />
                        <span className="text-sm font-medium">{batteryCapacity}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Bảo hành</h4>
                      <Badge variant="secondary" className="bg-gradient-eco text-black">
                        {warrantyText}
                      </Badge>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{charging ?? "N/N"}</div>
                      <div className="text-sm text-muted-foreground">sạc nhanh</div>
                      <div className="text-xs text-muted-foreground">(10%-80%)</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{distance ?? "N/N"}</div>
                      <div className="text-sm text-muted-foreground">phạm vi</div>
                      <div className="text-xs text-muted-foreground">(NEDC/WLTP)</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">1₫</div>
                      <div className="text-sm text-muted-foreground">ly cà phê/km</div>
                      <div className="text-xs text-muted-foreground">chi phí vận hành</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="performance" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Hiệu suất vượt trội</CardTitle>
                  <CardDescription>
                    3 chế độ lái linh hoạt, dẫn động cầu sau mạnh mẽ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                      <Settings className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Eco Mode</h4>
                      <p className="text-sm text-muted-foreground">Tối ưu hóa phạm vi hoạt động</p>
                    </div>
                    <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                      <Car className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Comfort Mode</h4>
                      <p className="text-sm text-muted-foreground">Cân bằng hiệu suất & tiết kiệm</p>
                    </div>
                    <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                      <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Sport Mode</h4>
                      <p className="text-sm text-muted-foreground">Hiệu suất tối đa, tăng tốc nhanh</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* Comparison */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              So sánh với đối thủ
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {currentCar.model} vượt trội so với các đối thủ trong phân khúc
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table className="table-fixed">
                  {/* HEADER */}
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px] font-semibold">
                        Tính năng
                      </TableHead>

                      <TableHead className="font-semibold text-primary">
                        {comparisonSpec?.vfNameInComp ||
                          comparisonSpec?.name ||
                          currentCar.model}
                      </TableHead>

                      {comparisonSpec?.competitors?.map((name, idx) => (
                        <TableHead key={idx} className="font-semibold">
                          {name}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>

                  {/* BODY */}
                  <TableBody>
                    {comparisonSpec?.comparisons?.map((row, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="w-[200px] font-medium">
                          {row.parameter}
                        </TableCell>

                        {row.values.map((value, idx) => (
                          <TableCell
                            key={idx}
                            className={idx === 0 ? "font-semibold text-primary" : ""}
                          >
                            {value}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </motion.div>
    </div>
  )
}