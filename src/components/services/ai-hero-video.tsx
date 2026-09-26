"use client";

import { useEffect, useRef } from "react";

interface AIHeroVideoProps {
  src?: string;
  className?: string;
}

export function AIHeroVideo({
  src = "/control1.mp4",
  className = "w-full h-full object-cover scale-x-[1.025] pointer-events-none select-none",
}: AIHeroVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    if (!("IntersectionObserver" in window)) {
      video.play().catch(() => {});
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else if (container.getBoundingClientRect().bottom > 0) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
      style={{
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
        contain: "strict",
      }}
    >
      <div className="relative h-full aspect-[1818/1000] max-w-full overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className={className}
          style={{
            transform: "translate3d(0, 0, 0)",
            willChange: "transform",
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
