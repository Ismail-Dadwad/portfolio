import { Briefcase } from "lucide-react";
import { experience } from "@/data/site";
import Reveal from "./Reveal";
import JobDescription from "./JobDescription";

/** Server Component. */
export default function Experience() {
  return (
    <section id="experience" className="relative z-[2] flex min-h-screen items-center py-24">
      <div className="wrap w-full">
        <Reveal>
          <span className="label mb-4 inline-flex items-center gap-2.5 text-faint before:block before:h-px before:w-[26px] before:bg-brandGrad before:content-['']">
            Career
          </span>
          <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.04] tracking-[-0.04em]">
            Where I&apos;ve worked
          </h2>
          <p className="mt-4 max-w-[58ch] text-muted">
            8+ years across freelance, in-house and agency roles — design and frontend, always together.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="relative">
            <div className="pointer-events-none absolute left-7 top-2 bottom-2 w-px bg-line" />
            {experience.map((job) => (
              <div key={`${job.company}-${job.period}`} className="relative flex gap-6 pb-11 last:pb-0">
                <span className="relative z-[1] flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-bg">
                  <span className="absolute inset-0 rounded-full bg-brand/[0.08]" />
                  <Briefcase size={20} strokeWidth={1.75} className="relative text-brand" />
                </span>

                <div className="flex-1 pt-2">
                  <h3 className="font-display text-lg font-bold text-ink">{job.role}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand">{job.company}</p>
                  <p className="label mt-2 text-faint">
                    {job.type} · {job.period} ({job.duration})
                  </p>
                  {job.notice && <p className="label mt-1 text-faint">{job.notice}</p>}

                  <JobDescription text={job.description} />

                  {job.skills && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span key={skill} className="chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {job.projects && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.projects.map((project) => (
                        <span key={project} className="chip">
                          {project}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
