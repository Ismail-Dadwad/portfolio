import { about } from "@/data/site";
import Reveal from "./Reveal";

/** Server Component. */
export default function About() {
  return (
    <section id="about" className="relative z-[2] py-24">
      <div className="wrap">
        <Reveal>
          <span className="label mb-4 inline-flex items-center gap-2.5 text-faint before:block before:h-px before:w-[26px] before:bg-brandGrad before:content-['']">
            About
          </span>
        </Reveal>

        <Reveal className="mt-6">
          <div className="grid items-start gap-11 md:grid-cols-[0.85fr_1.5fr]">
            {/*
              Swap this block for a real photo:
              <Image src="/ismail.jpg" alt="Ismail Dadwad" width={400} height={400}
                     className="aspect-square rounded-[22px] object-cover" />
            */}
            <div className="relative flex aspect-square max-w-[220px] items-center justify-center overflow-hidden rounded-[22px] border border-line bg-surface md:max-w-none">
              <span className="absolute inset-0 bg-brandGrad opacity-[0.16]" />
              <b className="grad-text relative z-[2] font-display text-[74px] font-bold tracking-[-0.04em]">
                ID
              </b>
            </div>

            <div>
              {about.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "mb-3.5 text-xl font-semibold text-ink"
                      : "mb-3.5 text-muted"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
