"use client";

import type { Project } from "@/data/projects";

const chipTone: Record<Project["status"], string> = {
  shipped: "border-mint/45 text-mint",
  design: "border-violet/45 text-violet",
  own: "border-violet/45 text-violet",
};

/**
 * Client Component.
 * The radial glow follows the cursor via a mousemove handler, which needs
 * browser events — so this card is a Client Component while the section
 * that renders it stays a Server Component.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <a
      href={`#${project.id}`}
      onMouseMove={onMove}
      className={`glow-card relative flex min-h-[230px] flex-col justify-between
        overflow-hidden rounded-[22px] border border-line bg-white/[0.035] p-7
        transition-all duration-300 hover:-translate-y-1 hover:border-lineHi
        ${project.featured ? "md:col-span-6" : "md:col-span-3"} col-span-6`}
    >
      <div className="relative flex items-start justify-between gap-3">
        <span className={`chip ${chipTone[project.status]}`}>
          {project.statusLabel}
        </span>
        <span className="chip">{project.sideLabel}</span>
      </div>

      <div className="relative">
        <h3 className="mb-2 mt-5 font-display text-[22px] font-semibold tracking-[-0.025em] sm:text-[26px]">
          {project.title}
        </h3>
        <p className="max-w-[62ch] text-[15.5px] text-muted">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-[7px]">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-[7px] border border-line bg-white/[0.05] px-2.5 py-[5px] font-mono text-[10.5px] tracking-[0.09em] text-faint"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.metric && (
        <div className="relative mt-5">
          <div className="grad-text font-display text-[30px] font-bold leading-none tracking-[-0.035em] sm:text-[40px]">
            {project.metric.value}
          </div>
          <span className="label mt-1.5 block text-faint">
            {project.metric.caption}
          </span>
        </div>
      )}
    </a>
  );
}
