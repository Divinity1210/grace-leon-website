"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products, brands, categories } from "@/data/products";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  );
}

export default function CollectionsPage() {
  const searchParams = useSearchParams();
  const brandParam = searchParams.get("brand");
  const [activeBrand, setActiveBrand] = useState("ALL");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [currency, setCurrency] = useState<"ngn" | "gbp" | "usd">("ngn");

  useEffect(() => {
    if (brandParam && brands.includes(brandParam as typeof brands[number])) {
      setActiveBrand(brandParam);
    }
  }, [brandParam]);

  const filtered = products.filter((p) => {
    const brandMatch = activeBrand === "ALL" || p.brand === activeBrand;
    const catMatch = activeCategory === "ALL" || p.category.toLowerCase() === activeCategory.toLowerCase();
    return brandMatch && catMatch;
  });

  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="relative w-full h-[50vh] md:h-[60vh] bg-brand-black overflow-hidden">
        <Image src="/campaign/hero.png" alt="Collections" fill className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-brand-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <Reveal>
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-6">Grace Leon</p>
            <h1 className="text-5xl md:text-7xl font-serif text-cream font-light">Collections</h1>
          </Reveal>
        </div>
      </section>

      {/* Filter bar. sticky */}
      <div className="sticky top-[96px] z-30 bg-white border-b border-gold/15">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Brand tabs */}
          <div className="flex items-center gap-6 overflow-x-auto">
            {brands.map((f) => (
              <button
                key={f}
                onClick={() => setActiveBrand(f)}
                className={`text-[9px] uppercase tracking-[0.35em] font-sans font-light whitespace-nowrap pb-1 border-b-[1.5px] transition-all duration-300 cursor-pointer ${
                  activeBrand === f ? "text-brand-black border-gold" : "text-brand-black/40 border-transparent hover:text-brand-black/70"
                }`}
              >
                {f === "GRACE LEON JEWELRIES" ? "GLJ" : f === "GRACE LEON STERLING" ? "GLS" : f}
              </button>
            ))}
          </div>

          {/* Category + currency */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 overflow-x-auto">
              {categories.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveCategory(f)}
                  className={`text-[9px] uppercase tracking-[0.3em] font-sans font-light whitespace-nowrap transition-colors duration-300 cursor-pointer ${
                    activeCategory === f ? "text-gold" : "text-brand-black/30 hover:text-brand-black/60"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1 text-[8px] uppercase tracking-[0.15em] font-sans font-light text-brand-black/30 border-l border-brand-black/10 pl-6">
              {(["ngn", "gbp", "usd"] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-1.5 py-0.5 transition-colors cursor-pointer ${currency === c ? "text-brand-black bg-cream-deep rounded-sm" : "hover:text-brand-black/60"}`}
                >
                  {c.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <p className="text-brand-black/30 font-sans font-light text-[11px] mb-8">{filtered.length} piece{filtered.length !== 1 ? "s" : ""}</p>
          {filtered.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-brand-black/30 font-sans font-light text-sm">No pieces match this selection.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[3px]">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={0.05 * i}>
                  <Link href={`/product/${p.slug}`} className="group block">
                    <div className="relative aspect-[3/4] bg-[#f8f6f2] overflow-hidden mb-4">
                      <Image src={p.images[0]} alt={p.name} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[9px] uppercase tracking-[0.3em] bg-brand-black text-cream px-5 py-2.5 font-sans font-light">Quick View</span>
                      </div>
                    </div>
                    <p className="text-[8px] text-gold uppercase tracking-[0.3em] font-sans font-light mb-1">
                      {p.brand === "GRACE LEON JEWELRIES" ? "GLJ" : p.brand === "GRACE LEON STERLING" ? "GLS" : p.brand}
                      {" · "}
                      {p.category}
                    </p>
                    <h3 className="font-serif text-brand-black text-lg font-normal leading-tight mb-1">{p.name}</h3>
                    <p className="text-gold font-sans text-sm font-light">{p.price[currency]}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
