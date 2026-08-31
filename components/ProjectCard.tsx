import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

const accents = [
  {
    card: "border-brand/15 bg-gradient-to-br from-brand/[0.10] via-brand/[0.04] to-transparent",
    badge: "text-brand",
    text: "text-brand",
    bar: "bg-brand/20",
    barStrong: "bg-brand/35",
    fill: "bg-brandGrad",
  },
  {
    card: "border-teal/15 bg-gradient-to-br from-teal/[0.10] via-teal/[0.04] to-transparent",
    badge: "text-teal",
    text: "text-teal",
    bar: "bg-teal/20",
    barStrong: "bg-teal/35",
    fill: "bg-teal",
  },
  {
    card: "border-violet/15 bg-gradient-to-br from-violet/[0.10] via-violet/[0.04] to-transparent",
    badge: "text-violet",
    text: "text-violet",
    bar: "bg-violet/20",
    barStrong: "bg-violet/35",
    fill: "bg-violet",
  },
];

type Accent = (typeof accents)[number];

/** Illustrated placeholder UI — a dashboard with a dark sidebar and stat tiles. */
function DashboardMockup({ accent }: { accent: Accent }) {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-[14px] border border-line/60 bg-surface shadow-[0_10px_24px_rgba(20,22,28,0.10)]">
      <div className="flex w-[30%] flex-col gap-2 bg-ink p-2.5">
        <span className={`h-2 w-2 rounded-full ${accent.fill}`} />
        <span className="h-1.5 w-full rounded-full bg-white/15" />
        <span className="h-1.5 w-3/4 rounded-full bg-white/15" />
        <span className="h-1.5 w-full rounded-full bg-white/15" />
      </div>
      <div className="flex-1 p-2.5">
        <span className="mb-2.5 block h-1.5 w-1/2 rounded-full bg-ink/10" />
        <div className="grid grid-cols-3 gap-1.5">
          <span className={`h-8 rounded-md ${accent.bar}`} />
          <span className="h-8 rounded-md bg-ink/[0.05]" />
          <span className="h-8 rounded-md bg-ink/[0.05]" />
        </div>
        <div className="mt-2.5 space-y-1.5">
          <span className="block h-1.5 w-full rounded-full bg-ink/[0.07]" />
          <span className="block h-1.5 w-5/6 rounded-full bg-ink/[0.07]" />
        </div>
      </div>
    </div>
  );
}

/** Illustrated placeholder UI — a phone frame with a search/booking widget. */
function BookingMockup({ accent }: { accent: Accent }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-full w-auto flex-col rounded-[16px] border-[3px] border-ink/10 bg-surface p-2.5 shadow-[0_10px_24px_rgba(20,22,28,0.10)]">
        <span className="mx-auto mb-2.5 h-1 w-7 shrink-0 rounded-full bg-ink/10" />
        <span className="mb-3 h-2 w-2/3 shrink-0 rounded-full bg-ink/10" />
        <div className="mb-1.5 rounded-lg border border-line p-1.5">
          <span className="block h-1.5 w-14 rounded-full bg-ink/10" />
        </div>
        <div className="mb-2.5 rounded-lg border border-line p-1.5">
          <span className="block h-1.5 w-10 rounded-full bg-ink/10" />
        </div>
        <span className={`mt-auto h-5 w-full shrink-0 rounded-full ${accent.fill}`} />
      </div>
    </div>
  );
}

/** Illustrated placeholder UI — a hero heading with a row of category icons. */
function DirectoryMockup({ accent }: { accent: Accent }) {
  return (
    <div className="flex h-full w-full flex-col justify-between overflow-hidden rounded-[14px] border border-line/60 bg-surface p-3 shadow-[0_10px_24px_rgba(20,22,28,0.10)]">
      <div>
        <span className={`mb-2 block h-1.5 w-1/3 rounded-full ${accent.barStrong}`} />
        <span className="mb-1.5 block h-2.5 w-3/4 rounded-full bg-ink/15" />
        <span className="block h-2.5 w-1/2 rounded-full bg-ink/15" />
      </div>
      <div className="flex gap-1.5">
        <span className={`h-6 w-6 rounded-full ${accent.bar}`} />
        <span className="h-6 w-6 rounded-full bg-ink/[0.06]" />
        <span className="h-6 w-6 rounded-full bg-ink/[0.06]" />
        <span className="h-6 w-6 rounded-full bg-ink/[0.06]" />
      </div>
    </div>
  );
}

/** Illustrated placeholder UI — a browser window with a flight-search hero and destination cards. */
function TravelPortalMockup({ accent }: { accent: Accent }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[14px] border border-line/60 bg-surface shadow-[0_10px_24px_rgba(20,22,28,0.10)]">
      <div className="flex items-center gap-1 border-b border-line px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
        <span className="ml-1.5 h-1.5 flex-1 rounded-full bg-ink/[0.06]" />
      </div>
      <div className={`flex flex-1 flex-col justify-center gap-1.5 px-2.5 pt-2 ${accent.bar}`}>
        <span className="h-2 w-2/3 rounded-full bg-ink/25" />
        <span className="h-2 w-1/2 rounded-full bg-ink/25" />
        <div className="mt-1.5 flex items-center gap-1 rounded-md bg-surface p-1.5">
          <span className="h-1.5 flex-1 rounded-full bg-ink/10" />
          <span className="h-1.5 flex-1 rounded-full bg-ink/10" />
          <span className={`h-4 w-7 shrink-0 rounded ${accent.fill}`} />
        </div>
      </div>
      <div className="flex gap-1.5 p-2.5 pt-2">
        <span className="h-6 flex-1 rounded-md bg-ink/[0.06]" />
        <span className="h-6 flex-1 rounded-md bg-ink/[0.06]" />
        <span className="h-6 flex-1 rounded-md bg-ink/[0.06]" />
      </div>
    </div>
  );
}

/** Keyed by project id so each one keeps its theme regardless of grid order. */
const mockupById: Record<string, typeof DashboardMockup> = {
  quotedesks: DashboardMockup,
  dubai: DirectoryMockup,
  infogeni: BookingMockup,
  v3: TravelPortalMockup,
};

/** Keyed by project id so the color moves with the mockup, not the grid slot. */
const accentById: Record<string, Accent> = {
  quotedesks: accents[0],
  dubai: accents[1],
  infogeni: accents[2],
  v3: accents[0],
};

/** Server Component — purely presentational, no state or browser APIs. */
export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const accent = accentById[project.id] ?? accents[index % accents.length];
  const Mockup = mockupById[project.id] ?? DashboardMockup;

  return (
    <a
      href={`/work/${project.id}`}
      className={`group flex flex-col gap-5 overflow-hidden rounded-[24px] border p-5 transition-all duration-300 hover:-translate-y-1.5 sm:flex-row sm:items-center ${accent.card}`}
    >
      <div className="flex flex-1 flex-col">
        <span
          className={`label inline-flex w-fit items-center rounded-lg border border-line bg-surface px-2.5 py-1 ${accent.badge}`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="mt-4 font-display text-xl font-bold tracking-[-0.01em] text-ink">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted">{project.tagline}</p>

        <span className={`mt-3 text-xs font-semibold ${accent.text}`}>{project.category}</span>

        <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${accent.text}`}>
          View Case Study
          <ArrowRight
            size={14}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>

      <div className="h-[160px] w-full shrink-0 sm:h-[150px] sm:w-[44%]">
        <Mockup accent={accent} />
      </div>
    </a>
  );
}
