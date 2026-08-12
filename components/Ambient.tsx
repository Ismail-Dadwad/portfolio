"use client";

import { useEffect, useRef } from "react";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")";

/**
 * Client Component.
 * Renders the blurred gradient orbs and grain overlay, and moves a soft
 * spotlight with the cursor. Disabled on touch devices and for users who
 * prefer reduced motion.
 */
export default function Ambient() {
  const spot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const onMove = (e: MouseEvent) => {
      const el = spot.current;
      if (!el) return;
      el.style.opacity = "1";
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed -left-40 -top-56 z-0 h-[620px] w-[620px] rounded-full bg-[#2C56D6] opacity-30 blur-[120px]" />
      <div className="pointer-events-none fixed -right-56 top-[38%] z-0 h-[560px] w-[560px] rounded-full bg-[#7B3FD6] opacity-20 blur-[120px]" />
      <div className="pointer-events-none fixed -bottom-52 left-[20%] z-0 h-[480px] w-[480px] rounded-full bg-[#155E4B] opacity-[0.16] blur-[120px]" />

      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.16]"
        style={{ backgroundImage: GRAIN }}
      />

      <div
        ref={spot}
        className="pointer-events-none fixed z-[1] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(79,124,255,0.10) 0%, transparent 62%)",
        }}
      />
    </>
  );
}
