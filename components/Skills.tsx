import { skillGroups } from "@/data/site";
import Reveal from "./Reveal";

/** Server Component. */
export default function Skills() {
  return (
    <section id="skills" className="relative z-[2] py-24">
      <div className="wrap">
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
          <div className="grid gap-3.5 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.heading} className="tile">
                <h3 className="mb-1 font-display text-[21px] font-semibold tracking-[-0.025em]">
                  {group.heading}
                </h3>
                <span
                  className={`label ${group.highlight ? "grad-text" : "text-faint"}`}
                >
                  {group.level}
                </span>
                <ul className="mt-4">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 border-b border-line py-2.5 text-[15px] text-muted last:border-b-0"
                    >
                      <span className="block h-[5px] w-[5px] shrink-0 rounded-full bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-4">
          <div className="rounded-2xl border border-line border-l-2 border-l-violet bg-white/[0.035] p-6">
            <span className="label text-violet">Currently building with</span>
            <p className="mt-2 max-w-[76ch] text-muted">
              <strong className="text-ink">
                React · Next.js · TypeScript · Tailwind CSS.
              </strong>{" "}
              Self-directed, through Infogeni — a live product rather than a
              course. This site is built with them too. I&apos;d rather tell you
              exactly where I am with these than have you find out in round two.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
