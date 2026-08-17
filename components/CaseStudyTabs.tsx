"use client";

import { useState, type ReactNode } from "react";

const tabs = [
  { id: "quick", label: "Quick read" },
  { id: "full", label: "Full case study" },
] as const;

type Tab = (typeof tabs)[number]["id"];

/**
 * Client Component.
 * Toggles between the quick brief and the deep-dive content on a project's
 * dedicated page. Quick brief always renders; the full case study only
 * mounts once "Full case study" is selected, so it's a real show/hide, not
 * just a scroll target.
 */
export default function CaseStudyTabs({
  quick,
  full,
}: {
  quick: ReactNode;
  full: ReactNode;
}) {
  const [view, setView] = useState<Tab>("quick");

  return (
    <>
      <div className="mb-9 flex w-fit rounded-full border border-line bg-white/[0.035] p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setView(tab.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              view === tab.id
                ? "bg-ink text-bg"
                : "text-muted hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {quick}
      {view === "full" && full}
    </>
  );
}
