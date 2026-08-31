export const site = {
  name: "Ismail Dadwad",
  title: "UI/UX Designer & Developer",
  email: "ismaildadwad04@gmail.com",
  phone: "+91 88848 80114",
  phoneHref: "tel:+918884880114",
  linkedin: "https://www.linkedin.com/in/ismaildadwad",
  linkedinLabel: "linkedin.com/in/ismaildadwad",
  location: "Belagavi, Karnataka",
  availability: "Available for opportunities — Remote/India",
  resume: "/Ismail_Dadwad_Resume.pdf",
};

export const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "25+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "100%", label: "Commitment" },
];

export const marquee = [
  "Figma",
  "Design Systems",
  "HTML5",
  "CSS3 / SCSS",
  "JavaScript ES6+",
  "Bootstrap 5",
  "GSAP",
  "REST APIs",
  "Next.js",
  "TypeScript",
  "Illustrator",
  "Photoshop",
];

export const skillGroups = [
  {
    heading: "Design",
    level: "Primary",
    highlight: true,
    items: [
      "Figma — systems, variables, tokens",
      "Auto layout, component variants",
      "Wireframes, user flows, IA",
      "Prototyping & Dev Mode handoff",
      "Responsive & accessible layout",
    ],
  },
  {
    heading: "AI",
    level: "Primary",
    highlight: true,
    spotlight: true,
    items: [
      "Prompt engineering — Claude, ChatGPT, Gemini",
      "AI-assisted design exploration & iteration",
      "AI-assisted frontend code generation & review",
      "Research, competitor analysis & writing with AI",
      "Rapid prototyping & wireframe generation",
    ],
  },
  {
    heading: "Frontend",
    level: "Primary",
    highlight: true,
    items: [
      "HTML5, CSS3, SCSS",
      "JavaScript ES6+",
      "Bootstrap 4 / 5, jQuery",
      "GSAP, scroll interaction",
      "REST APIs, performance tuning",
      "Git, GitHub, Vercel",
    ],
  },
  {
    heading: "Graphic Design",
    level: "Working knowledge",
    highlight: false,
    items: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "CorelDRAW",
      "Brand identity & logo",
    ],
    expandItems: ["Adobe Premiere Pro", "Canva Design"],
  },
  {
    heading: "Social Media",
    level: "Working knowledge",
    highlight: false,
    items: [
      "Social media post & story templates",
      "Content calendars & campaign visuals",
      "Meta ads campaign",
      "WhatsApp Marketing",
    ],
    expandItems: ["SEO", "Meta pixel"],
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  notice?: string;
  description: string;
  skills?: string[];
  projects?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "UI/UX Designer and Frontend Developer",
    company: "Freelancer/Self-employed",
    type: "Full-time",
    period: "Jul 2026 to Present",
    duration: "2 months",
    notice: "15 days or less notice period",
    description:
      "Designed and developed responsive websites and web applications for clients and small businesses. Created user-friendly UI/UX designs, wireframes, prototypes, design systems and responsive layouts using Figma. Developed modern, responsive interfaces using HTML, CSS, JavaScript, Bootstrap, React, Next.js, TypeScript and Tailwind CSS. Worked directly with clients to understand business requirements, user needs and project objectives, translating UI/UX designs into functional, accessible, cross-browser compatible web interfaces. Built and maintained digital products, business websites, landing pages and SaaS interfaces, using AI-assisted development and design tools to improve development speed, ideation and workflow efficiency. Managed projects independently — requirement gathering, design, development, testing, deployment and client communication — focused on visually polished interfaces with strong usability, consistency and responsive design.",
    skills: ["Figma", "JavaScript", "HTML/CSS", "Bootstrap", "React.js"],
  },
  {
    role: "Frontend Developer & UI/UX Designer",
    company: "Pace Travels Pvt. Ltd.",
    type: "Full-time",
    period: "Mar 2020 to Jul 2026",
    duration: "6 years 5 months",
    description:
      "Designed and developed responsive, mobile-first web applications serving 50,000+ travel portal users using HTML5, CSS3, JavaScript, jQuery and Bootstrap 4/5. Integrated RESTful APIs to enable dynamic trip search, package customization and real-time booking features on the Pace Travels portal. Maintained version control with Git (feature branching, pull requests, code reviews) across a team of developers. Implemented SEO best practices and Google Analytics tracking, contributing to a measurable increase in organic traffic and user engagement. Collaborated directly with stakeholders to translate Figma wireframes and design specs into pixel-perfect, cross-browser-compatible UI. Leveraged AI tools (ChatGPT, Claude, Perplexity) to accelerate code generation, debugging and documentation tasks. Managed basic AWS infrastructure (S3, EC2) for hosting and deploying frontend builds.",
    projects: [
      "Quote Desks SaaS",
      "Pace Travels Portal",
      "Pace Tourism CRM",
      "Task Management",
      "Pace Tourism",
      "Pace Travels Admin",
    ],
  },
  {
    role: "Web Developer",
    company: "Accord Global Technology Solution",
    type: "Full-time",
    period: "Aug 2019 to Feb 2020",
    duration: "7 months",
    description:
      "Built and optimized responsive web interfaces for business-facing applications using HTML5, CSS3, JavaScript and Bootstrap 4. Automated frontend build workflows using Gulp and Yeoman task runners, reducing build time and manual repetition. Implemented Google Analytics tracking and on-page SEO improvements for client web properties. Worked in a fast-paced delivery environment, meeting tight sprint deadlines on multi-product web projects.",
    projects: ["Accord Software"],
  },
  {
    role: "UI Developer",
    company: "Pace Travels Pvt. Ltd.",
    type: "Full-time",
    period: "Oct 2017 to May 2019",
    duration: "1 year 8 months",
    description:
      "Built the initial frontend of the Pace Travels booking portal using HTML, CSS, JavaScript, jQuery and Bootstrap 3. Developed mobile-responsive layouts with cross-browser compatibility across Chrome, Firefox and Safari. Created interactive UI components including date pickers, search filters and dynamic pricing displays.",
    projects: ["Pace Travels Agent Portal", "Pace Travels Portal (B2C)"],
  },
];

export const about =
  "Over the past 8+ years, I've worked on travel, SaaS and CRM platforms — booking engines, quotation tools, agent CRMs — turning genuinely hard interface problems into products people actually enjoy using. I care as much about how the CSS is structured as I do about the spacing scale, and I'm most useful when there's no gap between design and build.";

export const whatIDo = [
  "Product & UI/UX Design",
  "Design Systems",
  "Prototyping & User Flows",
  "Frontend Development",
  "Collaboration & Handoff",
];
