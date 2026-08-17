"use client";

import { useEffect, useState } from "react";

const MIN_VISIBLE_MS = 900;
const FADE_MS = 500;

/**
 * Client Component.
 * A branded splash shown once on the first hard page load — needs the
 * browser's load event and a timer, so it can't be a Server Component.
 * Mounted in the root layout, so client-side navigation between routes
 * (App Router keeps the layout alive) never re-triggers it.
 */
export default function Loader() {
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }

    document.documentElement.classList.add("overflow-hidden");

    const start = Date.now();
    const finish = () => {
      const wait = Math.max(MIN_VISIBLE_MS - (Date.now() - start), 0);
      window.setTimeout(() => setExiting(true), wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => window.removeEventListener("load", finish);
  }, []);

  useEffect(() => {
    if (!exiting) return;
    document.documentElement.classList.remove("overflow-hidden");
    const t = window.setTimeout(() => setDone(true), FADE_MS);
    return () => window.clearTimeout(t);
  }, [exiting]);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center gap-5 bg-bg transition-opacity duration-500 ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex h-16 w-16 animate-loaderIn items-center justify-center rounded-[18px] bg-brandGrad font-display text-2xl font-bold tracking-[-0.03em] text-white">
        ID
      </div>
      <div className="h-[3px] w-32 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/3 rounded-full bg-brandGrad animate-loaderSweep" />
      </div>
    </div>
  );
}
