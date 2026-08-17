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
  detail: {
    caseLabel: string;
    heading: string;
    blocks: { label: string; text: string }[];
    result?: { value: string; caption: string };
    /** Screenshots shown in the case study, revealed on click. Omit if none yet. */
    gallery?: ProjectImage[];
    /** Deep-dive content for the project's dedicated /work/[slug] page. Omit to skip that page. */
    fullCaseStudy?: {
      intro: string;
      personas: { role: string; goal: string; painPoint: string }[];
      sections: { heading: string; text: string; image?: ProjectImage }[];
    };
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
      fullCaseStudy: {
        intro:
          "The dashboard was the first screen every agent saw, every shift — and the one they trusted least. This is the full story of turning it from a reporting page into a screen worth opening.",
        personas: [
          {
            role: "The Agent",
            goal: "Close enquiries fast, without leaving the dashboard to find what needs attention.",
            painPoint:
              "Had to leave the landing screen and hunt through menus for anything that actually needed action — the dashboard itself did nothing.",
          },
        ],
        sections: [
          {
            heading: "Discovery",
            text: "Watching agents use the old dashboard, the pattern was consistent: log in, glance at the four static tiles, then leave through the sidebar to hunt for whatever enquiry actually needed attention. The numbers were accurate but inert — there was nothing on the landing screen you could click into and act on. It was a report, not a workspace.",
            image: {
              src: "/work/quotedesks-old.jpg",
              alt: "Original Quote Desks dashboard — static reporting tiles only",
            },
          },
          {
            heading: "Architecture",
            text: "The redesign started from the question \"what would an agent want to do right now?\" instead of \"what should we report?\". That reprioritised the layout: a global search across enquiries and quotes up top, a live activity feed showing what teammates just touched, and quick-filter tables that open a record in place rather than routing to another page. Status leads the visual hierarchy throughout, so anything overdue surfaces first. Built in Figma with a small component system, then structured into a SCSS component layer and vanilla JS modules that slot into the existing Bootstrap 5 app with no rewrite, with GSAP as the interaction layer handling the activity feed and table transitions.",
          },
          {
            heading: "Constraints",
            text: "This wasn't a rewrite. It had to ship inside the existing Bootstrap 5 and vanilla JavaScript stack the rest of the CRM runs on, with no backend changes and no framework migration — and it had to stay immediately learnable for agents who already used the old dashboard every day, since retraining time wasn't on the table.",
          },
          {
            heading: "Outcome",
            text: "Engagement on the dashboard rose 25%, measured by returning daily agents actually using the landing screen instead of routing straight past it into the menus — the clearest sign the redesigned screen earned a place in the daily workflow instead of being skipped.",
            image: {
              src: "/work/quotedesks-new.jpg",
              alt: "Redesigned Quote Desks dashboard with global search and quick-filter tables",
            },
          },
        ],
      },
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
    metric: { value: "100%", caption: "Enquiries get automated follow-up" },
    detail: {
      caseLabel: "Case 02",
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
      fullCaseStudy: {
        intro:
          "Agents were rebuilding the same multi-day quotation from scratch every time a client's plans shifted, and margins lived off-screen, not on the quotation itself. This is the story of turning that into a modular hub that reprices as fast as an agent can click.",
        personas: [
          {
            role: "The Travel Agent",
            goal: "Assemble an accurate multi-day quotation quickly and answer a client's pricing question on the spot.",
            painPoint:
              "Rebuilt the same quotation by hand for every itinerary change, with margins worked out off-screen — a pricing question could take hours to answer.",
          },
        ],
        sections: [
          {
            heading: "Discovery",
            text: "Agents were assembling multi-day trips manually, and every time a client changed a day or swapped a service, the quotation got rebuilt close to from scratch. Margins weren't visible anywhere in the tool — they were worked out separately, off-screen, which meant a client's simple pricing question could take hours to turn around.",
          },
          {
            heading: "Architecture",
            text: "The Trip Builder Hub is modular: days and services compose into a quotation as building blocks, so changing one day doesn't mean rebuilding the rest. A client-side margin calculator sits alongside it, repricing instantly as components change instead of requiring a separate calculation step. Automated follow-up scheduling runs on every enquiry, so nothing waits on someone remembering to check back in.",
          },
          {
            heading: "Constraints",
            text: "This shipped inside an existing Laravel application — Blade views with HTML5, CSS3 and vanilla JavaScript, no SPA framework. Interactivity had to work on server-rendered pages within that stack, not around it.",
          },
          {
            heading: "Outcome",
            text: "Every enquiry now gets automated follow-up scheduling with no manual step, and margin questions that used to take hours to work through off-screen now reprice instantly as the quotation is built.",
          },
        ],
      },
    },
  },
  {
    id: "v3",
    title: "Pace Travels v3",
    role: "UI/UX design only",
    status: "design",
    statusLabel: "Design only · UI Design",
    sideLabel: "Figma",
    summary:
      "Full product redesign in Figma — every screen plus the design system, tokens and component variants. Implemented by the in-house Angular team; the code is theirs.",
    stack: ["Figma", "Design system", "Dev Mode handoff"],
    metric: { value: "100%", caption: "Of screens redesigned" },
    detail: {
      caseLabel: "Case 03 · Design only",
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
      fullCaseStudy: {
        intro:
          "A full product redesign, done entirely in Figma with no build responsibility — this is the design side of the story: the scope, the system underneath it, and how it got handed off to a team I wasn't building alongside day to day.",
        personas: [
          {
            role: "The Traveller",
            goal: "Search and compare flights, hotels and packages quickly, then book with confidence.",
            painPoint:
              "The dated v2 layout buried the booking widget under a cluttered hero, with no clear path from landing to search.",
          },
          {
            role: "The Ops / Admin user",
            goal: "Manage bookings and content efficiently across agent and admin screens.",
            painPoint:
              "Inconsistent components across admin screens before the design system existed — every screen looked and behaved a little differently.",
          },
        ],
        sections: [
          {
            heading: "Scope",
            text: "V3 covered every screen across the platform's booking, agent and admin flows — not a visual refresh of the existing pages, but a full interface redesign built up from a shared system: variables, colour and spacing tokens, component variants and interaction states, so every screen was assembled from the same underlying parts rather than designed one-off.",
            image: {
              src: "/work/pacetravels-v3-old.png",
              alt: "Original Pace Travels homepage — dated layout, cluttered hero",
            },
          },
          {
            heading: "Design system & architecture",
            text: "For a design-only project, \"architecture\" means the system underneath the screens, not code: the bulk of the effort went into tokens for colour, spacing and type, component variants covering every state a booking flow actually hits (loading, error, empty, selected), and documented interaction behaviour so the pattern stayed consistent whether it showed up in the booking widget or an admin table.",
          },
          {
            heading: "Handoff",
            text: "Since engineering was a separate in-house Angular team, the work had to be legible without me in the room: everything went through Figma Dev Mode, with spacing scale, colour tokens, component props and responsive behaviour documented so implementation decisions didn't depend on a Slack thread.",
          },
          {
            heading: "Outcome",
            text: "V3 is live, built by the in-house Angular team directly from this design and system. It's included here for the design and systems-thinking work, not as a build credit — the frontend code is theirs.",
            image: {
              src: "/work/pacetravels-v3-new.png",
              alt: "Redesigned Pace Travels homepage with clean booking widget and hero",
            },
          },
        ],
      },
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
    metric: { value: "120+", caption: "Businesses live on Infogeni" },
    detail: {
      caseLabel: "Case 04 · Own product",
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
      fullCaseStudy: {
        intro:
          "Most small businesses I looked at had a WhatsApp number and not much else — no page to point people to, no single link that says who they are. Infogeni is the name, brand, design and build for a profile page they can actually set up themselves, in an afternoon.",
        personas: [
          {
            role: "The Local Business Owner",
            goal: "Get a professional, shareable online presence without hiring a developer or an agency.",
            painPoint:
              "Only had a WhatsApp number and scattered social posts to point customers to — no dedicated page, shareable link or QR code for a shopfront or business card.",
          },
          {
            role: "The Customer Searching Nearby",
            goal: "Find and contact a local business quickly — by name, category or city — without digging through social media.",
            painPoint:
              "No consistent place to search local businesses and get straight to a call or chat button.",
          },
        ],
        sections: [
          {
            heading: "The idea",
            text: "A profile page a small business can actually keep updated, set up in an afternoon rather than a quarter — for owners who can't justify hiring an agency just to get a proper page online.",
          },
          {
            heading: "Brand & design",
            text: "Name, brand identity and logo, then the full UI in Figma: a landing page that pitches the idea, and a business profile template with a shareable link, QR code, and one-tap Chat and Call buttons — designed to be legible at a glance for someone searching by business, category or city.",
            image: {
              src: "/work/infogeni-platform.png",
              alt: "Infogeni landing page — business profile link, QR code and contact card",
            },
          },
          {
            heading: "Build",
            text: "Frontend built in Next.js with TypeScript and the App Router — landing page and business profile pages, deployed to production on Vercel. It's the real problem set I'm learning the framework on, not a tutorial project.",
          },
          {
            heading: "Outcome",
            text: "120+ businesses live across 3 cities, with an average setup time under 2 hours from signup to a working, shareable profile.",
          },
        ],
      },
    },
  },
];
