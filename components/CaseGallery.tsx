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
      <div className="mt-6 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group text-left"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-line bg-surface transition-colors group-hover:border-lineHi">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 45vw, 220px"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="label mt-2 block text-faint group-hover:text-muted">
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
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/70 transition-colors hover:border-white/30 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            <figure
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/30">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain"
                />
              </div>
              {active.caption && (
                <figcaption className="label mt-3 text-center text-white/50">
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
