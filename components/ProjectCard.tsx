"use client";

import {
  CheckCircle2,
  PenTool,
  Sparkles,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Frame,
  Layers,
  Braces,
  Paintbrush,
  LayoutGrid,
  Zap,
  Server,
  AppWindow,
  Type,
  Rocket,
  Send,
  Code2,
} from "lucide-react";
import type { Project } from "@/data/projects";
import AnimatedStat from "./AnimatedStat";

const chipTone: Record<Project["status"], string> = {
  shipped: "border-mint/45 text-mint",
  design: "border-violet/45 text-violet",
  own: "border-violet/45 text-violet",
};

const statusIcon: Record<Project["status"], typeof CheckCircle2> = {
  shipped: CheckCircle2,
  design: PenTool,
  own: Sparkles,
};

const stackIcon: Record<string, typeof Frame> = {
  Figma: Frame,
  "Design system": Layers,
  "JavaScript ES6+": Braces,
  JavaScript: Braces,
  SCSS: Paintbrush,
  "Bootstrap 5": LayoutGrid,
  Bootstrap: LayoutGrid,
  GSAP: Zap,
  "Laravel views": Server,
  "Next.js": AppWindow,
  TypeScript: Type,
  Vercel: Rocket,
  "Dev Mode handoff": Send,
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

  const StatusIcon = statusIcon[project.status];
  const TrendIcon = project.metric?.value.trim().startsWith("−")
    ? TrendingDown
    : TrendingUp;

  return (
    <a
      href={`/work/${project.id}`}
      onMouseMove={onMove}
      className="glow-card group relative flex min-h-[230px] flex-col justify-between
        overflow-hidden rounded-[22px] border border-line bg-white/[0.035] p-7
        transition-all duration-300 hover:-translate-y-1 hover:border-lineHi hover:shadow-[0_20px_60px_-15px_rgba(79,124,255,0.25)]"
    >
      <div className="relative flex items-start justify-between gap-3">
        <span className={`chip inline-flex items-center gap-1.5 ${chipTone[project.status]}`}>
          <StatusIcon size={12} strokeWidth={2} />
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
          {project.stack.map((tech) => {
            const Icon = stackIcon[tech] ?? Code2;
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-[7px] border border-line bg-white/[0.05] px-2.5 py-[5px] font-mono text-[10.5px] tracking-[0.09em] text-faint"
              >
                <Icon size={11} strokeWidth={2} />
                {tech}
              </span>
            );
          })}
        </div>
      </div>

      <div className="relative mt-5 flex flex-wrap items-end gap-4">
        {project.metric && (
          <div>
            <div className="inline-flex items-center gap-1.5">
              <TrendIcon size={22} strokeWidth={2.5} className="shrink-0 text-brand" />
              <span className="grad-text font-display text-[30px] font-bold leading-none tracking-[-0.035em] sm:text-[40px]">
                <AnimatedStat value={project.metric.value} />
              </span>
            </div>
            <span className="label mt-1.5 block text-faint">
              {project.metric.caption}
            </span>
          </div>
        )}
        <span className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-full bg-brandGrad px-5 py-2.5 text-sm font-semibold text-[#080A12] transition-transform duration-300 group-hover:-translate-y-0.5">
          Case studies
          <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}
