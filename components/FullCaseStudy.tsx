import Image from "next/image";
import {
  Search,
  Waypoints,
  Wrench,
  TrendingUp,
  CheckCircle2,
  PenTool,
  Monitor,
  Check,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import type { Project } from "@/data/projects";
import {
  ResearchBoardMockup,
  StrategyMapMockup,
  PrinciplesGridMockup,
  BuildTerminalMockup,
} from "./CaseStudyMockups";

const phaseIcons = [Search, Waypoints, Wrench, TrendingUp, CheckCircle2];
const placeholderVisuals = [ResearchBoardMockup, StrategyMapMockup, PrinciplesGridMockup, BuildTerminalMockup];
const processIcons = [Search, Waypoints, PenTool, Monitor, CheckCircle2];

/**
 * Server Component.
 * The deep-dive content shown under the "Full case study" tab on a project's
 * dedicated page — intro, who it was built for, and the process sections as
 * a connected vertical timeline. Each step shows a real screenshot where the
 * data has one, or an illustrated placeholder visual otherwise.
 */
export default function FullCaseStudy({ project }: { project: Project }) {
  const fullCaseStudy = project.detail.fullCaseStudy;
  if (!fullCaseStudy) return null;

  return (
    <div className="mt-16 border-t border-line pt-11">
      <span className="label mb-4 inline-flex items-center gap-2.5 text-faint before:block before:h-px before:w-[26px] before:bg-brandGrad before:content-['']">
        Full case study
      </span>
      <p className="max-w-[70ch] text-lg text-muted">{fullCaseStudy.intro}</p>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute left-7 top-2 bottom-2 w-px bg-line" />

        {fullCaseStudy.sections.map((section, i) => {
          const Icon = phaseIcons[i % phaseIcons.length];
          const PlaceholderVisual = placeholderVisuals[i % placeholderVisuals.length];

          return (
            <div key={section.heading} className="relative flex gap-6 pb-11 last:pb-0">
              <span className="relative z-[1] flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-bg">
                <span className="absolute inset-0 rounded-full bg-brand/[0.08]" />
                <Icon size={20} strokeWidth={1.75} className="relative text-brand" />
              </span>

              <div className="grid flex-1 items-center gap-7 pt-2.5 md:grid-cols-2">
                <div>
                  <span className="label text-faint">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mb-2.5 mt-1 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                    {section.heading}
                  </h3>
                  <p className="max-w-[70ch] text-[15.5px] leading-relaxed text-muted">
                    {section.text}
                  </p>
                </div>
                {section.image ? (
                  <div className="mx-auto md:mx-0">
                    <div className="relative mx-auto h-[360px] w-[260px] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_10px_28px_rgba(20,22,28,0.08)]">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        fill
                        sizes="260px"
                        className="object-cover object-top"
                      />
                    </div>
                    {section.image.caption && (
                      <span className="label mt-2.5 block text-center text-faint">
                        {section.image.caption}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="aspect-[16/9] w-full">
                    <PlaceholderVisual />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {fullCaseStudy.process && (
        <div className="mt-16 border-t border-line pt-11">
          <span className="label mb-4 inline-flex items-center gap-2.5 text-faint before:block before:h-px before:w-[26px] before:bg-brandGrad before:content-['']">
            How I worked
          </span>
          <h3 className="mb-8 font-display text-xl font-semibold tracking-[-0.02em] text-ink">Process</h3>
          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            <div className="pointer-events-none absolute inset-x-[10%] top-7 hidden h-px bg-line lg:block" />
            {fullCaseStudy.process.map((step, i) => {
              const Icon = processIcons[i % processIcons.length];
              return (
                <div key={step.title} className="relative flex flex-col items-center px-2 text-center">
                  <span className="relative z-[1] flex h-14 w-14 items-center justify-center rounded-full bg-bg">
                    <span className="absolute inset-0 rounded-full bg-brand/[0.08]" />
                    <Icon size={18} strokeWidth={1.75} className="relative text-brand" />
                  </span>
                  <span className="label mt-3 text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="mt-1 font-display text-[15px] font-bold text-ink">{step.title}</h4>
                  <p className="mt-1.5 max-w-[20ch] text-[13px] text-muted">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {fullCaseStudy.designSystem && (() => {
        const ds = fullCaseStudy.designSystem;
        const accent = ds.colors.find((c) => c.label === "Normal")?.hex ?? ds.colors[3]?.hex ?? "#795CD9";
        const accentSoft = ds.colors.find((c) => c.label === "Light")?.hex ?? ds.colors[0]?.hex ?? "#F2EFFC";
        const spacing = [1, 2, 3, 4, 5, 6, 8, 10].map((m) => ds.spacingBase * m);

        return (
          <div className="mt-16 border-t border-line pt-11">
            <span className="label mb-4 inline-flex items-center gap-2.5 text-faint before:block before:h-px before:w-[26px] before:bg-brandGrad before:content-['']">
              Real system
            </span>
            <h3 className="mb-8 font-display text-xl font-semibold tracking-[-0.02em] text-ink">Design System</h3>

            <div className="grid grid-cols-1 gap-8 rounded-[24px] border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr_0.7fr_0.9fr]">
              {/* UI Components */}
              <div>
                <span className="label text-faint">UI Components</span>
                <div className="mt-5 grid grid-cols-2 items-center gap-3">
                  <span
                    className="rounded-full py-2.5 text-center text-xs font-semibold text-white"
                    style={{ backgroundColor: accent }}
                  >
                    Primary Button
                  </span>
                  <span className="rounded-lg border border-line px-3 py-2.5 text-xs text-faint">
                    Search anything...
                  </span>

                  <span
                    className="rounded-full border-2 py-2.5 text-center text-xs font-semibold"
                    style={{ borderColor: accent, color: accent }}
                  >
                    Secondary Button
                  </span>
                  <span className="flex items-center justify-between rounded-lg border border-line px-3 py-2.5 text-xs text-faint">
                    Select an option
                    <ChevronDown size={13} strokeWidth={2} />
                  </span>

                  <span className="text-xs font-semibold" style={{ color: accent }}>
                    Text Button
                  </span>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-1.5 text-xs text-muted">
                      <span className="h-3.5 w-3.5 rounded-[4px] border border-lineHi" />
                      Default
                    </label>
                    <label className="flex items-center gap-1.5 text-xs text-muted">
                      <span
                        className="flex h-3.5 w-3.5 items-center justify-center rounded-[4px]"
                        style={{ backgroundColor: accent }}
                      >
                        <Check size={10} strokeWidth={3} className="text-white" />
                      </span>
                      Checked
                    </label>
                  </div>
                </div>

                <label className="mt-4 flex items-center gap-2 text-xs text-muted">
                  <span
                    className="flex h-4 w-7 items-center rounded-full p-0.5"
                    style={{ backgroundColor: accent }}
                  >
                    <span className="ml-auto h-3 w-3 rounded-full bg-white" />
                  </span>
                  Enable
                </label>
              </div>

              {/* Colors */}
              <div>
                <span className="label text-faint">{ds.colorName}</span>
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {ds.colors.map((c) => (
                    <div key={c.label}>
                      <span
                        className="block aspect-square w-full rounded-xl border border-line"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="mt-1.5 block text-[10px] text-muted">{c.label}</span>
                      <span className="block font-mono text-[10px] text-faint">{c.hex}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div>
                <span className="label text-faint">Typography</span>
                <div className="mt-4 flex items-start gap-3">
                  <span className="font-sans text-3xl font-bold text-ink">Aa</span>
                  <div className="text-xs leading-relaxed text-muted">
                    <span className="block text-faint">{ds.font}</span>
                    <span className="block">Base {(ds.spacingBase * 2).toString()}px · scale 1.237</span>
                    <div className="mt-1.5 flex flex-wrap gap-x-2 gap-y-0.5 font-mono text-[10px] text-faint">
                      {ds.typeScale.map((rem) => (
                        <span key={rem}>{rem.toFixed(2)}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacing */}
              <div>
                <span className="label text-faint">Spacing ({ds.spacingBase}px grid)</span>
                <div className="mt-4 flex flex-wrap items-end gap-2.5">
                  {spacing.map((px) => (
                    <div key={px} className="flex flex-col items-center gap-1.5">
                      <span
                        className="rounded-[4px]"
                        style={{
                          width: Math.max(px * 0.55, 5),
                          height: Math.max(px * 0.55, 5),
                          backgroundColor: accentSoft,
                        }}
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
                  <span
                    className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold"
                    style={{ color: accent }}
                  >
                    Action
                    <ArrowRight size={11} strokeWidth={2.5} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
