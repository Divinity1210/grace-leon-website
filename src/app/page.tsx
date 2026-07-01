"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Fade-in-on-scroll wrapper ─── */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Parallax hook ─── */
function useParallax() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollY;
}

/* ─── Gold floating particles (client-only to avoid hydration mismatch) ─── */
function GoldParticles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  /* Deterministic pseudo-random values per particle */
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    left: 10 + ((i * 37 + 13) % 80),
    top: ((i * 53 + 7) % 100),
    duration: 8 + ((i * 29) % 12),
    delay: ((i * 41) % 80) / 10,
    opacity: 0.2 + ((i * 17) % 40) / 100,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full bg-gold/40 animate-[floatParticle_ease-in-out_infinite]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}


const featured = [
  { name: "The Sovereign Solitaire",  price: "₦1,200,000", img: "/products/WhatsApp Image 2026-06-24 at 13.59.24 (1).jpeg", category: "LEON RINGS",           slug: "the-sovereign-solitaire" },
  { name: "Emerald Halo Set",         price: "₦2,800,000", img: "/products/WhatsApp Image 2026-06-24 at 13.59.25.jpeg",      category: "GRACE LEON JEWELRIES",  slug: "emerald-halo-set" },
  { name: "Arch Link Pendant",        price: "₦180,000",   img: "/products/WhatsApp Image 2026-06-24 at 13.59.28.jpeg",      category: "GRACE LEON STERLING",   slug: "arch-link-pendant" },
  { name: "Croc Sovereign Clutch",    price: "₦850,000",   img: "/products/WhatsApp Image 2026-06-24 at 13.59.24.jpeg",      category: "GRACE LEON JEWELRIES",  slug: "croc-sovereign-clutch" },
];

/* ─── The Mark expressions data ─── */
const markExpressions = [
  { src: "/campaign/mark/01-grace.png",       label: "Grace",       desc: "The quiet power of presence" },
  { src: "/campaign/mark/02-sovereignty.png", label: "Sovereignty", desc: "Nothing here apologises" },
  { src: "/campaign/mark/03-memory.png",      label: "Memory",      desc: "What you carry forward" },
  { src: "/campaign/mark/04-the-name.png",    label: "The Name",    desc: "Identity etched in gold" },
  { src: "/campaign/mark/05-the-vow.png",     label: "The Vow",     desc: "A promise made permanent" },
  { src: "/campaign/mark/06-lagos.png",       label: "Lagos",       desc: "Where it all begins" },
  { src: "/campaign/mark/07-the-light.png",   label: "The Light",   desc: "What fire looks like at rest" },
  { src: "/campaign/mark/08-craft.png",       label: "Craft",       desc: "Patience as a philosophy" },
  { src: "/campaign/mark/09-the-mark.png",    label: "The Mark",    desc: "The seal of everything" },
];

export default function Home() {
  const scrollY = useParallax();
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* ═══════════════  1 · HERO — 3D Parallax  ═══════════════ */}
      <section className="relative w-full h-screen bg-brand-black overflow-hidden" style={{ perspective: "1000px" }}>

        {/* Layer 1: Background image — slowest parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translate3d(0, ${scrollY * 0.3}px, -100px) scale(1.1)` }}
        >
          <Image
            src="/campaign/hero.png"
            alt="Grace Leon — Memory, made wearable"
            fill
            className={`object-cover transition-transform duration-[12000ms] ease-out ${heroLoaded ? "scale-[1.06]" : "scale-100"}`}
            priority
            onLoad={() => setHeroLoaded(true)}
          />
        </div>

        {/* Layer 2: Gradient overlays */}
        <div className="absolute inset-0 z-[2]">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/50 via-brand-black/10 to-brand-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/40 via-transparent to-brand-black/30" />
        </div>

        {/* Layer 3: Gold particles */}
        <GoldParticles />

        {/* Layer 4: Centre logo mark — mid parallax */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
          style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
        >
          <div className="opacity-0 animate-[fadeIn_1.2s_ease_0.4s_forwards]">
            <img
              src="/Logo.png"
              alt="Grace Leon"
              className="h-[80px] md:h-[120px] opacity-20"
              style={{ filter: "invert(1) brightness(2) opacity(0.2)" }}
            />
          </div>
        </div>

        {/* Layer 5: Hero text — fastest parallax (comes toward you) */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-16 pb-16 md:pb-24"
          style={{ transform: `translate3d(0, ${scrollY * -0.1}px, 50px)` }}
        >
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="opacity-0 animate-[fadeIn_1s_ease_0.6s_forwards]">
              {/* Video section indicator */}
              <p className="text-gold/50 text-[9px] uppercase tracking-[0.6em] font-sans font-light mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-gold/30 inline-block" />
                Lagos, Nigeria
              </p>
              <h1 className="font-serif italic font-light text-cream text-[clamp(38px,7vw,84px)] leading-[1.02] max-w-[650px] mb-4">
                Memory, made<br/>wearable.
              </h1>
              <p className="text-cream/40 font-sans font-light text-[13px] max-w-[380px] leading-relaxed mb-10">
                Jewellery for the women the room already knows.
              </p>
            </div>
            <div className="flex gap-4 opacity-0 animate-[fadeIn_1s_ease_1s_forwards]">
              <Link href="/collections" className="group relative inline-block px-10 py-4 border border-gold/60 text-gold overflow-hidden">
                <span className="absolute inset-0 bg-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-[11px] uppercase tracking-[0.35em] font-sans font-light group-hover:text-brand-black transition-colors duration-300">Explore Collection</span>
              </Link>
              <Link href="/our-story" className="group relative inline-block px-10 py-4 border border-cream/20 text-cream/80 overflow-hidden">
                <span className="absolute inset-0 bg-cream/10 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-[11px] uppercase tracking-[0.35em] font-sans font-light group-hover:text-cream transition-colors duration-300">Our Story</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-[fadeIn_1s_ease_1.5s_forwards]">
          <div className="w-[1px] h-10 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ═══════════════  1b · VIDEO SECTION  ═══════════════ */}
      <section className="w-full bg-brand-black relative overflow-hidden">
        <div className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/campaign/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-brand-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/30 via-transparent to-brand-black/30" />

          {/* Text overlay */}
          <div className="relative z-10 text-center px-6">
            <Reveal>
              <p className="text-gold/50 text-[9px] uppercase tracking-[0.6em] font-sans font-light mb-8">Campaign Film</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-cream font-light leading-tight mb-6">
                What the mark holds.
              </h2>
              <p className="text-cream/40 font-sans font-light text-sm max-w-[400px] mx-auto">
                A story of craft, sovereignty, and the quiet power of intention.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════  2 · COLLECTIONS STRIP  ═══════════════ */}
      <section className="w-full bg-brand-black">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { title: "Leon Rings",            sub: "The Ring that Seals It",       img: "/campaign/leon-rings.png", href: "/collections/leon-rings",         dark: true  },
            { title: "Grace Leon Jewelries",   sub: "Jewellery for the Whole of You", img: "/campaign/glj.png",        href: "/collections/grace-leon-jewelries", dark: false },
            { title: "Grace Leon Sterling",    sub: "Crafted to Last",              img: "/campaign/gls.png",        href: "/collections/grace-leon-sterling",  dark: true  },
          ].map((c, i) => (
            <Link key={c.title} href={c.href} className="group relative h-[70vh] md:h-[80vh] overflow-hidden cursor-pointer block">
              <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-[800ms] ease-out" />
              <div className={`absolute inset-0 ${c.dark ? "bg-brand-black/50 group-hover:bg-brand-black/35" : "bg-cream/30 group-hover:bg-cream/15"} transition-colors duration-500`} />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-16 md:pb-20 text-center">
                <Reveal delay={0.1 * i}>
                  <p className="text-[10px] uppercase tracking-[0.45em] font-sans font-light text-gold mb-4">{c.sub}</p>
                  <h2 className={`text-3xl md:text-4xl font-serif font-light mb-6 ${c.dark ? "text-cream" : "text-brand-black"}`}>{c.title}</h2>
                  <span className={`text-[10px] uppercase tracking-[0.3em] font-sans ${c.dark ? "text-cream/60" : "text-brand-black/60"} flex items-center gap-2`}>
                    View Collection
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="0.8"/></svg>
                  </span>
                </Reveal>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════  3 · FEATURED PIECES  ═══════════════ */}
      <section className="w-full bg-brand-white py-28 md:py-36">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <Reveal className="text-center mb-20">
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-5">New Arrivals — Leon Rings</p>
            <h2 className="text-4xl md:text-[56px] font-serif text-brand-black font-light leading-tight">Selected Works</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px]">
            {featured.map((p, i) => (
              <Reveal key={p.name} delay={0.08 * i}>
                <Link href={`/product/${p.slug}`} className="group block">
                  <div className="relative aspect-[3/4] bg-[#f8f6f2] overflow-hidden mb-4">
                    <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-[1.05] transition-transform duration-500" />
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[9px] uppercase tracking-[0.3em] bg-brand-black text-cream px-5 py-2 font-sans font-light">Quick View</span>
                    </div>
                  </div>
                  <p className="text-[9px] text-gold uppercase tracking-[0.3em] font-sans font-light mb-1">{p.category}</p>
                  <h3 className="font-serif text-brand-black text-lg font-normal leading-tight mb-1">{p.name}</h3>
                  <p className="text-gold font-sans text-sm font-light">{p.price}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════  4 · THE MARK — Editorial Mosaic  ═══════════════ */}
      <section className="w-full bg-brand-black py-28 md:py-40">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <Reveal>
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-10">The Mark</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-cream font-light leading-snug mb-8">
              Nine truths hidden<br/>in one mark.
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-cream/35 font-sans font-light text-sm max-w-[500px] mx-auto mb-20 leading-relaxed">
              Each expression of the Grace Leon mark carries a different truth. Together, they are everything the brand stands for.
            </p>
          </Reveal>

          {/* Staggered editorial mosaic — row 1: 2 large + 1 tall */}
          <div className="grid grid-cols-6 md:grid-cols-12 gap-[3px] mb-[3px]">
            {/* Row 1 — Large feature + 2 stacked */}
            <div className="col-span-6 md:col-span-5 row-span-2 relative group overflow-hidden cursor-pointer aspect-[4/5]">
              <Image src={markExpressions[0].src} alt={markExpressions[0].label} fill className="object-cover group-hover:scale-[1.05] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <p className="text-[9px] uppercase tracking-[0.4em] font-sans font-light text-gold/70 mb-2">01</p>
                <h3 className="text-2xl md:text-3xl font-serif italic text-cream font-light mb-2">{markExpressions[0].label}</h3>
                <p className="text-cream/40 font-sans font-light text-[12px]">{markExpressions[0].desc}</p>
              </div>
            </div>

            <div className="col-span-3 md:col-span-4 relative group overflow-hidden cursor-pointer aspect-[4/3]">
              <Image src={markExpressions[1].src} alt={markExpressions[1].label} fill className="object-cover group-hover:scale-[1.05] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-left">
                <p className="text-[8px] uppercase tracking-[0.4em] font-sans font-light text-gold/70 mb-1">02</p>
                <h3 className="text-lg font-serif italic text-cream font-light">{markExpressions[1].label}</h3>
              </div>
            </div>

            <div className="col-span-3 md:col-span-3 relative group overflow-hidden cursor-pointer aspect-[3/4]">
              <Image src={markExpressions[2].src} alt={markExpressions[2].label} fill className="object-cover group-hover:scale-[1.05] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-left">
                <p className="text-[8px] uppercase tracking-[0.4em] font-sans font-light text-gold/70 mb-1">03</p>
                <h3 className="text-lg font-serif italic text-cream font-light">{markExpressions[2].label}</h3>
              </div>
            </div>

            {/* Second stacked pair */}
            <div className="col-span-3 md:col-span-4 relative group overflow-hidden cursor-pointer aspect-[4/3]">
              <Image src={markExpressions[3].src} alt={markExpressions[3].label} fill className="object-cover group-hover:scale-[1.05] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-left">
                <p className="text-[8px] uppercase tracking-[0.4em] font-sans font-light text-gold/70 mb-1">04</p>
                <h3 className="text-lg font-serif italic text-cream font-light">{markExpressions[3].label}</h3>
              </div>
            </div>

            <div className="col-span-3 md:col-span-3 relative group overflow-hidden cursor-pointer aspect-[3/4]">
              <Image src={markExpressions[4].src} alt={markExpressions[4].label} fill className="object-cover group-hover:scale-[1.05] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-left">
                <p className="text-[8px] uppercase tracking-[0.4em] font-sans font-light text-gold/70 mb-1">05</p>
                <h3 className="text-lg font-serif italic text-cream font-light">{markExpressions[4].label}</h3>
              </div>
            </div>
          </div>

          {/* Row 2 — 3 equal */}
          <div className="grid grid-cols-3 gap-[3px] mb-[3px]">
            {markExpressions.slice(5, 8).map((item, i) => (
              <div key={item.label} className="relative group overflow-hidden cursor-pointer aspect-square">
                <Image src={item.src} alt={item.label} fill className="object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <p className="text-[8px] uppercase tracking-[0.4em] font-sans font-light text-gold/70 mb-1">0{i + 6}</p>
                  <h3 className="text-lg md:text-xl font-serif italic text-cream font-light mb-1">{item.label}</h3>
                  <p className="text-cream/30 font-sans font-light text-[11px] hidden md:block">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 — Final wide piece */}
          <div className="relative group overflow-hidden cursor-pointer aspect-[21/9] mb-16">
            <Image src={markExpressions[8].src} alt={markExpressions[8].label} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            <div className="absolute inset-0 bg-brand-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] font-sans font-light text-gold/70 mb-3">09</p>
                <h3 className="text-3xl md:text-5xl font-serif italic text-cream font-light mb-3">{markExpressions[8].label}</h3>
                <p className="text-cream/40 font-sans font-light text-sm">{markExpressions[8].desc}</p>
              </div>
            </div>
          </div>

          <Reveal>
            <Link href="/the-mark" className="group inline-flex items-center gap-3">
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-cream/70 border-b border-cream/20 pb-1 group-hover:border-gold group-hover:text-gold transition-colors duration-300">Discover the Full Story</span>
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="text-cream/70 group-hover:text-gold transition-colors"><path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="0.8"/></svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════  5 · BRAND STATEMENT  ═══════════════ */}
      <section className="w-full bg-brand-black py-32 md:py-44 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        
        <div className="max-w-[1000px] mx-auto px-8 text-center relative z-10">
          <Reveal>
            <blockquote className="text-[clamp(28px,4.5vw,60px)] font-serif italic text-cream font-light leading-[1.3] mb-16">
              For women who carry themselves like the room already knows them.
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gold/70 text-[10px] uppercase tracking-[0.5em] font-sans font-light">
              Lagos &middot; Nigeria &middot; Est. 2024
            </p>
          </Reveal>
        </div>

        <Reveal className="absolute bottom-20 left-[15%] right-[15%]">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </Reveal>
      </section>

      {/* ═══════════════  6 · OUR STORY  ═══════════════ */}
      <section className="w-full flex flex-col md:flex-row min-h-[80vh]">
        <div className="w-full md:w-1/2 relative h-[60vh] md:h-auto overflow-hidden">
          <Image src="/campaign/brand-story.png" alt="The Grace Leon Story" fill className="object-cover" />
          <div className="absolute inset-0 bg-brand-black/10" />
        </div>
        <div className="w-full md:w-1/2 bg-brand-black flex items-center justify-center px-8 md:px-20 py-20 md:py-0">
          <Reveal className="max-w-[420px]">
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-10">Grace Leon</p>
            <h2 className="text-4xl md:text-5xl font-serif text-cream font-light leading-tight mb-10">
              The brand that was always there.
            </h2>
            <div className="text-cream/60 font-sans font-light text-[15px] leading-[1.8] space-y-6 mb-14">
              <p>Grace Leon was born in Lagos, Nigeria — designed for a global stage. It is a response to the quiet confidence of women who command a room without raising their voice.</p>
              <p>Every piece is a meditation on memory, sovereignty, and craft. Not just what you wear, but what you leave behind.</p>
            </div>
            <Link href="/our-story" className="group inline-flex items-center gap-3">
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 group-hover:border-cream group-hover:text-cream transition-colors duration-300">Read Our Story</span>
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="text-gold group-hover:text-cream transition-colors"><path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="0.8"/></svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════  7 · INSTAGRAM FEED  ═══════════════ */}
      <section className="w-full bg-brand-black py-20">
        <Reveal className="text-center mb-12">
          <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light">@GraceLeon</p>
        </Reveal>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-[2px]">
          {[
            "/products/WhatsApp Image 2026-06-24 at 13.59.25 (1).jpeg",
            "/products/WhatsApp Image 2026-06-24 at 13.59.25 (2).jpeg",
            "/products/WhatsApp Image 2026-06-24 at 13.59.25 (3).jpeg",
            "/products/WhatsApp Image 2026-06-24 at 13.59.25 (4).jpeg",
            "/products/WhatsApp Image 2026-06-24 at 13.59.25 (5).jpeg",
            "/products/WhatsApp Image 2026-06-24 at 13.59.25 (6).jpeg",
          ].map((src, i) => (
            <a key={i} href="https://instagram.com/graceleon" target="_blank" rel="noopener noreferrer" className="group relative aspect-square overflow-hidden">
              <Image src={src} alt={`Instagram ${i + 1}`} fill className="object-cover group-hover:scale-[1.05] transition-transform duration-500" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/30 flex items-center justify-center transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ═══════════════  8 · EMAIL CAPTURE  ═══════════════ */}
      <section className="w-full bg-brand-black py-32 md:py-40 px-6 border-t border-brand-white/5">
        <div className="max-w-[560px] mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif italic text-cream font-light mb-6">Be first to know.</h2>
            <p className="text-cream/40 font-sans font-light text-sm leading-relaxed mb-14">
              New collections, private events, and pieces made for moments like yours.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <form className="flex items-center border-b border-cream/15 focus-within:border-gold transition-colors duration-300">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="flex-1 bg-transparent border-none outline-none text-[11px] uppercase tracking-[0.25em] font-sans font-light text-cream py-4 placeholder:text-cream/20"
              />
              <button type="submit" className="text-gold text-[11px] uppercase tracking-[0.3em] font-sans hover:text-cream transition-colors px-2 py-4">
                Join
              </button>
            </form>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
