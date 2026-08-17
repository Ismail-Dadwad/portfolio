"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1400;

function parseValue(value: string) {
  const match = value.match(/^([+\-−]?)([\d,]+)(.*)$/);
  if (!match) return null;
  const [, sign, digits, suffix] = match;
  return {
    sign,
    suffix,
    grouped: digits.includes(","),
    target: parseInt(digits.replace(/,/g, ""), 10),
  };
}

function format(n: number, grouped: boolean) {
  return grouped ? n.toLocaleString("en-US") : String(n);
}

/**
 * Client Component.
 * Counts a stat value up from zero once it scrolls into view — needs
 * IntersectionObserver and rAF, so it can't be a Server Component. Falls
 * back to the static final value for anything it can't parse as a number,
 * and for reduced-motion users.
 */
export default function AnimatedStat({ value }: { value: string }) {
  const parsed = parseValue(value);
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(
    parsed ? `${parsed.sign}${format(0, parsed.grouped)}${parsed.suffix}` : value,
  );

  useEffect(() => {
    if (!parsed) return;
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION_MS, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(parsed.target * eased);
          setDisplay(`${parsed.sign}${format(current, parsed.grouped)}${parsed.suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <span ref={ref}>{display}</span>;
}
