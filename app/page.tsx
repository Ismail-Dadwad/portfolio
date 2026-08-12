import Ambient from "@/components/Ambient";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

/**
 * Server Component (the default in the App Router).
 * All content is static, so this page is prerendered at build time and
 * served as HTML — good for SEO and for how fast a recruiter sees content.
 * Only Ambient, Reveal and ProjectCard opt into the client.
 */
export default function Home() {
  return (
    <>
      <Ambient />
      <Nav />
      <main id="top">
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}
