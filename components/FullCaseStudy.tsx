import Image from "next/image";
import type { Project } from "@/data/projects";

/**
 * Server Component.
 * The deep-dive content shown under the "Full case study" tab on a project's
 * dedicated page — intro, who it was built for, and the process sections,
 * each optionally paired with one of the project's existing screenshots.
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

      <span className="label mb-4 mt-11 block text-faint">Who it's for</span>
      <div className="grid gap-3.5 sm:grid-cols-2">
        {fullCaseStudy.personas.map((persona) => (
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

      <div className="mt-11 flex flex-col gap-11">
        {fullCaseStudy.sections.map((section) => (
          <div
            key={section.heading}
            className={
              section.image
                ? "grid items-center gap-7 md:grid-cols-2"
                : undefined
            }
          >
            <div>
              <h2 className="mb-2.5 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                {section.heading}
              </h2>
              <p className="max-w-[70ch] text-[15.5px] leading-relaxed text-muted">
                {section.text}
              </p>
            </div>
            {section.image && (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-surface">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
