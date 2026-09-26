"use client";

import { CompleteShelfLandingPage } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function Scene() {
  return (
    <div className="shader-frame w-full h-[100dvh]">
      <CompleteShelfLandingPage
        headingFont="iowan-old-style"
        bodyFont="inter"
        headingWeight="400"
        bodyWeight="400"
        primaryColor="#c87046"
        headingSize={60}
        bodySize={12}
        headingLetterSpacing={-0.055}
      />
    </div>
  );
}

export default function ServicesCompleteShelfPage() {
  return (
    <div className="relative w-full h-[100dvh] min-h-screen bg-[#10131b]">
      {/* Return button overlay */}
      <div className="absolute top-5 left-5 z-50">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 text-xs font-mono tracking-wider uppercase transition-colors backdrop-blur-md border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Services</span>
        </Link>
      </div>

      <Scene />
    </div>
  );
}
