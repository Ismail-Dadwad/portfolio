"use client";

import { useState } from "react";

/** Client Component — needs local state to toggle the clamped description. */
export default function JobDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-4 max-w-[70ch]">
      <p
        className={`text-[15px] leading-relaxed text-muted ${expanded ? "" : "line-clamp-2"}`}
      >
        {text}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-2 text-sm font-semibold text-brand"
      >
        {expanded ? "See less" : "See more"}
      </button>
    </div>
  );
}
