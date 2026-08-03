"use client";

import Hero from "../components/Hero";
import CaseStudyCard from "../components/CaseStudyCard";

export default function Home() {
  return (
    <>
      <Hero />
      
      <section id="work" className="pt-16 md:pt-24">
        {/* Adjusted from text-3xl to text-2xl on mobile, allowed wrapping */}
        <h2 className="text-2xl md:text-3xl font-jakarta font-bold text-white mb-8 md:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span>Key Projects</span>
          <div className="h-[1px] w-full sm:flex-grow bg-gradient-to-r from-white/20 to-transparent"></div>
        </h2>

        {/* 1. Quote Desks SaaS (Before & After Redesign) */}
        <CaseStudyCard 
          title="Quote Desks - SaaS Software"
          subtitle="Pace Tourism | UX/UI Transformation & CRM Development"
          role="UI/UX Designer"
          metric="Redesigned and engineered the core CRM dashboard to solve navigation friction. The transformation turned a static, low-density reporting page into a live, actionable command center."
          ui="Evolved the visual identity into a cohesive design system using Figma Design Tokens and Variables for scalable theming. Structured the entire interface using strict Auto Layout rules to guarantee fluid scaling across all viewports."
          ux="The legacy dashboard suffered from wasted whitespace and required users to click away for basic actions. Centralized operations by introducing a persistent global search, a live 'Recent Activities' feed, and organizing complex tables into quick-filter tabs."
          code="Utilized Figma Dev Mode to ensure a 1:1 pixel-perfect translation from design to code. Architected a highly scalable web application with a fluid, responsive design, leveraging custom reusable UI components in Vanilla JavaScript (ES6) and SCSS to seamlessly sync complex layouts with backend REST APIs."
          stack={["Figma", "Auto Layout", "Variants", "Accessibility", "Figma Tokens", "Prototype"]}
          image={["/old-dashboard-quotedesks.jpg", "/new-dashboard-quotedesks.jpg"]} 
        />

        {/* 2. Pace Travels Portal */}
        <CaseStudyCard 
          title="Pace Travels"
          subtitle="Pace Travels | Comprehensive Travel Booking Engine"
          role="UI/UX Designer"
          metric="Delivered a fast, responsive, and user-friendly B2C and B2B booking experience for flights, buses, hotels, and cabs."
          ui="Component-driven design system prioritizing high legibility across complex search matrices. Leveraged Figma Variables for consistent spacing and typography scales across multi-service booking cards."
          ux="Improved user navigation flows and booking checkout funnels by designing persistent, sticky fare summaries to prevent hidden fee anxiety during final checkout steps."
          code="Modernized the platform architecture using Angular to deliver a highly scalable and fully responsive booking engine. Optimized the frontend structure by creating a rich library of reusable components, guaranteeing high performance across mobile, tablet, and desktop displays."
          stack={["Figma", "Auto Layout", "Variants", "Accessibility", "Figma Tokens", "Prototype"]}
          image={["/old-flight-home.png", "/flight-home.png"]}
        />

        

        {/* 2. Dubai Enquiry Management CRM */}
        <CaseStudyCard 
          title="CRM Software"
          subtitle="Pace Tourism | High-Ticket In-House CRM"
          role="Frontend Developer & UI/UX Designer"
          metric="Developed a dedicated system to generate quotations, itineraries, and manage automated follow-ups for the Dubai in-house team."
          ui="Premium off-white canvas with 'Signature Gold' accents tailored specifically for luxury destination logistics. Designed complex split-pane dashboard layouts using nested Figma Auto Layout constraints."
          ux="Created the 'Dubai Trip Builder Hub'—a modular library where internal agents can select pre-built day packages to instantly assemble exportable customer itineraries, rather than typing manual schedules."
          code="Engineered a scalable web application, ensuring a flawlessly responsive design across all operational environments. Constructed the interface using modular, reusable components and integrated a client-side mathematical parser to update margins instantly without UI lag."
          stack={["HTML5", "CSS", "Bootstrap 5", "Figma", "REST API"]}
          image={["/dubai.png", "/dubai-login.png"]}
        />

        {/* 3. Pace Travels Admin */}
        <CaseStudyCard 
          title="Pace Travels Admin"
          subtitle="Pace Travels | Comprehensive Travel Administration Portal"
          role="UI/UX Designer & Frontend Developer"
          metric="Designed and developed a responsive Travel Admin portal that simplified booking management, reduced manual effort, and improved operational efficiency."
          ui="Designed a clean, responsive, and user-friendly Travel Admin interface with a consistent visual hierarchy, intuitive layouts, and reusable components to enhance usability and streamline daily booking operations."
          ux="Focused on simplifying complex travel booking and reservation workflows by identifying usability pain points such as excessive manual steps, difficult navigation, and inefficient task flows. Redesigned the user experience with intuitive navigation, streamlined booking management, and organized information architecture to help travel administrators complete tasks faster, reduce errors, and improve overall operational efficiency."
          code="Structured the Travel Admin application using a scalable, component-based architecture with reusable UI components, modular layouts, and organized workflows to ensure maintainability, consistency, and future scalability."
          stack={["Figma", "HTML5", "CSS", "JavaScript", "Bootstrap 5", "REST API"]}
          image="/admin.png"
        />

        {/* 4. Pace Tourism Internal CRM */}
        {/* <CaseStudyCard 
          title="Pace Tourism CRM Dubai"
          subtitle="Pace Tourism | Global Destination Operations"
          role="React Developer & UI/UX Designer"
          metric="Streamlined internal query generation, lead management, and complex travel coordination for Dubai, Thailand, and Vietnam."
          ui="Dynamic, color-coded grid system built to handle ultra-dense multi-city tracking data at a glance, managed globally via Figma color variables to ensure accessible contrast ratios."
          ux="Developed a visual 'Chronological Conflict Detector' that actively warns internal operators if they attempt to book an excursion that overlaps with a domestic flight checkout window."
          code="Leveraged React Context paired with localized state reducers to build a robust, scalable web app. Delivered a polished, responsive design driven by an architecture of reusable components, managing deep multi-tier transport modules smoothly without prop-drilling."
          stack={["React", "Tailwind CSS", "Radix UI", "Figma", "REST API"]}
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        /> */}
        
      </section>
    </>
  );
}