"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

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
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s` }}>
      {children}
    </div>
  );
}

export default function StockistsPage() {
  return (
    <div className="flex flex-col w-full bg-brand-black">

      {/* Hero */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 text-center px-6">
          <Reveal>
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-8">Lagos, Nigeria</p>
            <h1 className="text-5xl md:text-7xl font-serif italic text-cream font-light leading-tight mb-6">
              Visit Us
            </h1>
            <p className="text-cream/35 font-sans font-light text-[13px] max-w-[460px] mx-auto leading-relaxed">
              Experience Grace Leon in person. Our showroom is a space designed for the unhurried. Come, sit, try on, and discover what speaks to you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Flagship */}
      <section className="w-full flex flex-col md:flex-row min-h-[70vh]">
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto overflow-hidden">
          <Image src="/campaign/mark/06-lagos.png" alt="Lagos Showroom" fill className="object-cover" />
          <div className="absolute inset-0 bg-brand-black/10" />
        </div>
        <div className="w-full md:w-1/2 bg-brand-black flex items-center justify-center px-8 md:px-20 py-20 md:py-0">
          <Reveal className="max-w-[420px]">
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-8">Flagship Showroom</p>
            <h2 className="text-3xl md:text-4xl font-serif text-cream font-light leading-tight mb-8">
              Grace Leon, Victoria Island
            </h2>
            <div className="text-cream/60 font-sans font-light text-[15px] leading-[1.8] space-y-6 mb-12">
              <p>
                Our Lagos showroom is where the full Grace Leon experience begins. Every collection, every piece, every possibility.
              </p>
              <div className="border-t border-brand-white/10 pt-6 space-y-3">
                <p className="text-cream/80">Victoria Island, Lagos, Nigeria</p>
                <p>Monday to Friday: 10am to 6pm</p>
                <p>Saturday: 11am to 4pm</p>
                <p>Sunday: By appointment only</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block px-10 py-4 border border-gold/60 text-gold overflow-hidden text-center"
              >
                <span className="absolute inset-0 bg-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-[11px] uppercase tracking-[0.35em] font-sans font-light group-hover:text-brand-black transition-colors duration-300">Book an Appointment</span>
              </a>
              <Link
                href="/contact"
                className="group relative inline-block px-10 py-4 border border-cream/20 text-cream/70 overflow-hidden text-center"
              >
                <span className="absolute inset-0 bg-cream/10 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-[11px] uppercase tracking-[0.35em] font-sans font-light group-hover:text-cream transition-colors duration-300">Contact Us</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Experience */}
      <section className="w-full py-28 md:py-40 px-6 border-t border-brand-white/5">
        <div className="max-w-[800px] mx-auto text-center">
          <Reveal>
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-10">The Showroom Experience</p>
            <h2 className="text-3xl md:text-5xl font-serif italic text-cream font-light leading-tight mb-12">
              Try before you decide. Take your time. There is no rush.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16 text-left">
            {[
              { num: "01", title: "Private Viewing", text: "A dedicated consultation in our showroom. See pieces in natural light, feel the weight, understand the craft." },
              { num: "02", title: "Ring Sizing", text: "Complimentary ring sizing with our precision tools. We ensure the perfect fit before any piece leaves our hands." },
              { num: "03", title: "Bespoke Discussion", text: "Share your vision for a custom piece. Our designers will walk you through materials, timelines, and possibilities." },
            ].map((item, i) => (
              <Reveal key={item.num} delay={0.1 * i}>
                <p className="text-[48px] font-serif text-white/5 font-light leading-none mb-4">{item.num}</p>
                <h3 className="text-xl font-serif text-cream font-light mb-4">{item.title}</h3>
                <p className="text-cream/40 font-sans font-light text-[14px] leading-[1.8]">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Online */}
      <section className="w-full py-20 px-6 border-t border-brand-white/5">
        <div className="max-w-[600px] mx-auto text-center">
          <Reveal>
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-8">International</p>
            <h2 className="text-3xl md:text-4xl font-serif italic text-cream font-light leading-tight mb-6">
              Wherever you are.
            </h2>
            <p className="text-cream/40 font-sans font-light text-[15px] leading-[1.8] mb-10">
              Grace Leon ships internationally. Complimentary delivery within Lagos. For orders outside Nigeria, reach out via WhatsApp and we will arrange shipping to your door.
            </p>
            <Link href="/collections" className="group inline-flex items-center gap-3">
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 group-hover:border-cream group-hover:text-cream transition-colors duration-300">Explore Collections Online</span>
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="text-gold group-hover:text-cream transition-colors"><path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="0.8"/></svg>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
