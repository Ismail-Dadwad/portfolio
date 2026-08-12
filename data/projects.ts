export type ProjectStatus = "shipped" | "design" | "own";

export type ProjectImage = {
  /** Path inside /public, e.g. "/work/quotedesks-dashboard.png" */
  src: string;
  /** Describe what the screen shows — used by screen readers and if the image fails */
  alt: string;
  /** Optional caption printed under the image in the case study */
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  role: string;
  status: ProjectStatus;
  statusLabel: string;
  sideLabel: string;
  summary: string;
  stack: string[];
  metric?: { value: string; caption: string };
  featured?: boolean;
  detail: {
    caseLabel: string;
    heading: string;
    blocks: { label: string; text: string }[];
    result?: { value: string; caption: string };
    /** Screenshots shown in the case study, revealed on click. Omit if none yet. */
    gallery?: ProjectImage[];
  };
};

export const projects: Project[] = [
  {
    id: "quotedesks",
    title: "Quote Desks CRM",
    role: "Design + frontend build",
    status: "shipped",
    statusLabel: "Shipped · Design + build",
    sideLabel: "2024",
    summary:
      "A reporting dashboard agents glanced at and left — rebuilt into an action surface with global search, a live activity feed and quick-filter tables. Shipped inside the existing stack, no rewrite.",
    stack: ["Figma", "Design system", "JavaScript ES6+", "SCSS", "Bootstrap 5", "GSAP"],
    metric: { value: "+25%", caption: "User engagement after rollout" },
    featured: true,
    detail: {
      caseLabel: "Case 01",
      heading: "Quote Desks CRM — dashboard redesign",
      gallery: [
        {
          src: "/work/quotedesks-old.jpg",
          alt: "Original Quote Desks dashboard — static reporting tiles only",
          caption: "Before — numbers to look at, nothing to act on",
        },
        {
          src: "/work/quotedesks-new.jpg",
          alt: "Redesigned Quote Desks dashboard with global search and quick-filter tables",
          caption: "After — search, activity feed and filterable enquiry table",
        },
      ],
      blocks: [
        {
          label: "The problem",
          text: "The dashboard reported numbers but couldn't be worked from. Agents logged in, glanced at totals, then left to hunt through menus for the enquiry they actually needed. The landing screen was a dead end.",
        },
        {
          label: "What I did",
          text: "Rebuilt it as an action surface: global search across enquiries and quotes, a live activity feed, quick-filter tables that open records in place. Status leads the hierarchy, so what's overdue is visible first.",
        },
        {
          label: "Constraints",
          text: "No backend rewrite, no framework migration — it had to ship inside the existing Bootstrap and vanilla JS stack, and stay learnable for agents already using it daily.",
        },
      ],
      result: { value: "+25%", caption: "engagement, measured on returning daily agents" },
    },
  },
  {
    id: "pace",
    title: "Pace Travels Platform",
    role: "Frontend lead",
    status: "shipped",
    statusLabel: "Shipped · Frontend lead",
    sideLabel: "B2B + B2C",
    summary:
      "Booking engine across flights, hotels, buses and cabs for 1,000+ daily users. Shared component library, sticky fare summary, and performance work on results pages.",
    stack: ["JavaScript ES6+", "Bootstrap", "jQuery", "REST APIs"],
    metric: { value: "−35%", caption: "Booking friction" },
    detail: {
      caseLabel: "Case 02",
      heading: "Pace Travels — B2B + B2C booking platform",
      blocks: [
        {
          label: "The problem",
          text: "Four booking products, each with its own flow and its own drop-off point. Users abandoned most often at the moment price became uncertain.",
        },
        {
          label: "What I did",
          text: "Built a shared component library so search, results and checkout matched across all four. Added a sticky fare summary keeping the total visible while options change, and cut visible steps at checkout.",
        },
        {
          label: "Performance",
          text: "Lazy loading, image optimisation and code splitting on results pages — the heaviest payload and the likeliest exit point. REST integration across booking, itinerary and enquiry flows.",
        },
      ],
      result: { value: "−35%", caption: "booking friction, from checkout redesign and frontend performance" },
    },
  },
  {
    id: "dubai",
    title: "Dubai Agency CRM",
    role: "Frontend build",
    status: "shipped",
    statusLabel: "Shipped · Frontend build",
    sideLabel: "Internal",
    summary:
      "Modular Trip Builder Hub for assembling multi-day itineraries, with a client-side margin calculator so pricing updates the moment a component changes.",
    stack: ["Laravel views", "JavaScript", "Bootstrap", "SCSS"],
    detail: {
      caseLabel: "Case 03",
      heading: "Dubai Agency CRM — quotations & itineraries",
      blocks: [
        {
          label: "The problem",
          text: "Agents assembled multi-day trips by hand and rebuilt the same quotation each time. Margins were worked out off-screen, so a client's pricing question took hours to answer.",
        },
        {
          label: "What I did",
          text: "Built a modular Trip Builder Hub where days and services compose into a quotation, plus a client-side margin calculator that reprices instantly. Automated follow-up scheduling on every enquiry.",
        },
        {
          label: "Stack note",
          text: "Frontend built into a Laravel application — Blade views with HTML5, CSS3, JavaScript and Bootstrap. No SPA framework; interactivity is vanilla JS on server-rendered pages.",
        },
      ],
    },
  },
  {
    id: "v3",
    title: "Pace Travels v3",
    role: "UI/UX design only",
    status: "design",
    statusLabel: "Design only — built by others",
    sideLabel: "Figma",
    summary:
      "Full product redesign in Figma — every screen plus the design system, tokens and component variants. Implemented by the in-house Angular team; the code is theirs.",
    stack: ["Figma", "Design system", "Dev Mode handoff"],
    detail: {
      caseLabel: "Case 04 · Design only",
      heading: "Pace Travels v3 — product redesign & design system",
      gallery: [
        {
          src: "/work/pacetravels-v3-old.png",
          alt: "Original Pace Travels homepage — dated layout, cluttered hero",
          caption: "Before — the v2 homepage",
        },
        {
          src: "/work/pacetravels-v3-new.png",
          alt: "Redesigned Pace Travels homepage with clean booking widget and hero",
          caption: "After — v3, built by the in-house Angular team from this design",
        },
      ],
      blocks: [
        {
          label: "Scope",
          text: "Designed the complete v3 interface in Figma: every screen across booking, agent and admin flows, plus the system underneath — variables, tokens, component variants, interaction states.",
        },
        {
          label: "Handoff",
          text: "Documented for engineering through Figma Dev Mode: spacing scale, colour tokens, component props and responsive behaviour, so the build never depended on me being in the room.",
        },
        {
          label: "Who built it",
          text: "Implemented by the in-house Angular team. I designed and specified it — the frontend code is theirs. It's here for the design work, not the build.",
        },
      ],
    },
  },
  {
    id: "infogeni",
    title: "Infogeni",
    role: "Own product — design + build",
    status: "own",
    statusLabel: "Own product — in progress",
    sideLabel: "Live",
    summary:
      "A web presence platform for local businesses. Name, brand, UI design and frontend build — all mine. Live on Vercel, and how I'm learning Next.js on real problems.",
    stack: ["Next.js", "TypeScript", "Figma", "Vercel"],
    detail: {
      caseLabel: "Case 05 · Own product",
      heading: "Infogeni — web presence platform for local businesses",
      gallery: [
        {
          src: "/work/infogeni-platform.png",
          alt: "Infogeni landing page — business profile link, QR code and contact card",
          caption: "Landing page — the pitch and a live business profile preview",
        },
      ],
      blocks: [
        {
          label: "The idea",
          text: "A profile page a small business can actually keep updated — set up in an afternoon, not a quarter, for owners who can't justify an agency.",
        },
        {
          label: "What I did",
          text: "Everything: name, brand identity and logo, UI design in Figma, then the frontend — landing page and business profile pages — deployed to production on Vercel.",
        },
        {
          label: "Why it's here",
          text: "It's how I'm learning Next.js, TypeScript and the App Router on real problems instead of tutorials. Live and working, still being built out. Happy to walk through the code.",
        },
      ],
    },
  },
];
