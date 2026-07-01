import Link from "next/link";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white pt-24 pb-12 px-6 md:px-10 border-t border-brand-white/10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <img src="/Logo.png" alt="Grace Leon" className="h-16 invert brightness-200 mix-blend-screen mb-6" />
            <div className="flex space-x-4 mt-auto">
              <a href="#" className="hover:text-gold transition-colors">
                <InstagramIcon />
              </a>
              {/* Other social icons can go here */}
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-sans uppercase tracking-[0.35em] text-gold mb-2">Collections</h3>
            <Link href="/collections/leon-rings" className="text-sm font-sans font-light text-text-light hover:text-brand-white transition-colors">Leon Rings</Link>
            <Link href="/collections/grace-leon-jewelries" className="text-sm font-sans font-light text-text-light hover:text-brand-white transition-colors">Grace Leon Jewelries</Link>
            <Link href="/collections/grace-leon-sterling" className="text-sm font-sans font-light text-text-light hover:text-brand-white transition-colors">Grace Leon Sterling</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-sans uppercase tracking-[0.35em] text-gold mb-2">Company</h3>
            <Link href="/our-story" className="text-sm font-sans font-light text-text-light hover:text-brand-white transition-colors">Our Story</Link>
            <Link href="/the-mark" className="text-sm font-sans font-light text-text-light hover:text-brand-white transition-colors">The Mark</Link>
            <Link href="/stockists" className="text-sm font-sans font-light text-text-light hover:text-brand-white transition-colors">Stockists</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-sans uppercase tracking-[0.35em] text-gold mb-2">Contact</h3>
            <Link href="/bespoke" className="text-sm font-sans font-light text-text-light hover:text-brand-white transition-colors">Bespoke Enquiry</Link>
            <Link href="/contact" className="text-sm font-sans font-light text-text-light hover:text-brand-white transition-colors">Customer Care</Link>
          </div>
        </div>
        
        {/* Sub-brands & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-brand-white/10 text-xs font-sans font-light text-text-light tracking-[0.2em] uppercase">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <span>LEON RINGS</span>
            <span className="text-brand-white/30">•</span>
            <span>GLJ</span>
            <span className="text-brand-white/30">•</span>
            <span>GLS</span>
          </div>
          <div className="text-center md:text-right text-[10px]">
            &copy; {new Date().getFullYear()} GRACE LEON. MADE IN NIGERIA. FOR THE WORLD.
          </div>
        </div>
      </div>
    </footer>
  );
}
