"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, use } from "react";
import { products, getProductBySlug } from "@/data/products";

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
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  );
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [currency, setCurrency] = useState<"ngn" | "gbp" | "usd">("ngn");
  const [detailsOpen, setDetailsOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-brand-black mb-4">Piece Not Found</h1>
          <p className="text-brand-black/50 font-sans font-light mb-8">The piece you are looking for is not available.</p>
          <Link href="/collections" className="text-gold text-[11px] uppercase tracking-[0.3em] font-sans border-b border-gold/40 pb-1">Return to Collections</Link>
        </div>
      </div>
    );
  }

  /* Related: same brand, different slug */
  const related = products.filter((p) => p.brand === product.brand && p.slug !== product.slug).slice(0, 4);

  return (
    <div className="flex flex-col w-full bg-brand-white pt-24">

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-4">
        <nav className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-sans font-light text-brand-black/40">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-gold transition-colors">Collections</Link>
          <span>/</span>
          <span className="text-brand-black/70">{product.name}</span>
        </nav>
      </div>

      {/* Product Layout */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

        {/* Left: Images */}
        <div className="flex flex-col gap-3">
          {/* Main image */}
          <div className="relative aspect-square bg-[#f8f6f2] overflow-hidden">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative w-20 h-20 overflow-hidden border-2 transition-colors cursor-pointer ${
                    selectedImage === i ? "border-gold" : "border-transparent hover:border-gold/30"
                  }`}
                >
                  <Image src={img} alt={`${product.name} view ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-center">
          <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-4">
            {product.brand === "GRACE LEON JEWELRIES" ? "GLJ" : product.brand === "GRACE LEON STERLING" ? "GLS" : product.brand}
          </p>
          <h1 className="text-3xl md:text-4xl font-serif text-brand-black font-light leading-tight mb-3">{product.name}</h1>
          <p className="text-brand-black/50 font-serif italic text-[15px] mb-8">&ldquo;{product.tagline}&rdquo;</p>

          {/* Price + Currency */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gold text-2xl font-sans font-light">{product.price[currency]}</p>
            <div className="flex items-center gap-1 text-[9px] uppercase tracking-[0.15em] font-sans font-light text-brand-black/30">
              {(["ngn", "gbp", "usd"] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-2 py-1 rounded-sm transition-colors cursor-pointer ${
                    currency === c ? "bg-brand-black text-brand-white" : "hover:text-brand-black/60"
                  }`}
                >
                  {c.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Material tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="text-[9px] uppercase tracking-[0.25em] font-sans font-light text-brand-black/50 border border-brand-black/10 px-3 py-1.5">{product.details.material}</span>
            {product.details.stone && (
              <span className="text-[9px] uppercase tracking-[0.25em] font-sans font-light text-brand-black/50 border border-brand-black/10 px-3 py-1.5">{product.details.stone}</span>
            )}
            <span className="text-[9px] uppercase tracking-[0.25em] font-sans font-light text-brand-black/50 border border-brand-black/10 px-3 py-1.5">{product.details.finish}</span>
          </div>

          {/* Size selector (for rings) */}
          {(product.category === "Engagement" || product.category === "Wedding") && (
            <div className="mb-3">
              <select className="w-full border border-brand-black/15 py-3.5 px-4 text-[10px] uppercase tracking-[0.3em] font-sans font-light text-brand-black/60 bg-transparent appearance-none cursor-pointer">
                <option>Select Ring Size</option>
                {[5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9].map((s) => (
                  <option key={s} value={s}>Size {s}</option>
                ))}
              </select>
              <p className="text-[9px] uppercase tracking-[0.3em] font-sans font-light text-gold mt-2 cursor-pointer hover:text-brand-black transition-colors">Ring Size Guide</p>
            </div>
          )}

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 mt-4 mb-8">
            <button className="w-full py-4 bg-gold text-brand-black text-[11px] uppercase tracking-[0.35em] font-sans font-light hover:bg-gold-light transition-colors cursor-pointer">
              Add to Cart
            </button>
            <a
              href={`https://wa.me/2348000000000?text=I'm interested in the ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 border border-brand-black/15 text-brand-black/70 text-[11px] uppercase tracking-[0.35em] font-sans font-light text-center hover:border-gold hover:text-gold transition-colors"
            >
              Enquire via WhatsApp
            </a>
          </div>

          <p className="text-[9px] uppercase tracking-[0.2em] font-sans font-light text-brand-black/30 text-center mb-10">
            Complimentary delivery within Lagos · International shipping available
          </p>

          {/* Details accordion */}
          <div className="border-t border-brand-black/10">
            <button
              onClick={() => setDetailsOpen(!detailsOpen)}
              className="w-full flex items-center justify-between py-5 cursor-pointer"
            >
              <span className="text-[10px] uppercase tracking-[0.35em] font-sans font-light text-brand-black">Details &amp; Materials</span>
              <span className="text-brand-black/50 text-lg">{detailsOpen ? "−" : "+"}</span>
            </button>
            {detailsOpen && (
              <div className="pb-6 text-brand-black/50 font-sans font-light text-[14px] leading-relaxed">
                <p className="mb-4">{product.description}</p>
                <ul className="space-y-2 text-[13px]">
                  <li><span className="text-brand-black/70">Material:</span> {product.details.material}</li>
                  {product.details.stone && <li><span className="text-brand-black/70">Stone:</span> {product.details.stone}</li>}
                  <li><span className="text-brand-black/70">Finish:</span> {product.details.finish}</li>
                  <li><span className="text-brand-black/70">Origin:</span> Lagos, Nigeria</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related pieces */}
      {related.length > 0 && (
        <section className="w-full bg-brand-white py-20 border-t border-brand-black/5">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <Reveal className="text-center mb-14">
              <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-4">You May Also Appreciate</p>
              <h2 className="text-3xl font-serif text-brand-black font-light">From {product.brand === "GRACE LEON JEWELRIES" ? "GLJ" : product.brand === "GRACE LEON STERLING" ? "GLS" : product.brand}</h2>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px]">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={0.05 * i}>
                  <Link href={`/product/${p.slug}`} className="group block">
                    <div className="relative aspect-[3/4] bg-[#f8f6f2] overflow-hidden mb-3">
                      <Image src={p.images[0]} alt={p.name} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                    </div>
                    <p className="text-[8px] text-gold uppercase tracking-[0.3em] font-sans font-light mb-0.5">{p.category}</p>
                    <h3 className="font-serif text-brand-black text-base font-normal leading-tight mb-0.5">{p.name}</h3>
                    <p className="text-gold font-sans text-sm font-light">{p.price.ngn}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
