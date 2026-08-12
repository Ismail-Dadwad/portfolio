import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import CaseGallery from "./CaseGallery";
import Reveal from "./Reveal";

/** Server Component — renders Client Components (ProjectCard) as children. */
export default function Work() {
  return (
    <section id="work" className="relative z-[2] py-24">
      <div className="wrap">
        <Reveal>
          <span className="label mb-4 inline-flex items-center gap-2.5 text-faint before:block before:h-px before:w-[26px] before:bg-brandGrad before:content-['']">
            Selected work
          </span>
          <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.04] tracking-[-0.04em]">
            Five products.
            <br />
            One thread — hard workflows,
            <br />
            made obvious.
          </h2>
          <p className="mt-4 max-w-[58ch] text-muted">
            Each card says exactly what I did. Where the build was someone
            else&apos;s, it says that too.
          </p>
        </Reveal>

        <Reveal className="mt-11">
          <div className="grid grid-cols-6 gap-3.5">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Reveal>

        {projects.map((project) => (
          <Reveal key={project.id}>
            <article
              id={project.id}
              className="mt-[90px] scroll-mt-28 border-t border-line pt-11"
            >
              <span className="label mb-4 inline-flex items-center gap-2.5 text-faint before:block before:h-px before:w-[26px] before:bg-brandGrad before:content-['']">
                {project.detail.caseLabel}
              </span>
              <h3 className="font-display text-[clamp(22px,2.6vw,30px)] font-semibold tracking-[-0.025em]">
                {project.detail.heading}
              </h3>

              <CaseGallery
                images={project.detail.gallery ?? []}
                title={project.title}
              />

              <div className="mt-5 grid gap-5 md:grid-cols-3">
                {project.detail.blocks.map((block) => (
                  <div
                    key={block.label}
                    className="rounded-2xl border border-line bg-white/[0.035] p-[22px]"
                  >
                    <span className="label mb-2.5 block text-brand">
                      {block.label}
                    </span>
                    <p className="text-[15.5px] text-muted">{block.text}</p>
                  </div>
                ))}
              </div>

              {project.detail.result && (
                <div className="mt-[22px] flex flex-wrap items-baseline gap-x-5 gap-y-2 rounded-2xl bg-brandGrad px-6 py-[22px] text-[#080A12]">
                  <b className="font-display text-3xl font-bold tracking-[-0.03em]">
                    {project.detail.result.value}
                  </b>
                  <span className="font-semibold opacity-80">
                    {project.detail.result.caption}
                  </span>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
