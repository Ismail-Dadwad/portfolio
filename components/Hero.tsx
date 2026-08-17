import { Palette, Layers, Code2, Workflow } from "lucide-react";
import { site, stats, marquee } from "@/data/site";
import AnimatedStat from "./AnimatedStat";

const skills = [
  { label: "UI/UX Design", icon: Palette },
  { label: "Design Systems", icon: Layers },
  { label: "Frontend Development", icon: Code2 },
  { label: "Figma → Code", icon: Workflow },
];

/** Server Component. */
export default function Hero() {
  return (
    <>
      <div className="pt-[170px] sm:pt-[180px]">
        <div className="wrap">
          <div className="label mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.035] px-4 py-[7px] text-muted">
            <span className="block h-[7px] w-[7px] animate-ping2 rounded-full bg-mint shadow-[0_0_0_0_rgba(61,220,164,0.55)]" />
            {site.availability}
          </div>

          <h1 className="font-display text-[clamp(40px,7vw,84px)] font-bold leading-[0.98] tracking-[-0.045em]">
            {site.name}
          </h1>
          <p className="grad-text mt-2 font-display text-[clamp(20px,2.6vw,32px)] font-semibold tracking-[-0.02em]">
            {site.title}
          </p>

          <p className="mt-7 max-w-[58ch] text-[clamp(16.5px,1.9vw,19.5px)] font-semibold text-ink">
            I design interfaces in Figma, then build them into production code
            — no handoff gap.
          </p>
          <p className="mt-3 max-w-[58ch] text-[clamp(15px,1.7vw,17.5px)] text-muted">
            8+ years on travel and SaaS platforms — booking engines, quotation
            tools, agent CRMs — turning complex workflows into interfaces
            people use all day.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map(({ label, icon: Icon }) => (
              <span key={label} className="chip inline-flex items-center gap-1.5">
                <Icon size={12} strokeWidth={2} />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-ink px-[18px] py-2.5 text-sm font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(79,124,255,0.3)]"
            >
              View case studies
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-lineHi px-[18px] py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06]"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3.5 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="tile">
                <b
                  className={`block font-display text-[clamp(26px,3.4vw,38px)] font-bold leading-none tracking-[-0.035em] ${
                    stat.gradient ? "grad-text" : ""
                  }`}
                >
                  <AnimatedStat value={stat.value} />
                </b>
                <span className="label mt-2.5 block text-faint">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee — duplicated once so the loop is seamless */}
      <div
        className="relative z-[2] mt-[70px] overflow-hidden border-y border-line py-4"
        style={{
          maskImage:
            "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-11">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap font-mono text-[12.5px] uppercase tracking-[0.14em] text-faint"
            >
              <em className="not-italic text-brand">◆</em> {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
