import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { Navbar } from "@/components/ui/Navbar";
import { navItems } from "@/data";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <Navbar navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
