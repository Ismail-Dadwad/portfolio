"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

/**
 * Client Component.
 * Screenshots stay hidden behind a trigger chip until clicked, then open in
 * a lightbox — keeps the case study scannable instead of front-loading images.
 */
export default function CaseGallery({
  images,
  title,
}: {
  images: ProjectImage[];
  title: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  if (images.length === 0) return null;

  const active = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group flex items-center gap-2.5 rounded-xl border border-line bg-white/[0.035] px-4 py-3 text-left transition-colors hover:border-lineHi hover:bg-white/[0.06]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0 text-faint transition-colors group-hover:text-mint"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="M21 16l-5.5-5.5a1 1 0 0 0-1.4 0L4 20" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <span className="label text-faint group-hover:text-muted">
              {image.caption ?? `View screenshot ${i + 1}`}
            </span>
          </button>
        ))}
      </div>

      {active &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050609]/90 p-6 backdrop-blur-sm"
            onClick={() => setOpenIndex(null)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpenIndex(null)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/[0.06] text-muted transition-colors hover:border-lineHi hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            <figure
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-lineHi bg-surface">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain"
                />
              </div>
              {active.caption && (
                <figcaption className="label mt-3 text-center text-faint">
                  {title} — {active.caption}
                </figcaption>
              )}
            </figure>
          </div>,
          document.body,
        )}
    </>
  );
}
