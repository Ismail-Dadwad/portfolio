import { Users, Waypoints, PenTool, Monitor, Code2 } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    icon: Users,
    title: "Research",
    text: "Understand users, business goals and the problem deeply.",
  },
  {
    icon: Waypoints,
    title: "Define",
    text: "Map user flows and identify key opportunities.",
  },
  {
    icon: PenTool,
    title: "Ideate",
    text: "Explore solutions through sketches and wireframes.",
  },
  {
    icon: Monitor,
    title: "Design",
    text: "Create UI, design system and high-fidelity screens.",
  },
  {
    icon: Code2,
    title: "Validate",
    text: "Test with users, refine the experience — then build and ship it myself.",
  },
];

/** Server Component. */
export default function Process() {
  return (
    <section id="process" className="relative z-[2] flex min-h-screen items-center py-24">
      <div className="wrap w-full">
        <Reveal>
          <span className="label mb-4 inline-flex items-center gap-2.5 text-faint before:block before:h-px before:w-[26px] before:bg-brandGrad before:content-['']">
            How I work
          </span>
          <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.04] tracking-[-0.04em]">
            My Process
          </h2>
          <p className="mt-4 max-w-[58ch] text-muted">
            My approach to solving problems and designing meaningful
            experiences.
          </p>
        </Reveal>

        <Reveal className="mt-16 lg:mt-20">
          <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            <div className="pointer-events-none absolute inset-x-[10%] top-9 hidden h-px bg-line lg:block" />
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="relative flex flex-col items-center px-2 text-center">
                <span className="relative z-[1] flex h-[72px] w-[72px] items-center justify-center rounded-full bg-bg">
                  <span className="absolute inset-0 rounded-full bg-brand/[0.08]" />
                  <Icon size={26} strokeWidth={1.75} className="relative text-brand" />
                </span>
                <span className="label mt-4 text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1.5 font-display text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 max-w-[22ch] text-sm text-muted">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
