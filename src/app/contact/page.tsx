"use client";

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

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <div className="flex flex-col w-full bg-brand-black">

      {/* Hero */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 text-center px-6">
          <Reveal>
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-sans font-light mb-8">Grace Leon</p>
            <h1 className="text-5xl md:text-7xl font-serif italic text-cream font-light leading-tight mb-6">
              We are here.
            </h1>
            <p className="text-cream/35 font-sans font-light text-[13px] max-w-[460px] mx-auto leading-relaxed">
              Whether you have a question about a piece, need guidance on sizing, or simply want to say hello.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="w-full py-24 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* Left: Contact Details */}
          <Reveal>
            <div className="space-y-14">
              <div>
                <p className="text-gold text-[9px] uppercase tracking-[0.5em] font-sans font-light mb-4">Visit Us</p>
                <p className="text-cream/70 font-sans font-light text-[15px] leading-[1.8]">
                  Grace Leon Showroom<br />
                  Victoria Island, Lagos<br />
                  Nigeria
                </p>
              </div>

              <div>
                <p className="text-gold text-[9px] uppercase tracking-[0.5em] font-sans font-light mb-4">Enquiries</p>
                <p className="text-cream/70 font-sans font-light text-[15px] leading-[1.8]">
                  hello@graceleon.com
                </p>
              </div>

              <div>
                <p className="text-gold text-[9px] uppercase tracking-[0.5em] font-sans font-light mb-4">WhatsApp</p>
                <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="text-cream/70 font-sans font-light text-[15px] leading-[1.8] hover:text-gold transition-colors">
                  +234 800 000 0000
                </a>
              </div>

              <div>
                <p className="text-gold text-[9px] uppercase tracking-[0.5em] font-sans font-light mb-4">Hours</p>
                <p className="text-cream/70 font-sans font-light text-[15px] leading-[1.8]">
                  Monday to Friday: 10am to 6pm<br />
                  Saturday: 11am to 4pm<br />
                  Sunday: By appointment
                </p>
              </div>

              <div>
                <p className="text-gold text-[9px] uppercase tracking-[0.5em] font-sans font-light mb-4">Follow</p>
                <a href="https://instagram.com/graceleon" target="_blank" rel="noopener noreferrer" className="text-cream/70 font-sans font-light text-[15px] hover:text-gold transition-colors inline-flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                  @graceleon
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: Contact Form */}
          <Reveal delay={0.2}>
            <div>
              <p className="text-gold text-[9px] uppercase tracking-[0.5em] font-sans font-light mb-10">Send a Message</p>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/15 focus:border-gold outline-none text-[11px] uppercase tracking-[0.25em] font-sans font-light text-cream py-4 placeholder:text-cream/20 transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/15 focus:border-gold outline-none text-[11px] uppercase tracking-[0.25em] font-sans font-light text-cream py-4 placeholder:text-cream/20 transition-colors duration-300"
                  />
                </div>
                <div>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/15 focus:border-gold outline-none text-[11px] uppercase tracking-[0.25em] font-sans font-light text-cream py-4 transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-brand-black">SELECT SUBJECT</option>
                    <option value="general" className="bg-brand-black">General Enquiry</option>
                    <option value="order" className="bg-brand-black">Order Support</option>
                    <option value="bespoke" className="bg-brand-black">Bespoke Commission</option>
                    <option value="press" className="bg-brand-black">Press and Media</option>
                    <option value="wholesale" className="bg-brand-black">Wholesale and Partnerships</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="YOUR MESSAGE"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/15 focus:border-gold outline-none text-[11px] uppercase tracking-[0.25em] font-sans font-light text-cream py-4 placeholder:text-cream/20 transition-colors duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative inline-block px-14 py-5 border border-gold/60 text-gold overflow-hidden w-full md:w-auto"
                >
                  <span className="absolute inset-0 bg-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 text-[11px] uppercase tracking-[0.35em] font-sans font-light group-hover:text-brand-black transition-colors duration-300">Send Message</span>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing line */}
      <section className="w-full py-20 px-6 border-t border-brand-white/5">
        <div className="max-w-[600px] mx-auto text-center">
          <Reveal>
            <p className="text-cream/30 font-serif italic text-lg leading-relaxed">
              Every conversation begins somewhere. This is where ours starts.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
