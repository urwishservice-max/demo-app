"use client";

import { KageLandingPage } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame w-full h-[100dvh] min-h-screen">
      <KageLandingPage
        headingFont="onest"
        bodyFont="onest"
        headingWeight="400"
        bodyWeight="300"
        primaryColor="#e0231c"
        headingSize={46}
        bodySize={17}
        headingLetterSpacing={-0.012}
      />
    </div>
  );
}

export default function KagePage() {
  return (
    <div className="w-full h-[100dvh] min-h-screen bg-[#080808]">
      <Scene />
    </div>
  );
}
