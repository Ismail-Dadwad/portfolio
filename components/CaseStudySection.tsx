import { SiJavascript, SiSass, SiBootstrap, SiGreensock } from "react-icons/si";
import type { Project } from "@/data/projects";
import { FigmaLogo } from "./BrandIcons";
import { DashboardHeroMockup } from "./CaseStudyMockups";
import CaseGallery from "./CaseGallery";

const techIcons: Record<string, typeof SiJavascript> = {
  Figma: FigmaLogo,
  JavaScript: SiJavascript,
  SCSS: SiSass,
  Bootstrap: SiBootstrap,
  GSAP: SiGreensock,
};

/**
 * Server Component.
 * The "quick brief" for a project — a single narrative read from hero to
 * result, not a grid of cards. Only the personas get boxed treatment (they
 * genuinely benefit from being compared side by side); everything else is
 * plain typography with consistent section spacing. Shared between the
 * homepage's inline section and each project's dedicated /work/[slug] page
 * so the two never drift.
 */
export default function CaseStudySection({
  project,
  headingLevel = "h3",
}: {
  project: Project;
  headingLevel?: "h1" | "h3";
}) {
  const { detail } = project;
  const Heading = headingLevel;

  return (
    <>
      <span className="label mb-4 inline-flex items-center gap-2.5 text-faint before:block before:h-px before:w-[26px] before:bg-brandGrad before:content-['']">
        {detail.caseLabel}
      </span>
      <Heading className="font-display text-[clamp(22px,2.6vw,30px)] font-semibold tracking-[-0.025em]">
        {detail.heading}
      </Heading>

      {detail.meta && (
        <div className="mt-8 grid gap-7 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <div className="aspect-[4/3] w-full">
            <DashboardHeroMockup />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[13px] text-faint">
              <span>{detail.meta.role.join(" · ")}</span>
              <span aria-hidden className="text-faint">•</span>
              <span>{detail.meta.year}</span>
            </div>
            {detail.overview && (
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{detail.overview}</p>
            )}
            <div className="mt-4 text-[13px] text-faint">
              <span className="text-brand">Tools — </span>
              {detail.meta.tools.join(", ")}
            </div>
          </div>
        </div>
      )}

      {detail.problemPoints && (
        <div className="mt-14 border-l-2 border-l-brand pl-5">
          <span className="label text-brand">The problem</span>
          <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {detail.problemPoints.map((point) => (
              <li key={point} className="flex items-start gap-2 text-[14px] text-muted">
                <span className="mt-[7px] block h-[5px] w-[5px] shrink-0 rounded-full bg-brand" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      <CaseGallery images={detail.gallery ?? []} title={project.title} />

      {detail.fullCaseStudy && (
        <div className="mt-14">
          <span className="label mb-4 block text-faint">Who it's for</span>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {detail.fullCaseStudy.personas.map((persona) => (
              <div key={persona.role} className="tile">
                <b className="block font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                  {persona.role}
                </b>
                <p className="mt-2.5 text-[14.5px] text-muted">
                  <span className="text-brand">Goal — </span>
                  {persona.goal}
                </p>
                <p className="mt-1.5 text-[14.5px] text-muted">
                  <span className="text-brand">Pain point — </span>
                  {persona.painPoint}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {detail.blocks.length > 0 && (
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {detail.blocks.map((block) => (
            <div key={block.label}>
              <span className="label block text-brand">{block.label}</span>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{block.text}</p>
            </div>
          ))}
        </div>
      )}

      {detail.techInvolved && (
        <div className="mt-14">
          <span className="label mb-3 block text-faint">Tech involved</span>
          <div className="flex flex-wrap gap-2.5">
            {detail.techInvolved.map((tech) => {
              const Icon = techIcons[tech];
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-medium text-muted"
                >
                  {Icon && <Icon size={14} />}
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {detail.result && (
        <div className="mt-10 flex flex-wrap items-baseline gap-x-5 gap-y-2 rounded-2xl bg-brandGrad px-6 py-[22px] text-white">
          <b className="font-display text-3xl font-bold tracking-[-0.03em]">
            {detail.result.value}
          </b>
          <span className="font-semibold opacity-90">{detail.result.caption}</span>
        </div>
      )}
    </>
  );
}
