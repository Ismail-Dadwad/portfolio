import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import Ambient from "@/components/Ambient";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyTabs from "@/components/CaseStudyTabs";
import FullCaseStudy from "@/components/FullCaseStudy";
import CaseStudyGate from "@/components/CaseStudyGate";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { GATE_COOKIE, GATE_PASSWORD } from "@/lib/auth";
import { unlockCaseStudy } from "./actions";

function getProject(slug: string) {
  return projects.find((p) => p.id === slug);
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
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
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const unlocked =
    !project.gated || (await cookies()).get(GATE_COOKIE)?.value === GATE_PASSWORD;
  const hasError = (await searchParams).error === "1";

  return (
    <>
      <Ambient />
      <Nav />
      <main id="top">
        <div className="pt-[150px] sm:pt-[170px]">
          <div className="wrap">
            <Reveal>
              <a
                href="/work"
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
              {!unlocked ? (
                <CaseStudyGate
                  action={unlockCaseStudy.bind(null, project.id)}
                  hasError={hasError}
                />
              ) : project.detail.fullCaseStudy ? (
                <CaseStudyTabs
                  quick={<CaseStudySection project={project} headingLevel="h1" />}
                  full={<FullCaseStudy project={project} />}
                />
              ) : (
                <CaseStudySection project={project} headingLevel="h1" />
              )}
            </Reveal>

            <Reveal className="mt-14">
              <a
                href="/work"
                className="label inline-flex items-center gap-2 text-brand transition-colors hover:text-ink"
              >
                View all work
              </a>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
