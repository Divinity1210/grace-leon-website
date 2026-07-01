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
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  );
}

const steps = [
  { num: "01", title: "Consultation", desc: "Share your vision with us — in person at our Lagos showroom, or via WhatsApp. We listen to the story behind the piece before we lift a tool." },
  { num: "02", title: "Design", desc: "Our master jewellers translate your vision into detailed CAD renders and material options. You approve every detail before we begin." },
  { num: "03", title: "Craft", desc: "Each bespoke piece is handcrafted over 4–8 weeks using ethically sourced materials. You receive progress updates at every stage." },
  { num: "04", title: "Delivery", desc: "Your finished piece arrives in signature Grace Leon packaging. Complimentary delivery within Lagos. International shipping available." },
];

export default function BespokePage() {
  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="relative w-full h-[70vh] md:h-[80vh] bg-brand-black overflow-hidden">
        <Image src="/campaign/mark/08-craft.png" alt="Bespoke" fill className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/40" />
        <div className="absolute inset-0 flex items-end z-10 px-6 md:px-16 pb-16 md:pb-24">
          <Reveal>
            <p className="text-gold/50 text-[9px] uppercase tracking-[0.6em] font-sans font-light mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gold/30 inline-block" />
              Custom Creations
            </p>
            <h1 className="text-5xl md:text-7xl font-serif italic text-cream font-light leading-[1.05] max-w-[600px]">
              Made for you. Only you.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="w-full bg-brand-black py-28 md:py-36">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <Reveal>
            <p className="text-cream/50 font-sans font-light text-[15px] leading-[2]">
              Some pieces cannot be found — they must be created. Grace Leon&apos;s bespoke service transforms your vision into a one-of-a-kind piece, crafted by master jewellers using the same techniques and materials as our signature collections.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process steps */}
      <section className="w-full bg-brand-black pb-28 md:pb-40">
        <div className="max-w-[1000px] mx-auto px-6">
          <Reveal className="text-center mb-20">
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-6">The Process</p>
            <h2 className="text-4xl md:text-5xl font-serif text-cream font-light">Four Steps to Yours</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={0.1 * i}>
                <div className="border-t border-gold/15 pt-8">
                  <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-sans font-light mb-4">{step.num}</p>
                  <h3 className="text-2xl font-serif text-cream font-light mb-4">{step.title}</h3>
                  <p className="text-cream/40 font-sans font-light text-[14px] leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full flex flex-col md:flex-row min-h-[60vh]">
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto overflow-hidden">
          <Image src="/campaign/mark/04-the-name.png" alt="Begin your piece" fill className="object-cover" />
        </div>
        <div className="w-full md:w-1/2 bg-brand-black flex items-center justify-center px-8 md:px-20 py-20 md:py-0">
          <Reveal className="max-w-[420px]">
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-8">Begin Your Piece</p>
            <h2 className="text-3xl md:text-4xl font-serif text-cream font-light leading-tight mb-8">
              The conversation starts with you.
            </h2>
            <p className="text-cream/40 font-sans font-light text-[14px] leading-relaxed mb-12">
              Whether you have a sketch, a story, or simply a feeling — we are ready to listen. Reach out to begin.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/2348000000000?text=I%20would%20like%20to%20discuss%20a%20bespoke%20piece"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block px-10 py-4 border border-gold/60 text-gold overflow-hidden text-center"
              >
                <span className="absolute inset-0 bg-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-[11px] uppercase tracking-[0.35em] font-sans font-light group-hover:text-brand-black transition-colors duration-300">Enquire via WhatsApp</span>
              </a>
              <Link href="/contact" className="group relative inline-block px-10 py-4 border border-cream/20 text-cream/70 overflow-hidden text-center">
                <span className="absolute inset-0 bg-cream/10 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-[11px] uppercase tracking-[0.35em] font-sans font-light group-hover:text-cream transition-colors duration-300">Contact Us</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
