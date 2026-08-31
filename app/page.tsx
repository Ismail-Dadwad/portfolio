import Ambient from "@/components/Ambient";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";

/**
 * Server Component (the default in the App Router).
 * All content is static, so this page is prerendered at build time and
 * served as HTML — good for SEO and for how fast a recruiter sees content.
 * Only Ambient and Reveal opt into the client.
 */
export default function Home() {
  return (
    <>
      <Ambient />
      <Nav />
      <main id="top">
        <Hero />
        <Work />
        <Process />
        <Skills />
        <About />
        <Footer />
      </main>
    </>
  );
}
