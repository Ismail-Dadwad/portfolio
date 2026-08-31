import type { Metadata } from "next";
import Ambient from "@/components/Ambient";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Ismail Dadwad",
  description:
    "Every project — booking engines, quotation CRMs, a full product redesign and a live product of my own. Design, frontend build, or both.",
};

export default function WorkIndexPage() {
  return (
    <>
      <Ambient />
      <Nav />
      <main id="top">
        <div className="pt-[150px] sm:pt-[170px]">
          <div className="wrap">
            <Reveal>
              <h1 className="font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.05] tracking-[-0.03em]">
                All work
              </h1>
              <p className="mt-3 max-w-[58ch] text-muted">
                Every project, design-only or fully built. Each card says
                exactly what I did — where the build was someone else&apos;s,
                it says that too.
              </p>
            </Reveal>

            <div className="mt-11 grid grid-cols-1 gap-5 pb-28 lg:grid-cols-2">
              {projects.map((project, i) => (
                <Reveal key={project.id} delay={i * 90}>
                  <ProjectCard project={project} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
