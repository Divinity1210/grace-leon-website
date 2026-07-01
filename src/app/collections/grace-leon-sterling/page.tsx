"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GraceLeonSterlingCollection() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/collections?brand=GRACE+LEON+STERLING");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-brand-black">
      <div className="text-center">
        <div className="w-6 h-6 border border-gold/40 border-t-gold rounded-full animate-spin mx-auto mb-6" />
        <p className="text-cream/40 text-[10px] uppercase tracking-[0.4em] font-sans font-light">Loading Grace Leon Sterling</p>
      </div>
    </div>
  );
}
