import About from "@/components/About";
import Approach from "@/components/Approach";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import PageEffects from "@/components/PageEffects";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Experience />
      <Work />
      <Approach />
      <Capabilities />
      <About />
      <Contact />
      <PageEffects />
    </>
  );
}
