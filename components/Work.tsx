import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

/** Server Component. */
export default function Work() {
  return (
    <section id="work" className="relative z-[2] py-24">
      <div className="wrap">
        <Reveal>
          <span className="label mb-4 inline-flex items-center gap-2.5 text-faint before:block before:h-px before:w-[26px] before:bg-brandGrad before:content-['']">
            Selected work
          </span>
          <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.04] tracking-[-0.04em]">
            Featured Work
          </h2>
          <p className="mt-4 max-w-[58ch] text-muted">
            Designing products that solve real problems.
          </p>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
