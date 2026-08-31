import Image from "next/image";
import { Briefcase, MapPin, Globe, Palette, Layers, Waypoints, Code2, Users, Send } from "lucide-react";
import { site, about, whatIDo, stats } from "@/data/site";
import Reveal from "./Reveal";

const facts = [
  { icon: Briefcase, label: `${stats[0].value} Years Experience` },
  { icon: MapPin, label: site.location },
  { icon: Globe, label: "Open to Remote" },
];

const doIcons = [Palette, Layers, Waypoints, Code2, Users];

/** Server Component. */
export default function About() {
  return (
    <section id="about" className="relative z-[2] flex min-h-screen items-center py-24">
      <div className="wrap w-full">
        <Reveal>
          <span className="label mb-4 inline-flex items-center gap-2.5 text-faint before:block before:h-px before:w-[26px] before:bg-brandGrad before:content-['']">
            Who I am
          </span>
          <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.04] tracking-[-0.04em]">
            About Me
          </h2>
          <p className="mt-4 max-w-[58ch] text-muted">
            The story behind the pixels and the code.
          </p>
        </Reveal>

        <Reveal className="mt-11">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.35fr_1fr] lg:items-start">
            <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-full border border-line shadow-[0_20px_45px_rgba(20,22,28,0.12)] lg:mx-0">
              <Image
                src="/ismail.jpg"
                alt={site.name}
                fill
                sizes="(min-width: 1024px) 260px, 60vw"
                className="object-cover object-top"
              />
            </div>

            <div>
              <p className="text-xl font-semibold text-ink">
                I&apos;m {site.name}, a {site.title} with a frontend mindset.
              </p>
              <p className="mt-3.5 text-muted">{about}</p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {facts.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 text-sm text-muted"
                  >
                    <Icon size={15} strokeWidth={2} className="text-brand" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="tile">
              <span className="label text-faint">What I do</span>
              <ul className="mt-4 flex flex-col gap-3.5">
                {whatIDo.map((item, i) => {
                  const Icon = doIcons[i % doIcons.length];
                  return (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                        <Icon size={14} strokeWidth={2} className="text-brand" />
                      </span>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <a
            href={`mailto:${site.email}`}
            className="group flex flex-col items-start justify-between gap-5 rounded-[24px] bg-brandGrad p-7 text-white transition-transform duration-300 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:p-8"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Send size={18} strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">Have a project in mind?</h3>
                <p className="mt-0.5 text-sm text-white/80">
                  I&apos;m currently open to new opportunities. Let&apos;s build something
                  amazing together.
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-bg transition-transform duration-300 group-hover:translate-x-1">
              Let&apos;s Connect →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
