import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Ambient from "@/components/Ambient";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyTabs from "@/components/CaseStudyTabs";
import FullCaseStudy from "@/components/FullCaseStudy";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

function getProject(slug: string) {
  return projects.find((p) => p.id === slug && p.detail.fullCaseStudy);
}

export function generateStaticParams() {
  return projects
    .filter((p) => p.detail.fullCaseStudy)
    .map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.detail.heading} — Ismail Dadwad`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <>
      <Ambient />
      <Nav />
      <main id="top">
        <div className="pt-[150px] sm:pt-[170px]">
          <div className="wrap">
            <Reveal>
              <a
                href="/#work"
                className="label mb-8 inline-flex items-center gap-2 text-faint transition-colors hover:text-ink"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 12H5M11 6l-6 6 6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to work
              </a>
            </Reveal>

            <Reveal>
              <CaseStudyTabs
                quick={<CaseStudySection project={project} headingLevel="h1" />}
                full={<FullCaseStudy project={project} />}
              />
            </Reveal>

            <Reveal className="mt-14">
              <a
                href="/#work"
                className="label inline-flex items-center gap-2 text-brand transition-colors hover:text-ink"
              >
                View all work
              </a>
            </Reveal>
          </div>
        </div>
      </main>
      <Contact />
    </>
  );
}
