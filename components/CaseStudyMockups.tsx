import type { CSSProperties, ReactNode } from "react";

/** Illustrated placeholder visuals for case study pages — no real product screenshots, drawn with basic shapes. */

/** Header hero — a detailed dashboard: dark sidebar, stat tiles, an enquiry table. */
export function DashboardHeroMockup() {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_20px_45px_rgba(20,22,28,0.12)]">
      <div className="flex w-[26%] flex-col gap-3 bg-ink p-4">
        <span className="h-2.5 w-2.5 rounded-full bg-brandGrad" />
        {["w-full", "w-4/5", "w-full", "w-3/5", "w-full"].map((w, i) => (
          <span key={i} className={`h-2 ${w} rounded-full bg-white/15`} />
        ))}
      </div>
      <div className="flex-1 p-5">
        <div className="flex items-center justify-between">
          <span className="h-2.5 w-1/3 rounded-full bg-ink/10" />
          <span className="h-6 w-16 rounded-full bg-brand/15" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl border border-line p-3">
              <span className="block h-4 w-1/2 rounded bg-ink/15" />
              <span className="mt-2 block h-2 w-3/4 rounded-full bg-ink/[0.07]" />
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border border-line px-3 py-2.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-teal" />
              <span className="h-2 flex-1 rounded-full bg-ink/[0.08]" />
              <span className="h-2 w-10 shrink-0 rounded-full bg-ink/[0.08]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Shared "pen on paper" styling for the sketch-style placeholders below. */
const INK = "#2B4EA8";
const paperStyle: CSSProperties = {
  backgroundColor: "#FCFBF6",
  backgroundImage:
    "repeating-linear-gradient(to bottom, transparent, transparent 22px, rgba(43,78,168,0.09) 23px)",
};

function SketchBox({
  label,
  lines = 2,
  rotate = 0,
  radius = "3px 9px 4px 8px",
  bold = false,
  className = "",
  children,
}: {
  label?: string;
  lines?: number;
  rotate?: number;
  radius?: string;
  bold?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col justify-center gap-1.5 border-[1.5px] bg-[#FCFBF6]/70 px-3 py-2.5 ${className}`}
      style={{
        borderColor: INK,
        borderRadius: radius,
        transform: `rotate(${rotate}deg)`,
        borderWidth: bold ? 2.5 : 1.5,
      }}
    >
      {children ? (
        children
      ) : label ? (
        <span className="font-mono text-[10px] tracking-tight" style={{ color: INK }}>
          {label}
        </span>
      ) : (
        Array.from({ length: lines }).map((_, i) => (
          <span
            key={i}
            className="block h-[3px] rounded-full opacity-60"
            style={{ background: INK, width: i === lines - 1 ? "60%" : "85%" }}
          />
        ))
      )}
    </div>
  );
}

/** A scattered page of hand-drawn research notes, connected by rough lines. */
export function ResearchBoardMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-line p-5" style={paperStyle}>
      <svg className="pointer-events-none absolute inset-0 h-full w-full" style={{ color: INK }}>
        <line x1="30%" y1="28%" x2="52%" y2="45%" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
        <line x1="70%" y1="30%" x2="52%" y2="45%" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
        <line x1="52%" y1="45%" x2="35%" y2="72%" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
      </svg>
      <div className="grid h-full grid-cols-2 gap-x-8 gap-y-6 pt-2">
        <SketchBox lines={2} rotate={-2} className="w-[70%]" />
        <SketchBox lines={2} rotate={1.5} className="ml-auto w-[75%]" />
        <SketchBox label="?" rotate={-1} className="w-[55%] items-center" bold />
        <SketchBox lines={3} rotate={2} className="ml-auto w-[80%]" />
      </div>
    </div>
  );
}

/** A hand-drawn hub-and-spoke map — one boxed insight connected to supporting points. */
export function StrategyMapMockup() {
  const spokes = [
    { top: "8%", left: "12%", rotate: -1.5 as number },
    { top: "10%", left: "64%", rotate: 1.5 },
    { top: "70%", left: "10%", rotate: 1 },
    { top: "72%", left: "62%", rotate: -1 },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-line p-4" style={paperStyle}>
      <svg className="pointer-events-none absolute inset-0 h-full w-full" style={{ color: INK }}>
        <line x1="50%" y1="50%" x2="24%" y2="20%" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
        <line x1="50%" y1="50%" x2="78%" y2="20%" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
        <line x1="50%" y1="50%" x2="22%" y2="80%" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
        <line x1="50%" y1="50%" x2="76%" y2="80%" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
      </svg>
      {spokes.map((pos, i) => (
        <div key={i} className="absolute w-[26%]" style={{ top: pos.top, left: pos.left }}>
          <SketchBox lines={2} rotate={pos.rotate} />
        </div>
      ))}
      <div className="absolute left-1/2 top-1/2 w-[30%] -translate-x-1/2 -translate-y-1/2">
        <SketchBox label="Insight" bold rotate={-1} radius="6px 12px 6px 12px" />
      </div>
    </div>
  );
}

/** A grid of hand-numbered principle notes. */
export function PrinciplesGridMockup() {
  return (
    <div className="h-full w-full overflow-hidden rounded-2xl border border-line p-5" style={paperStyle}>
      <div className="grid h-full grid-cols-2 grid-rows-2 gap-4">
        {[1, 2, 3, 4].map((n, i) => (
          <SketchBox
            key={n}
            rotate={i % 2 === 0 ? -1.2 : 1.2}
            radius="4px 10px 4px 10px"
            className="items-start"
          >
            <span className="flex items-center gap-2">
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.5px] font-mono text-[10px]"
                style={{ borderColor: INK, color: INK }}
              >
                {n}
              </span>
              <span className="block h-[3px] w-[70%] rounded-full opacity-60" style={{ background: INK }} />
            </span>
            <span className="mt-2 block h-[3px] w-[85%] rounded-full opacity-40" style={{ background: INK }} />
          </SketchBox>
        ))}
      </div>
    </div>
  );
}

/** A hand-drawn build chain — Design → Build → Test → Ship. */
export function BuildTerminalMockup() {
  const steps = ["Design", "Build", "Test", "Ship"];
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-line p-5" style={paperStyle}>
      <div className="flex w-full items-center justify-between">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center">
            <div
              className="flex h-16 w-16 flex-col items-center justify-center gap-1.5 border-[1.5px] px-2 text-center"
              style={{ borderColor: INK, borderRadius: i % 2 === 0 ? "6px 12px 6px 12px" : "12px 6px 12px 6px" }}
            >
              <span className="font-mono text-[9px]" style={{ color: INK }}>
                {step}
              </span>
            </div>
            {i < steps.length - 1 && (
              <svg width="26" height="12" className="mx-1 shrink-0" style={{ color: INK }}>
                <line x1="0" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1.4" />
                <path d="M15,2 L21,6 L15,10" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
