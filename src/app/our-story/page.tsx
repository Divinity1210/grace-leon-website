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
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  );
}

const timeline = [
  {
    year: "2024",
    title: "The Founding",
    text: "Grace Leon was conceived in Lagos, Nigeria — not as a brand to follow, but one that arrived fully formed. Born from a conviction that African luxury doesn't need permission. That a ring could carry the weight of a name, and a name could carry the weight of a legacy.",
    img: "/campaign/mark/06-lagos.png",
  },
  {
    year: "The Name",
    title: "Grace Leon",
    text: "\"Grace\" — because quiet power is the loudest kind. \"Leon\" — a lion that doesn't need to roar. The name was chosen not to describe the jewellery, but the women who wear it. Women who walk into rooms that already know them.",
    img: "/campaign/mark/04-the-name.png",
  },
  {
    year: "The Mark",
    title: "Four Arches. One Symbol.",
    text: "The interlocking arches of the Grace Leon mark hold nine truths: Grace, Sovereignty, Memory, The Name, The Vow, Lagos, The Light, Craft, and The Mark itself. Every arch opens in two directions — upward and downward — a reminder that strength looks the same from every angle.",
    img: "/campaign/mark/09-the-mark.png",
  },
  {
    year: "The Promise",
    title: "Not What You Wear. What You Leave Behind.",
    text: "Every piece crafted by Grace Leon is a meditation on what endures. The metal that outlasts the moment. The stone that holds a vow. The band that passes from one generation to the next. We don't make jewellery for occasions. We make it for lifetimes.",
    img: "/campaign/mark/03-memory.png",
  },
];

const values = [
  { title: "Craft", desc: "Patience as a philosophy. Every detail questioned, every surface earned.", icon: "◇" },
  { title: "Sovereignty", desc: "Nothing here apologises. Not the spacing, not the silence, not the price.", icon: "◈" },
  { title: "Memory", desc: "What endures after the moment. The thing that outlasts everything else.", icon: "◆" },
];

export default function OurStoryPage() {
  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="relative w-full h-[70vh] md:h-[80vh] bg-brand-black overflow-hidden">
        <Image src="/campaign/brand-story.png" alt="Our Story" fill className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/50" />
        <div className="absolute inset-0 flex items-end z-10 px-6 md:px-16 pb-16 md:pb-24">
          <Reveal>
            <p className="text-gold/50 text-[9px] uppercase tracking-[0.6em] font-sans font-light mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gold/30 inline-block" />
              Est. 2024
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-cream font-light leading-[1.02] max-w-[700px]">
              The brand that was always there.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Opening statement */}
      <section className="w-full bg-brand-black py-28 md:py-36">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <Reveal>
            <p className="text-cream/50 font-sans font-light text-[15px] leading-[2] mb-0">
              Grace Leon was born in Lagos, Nigeria — designed for a global stage. It is a response to the quiet confidence of women who command a room without raising their voice. Every piece is a meditation on memory, sovereignty, and craft. Not just what you wear, but what you leave behind.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      {timeline.map((item, i) => (
        <section key={item.title} className={`w-full flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} min-h-[70vh]`}>
          {/* Image */}
          <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto overflow-hidden">
            <Image src={item.img} alt={item.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-brand-black/10" />
          </div>
          {/* Text */}
          <div className="w-full md:w-1/2 bg-brand-black flex items-center justify-center px-8 md:px-20 py-20 md:py-0">
            <Reveal className="max-w-[440px]">
              <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-8">{item.year}</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-cream font-light leading-tight mb-8">
                {item.title}
              </h2>
              <p className="text-cream/50 font-sans font-light text-[15px] leading-[1.9]">
                {item.text}
              </p>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Brand Values */}
      <section className="w-full bg-brand-black py-28 md:py-40 border-t border-brand-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal className="text-center mb-20">
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-6">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-serif text-cream font-light">Three Pillars</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.1 * i} className="text-center">
                <p className="text-gold text-3xl mb-6">{v.icon}</p>
                <h3 className="text-2xl font-serif text-cream font-light mb-4">{v.title}</h3>
                <p className="text-cream/40 font-sans font-light text-[14px] leading-relaxed max-w-[320px] mx-auto">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full bg-brand-black py-28 md:py-36 text-center border-t border-brand-white/5">
        <Reveal>
          <blockquote className="text-[clamp(24px,4vw,48px)] font-serif italic text-cream font-light leading-[1.3] max-w-[800px] mx-auto px-6 mb-12">
            Made in Nigeria. For the world.
          </blockquote>
          <Link href="/collections" className="group inline-flex items-center gap-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 group-hover:border-cream group-hover:text-cream transition-colors duration-300">Explore the Collection</span>
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="text-gold group-hover:text-cream transition-colors"><path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="0.8"/></svg>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
