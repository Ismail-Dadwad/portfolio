import type { Project } from "@/data/projects";
import CaseGallery from "./CaseGallery";

/**
 * Server Component.
 * The "quick brief" for a project — case label, heading, gallery, the block
 * cards and the result banner. Shared between the homepage's inline section
 * and each project's dedicated /work/[slug] page so the two never drift.
 */
export default function CaseStudySection({
  project,
  headingLevel = "h3",
  readMoreHref,
}: {
  project: Project;
  headingLevel?: "h1" | "h3";
  readMoreHref?: string;
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

      <CaseGallery images={detail.gallery ?? []} title={project.title} />

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {detail.blocks.map((block) => (
          <div
            key={block.label}
            className="rounded-2xl border border-line bg-white/[0.035] p-[22px]"
          >
            <span className="label mb-2.5 block text-brand">{block.label}</span>
            <p className="text-[15.5px] text-muted">{block.text}</p>
          </div>
        ))}
      </div>

      {detail.result && (
        <div className="mt-[22px] flex flex-wrap items-baseline gap-x-5 gap-y-2 rounded-2xl bg-brandGrad px-6 py-[22px] text-[#080A12]">
          <b className="font-display text-3xl font-bold tracking-[-0.03em]">
            {detail.result.value}
          </b>
          <span className="font-semibold opacity-80">{detail.result.caption}</span>
        </div>
      )}

      {readMoreHref && (
        <a
          href={readMoreHref}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-brandGrad px-5 py-2.5 text-sm font-semibold text-[#080A12] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(139,123,255,0.35)]"
        >
          Read the full case study
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
    </>
  );
}
