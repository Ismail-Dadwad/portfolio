import { Check, ArrowRight, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const colors = [
  { hex: "#3B5BFF", label: "Brand", swatch: "bg-brand" },
  { hex: "#0EA5A0", label: "Teal", swatch: "bg-teal" },
  { hex: "#B36BFF", label: "Violet", swatch: "bg-violet" },
  { hex: "#14161C", label: "Ink", swatch: "bg-ink" },
  { hex: "#6E7079", label: "Muted", swatch: "bg-[#6E7079]" },
  { hex: "#F8F9FB", label: "Background", swatch: "bg-bg border border-line" },
];

const spacing = [8, 16, 24, 32, 40, 48, 64, 80];

/** Server Component. */
export default function DesignSystemsShowcase() {
  return (
    <section
      id="design-systems"
      className="relative z-[2] flex min-h-screen items-center py-24"
    >
      <div className="wrap w-full">
        <Reveal>
          <span className="label mb-4 inline-flex items-center gap-2.5 text-faint before:block before:h-px before:w-[26px] before:bg-brandGrad before:content-['']">
            Systems thinking
          </span>
          <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.04] tracking-[-0.04em]">
            Design Systems
          </h2>
          <p className="mt-4 max-w-[58ch] text-muted">
            Building reusable components and consistent patterns for
            scalable products.
          </p>
        </Reveal>

        <Reveal className="mt-11">
          <div className="grid grid-cols-1 gap-3.5 rounded-[24px] border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr_0.7fr_0.9fr] lg:gap-8">
            {/* UI Components */}
            <div>
              <span className="label text-faint">UI Components</span>
              <div className="mt-5 grid grid-cols-2 items-center gap-3">
                <span className="rounded-full bg-ink py-2.5 text-center text-xs font-semibold text-bg">
                  Primary Button
                </span>
                <span className="rounded-lg border border-line px-3 py-2.5 text-xs text-faint">
                  Search anything...
                </span>

                <span className="rounded-full border border-lineHi py-2.5 text-center text-xs font-semibold text-ink">
                  Secondary Button
                </span>
                <span className="flex items-center justify-between rounded-lg border border-line px-3 py-2.5 text-xs text-faint">
                  Select an option
                  <ChevronDown size={13} strokeWidth={2} />
                </span>

                <span className="text-xs font-semibold text-brand">Text Button</span>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1.5 text-xs text-muted">
                    <span className="h-3.5 w-3.5 rounded-[4px] border border-lineHi" />
                    Default
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-muted">
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[4px] bg-brand">
                      <Check size={10} strokeWidth={3} className="text-white" />
                    </span>
                    Checked
                  </label>
                </div>
              </div>

              <label className="mt-4 flex items-center gap-2 text-xs text-muted">
                <span className="flex h-4 w-7 items-center rounded-full bg-brand p-0.5">
                  <span className="ml-auto h-3 w-3 rounded-full bg-white" />
                </span>
                Enable
              </label>
            </div>

            {/* Colors */}
            <div>
              <span className="label text-faint">Colors</span>
              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {colors.map((c) => (
                  <div key={c.label}>
                    <span className={`block aspect-square w-full rounded-xl ${c.swatch}`} />
                    <span className="mt-1.5 block font-mono text-[10px] text-faint">{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div>
              <span className="label text-faint">Typography</span>
              <div className="mt-4 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-bold text-ink">Aa</span>
                  <div className="text-xs leading-relaxed text-muted">
                    <span className="block text-faint">Manrope</span>
                    <span className="block">Medium · Semibold</span>
                    <span className="block font-semibold text-ink">Bold · Extrabold</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-body text-3xl font-bold text-ink">Aa</span>
                  <div className="text-xs leading-relaxed text-muted">
                    <span className="block text-faint">Inter</span>
                    <span className="block">Regular · Medium</span>
                    <span className="block font-semibold text-ink">Semibold · Bold</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Spacing */}
            <div>
              <span className="label text-faint">Spacing (8px grid)</span>
              <div className="mt-4 flex flex-wrap items-end gap-2.5">
                {spacing.map((px) => (
                  <div key={px} className="flex flex-col items-center gap-1.5">
                    <span
                      className="rounded-[4px] bg-brand/25"
                      style={{ width: Math.max(px * 0.55, 5), height: Math.max(px * 0.55, 5) }}
                    />
                    <span className="font-mono text-[9px] text-faint">{px}</span>
                  </div>
                ))}
              </div>

              <span className="label mt-6 block text-faint">Card</span>
              <div className="mt-2 rounded-xl border border-line bg-bg p-3.5">
                <h4 className="font-display text-sm font-bold text-ink">Card Title</h4>
                <p className="mt-1 text-xs text-muted">
                  This is a sample card component used across the product.
                </p>
                <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                  Action
                  <ArrowRight size={11} strokeWidth={2.5} />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
