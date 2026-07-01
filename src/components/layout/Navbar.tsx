"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ─── Mega Menu Data ─── */
const megaMenuTabs = [
  {
    id: "leon-rings",
    label: "Leon Rings",
    tagline: "The Ring that Seals It",
    href: "/collections?brand=LEON+RINGS",
    categories: [
      { name: "Engagement",    img: "/products/WhatsApp Image 2026-06-24 at 13.59.24 (1).jpeg", href: "/collections?brand=LEON+RINGS&cat=Engagement" },
      { name: "Wedding Bands", img: "/products/WhatsApp Image 2026-06-24 at 13.59.31.jpeg",     href: "/collections?brand=LEON+RINGS&cat=Wedding" },
    ],
  },
  {
    id: "glj",
    label: "Grace Leon Jewelries",
    tagline: "Jewellery for the Whole of You",
    href: "/collections?brand=GRACE+LEON+JEWELRIES",
    categories: [
      { name: "Sets",       img: "/products/WhatsApp Image 2026-06-24 at 13.59.25.jpeg",      href: "/collections?brand=GRACE+LEON+JEWELRIES&cat=Sets" },
      { name: "Earrings",   img: "/products/WhatsApp Image 2026-06-24 at 13.59.25 (2).jpeg",  href: "/collections?brand=GRACE+LEON+JEWELRIES&cat=Earrings" },
      { name: "Bags",       img: "/products/WhatsApp Image 2026-06-24 at 13.59.24.jpeg",      href: "/collections?brand=GRACE+LEON+JEWELRIES&cat=Bags" },
    ],
  },
  {
    id: "gls",
    label: "Grace Leon Sterling",
    tagline: "Crafted to Last",
    href: "/collections?brand=GRACE+LEON+STERLING",
    categories: [
      { name: "Necklaces",  img: "/products/WhatsApp Image 2026-06-24 at 13.59.28.jpeg",      href: "/collections?brand=GRACE+LEON+STERLING&cat=Necklaces" },
      { name: "Earrings",   img: "/products/WhatsApp Image 2026-06-24 at 13.59.26 (1).jpeg",  href: "/collections?brand=GRACE+LEON+STERLING&cat=Earrings" },
    ],
  },
];

const inspiredLinks = [
  { label: "The Mark Campaign",  href: "/the-mark" },
  { label: "Bespoke Creations",  href: "/bespoke" },
  { label: "Our Story",          href: "/our-story" },
  { label: "Visit Us in Lagos",  href: "/stockists" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("leon-rings");
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mega when scrolling */
  useEffect(() => {
    if (megaOpen) {
      const close = () => setMegaOpen(false);
      window.addEventListener("scroll", close, { once: true });
      return () => window.removeEventListener("scroll", close);
    }
  }, [megaOpen]);

  const openMega = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  const activeData = megaMenuTabs.find((t) => t.id === activeTab)!;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-6 md:px-12 flex items-center justify-between bg-brand-black",
          scrolled
            ? "h-[72px] border-b border-brand-white/5"
            : "h-24"
        )}
      >
        {/* Left Nav */}
        <nav className="flex-1 hidden lg:flex items-center gap-10">
          {/* Collections — triggers mega menu */}
          <button
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
            onClick={() => setMegaOpen(!megaOpen)}
            className={cn(
              "text-[10px] uppercase tracking-[0.35em] font-sans font-light transition-colors duration-300 cursor-pointer",
              megaOpen ? "text-gold" : "text-brand-white/70 hover:text-gold"
            )}
          >
            Collections
          </button>
          {[
            { label: "The Mark",    href: "/the-mark" },
            { label: "Our Story",   href: "/our-story" },
            { label: "Bespoke",     href: "/bespoke" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.35em] font-sans font-light text-brand-white/70 hover:text-gold transition-colors duration-300"
              onMouseEnter={() => setMegaOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Centre Logo */}
        <Link href="/" className="flex-shrink-0" onMouseEnter={() => setMegaOpen(false)}>
          <img
            src="/Logo.png"
            alt="Grace Leon"
            className={cn(
              "transition-all duration-500 invert brightness-200 mix-blend-screen",
              scrolled ? "h-8" : "h-10 md:h-12"
            )}
          />
        </Link>

        {/* Right Nav */}
        <div className="flex-1 flex items-center justify-end gap-6 md:gap-8">
          {/* Currency */}
          <div className="hidden md:flex items-center gap-1 text-[9px] uppercase tracking-[0.15em] font-sans font-light text-brand-white/40">
            <button className="hover:text-gold transition-colors px-1 py-0.5 text-brand-white/70">NGN</button>
            <span>/</span>
            <button className="hover:text-gold transition-colors px-1 py-0.5">GBP</button>
            <span>/</span>
            <button className="hover:text-gold transition-colors px-1 py-0.5">USD</button>
          </div>

          {/* Search */}
          <button aria-label="Search" className="text-brand-white/70 hover:text-gold transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="7"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>

          {/* Cart */}
          <button aria-label="Shopping bag" className="text-brand-white/70 hover:text-gold transition-colors duration-300 relative">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </button>

          {/* Mobile Menu */}
          <button
            aria-label="Menu"
            className="lg:hidden text-brand-white/70 hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.2">
              <line x1="0" y1="1" x2="20" y2="1"/>
              <line x1="0" y1="7" x2="20" y2="7"/>
              <line x1="0" y1="13" x2="20" y2="13"/>
            </svg>
          </button>
        </div>
      </header>

      {/* ═══════════════  MEGA MENU  ═══════════════ */}
      <div
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
        className={cn(
          "fixed left-0 right-0 z-40 bg-brand-black border-b border-gold/10 transition-all duration-400 ease-out overflow-hidden hidden lg:block",
          scrolled ? "top-[72px]" : "top-24",
          megaOpen
            ? "opacity-100 pointer-events-auto max-h-[520px]"
            : "opacity-0 pointer-events-none max-h-0"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-12 py-10">

          {/* Sub-brand tabs */}
          <div className="flex items-center gap-12 mb-10 border-b border-brand-white/5 pb-5">
            {megaMenuTabs.map((tab) => (
              <button
                key={tab.id}
                onMouseEnter={() => setActiveTab(tab.id)}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "text-[10px] uppercase tracking-[0.4em] font-sans font-light transition-all duration-300 pb-2 relative cursor-pointer",
                  activeTab === tab.id
                    ? "text-gold"
                    : "text-brand-white/50 hover:text-brand-white/80"
                )}
              >
                {tab.label}
                {/* Active indicator */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-[1px] bg-gold transition-transform duration-300 origin-left",
                    activeTab === tab.id ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </button>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-[11px] font-serif italic text-cream/50 mb-8">{activeData.tagline}</p>

          {/* Category thumbnails */}
          <div className="flex items-start gap-12 mb-10">
            {activeData.categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group flex flex-col items-center gap-4 w-[140px]"
                onClick={() => setMegaOpen(false)}
              >
                <div className="w-[120px] h-[120px] relative bg-white rounded-sm overflow-hidden">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-[9px] uppercase tracking-[0.35em] font-sans font-light text-brand-white/60 group-hover:text-gold transition-colors duration-300 text-center">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>

          {/* View all collections */}
          <Link
            href={activeData.href}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-sans font-light text-cream/50 hover:text-gold transition-colors duration-300 mb-10 border-b border-cream/10 pb-1"
            onClick={() => setMegaOpen(false)}
          >
            View all {activeData.label}
            <svg width="12" height="6" viewBox="0 0 12 6" fill="none"><path d="M0 3h10M8 1l2 2-2 2" stroke="currentColor" strokeWidth="0.8"/></svg>
          </Link>

          {/* Divider */}
          <div className="border-t border-brand-white/5 pt-6 mt-2">
            <p className="text-[9px] uppercase tracking-[0.5em] font-sans font-light text-gold/60 mb-4">Be Inspired</p>
            <div className="flex items-center gap-10">
              {inspiredLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.3em] font-sans font-light text-brand-white/40 hover:text-gold transition-colors duration-300"
                  onClick={() => setMegaOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay when mega menu is open */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-black/40 transition-opacity duration-400 hidden lg:block",
          megaOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMegaOpen(false)}
      />

      {/* ═══════════════  MOBILE MENU OVERLAY  ═══════════════ */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 transition-all duration-500 lg:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button
          className="absolute top-8 right-8 text-brand-white/60 hover:text-gold transition-colors"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
            <line x1="2" y1="2" x2="18" y2="18"/>
            <line x1="18" y1="2" x2="2" y2="18"/>
          </svg>
        </button>

        {/* Mobile: Sub-brand labels */}
        <p className="text-[9px] uppercase tracking-[0.5em] font-sans font-light text-gold/60 mb-[-20px]">Collections</p>
        {megaMenuTabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            onClick={() => setMenuOpen(false)}
            className="text-xl font-serif text-cream/80 hover:text-gold transition-colors"
          >
            {tab.label}
          </Link>
        ))}

        <div className="w-16 h-[1px] bg-gold/20 my-2" />

        {[
          { label: "The Mark",    href: "/the-mark" },
          { label: "Our Story",   href: "/our-story" },
          { label: "Bespoke",     href: "/bespoke" },
          { label: "Contact",     href: "/contact" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-serif text-cream/80 hover:text-gold transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
