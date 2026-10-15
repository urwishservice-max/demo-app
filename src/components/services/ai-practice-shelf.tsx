"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Maximize2, Sparkles, BookOpen, Loader2 } from "lucide-react";

export function AIPracticeShelf() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          try {
            if (entry.isIntersecting) {
              iframeRef.current?.contentWindow?.postMessage({ type: "asheron:resume" }, "*");
            } else {
              iframeRef.current?.contentWindow?.postMessage({ type: "asheron:suspend" }, "*");
            }
          } catch (e) {
            // cross-origin safety
          }
        });
      },
      { rootMargin: "100px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#F8F7F5] border-b border-[#E2E0DD] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC400]/20 text-[#080808] text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#351779]" />
              <span>Interactive Practice Shelf</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#080808] tracking-tight">
              Core services
            </h2>
            <p className="mt-3 text-[#080808]/70 text-base md:text-lg max-w-2xl font-normal leading-relaxed">
              Explore Asheron&apos;s seven practice volumes for governed AI. Select any volume on the shelf to inspect its discipline, chapters, and operating standards.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/services/complete-shelf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#351779] hover:bg-[#2B1263] text-white text-xs font-medium tracking-wide transition-colors"
              title="Open full immersive 3D shelf view"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full Screen 3D</span>
            </Link>
          </div>
        </div>

        {/* 3D Shelf Stage Container */}
        <div
          ref={containerRef}
          style={{ contain: "paint", willChange: "transform" }}
          className="relative w-full h-[620px] sm:h-[720px] lg:h-[800px] rounded-2xl overflow-hidden border border-[#E2E0DD] shadow-xl bg-[#10131b]"
        >
          {/* Ambient Loading Placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#10131b] text-neutral-400">
              <Loader2 className="w-7 h-7 animate-spin text-[#FFC400] mb-3" />
              <span className="text-xs uppercase font-mono tracking-widest text-neutral-400">
                Loading 3D Shelf...
              </span>
            </div>
          )}

          <iframe
            ref={iframeRef}
            src="/landing-pages/complete-shelf-v2.html"
            title="Asheron — Seven Volumes for Governed AI"
            className="w-full h-full border-0 block"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            allow="accelerometer; autoplay; encrypted-media; gyroscope"
          />

          {/* Subtle Stage Hint Overlay */}
          <div className="absolute top-4 right-4 pointer-events-none z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 text-xs font-mono">
            <BookOpen className="w-3 h-3 text-[#FFC400]" />
            <span>Click book to open &amp; turn pages</span>
          </div>
        </div>
      </div>
    </section>
  );
}
