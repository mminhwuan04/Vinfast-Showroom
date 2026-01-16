import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingChat } from "@/components/floating-chat";
import Index from "./pages/Index";
import ChiTietXe from "./pages/ChiTietXe";
import DatCoc from "./pages/DatCoc";
import NotFound from "./pages/NotFound";
import { ContactForm } from "./components/ContactForm";
import { FloatingButtons } from "./components/FloatingButtons";
import ChiTietXeVFDetail from "./pages/VF/[id]";
import ChiTietXeGreenDetail from "./pages/Green/[id]";
import DanhSachXeVf from "./pages/DanhSachXeVf";
import DanhSachXeGreen from "./pages/DanhSachXeGreen";
import DanhSachXeVan from "./pages/DanhSachXeVan";
import KhuyenMai from "./pages/KhuyenMai";
import ChiTietXeVanDetail from "./pages/ECVan.tsx/[id]";
import Product from "./pages/Product";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="vinfast-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/chi-tiet-xe" element={<ChiTietXe />} />
                <Route path="/dat-coc" element={<DatCoc />} />
                <Route path="/danh-sach-xe-vf" element={<DanhSachXeVf />} />
                <Route
                  path="/danh-sach-xe-green"
                  element={<DanhSachXeGreen />}
                />
                <Route path="/danh-sach-xe-van" element={<DanhSachXeVan />} />
                <Route path="danh-sach-xe-van/:id"element={<ChiTietXeVanDetail/>}/>
                <Route path="/danh-sach-xe" element={<Product/>}/>

                {/* <Route path="/chi-tiet-xe/:id" element={<ChiTietXeDetail/>}/> */}
                <Route
                  path="/danh-sach-xe-vf/:id"
                  element={<ChiTietXeVFDetail />}
                />
                <Route
                  path="/danh-sach-xe-green/:id"
                  element={<ChiTietXeGreenDetail />}
                />
                <Route
                  path="/khuyen-mai"
                  element={<KhuyenMai />}
                />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ContactForm />
              <FloatingButtons />
            </main>
            <Footer />
            <FloatingChat />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
