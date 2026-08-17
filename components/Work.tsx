import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import CaseStudySection from "./CaseStudySection";
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
              <CaseStudySection
                project={project}
                readMoreHref={
                  project.detail.fullCaseStudy ? `/work/${project.id}` : undefined
                }
              />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
