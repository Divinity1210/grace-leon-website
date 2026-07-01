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

const expressions = [
  {
    num: "01", title: "Grace", tag: "The Quiet Power of Presence",
    text: "Grace is not softness. It is the discipline to remain composed when the world is loud. It is the woman who does not rush, who does not explain, who enters a room and simply belongs. This is the first truth the mark holds — that presence does not need volume.",
    img: "/campaign/mark/01-grace.png",
  },
  {
    num: "02", title: "Sovereignty", tag: "Nothing Here Apologises",
    text: "Sovereignty is the refusal to dilute. It is the unedited self, the woman who wears what she wears because it is hers, not because it was approved. The second arch of the mark opens upward — toward no ceiling, no permission required.",
    img: "/campaign/mark/02-sovereignty.png",
  },
  {
    num: "03", title: "Memory", tag: "What You Carry Forward",
    text: "Memory is the weight of a ring that belonged to someone before you. It is the reason jewellery endures beyond fashion. Every piece of Grace Leon is designed to be inherited — not just worn, but remembered.",
    img: "/campaign/mark/03-memory.png",
  },
  {
    num: "04", title: "The Name", tag: "Identity Etched in Gold",
    text: "A name is not just what you are called. It is what you answer to. Grace Leon exists because a name was chosen with the same care as a stone is set — deliberately, permanently, with the full knowledge of what it will carry.",
    img: "/campaign/mark/04-the-name.png",
  },
  {
    num: "05", title: "The Vow", tag: "A Promise Made Permanent",
    text: "The vow is the moment a ring becomes more than a ring. It is the closest thing to permanence two people can create. Leon Rings exist for this moment — not the ceremony, but the silence that follows it, when the meaning settles.",
    img: "/campaign/mark/05-the-vow.png",
  },
  {
    num: "06", title: "Lagos", tag: "Where It All Begins",
    text: "Lagos is not a backdrop. It is the engine. The city that never pauses, that builds at a pace the world is only now learning to respect. Grace Leon is a Lagos brand — not in spite of the chaos, but because of the clarity it demands.",
    img: "/campaign/mark/06-lagos.png",
  },
  {
    num: "07", title: "The Light", tag: "What Fire Looks Like at Rest",
    text: "Light does not shout. A diamond does not announce its brilliance — it simply refracts what it receives. The seventh truth of the mark is about inner fire: the kind that does not flicker, that does not need fuel, that is simply there.",
    img: "/campaign/mark/07-the-light.png",
  },
  {
    num: "08", title: "Craft", tag: "Patience as a Philosophy",
    text: "Craft is the opposite of haste. It is the goldsmith who files a surface for the fourth time because the third was not enough. At Grace Leon, craft is not a marketing word — it is the reason the work exists at all.",
    img: "/campaign/mark/08-craft.png",
  },
  {
    num: "09", title: "The Mark", tag: "The Seal of Everything",
    text: "The mark is the sum. Four arches, nine truths, one brand. It is pressed into velvet, engraved into gold, embossed into memory. When you see it, you know. That is the point.",
    img: "/campaign/mark/09-the-mark.png",
  },
];

export default function TheMarkPage() {
  return (
    <div className="flex flex-col w-full bg-brand-black">

      {/* Hero — Full screen with animated mark */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-black" />

        {/* Animated logo mark */}
        <div className="relative z-10 text-center">
          <Reveal>
            <div className="relative mx-auto mb-16 w-[120px] md:w-[150px]">
              {/* Glow backdrop */}
              <div className="absolute inset-0 blur-[40px] bg-gold/20 rounded-full scale-150 animate-pulse" />
              <img
                src="/Logo.png"
                alt="The Mark"
                className="relative w-full h-auto mix-blend-screen invert brightness-200"
                style={{ filter: "drop-shadow(0 0 20px rgba(191, 155, 80, 0.4)) drop-shadow(0 0 60px rgba(191, 155, 80, 0.15))" }}
              />
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-cream font-light leading-[1.05] mb-8">
              What The Mark Holds
            </h1>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="text-cream/30 font-sans font-light text-[13px] max-w-[460px] mx-auto leading-relaxed">
              Nine truths. One mark. A brand built on the belief that jewellery is not decoration — it is declaration.
            </p>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Expression Cards — alternating layout */}
      {expressions.map((expr, i) => (
        <section
          key={expr.num}
          className={`w-full flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} min-h-[80vh]`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 relative h-[60vh] md:h-auto overflow-hidden">
            <Image src={expr.img} alt={expr.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-brand-black/10" />
            {/* Number overlay */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12">
              <p className="text-[72px] md:text-[120px] font-serif text-white/5 font-light leading-none">{expr.num}</p>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 bg-brand-black flex items-center justify-center px-8 md:px-20 py-20 md:py-0">
            <Reveal className="max-w-[460px]">
              <p className="text-gold text-[9px] uppercase tracking-[0.5em] font-sans font-light mb-4">{expr.tag}</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-cream font-light leading-tight mb-8">
                {expr.title}
              </h2>
              <div className="w-12 h-[1px] bg-gold/30 mb-8" />
              <p className="text-cream/45 font-sans font-light text-[15px] leading-[1.9]">
                {expr.text}
              </p>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Closing — Composite */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/campaign/mark/09-the-mark.png" alt="Nine truths" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 text-center px-6">
          <Reveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-cream font-light leading-tight mb-8">
              Nine truths. One mark.<br/>One brand.
            </h2>
            <Link href="/collections" className="group inline-flex items-center gap-3">
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 group-hover:border-cream group-hover:text-cream transition-colors duration-300">Explore the Collection</span>
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="text-gold group-hover:text-cream transition-colors"><path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="0.8"/></svg>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
