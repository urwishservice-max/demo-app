"use client";

import { CompleteShelfLandingPage } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame w-full h-[100dvh] min-h-screen">
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

export default function CompleteShelfPage() {
  return (
    <div className="w-full h-[100dvh] min-h-screen bg-[#10131b]">
      <Scene />
    </div>
  );
}
