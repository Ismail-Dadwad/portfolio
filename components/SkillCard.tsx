"use client";

import { useState } from "react";
import { Sparkles, ChevronDown } from "lucide-react";

type SkillGroup = {
  heading: string;
  level: string;
  highlight: boolean;
  spotlight?: boolean;
  items: string[];
  expandItems?: string[];
};

/**
 * Client Component.
 * Cards with an `expandItems` list toggle open/closed — needs local state,
 * so it can't stay a Server Component the way Skills.tsx does.
 */
export default function SkillCard({ group }: { group: SkillGroup }) {
  const [expanded, setExpanded] = useState(false);
  const spanClass = group.expandItems ? "lg:col-span-6" : "lg:col-span-4";

  return (
    <div
      className={`relative overflow-hidden rounded-[18px] p-6 transition-all duration-300 hover:-translate-y-[3px] ${spanClass} ${
        group.spotlight
          ? "border-2 border-brand/25 bg-gradient-to-br from-brand/[0.06] via-surface to-teal/[0.06] shadow-[0_1px_2px_rgba(20,22,28,0.04)] hover:border-brand/40 hover:shadow-[0_12px_24px_rgba(59,91,255,0.12)]"
          : "border border-line bg-surface shadow-[0_1px_2px_rgba(20,22,28,0.04)] hover:border-lineHi hover:shadow-[0_12px_24px_rgba(20,22,28,0.06)]"
      }`}
    >
      {group.spotlight && (
        <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-brandGrad px-2.5 py-1 text-[10px] font-semibold text-white">
          <Sparkles size={11} strokeWidth={2.5} />
          AI
        </span>
      )}
      <h3 className="mb-1 font-display text-[21px] font-semibold tracking-[-0.025em]">
        {group.heading}
      </h3>
      <span className={`label ${group.highlight ? "grad-text" : "text-faint"}`}>
        {group.level}
      </span>
      {group.expandItems ? (
        <div
          className={`grid overflow-hidden transition-all duration-300 ${
            expanded ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <ul className="min-h-0">
            {[...group.items, ...group.expandItems].map((item, i, all) => (
              <li
                key={item}
                className={`flex items-center gap-2.5 border-b border-line py-2.5 text-[15px] text-muted ${
                  i === all.length - 1 ? "border-b-0" : ""
                }`}
              >
                <span className="block h-[5px] w-[5px] shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="mt-4">
          {group.items.map((item, i) => (
            <li
              key={item}
              className={`flex items-center gap-2.5 border-b border-line py-2.5 text-[15px] text-muted ${
                i === group.items.length - 1 ? "border-b-0" : ""
              }`}
            >
              <span className="block h-[5px] w-[5px] shrink-0 rounded-full bg-brand" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {group.expandItems && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
        >
          {expanded ? "Show less" : "Learn more"}
          <ChevronDown
            size={15}
            strokeWidth={2.5}
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}
