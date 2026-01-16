import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

import {
  Menubar,
  MenubarTrigger,
  MenubarMenu,
  MenubarItem,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarContent,
  MenubarSub,
} from "@radix-ui/react-menubar";

import { cn } from "@/lib/utils";

import { vinFastData, VinFastModel } from "@/data/specifications";
import {
  vinFastGreenData,
  VinFastGreenModel,
} from "@/data/specificationsGreen";
import { featuredVanCar, featuredVanCars } from "@/data/featuredVanCar";
import { VanModel, VanData } from "@/data/specificationsVan";

const navigation = [
  { name: "Trang chủ", href: "/" },
  {
    name: "Sản phẩm",
    href: "/danh-sach-xe",
    isDropdown: true,
    type: ["vf", "green", "ec-van"],
  },
  // {
  //   name: "Sản phẩm VinFast",
  //   href: "/danh-sach-xe-vf",
  //   isDropdown: true,
  //   type: "vf",
  // },
  {
    name :"360",
    href: "/chi-tiet-xe",
    isDropdown: false,
    tf: "vf"
  },
  {
    name :"Khuyến mãi",
    href: "/khuyen-mai",
    isDropdown: false,
    tf: "vf"
  },
  // {
  //   name: "Sản phẩm Green",
  //   href: "/danh-sach-xe-green",
  //   isDropdown: true,
  //   type: "green",
  // },
  // {
  //   name: "Chương trình",
  //   href: "/chuong-trinh",
  // },
  { name: "Đặt cọc", href: "/dat-coc" },
];

export function Header() {
  // Mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<
    null | "vf" | "green" | "van"
  >(null);

  // Tablet
  const [tabletMenuOpen, setTabletMenuOpen] = useState(false);
  const [tabletAccordion, setTabletAccordion] = useState<
    null | "vf" | "green" | "van"
  >(null);

  useEffect(() => {
    // Khóa scroll nền khi mở menu mobile
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, tabletMenuOpen]);

  const toggleAccordion = (key: "vf" | "green" | "van") =>
  setMobileAccordion((prev) => {
    const next = prev === key ? null : key;
    if (next !== "vf") setVfSubAccordion(null); // reset VF6–VF9
    return next;
  });


  // Desktop
  const [selectedid, setSelectedid] = useState("");
  const [dropdownOpens, setDropdownOpens] = useState<{
    [key: string]: boolean;
  }>({});

  const location = useLocation();

  const isActivePath = (path: string) => {
    if (path === "/danh-sach-xe-green") {
      return (
        location.pathname === path ||
        location.pathname.startsWith("/danh-sach-xe-green/")
      );
    } else if (path === "/danh-sach-xe-vf") {
      return (
        location.pathname === path ||
        location.pathname.startsWith("/danh-sach-xe-vf/")
      );
    } else if (path === "/danh-sach-xe-van") {
      return (
        location.pathname === path ||
        location.pathname.startsWith("/danh-sach-xe-van/")
      );
    }
    return location.pathname === path;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTriggerClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    // Ngăn dropdown mở khi click
    scrollToTop();
    window.location.href = href;
    // Chuyển hướng thủ công đến /danh-sach-xe
  };

  const setDropdownOpen = (name: string, open: boolean) => {
    setDropdownOpens((prev) => ({ ...prev, [name]: open }));
  };

  const renderSingleVF = (vf: string) =>
    vinFastData
      .filter((m) => m.model === vf)
      .map((model) => (
        <DropdownMenuItem key={model.id} asChild>
          <Link
            to={`/danh-sach-xe-vf/${model.id}`}
            onClick={scrollToTop}
            className="block w-full text-sm"
          >
            {model.model}
          </Link>
        </DropdownMenuItem>
      ));

  const renderVFSubMenu = (vf: string) => {
    const models = vinFastData.filter((m) => m.model.startsWith(vf));
    if (!models.length) return null;

    return (
      <DropdownMenuSub key={vf}>
        <DropdownMenuSubTrigger className="text-sm">
          {vf}
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          {models.map((model) => (
            <DropdownMenuItem key={model.id} asChild>
              <Link
                to={`/danh-sach-xe-vf/${model.id}`}
                onClick={scrollToTop}
                className="block w-full text-sm"
              >
                {model.model}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    );
  };
  const groupVFModels = (vf: string) =>
  vinFastData.filter((m) => m.model.startsWith(vf));
  const [vfSubAccordion, setVfSubAccordion] = useState<string | null>(null);
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" onClick={scrollToTop} className="-m-1.5 p-1.5">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src="/Logo.png"
                alt="VinFast Logo"
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-foreground w-2xs:text-lg lg:text-xl sm:text-xl">
                VinFast Miền Nam
              </span>
            </motion.div>
          </Link>
        </div>

        {/* Mobile navigation menu button */}
        <div className="flex lg:hidden md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="inline-flex items-center justify-center"
          >
            <span className="sr-only">Mở menu chính</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>

          {/* Drawer mobile full-height */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="fixed inset-0 z-[60] lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Overlay tối */}
                <motion.div
                  className="absolute inset-0 bg-black/50"
                  onClick={() => setMobileMenuOpen(false)}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 80) {
                      setMobileMenuOpen(false);
                    }
                  }}
                />

                {/* Panel trượt từ phải */}
                <motion.aside
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.25 }}

                  drag="x"
                  dragDirectionLock
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}

                  onDragEnd={(_, info) => {
                    if (info.offset.x > 80) {
                      setMobileMenuOpen(false);
                    }
                  }}

                  className="absolute right-0 top-0 h-screen w-[90vw] max-w-sm bg-background shadow-2xl flex flex-col touch-pan-y"
                >

                  {/* Header panel */}
                  {/* Nội dung cuộn */}
                  <div className="flex-1 overflow-y-auto">
                    <nav className="px-2 py-3">
                      {/* Trang chủ */}
                      <Link
                        to="/"
                        onClick={() => {
                          scrollToTop();
                          setMobileMenuOpen(false);
                        }}
                        className={cn(
                          "block px-3 py-3 text-base font-semibold rounded-md",
                          location.pathname === "/"
                            ? "bg-primary/10 text-foreground"
                            : "hover:bg-muted text-foreground"
                        )}
                      >
                        Trang chủ
                      </Link>

                      {/* Sản phẩm - Accordion nhóm */}
                      <div className="mt-2">
                        {/* VinFast VF */}
                        <button
                          className="w-full flex items-center justify-between px-3 py-3 rounded-md hover:bg-muted"
                          onClick={() => toggleAccordion("vf")}
                          aria-expanded={mobileAccordion === "vf"}
                        >
                          <span className="text-base font-semibold">
                            VinFast VF
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              mobileAccordion === "vf" && "rotate-180"
                            )}
                          />
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height:
                              mobileAccordion === "vf" ? "auto" : 0,
                            opacity: mobileAccordion === "vf" ? 1 : 0,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3">
                            {/* VF3, VF5 – item đơn */}
                            {["VF3", "VF5"].map((vf) =>
                              vinFastData
                                .filter((m) => m.model === vf)
                                .map((model) => (
                                  <Link
                                    key={model.id}
                                    to={`/danh-sach-xe-vf/${model.id}`}
                                    onClick={() => {
                                      scrollToTop();
                                      setMobileMenuOpen(false);
                                    }}
                                    className="block px-3 py-2 text-sm rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
                                  >
                                    {model.model}
                                  </Link>
                                ))
                            )}

                            {/* VF6–VF9 – accordion con */}
                            {["VF6", "VF7", "VF8", "VF9"].map((vf) => {
                              const models = groupVFModels(vf);
                              if (!models.length) return null;

                              return (
                                <div key={vf} >
                                  <button
                                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-normal text-muted-foreground rounded-md hover:bg-muted hover:text-foreground"
                                    onClick={() =>
                                      setVfSubAccordion((prev) =>
                                        prev === vf ? null : vf
                                      )
                                    }

                                  >
                                    {vf}
                                    <ChevronDown
                                      className={cn(
                                        "h-4 w-4 transition-transform",
                                        mobileAccordion === vf && "rotate-180"
                                      )}
                                    />
                                  </button>

                                  <motion.div
                                    initial={false}
                                    animate={{
                                      height: vfSubAccordion === vf ? "auto" : 0,
                                      opacity: vfSubAccordion === vf ? 1 : 0,

                                    }}
                                    className="overflow-hidden"
                                  >
                                    <div className="pl-4">
                                      {models.map((model) => (
                                        <Link
                                          key={model.id}
                                          to={`/danh-sach-xe-vf/${model.id}`}
                                          onClick={() => {
                                            scrollToTop();
                                            setMobileMenuOpen(false);
                                          }}
                                          className="block px-3 py-2 text-sm rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
                                        >
                                          {model.model}
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>

                        {/* VinFast Green */}
                        <button
                          className="w-full flex items-center justify-between px-3 py-3 rounded-md hover:bg-muted mt-1"
                          onClick={() => toggleAccordion("green")}
                          aria-expanded={mobileAccordion === "green"}
                        >
                          <span className="text-base font-semibold">
                            VinFast Green
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              mobileAccordion === "green" && "rotate-180"
                            )}
                          />
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height:
                              mobileAccordion === "green"
                                ? "auto"
                                : 0,
                            opacity:
                              mobileAccordion === "green" ? 1 : 0,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3">
                            {vinFastGreenData.map(
                              (model: VinFastGreenModel) => (
                                <Link
                                  key={model.id}
                                  to={`/danh-sach-xe-green/${model.id}`}
                                  onClick={() => {
                                    scrollToTop();
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block px-3 py-2 text-sm rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
                                >
                                  {model.model}
                                </Link>
                              )
                            )}
                          </div>
                        </motion.div>

                        {/* EC Van */}
                        <button
                          className="w-full flex items-center justify-between px-3 py-3 rounded-md hover:bg-muted mt-1"
                          onClick={() => toggleAccordion("van")}
                          aria-expanded={mobileAccordion === "van"}
                        >
                          <span className="text-base font-semibold">
                            EC Van
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              mobileAccordion === "van" && "rotate-180"
                            )}
                          />
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height:
                              mobileAccordion === "van" ? "auto" : 0,
                            opacity:
                              mobileAccordion === "van" ? 1 : 0,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3">
                            {VanData.map((model: VanModel) => (
                              <Link
                                key={model.id}
                                to={`/danh-sach-xe-van/${model.id}`}
                                onClick={() => {
                                  scrollToTop();
                                  setMobileMenuOpen(false);
                                }}
                                className="block px-3 py-2 text-sm rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
                              >
                                {model.model}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      {/* Các mục đơn ( Đặt cọc) */}
                      <div className="space-y-1">
                        <Link
                          to="/dat-coc"
                          onClick={() => {
                            scrollToTop();
                            setMobileMenuOpen(false);
                          }}
                          className={cn(
                            "block px-3 py-3 text-base font-semibold rounded-md",
                            isActivePath("/dat-coc")
                              ? "bg-primary/10 text-foreground"
                              : "hover:bg-muted text-foreground"
                          )}
                        >
                          Đặt cọc
                        </Link>
                      </div>
                    </nav>
                  </div>

                  {/* Footer panel: Logo + CTA ở dưới cùng */}
                  <div className="border-t px-5 py-4 flex items-center justify-between">
                    <img
                      src="/Logo.png"
                      alt="VinFast Logo"
                      className="h-8 w-8"
                    />
                    <Link
                      to="/dat-coc"
                      onClick={() => {
                        scrollToTop();
                        setMobileMenuOpen(false);
                      }}
                    >
                      <Button size="sm" className="hero-button">
                        Đăng ký tư vấn
                      </Button>
                    </Link>
                  </div>
                </motion.aside>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-4 lg:gap-x-12">
          {navigation.map((item) =>
            item.isDropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  setDropdownOpen(item.name, true)
                }
                onMouseLeave={() =>
                  setDropdownOpen(item.name, false)
                }
              >
                <DropdownMenu
                  open={dropdownOpens[item.name]}
                  onOpenChange={(open) =>
                    setDropdownOpen(item.name, open)
                  }
                >
                  <DropdownMenuTrigger asChild>
                    <Link
                      to={item.href}
                      onClick={(e) =>
                        handleTriggerClick(e, item.href)
                      }
                      className={cn(
                        "text-sm font-semibold leading-6 flex items-center gap-1 px-3 md:px-0 rounded-md outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0",
                        isActivePath(item.href)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                  </DropdownMenuTrigger>

                  {/* Dropdown chứa 2 nhóm: VinFast + Green */}
                  <DropdownMenuContent align="start" className="w-30">
                    {/* --- Nhóm VinFast --- */}
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger
                        className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase mx-0"
                        onMouseEnter={() => setSelectedid("vf")}
                      >
                        VinFast →
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        {renderSingleVF("VF3")}
                        {renderSingleVF("VF5")}
                        {["VF6", "VF7", "VF8", "VF9"].map(
                          renderVFSubMenu
                        )}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>

                    {/* --- Ngăn cách --- */}
                    <div className="border-t border-border my-1" />

                    {/* --- Nhóm Green --- */}
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger
                        className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase"
                        onMouseEnter={() => setSelectedid("green")}
                      >
                        Green →
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        {vinFastGreenData.map(
                          (model: VinFastGreenModel) => (
                            <DropdownMenuItem key={model.id} asChild>
                              <Link
                                to={`/danh-sach-xe-green/${model.id}`}
                                onClick={scrollToTop}
                                className="block w-full text-sm"
                              >
                                {model.model}
                              </Link>
                            </DropdownMenuItem>
                          )
                        )}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>

                    <div className="border-t border-border my-1" />

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger
                        className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase mx-0"
                        onMouseEnter={() => setSelectedid("ec-van")}
                      >
                        EC Van →
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        {VanData.map((model: VanModel) => (
                          <DropdownMenuItem key={model.id} asChild>
                            <Link
                              to={`/danh-sach-xe-van/${model.id}`}
                              onClick={scrollToTop}
                              className="block w-full text-sm"
                            >
                              {model.model}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                onClick={scrollToTop}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors hover:text-primary",
                  isActivePath(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <Link to="/dat-coc" onClick={scrollToTop}>
            <Button>Đăng ký tư vấn</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
