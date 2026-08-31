export type ProjectStatus = "shipped" | "design" | "own" | "prelaunch";

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
  /** Short one-line hook shown on the card grid. */
  tagline: string;
  /** Short domain/type tags shown on the card, e.g. "SaaS, CRM". */
  category: string;
  summary: string;
  stack: string[];
  metric?: { value: string; caption: string };
  /** True if this project's case study contains real business details and should sit behind the shared password gate. */
  gated?: boolean;
  detail: {
    caseLabel: string;
    heading: string;
    /** Design role, design tools/methods (not build tech), and year — shown in the case study header meta panel. */
    meta?: { role: string[]; tools: string[]; year: string };
    /** One paragraph introducing the product, shown above the Problem card. */
    overview?: string;
    /** Short, scannable problem points shown as mini tiles inside the Problem card. */
    problemPoints?: string[];
    /** Real tech used to build it — shown as an icon row, separate from the design-focused meta.tools. */
    techInvolved?: string[];
    blocks: { label: string; text: string }[];
    result?: { value: string; caption: string };
    /** Screenshots shown in the case study, revealed on click. Omit if none yet. */
    gallery?: ProjectImage[];
    /** Deep-dive content for the project's dedicated /work/[slug] page. Omit to skip that page. */
    fullCaseStudy?: {
      intro: string;
      personas: { role: string; goal: string; painPoint: string }[];
      sections: { heading: string; text: string; image?: ProjectImage }[];
      /** Optional project-specific process steps, shown after the timeline. */
      process?: { title: string; text: string }[];
      /** Optional real design system — shown after the timeline. */
      designSystem?: {
        colorName: string;
        colors: { label: string; hex: string }[];
        font: string;
        typeScale: number[];
        spacingBase: number;
      };
    };
  };
};

export const projects: Project[] = [
  {
    id: "quotedesks",
    title: "QuoteDesks",
    role: "Product Lead & UI/UX Design",
    status: "prelaunch",
    statusLabel: "Built · Pre-launch",
    sideLabel: "2025",
    tagline: "A new SaaS quoting platform for travel agents, built from the ground up.",
    category: "SaaS, Travel Tech",
    summary:
      "Travel agents manage their own customer enquiries across WhatsApp, spreadsheets and email — losing context and follow-ups between tools. QuoteDesks is a new, standalone SaaS product I initiated and led, built for agents to run that entire workflow in one place.",
    stack: ["Figma", "Design system", "JavaScript ES6+", "SCSS", "Bootstrap 5", "GSAP"],
    metric: { value: "2,500+", caption: "B2B agents in the target launch market" },
    gated: true,
    detail: {
      caseLabel: "Case 01",
      heading: "QuoteDesks — a new quoting platform for travel agents",
      meta: {
        role: ["Product Lead", "UI/UX Design", "Competitor Research"],
        tools: ["Figma", "UX Research", "Auto Layout", "Wireframing & Prototyping"],
        year: "2025",
      },
      overview:
        "QuoteDesks is a standalone SaaS product I started and led in 2025 — separate from Pace Tourism CRM (our in-house B2B tool). Where Pace Tourism CRM manages our own team's relationship with agents, QuoteDesks is for agents themselves, to manage their own customers: receiving enquiries, building quotations and following up, without switching between WhatsApp, spreadsheets and email. I drew directly on lessons from designing Pace Tourism CRM solo in 2020, researched competitors to find what they were getting wrong, and planned the feature set with one goal — save agents as much time per quotation as possible. A team then joined to build it out.",
      problemPoints: [
        "Customer context scattered across WhatsApp, spreadsheets and email",
        "Follow-ups easy to miss once a quotation is sent",
        "Competitor tools required training before an agent could generate a single quotation",
      ],
      techInvolved: ["Figma", "JavaScript", "SCSS", "Bootstrap", "GSAP"],
      blocks: [
        {
          label: "What I did",
          text: "Led the project from the start: researched competitors hands-on, interviewed our own in-house Pace Tourism CRM team, and talked to real agents at the OTM travel trade exhibition. Planned the feature set and did the hands-on UI/UX design myself, then worked with a team to build it.",
        },
        {
          label: "Constraints",
          text: "Not launched yet — built and validated ahead of a planned rollout to the 2,500 agents Pace Tourism already has business relationships with, so it had to be ready to sell into an existing audience, not a cold market.",
        },
      ],
      result: { value: "2,500+", caption: "B2B agents Pace Tourism already works with — the target launch market" },
      gallery: [
        {
          src: "/sketch/dash-enquiry-screen.jpg",
          alt: "Rough sketch of the QuoteDesks dashboard and Generate Form accordion structure",
          caption: "Dashboard and Generate Form — early structure sketch",
        },
        {
          src: "/sketch/signup-flow.jpg",
          alt: "Rough sketch of the QuoteDesks signup and onboarding flow",
          caption: "Signup/onboarding — flow sketch",
        },
        {
          src: "/sketch/signup-screen.jpg",
          alt: "Rough wireframes of the Getting Started signup screens",
          caption: "Getting Started — screen wireframes",
        },
        {
          src: "/sketch/enquiry-flow.jpg",
          alt: "Rough sketch of the Generate Enquiry form flow",
          caption: "Generate Enquiry — flow sketch",
        },
      ],
      fullCaseStudy: {
        intro:
          "Travel agents need a faster, more organized way to move an enquiry toward booking — but doing it across WhatsApp, spreadsheets, email and quotation documents makes it hard to keep customer context and follow up consistently. QuoteDesks is a new product built to fix that, and this is the research, the decisions and the real screens behind it.",
        personas: [
          {
            role: "The Travel Agent",
            goal: "Move a customer from enquiry to booking quickly, without losing context or missing a follow-up.",
            painPoint:
              "Managed enquiries across WhatsApp, spreadsheets and email — recreating customer context by hand at every step, with follow-ups easy to forget once a quotation was sent.",
          },
          {
            role: "The Manager",
            goal: "See which enquiries actually need attention, not just how many leads exist.",
            painPoint:
              "Total lead counts didn't say what mattered — which enquiries were overdue, which agents needed support, or where the pipeline was actually stuck.",
          },
        ],
        sections: [
          {
            heading: "Discovery",
            text: "Three real sources, not one. I sat through competitor demo sessions myself to see how their products actually behaved. I interviewed our own in-house Pace Tourism CRM team — the 35-50 people across Dubai, Thailand and Vietnam who process agent enquiries daily — about what was slow and what needed fixing. And I talked directly to agents at the OTM travel trade exhibition, some already known to us, some brand new, who use other companies' software and told me firsthand what they were struggling with.",
          },
          {
            heading: "Research findings",
            text: "The clearest finding: in every competitor demo, nobody could generate a quotation without training first. One specific example stuck — adding an item that wasn't already in a competitor's master list took 5 to 8 clicks. I redesigned that flow down to 2 clicks in QuoteDesks. Beyond that: customer context scattered across tools, follow-ups missed after a quotation is sent, and a quotation acting as the customer's first real impression of the agency, not just paperwork.",
          },
          {
            heading: "The insight",
            text: "The reframe: agents don't need more tools, they need a connected workflow that keeps customer context, quotation creation and follow-up in one place. How might we help travel agents move from enquiry to booking with less manual work and fewer workflow interruptions? That question shaped every screen that followed.",
          },
          {
            heading: "Design principles",
            text: "Four principles carried the design: keep customer context visible throughout the workflow; automate the repetitive parts of quotations and follow-ups; make the next action obvious rather than making agents hunt for it; and design quotations as a sales experience, not just a document customers receive.",
          },
          {
            heading: "Architecture",
            text: "The Generate Enquiry module — the core of the product — is structured in layers: Basic Details (guest info) leads into Package Configuration (currency, single vs. multi-country, cost type, package type), which opens Place & Hotel Details, where each place can carry its own hotels. Content sections (itinerary, sightseeing, transfers, inclusions, exclusions, terms, cancellation policy) and a live costing summary sit underneath, before a Review Details step and submission. Same layered logic on the dashboard: quick actions and stats up top, activity and upcoming work below.",
            image: {
              src: "/sketch/dash-enquiry-screen.jpg",
              alt: "Rough sketch of the QuoteDesks dashboard and Generate Form accordion structure",
              caption: "Early sketch — dashboard layout and the Generate Form's section structure",
            },
          },
          {
            heading: "Getting started",
            text: "New agents land on the public site, start a 1-month free trial, and enter their email — new users go through business and contact details, then payment, then get a login link by email to set a password before reaching the dashboard; existing users go straight to login.",
            image: {
              src: "/sketch/signup-flow.jpg",
              alt: "Rough sketch of the QuoteDesks signup and onboarding flow",
              caption: "Early sketch — signup/onboarding flow, from trial to dashboard",
            },
          },
          {
            heading: "Creating a quotation",
            text: "Once inside, an agent works through Guest Details, Package Configuration and Place Details — deciding single vs. multi-country, detailed vs. lumpsum costing, and full package vs. hotel/land/transfer only. Each place can carry one or more hotel options, then sightseeing, transfers, visa and optional add-ons attach underneath. Markup strategy and refundable vs. non-refundable rates get decided per hotel. The system totals everything automatically before a final Review Details check and submission.",
            image: {
              src: "/sketch/enquiry-flow.jpg",
              alt: "Rough sketch of the Generate Enquiry form flow, from guest details to review and generate",
              caption: "Early sketch — the Generate Enquiry form flow",
            },
          },
          {
            heading: "Build",
            text: "The process on every complex screen: research and collect the real requirements, bring them to the team to discuss, then design in Figma. Once management signed off, I built some screens myself and pushed them to GitHub, briefing backend developers on the more complex form logic directly before they built against it — then QA tested before merge. Built in Figma with a small component system, structured into SCSS and vanilla JS modules on Bootstrap 5, with GSAP handling interaction — no framework rewrite, and it had to stay learnable without retraining.",
          },
          {
            heading: "Outcome",
            text: "QuoteDesks is built and validated, not yet launched. The plan is to sell it into the 2,500 B2B agents Pace Tourism already has active relationships with — plus new agents met at OTM — rather than into a cold market, since that relationship and the pain points behind it are already real.",
          },
          {
            heading: "Learnings",
            text: "The biggest lesson came from the competitor demos, not a textbook: fewer clicks isn't a nice-to-have, it's the difference between an agent adopting a tool and giving up on it without training. The 5-to-8-click to 2-click change on adding master data was a small fix with an outsized effect, and it's the principle I now default to on every form — count the clicks before deciding the design is done.",
          },
        ],
        process: [
          {
            title: "Research",
            text: "Competitor demos, Pace Tourism CRM team interviews, and conversations with real agents at OTM.",
          },
          {
            title: "Define",
            text: "Turned the research into a single problem statement and a \"how might we\" that shaped every screen.",
          },
          {
            title: "Ideate",
            text: "Sketched the module architecture and the two core flows — signup and Generate Enquiry — before touching high-fidelity design.",
          },
          {
            title: "Design",
            text: "Hands-on UI/UX in Figma, built on an accessible color system, an 8px spacing grid and Inter for type.",
          },
          {
            title: "Build & Validate",
            text: "Briefed backend devs on complex form logic, reviewed builds against the Figma spec, and QA tested before merge.",
          },
        ],
        designSystem: {
          colorName: "Violet",
          colors: [
            { label: "Light", hex: "#F2EFFC" },
            { label: "Normal", hex: "#795CD9" },
            { label: "Dark", hex: "#5B44A0" },
            { label: "Darker", hex: "#2A204D" },
          ],
          font: "Inter",
          typeScale: [0.654, 0.808, 1.0, 1.237, 1.53, 1.893, 2.341, 2.896, 3.583],
          spacingBase: 8,
        },
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
    tagline: "Building a digital presence platform for local businesses.",
    category: "Web, SaaS",
    summary:
      "A web presence platform for local businesses. Name, brand, UI design and frontend build — all mine. Live on Vercel, and how I'm learning Next.js on real problems.",
    stack: ["Next.js", "TypeScript", "Figma", "Vercel"],
    metric: { value: "120+", caption: "Businesses live on Infogeni" },
    detail: {
      caseLabel: "Case 02 · Own product",
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
  {
    id: "dubai",
    title: "Pace Tourism LLC CRM",
    role: "Frontend build",
    status: "shipped",
    statusLabel: "Shipped · Frontend build",
    sideLabel: "Internal",
    tagline: "Streamlining multi-day itineraries with instant margin pricing.",
    category: "Travel, CRM",
    summary:
      "Modular Trip Builder Hub for assembling multi-day itineraries, with a client-side margin calculator so pricing updates the moment a component changes.",
    stack: ["Laravel views", "JavaScript", "Bootstrap", "SCSS"],
    metric: { value: "100%", caption: "Enquiries get automated follow-up" },
    gated: true,
    detail: {
      caseLabel: "Case 03",
      heading: "Pace Tourism LLC CRM — quotations & itineraries",
      gallery: [
        {
          src: "/work/crm-old.png",
          alt: "Original Pace Tourism LLC CRM — manual trip assembly, no visible margins",
          caption: "Before — margins worked out off-screen, one quotation at a time",
        },
        {
          src: "/work/crm-new.png",
          alt: "Redesigned Pace Tourism LLC CRM with modular Trip Builder Hub and live margin calculator",
          caption: "After — modular days and services, margins reprice instantly",
        },
      ],
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
    role: "UI/UX Designer",
    status: "prelaunch",
    statusLabel: "Design only · Pre-launch",
    sideLabel: "Figma",
    tagline: "Redesigning Pace Travels for a clearer path from discovery to enquiry.",
    category: "Travel, Design",
    summary:
      "Pace Travels helps travellers explore destinations, discover packages and reach the team with an enquiry. I led the full UI/UX redesign — research, information architecture, wireframes, UI and the design system underneath it — to make that journey fast, trustworthy and easy to scan. Design complete, not yet launched.",
    stack: ["Figma", "Design system", "Wireframing", "Prototyping"],
    metric: { value: "100%", caption: "Of screens redesigned" },
    detail: {
      caseLabel: "Case 04 · Design only",
      heading: "Pace Travels — creating a better digital travel experience",
      meta: {
        role: ["UI/UX Designer", "Information Architecture", "Wireframing", "Design System"],
        tools: ["Figma", "UX Research", "Wireframing & Prototyping", "Design Systems"],
        year: "2026",
      },
      overview:
        "Pace Travels helps travellers explore destinations, discover packages and reach the team with an enquiry. Planning a trip means wading through a lot of information — destinations, packages, comparisons — so the challenge was presenting all of that clearly, while still answering three questions fast: where can I go, what are my options, and how do I get in touch. I led the redesign end to end — research, information architecture, wireframes, UI and the design system underneath it. Design complete, not yet launched.",
      problemPoints: [
        "Too much travel information to scan without feeling overwhelmed",
        "No clear path from browsing a destination to making an enquiry",
        "Inconsistent UI patterns across pages made the experience feel disjointed",
      ],
      gallery: [
        {
          src: "/work/pacetravels-v3-old.png",
          alt: "Original Pace Travels homepage — dated layout, cluttered hero",
          caption: "Before — the previous homepage",
        },
        {
          src: "/work/pacetravels-v3-new.png",
          alt: "Redesigned Pace Travels homepage with a clear hero and structured destination content",
          caption: "After — the v3 redesign (not yet launched)",
        },
      ],
      blocks: [
        {
          label: "What I did",
          text: "Led the UX process end to end — research and information architecture, wireframes for key flows, then the full UI redesign and the design system underneath it: navigation, cards, forms, destination and package layouts, and calls-to-action, so the pattern stayed consistent everywhere it appeared.",
        },
        {
          label: "Constraints",
          text: "Design only, not yet launched — the redesign had to be complete and system-driven enough to hand off cleanly whenever the build goes ahead, without me in the room.",
        },
      ],
      fullCaseStudy: {
        intro:
          "Planning a trip means wading through a lot of information — destinations, packages, comparisons — and the challenge was presenting all of it without overwhelming the user, while still answering three questions fast: where can I go, what's available, and how do I get in touch. This is the process behind redesigning Pace Travels around that journey, and the system built to keep it consistent.",
        personas: [
          {
            role: "The Traveller",
            goal: "Discover destinations and travel packages quickly, understand what's included, and reach the team the moment something looks right.",
            painPoint:
              "Too much information competing for attention, with no clear next step between browsing an option and actually enquiring about it.",
          },
        ],
        sections: [
          {
            heading: "Discovery",
            text: "Planning a trip involves exploring destinations, comparing packages and understanding options — a lot of information for one experience to carry. The core challenge was presenting it without overwhelming the user, while still answering three questions fast: where can I go, what's available, and how do I get in touch. The primary users were people actively looking for travel services — discovering destinations, finding the right package quickly, understanding key details, reaching the team easily, and doing all of it comfortably on mobile.",
            image: {
              src: "/work/pacetravels-v3-old.png",
              alt: "Original Pace Travels homepage — dated layout, cluttered hero",
            },
          },
          {
            heading: "Design goals",
            text: "Five goals shaped the work: improve discoverability of destinations and packages; create a clear information hierarchy users can scan at a glance; simplify the journey from discovery to enquiry; build trust through a professional, visually engaging interface; and make it work smoothly across desktop, tablet and mobile.",
          },
          {
            heading: "User journey",
            text: "I structured the experience around a simple journey — Discover → Explore → Evaluate → Enquire. Users arrive and immediately understand what Pace Travels offers, browse destinations and services, review the details that matter, then take action through clear enquiry and contact options. That journey shaped the information architecture and page structure that followed.",
          },
          {
            heading: "Information architecture",
            text: "Travel content is naturally dense, so organizing it came before any visual work. The experience was structured into clear sections — Home, Destinations, Travel Packages, Services, About, and Contact & Enquiry — so important information is easy to find without forcing users through unnecessary navigation.",
          },
          {
            heading: "Wireframing",
            text: "Before visual design, I worked through page structure and content hierarchy in wireframes — what users should see first, where calls-to-action belong, how travel packages should be displayed, and how someone moves naturally through the experience. That let the layout and journey get refined before high-fidelity design started.",
          },
          {
            heading: "Visual design",
            text: "The direction aimed for modern, trustworthy, inspiring and easy to explore. Travel is a highly visual category, so imagery carries a lot of the experience — guided by strong hero sections, destination imagery, clear typography, structured layouts, consistent spacing, travel cards and prominent calls-to-action.",
          },
          {
            heading: "Key UX decisions",
            text: "Important actions — Enquire Now, Contact Us, Call, WhatsApp — stayed visible throughout the journey instead of being buried in a menu. Dense travel content was broken into structured sections and cards instead of long blocks of text, so destinations, options and key information stay scannable. And a reusable component system — navigation, buttons, cards, forms, destination and package layouts, contact sections, CTAs and footer — kept the interface consistent as it grew.",
          },
          {
            heading: "Responsive experience",
            text: "The design had to hold up across screen sizes, with particular attention to mobile navigation, content hierarchy, card layouts, touch-friendly buttons, forms, image scaling and section spacing — so travel information stays comfortable to browse regardless of device.",
          },
          {
            heading: "Challenges & solutions",
            text: "Too much information: solved with a stronger information hierarchy and smaller, easier-to-scan sections. Users browsing but not knowing what to do next: solved with clear calls-to-action placed at the moments that matter. Consistency drifting across pages: solved with a component-based design system for buttons, cards, forms and sections shared across the whole product.",
          },
          {
            heading: "Outcome",
            text: "The result is a more structured, user-focused experience — clearer navigation, better content organization, easier travel discovery, stronger visual hierarchy, a simplified enquiry journey, consistent UI patterns, and responsive usability throughout. Design complete; not yet launched.",
            image: {
              src: "/work/pacetravels-v3-new.png",
              alt: "Redesigned Pace Travels homepage with a clear hero and structured destination content",
            },
          },
          {
            heading: "Key takeaway",
            text: "A good travel experience isn't just about beautiful destinations — it's about helping users move confidently from inspiration to action. For Pace Travels, that meant reducing complexity and building a clear path from discovering a trip to making an enquiry.",
          },
        ],
        process: [
          {
            title: "Research",
            text: "Understood who was planning a trip, what they needed to see first, and where they got stuck.",
          },
          {
            title: "Define",
            text: "Set five design goals and mapped the journey as Discover → Explore → Evaluate → Enquire.",
          },
          {
            title: "Ideate",
            text: "Structured the information architecture, then explored layout and hierarchy through wireframes.",
          },
          {
            title: "Design",
            text: "Designed the full UI and a reusable component system — navigation, cards, forms and CTAs — for a consistent, trustworthy feel.",
          },
          {
            title: "Validate",
            text: "Checked the design against real constraints — information overload, unclear next steps, drifting consistency — and refined it ahead of handoff.",
          },
        ],
      },
    },
  },
];
