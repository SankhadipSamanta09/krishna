"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Mic,
  Camera,
  Heart,
  ShoppingCart,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";
import { useCart } from "@/app/context/CartContext";

const LOGO_URL =
  "https://z-cdn-media.chatglm.cn/files/7ac3adef-f20f-4881-8078-8edad91ce9e4.png?auth_key=1884268843-53e9d0c3c7354979b0c7e29e97a108f1-0-73bec8f122ea07aafc8bc642ea05d71b";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Collection", href: "/page/collection" },
  { name: "About Us", href: "/page/about" },
  { name: "Contact Us", href: "/page/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();
  const [wishlistCount] = useState(0);
  const [activeLink, setActiveLink] = useState("Home");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 350);
    }
  }, [searchOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? "shadow-[0_8px_40px_rgba(201,168,76,0.12)]"
            : "shadow-none"
        }`}
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {/* ═══════════════════════════════════════════
            TOP INFO BAR
        ═══════════════════════════════════════════ */}
        <div className="bg-[#060101] border-b border-[#C9A84C]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-8 sm:h-9">
              <div className="hidden md:flex items-center gap-1.5 text-[#C9A84C]/70">
                <MapPin size={11} strokeWidth={1.8} />
                <span className="text-[10px] font-medium tracking-[0.18em] uppercase">
                  Your Store Location
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <span className="hidden sm:block w-6 sm:w-10 h-px bg-gradient-to-r from-transparent to-[#C9A84C]/25" />
                <span className="text-[9px] sm:text-[10px] font-light tracking-[0.3em] text-[#C9A84C]/90 uppercase whitespace-nowrap">
                  ✦ Established 2000 ✦
                </span>
                <span className="hidden sm:block w-6 sm:w-10 h-px bg-gradient-to-l from-transparent to-[#C9A84C]/25" />
              </div>

              <div className="flex items-center gap-1.5 text-[#C9A84C]/70">
                <Phone size={11} strokeWidth={1.8} />
                <a
                  href="tel:+919876543210"
                  className="text-[10px] font-medium tracking-wider hover:text-[#C9A84C] transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            MAIN NAVIGATION BAR
        ═══════════════════════════════════════════ */}
        <div className="bg-gradient-to-b from-[#110404] via-[#0D0303] to-[#090202]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-[72px] sm:h-[80px] lg:h-[88px] gap-3 lg:gap-8">

              {/* ── LOGO (BIGGER & CENTERED) ── */}
              <Link href="/" className="flex-shrink-0 group relative self-center">
                <div className="absolute inset-0 bg-[#C9A84C]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-90" />
                <Image
                  src={LOGO_URL}
                  alt="Krishna Jewellery Designer"
                  width={220}
                  height={110}
                  className="relative h-[52px] sm:h-[60px] lg:h-[72px] w-auto object-contain transition-all duration-700 group-hover:brightness-115 group-hover:saturate-110 drop-shadow-[0_0_15px_rgba(201,168,76,0.15)]"
                  unoptimized
                  priority
                />
              </Link>

              {/* ── SEARCH BAR (Desktop / Tablet) ── */}
              <div className="hidden md:flex flex-1 max-w-xl lg:max-w-2xl">
                <div className="relative w-full group/search">
                  <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#C9A84C]/0 via-[#C9A84C]/30 to-[#C9A84C]/0 opacity-0 group-focus-within/search:opacity-100 transition-all duration-700 blur-[2px]" />
                  <div className="relative flex items-center bg-[#150606]/90 border border-[#C9A84C]/15 rounded-full overflow-hidden group-focus-within/search:border-[#C9A84C]/40 transition-all duration-500">
                    <Search
                      size={15}
                      className="ml-4 text-[#C9A84C]/40 group-focus-within/search:text-[#C9A84C]/80 transition-colors duration-500 flex-shrink-0"
                    />
                    <input
                      type="text"
                      placeholder="Search jewellery, designs, collections..."
                      className="w-full bg-transparent text-white/80 text-[13px] px-3 py-2.5 lg:py-3 outline-none placeholder:text-white/20 font-light tracking-wide"
                    />
                    <div className="flex items-center gap-0.5 pr-1.5 flex-shrink-0">
                      <button
                        type="button"
                        aria-label="Voice search"
                        className="p-2 rounded-full hover:bg-[#C9A84C]/10 active:scale-90 transition-all duration-300"
                      >
                        <Mic
                          size={14}
                          className="text-[#C9A84C]/40 hover:text-[#C9A84C]/80 transition-colors duration-300"
                        />
                      </button>
                      <div className="w-px h-4 bg-[#C9A84C]/15" />
                      <button
                        type="button"
                        aria-label="Image search"
                        className="p-2 rounded-full hover:bg-[#C9A84C]/10 active:scale-90 transition-all duration-300"
                      >
                        <Camera
                          size={14}
                          className="text-[#C9A84C]/40 hover:text-[#C9A84C]/80 transition-colors duration-300"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── ACTION BUTTONS ── */}
              <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0 self-center">
                {/* Mobile Search Toggle */}
                <button
                  onClick={() => setSearchOpen((v) => !v)}
                  aria-label="Toggle search"
                  className="md:hidden relative p-2.5 rounded-full hover:bg-[#C9A84C]/10 active:scale-90 transition-all duration-300"
                >
                  <Search size={18} className="text-[#C9A84C]" />
                </button>

                {/* Wishlist */}
                <button
                  aria-label="Wishlist"
                  className="relative p-2.5 rounded-full hover:bg-[#C9A84C]/10 active:scale-90 transition-all duration-300 group/wish"
                >
                  <Heart
                    size={18}
                    className="text-[#C9A84C] group-hover/wish:fill-[#C9A84C]/30 group-hover/wish:scale-110 transition-all duration-300"
                  />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 bg-gradient-to-b from-[#E8D48B] to-[#C9A84C] text-[#0A0202] text-[9px] font-bold rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(201,168,76,0.4)]">
                      {wishlistCount}
                    </span>
                  )}
                </button>

                {/* Cart */}
                <Link
                  href="/cart"
                  aria-label="Shopping cart"
                  className="relative p-2.5 rounded-full hover:bg-[#C9A84C]/10 active:scale-90 transition-all duration-300 group/cart"
                >
                  <ShoppingCart
                    size={18}
                    className="text-[#C9A84C] group-hover/cart:scale-110 transition-transform duration-300"
                  />
                  {cartCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 bg-gradient-to-b from-[#E8D48B] to-[#C9A84C] text-[#0A0202] text-[9px] font-bold rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(201,168,76,0.4)]">
                      {cartCount}
                    </span>
                  )}
                </Link>

                {/* Hamburger — Mobile only */}
                <button
                  onClick={() => setMobileMenuOpen((v) => !v)}
                  aria-label="Toggle menu"
                  className="lg:hidden p-2.5 rounded-full hover:bg-[#C9A84C]/10 active:scale-90 transition-all duration-300 ml-0.5"
                >
                  <div className="relative w-5 h-5 flex flex-col justify-center items-center gap-[5px]">
                    <span
                      className={`block w-5 h-[1.5px] bg-[#C9A84C] rounded-full transition-all duration-500 origin-center ${
                        mobileMenuOpen ? "rotate-45 translate-y-[3.25px]" : ""
                      }`}
                    />
                    <span
                      className={`block w-5 h-[1.5px] bg-[#C9A84C] rounded-full transition-all duration-500 ${
                        mobileMenuOpen
                          ? "opacity-0 scale-x-0"
                          : "opacity-100 scale-x-100"
                      }`}
                    />
                    <span
                      className={`block w-5 h-[1.5px] bg-[#C9A84C] rounded-full transition-all duration-500 origin-center ${
                        mobileMenuOpen
                          ? "-rotate-45 -translate-y-[3.25px]"
                          : ""
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* ── MOBILE SEARCH BAR (collapsible) ── */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              searchOpen ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pb-3 pt-1">
              <div className="relative flex items-center bg-[#150606]/90 border border-[#C9A84C]/20 rounded-full overflow-hidden focus-within:border-[#C9A84C]/40 transition-colors duration-300">
                <Search
                  size={14}
                  className="ml-4 text-[#C9A84C]/40 flex-shrink-0"
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search jewellery..."
                  className="w-full bg-transparent text-white/80 text-sm px-3 py-2.5 outline-none placeholder:text-white/20"
                />
                <button className="p-2 rounded-full hover:bg-[#C9A84C]/10 transition-colors duration-300">
                  <Mic size={13} className="text-[#C9A84C]/40" />
                </button>
                <div className="w-px h-4 bg-[#C9A84C]/15" />
                <button className="p-2 rounded-full hover:bg-[#C9A84C]/10 transition-colors duration-300">
                  <Camera size={13} className="text-[#C9A84C]/40" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            BOTTOM NAV LINKS (Desktop only)
        ═══════════════════════════════════════════ */}
        <div className="hidden lg:block bg-[#060101]">
          <div className="max-w-7xl mx-auto px-8">
            <nav className="flex items-center justify-center gap-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.name;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`relative px-7 py-3.5 text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-400 group/link ${
                      isActive
                        ? "text-[#C9A84C]"
                        : "text-white/50 hover:text-[#C9A84C]"
                    }`}
                  >
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent transition-all duration-500 ${
                        isActive ? "w-10" : "w-0 group-hover/link:w-8"
                      }`}
                    />
                    <span className="absolute inset-0 bg-[#C9A84C]/0 group-hover/link:bg-[#C9A84C]/5 transition-colors duration-400" />
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* ── BOTTOM GOLD ACCENT LINE ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </header>

      {/* ═══════════════════════════════════════════
          MOBILE SLIDE-IN MENU
      ═══════════════════════════════════════════ */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          mobileMenuOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-[6px] transition-opacity duration-500 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 bottom-0 w-[280px] sm:w-[300px] bg-gradient-to-b from-[#110404] via-[#0D0303] to-[#070202] border-l border-[#C9A84C]/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
          <div className="h-[90px] sm:h-[100px]" />

          <nav className="px-5 space-y-0.5">
            {navLinks.map((link, i) => {
              const isActive = activeLink === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 group/item ${
                    isActive
                      ? "bg-[#C9A84C]/10 text-[#C9A84C]"
                      : "text-white/60 hover:text-[#C9A84C] hover:bg-[#C9A84C]/5"
                  }`}
                  style={{
                    animationDelay: mobileMenuOpen ? `${i * 60}ms` : "0ms",
                  }}
                >
                  <span className="text-[13px] font-medium tracking-[0.15em] uppercase">
                    {link.name}
                  </span>
                  <ChevronRight
                    size={14}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-[#C9A84C]/60"
                        : "text-transparent group-hover/item:text-[#C9A84C]/40 group-hover/item:translate-x-0.5"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="mx-6 my-5 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />

          <div className="px-6 space-y-3">
            <div className="flex items-center gap-2.5 text-[#C9A84C]/50">
              <MapPin size={12} strokeWidth={1.8} />
              <span className="text-[10px] tracking-[0.12em] uppercase font-medium">
                Your Store Location
              </span>
            </div>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2.5 text-[#C9A84C]/50 hover:text-[#C9A84C]/80 transition-colors duration-300"
            >
              <Phone size={12} strokeWidth={1.8} />
              <span className="text-[10px] tracking-[0.12em] font-medium">
                +91 98765 43210
              </span>
            </a>
            <p className="text-[9px] text-[#C9A84C]/25 tracking-[0.15em] uppercase pt-2">
              ✦ Est. 2000 ✦
            </p>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <span className="w-8 h-px bg-[#C9A84C]/15" />
            <span className="text-[8px] text-[#C9A84C]/20 tracking-[0.3em] uppercase">
              Krishna
            </span>
            <span className="w-8 h-px bg-[#C9A84C]/15" />
          </div>
        </div>
      </div>

      {/* ── Spacer ── */}
     <div 
        className="bg-[#060101] w-full
        h-[calc(32px+72px)] 
        sm:h-[calc(36px+80px)] 
        lg:h-[calc(36px+88px+48px)]" 
      />
    </>
  );
}