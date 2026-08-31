import { skillGroups } from "@/data/site";
import SkillCard from "./SkillCard";
import Reveal from "./Reveal";

/** Server Component. */
export default function Skills() {
  return (
    <section id="skills" className="relative z-[2] flex min-h-screen items-center py-24">
      <div className="wrap w-full">
        <Reveal>
          <span className="label mb-4 inline-flex items-center gap-2.5 text-faint before:block before:h-px before:w-[26px] before:bg-brandGrad before:content-['']">
            Capabilities
          </span>
          <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.04] tracking-[-0.04em]">
            What I actually ship
          </h2>
          <p className="mt-4 max-w-[58ch] text-muted">
            Ordered by depth, not by keyword count.
          </p>
        </Reveal>

        <Reveal className="mt-11">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-12">
            {skillGroups.map((group) => (
              <SkillCard key={group.heading} group={group} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
