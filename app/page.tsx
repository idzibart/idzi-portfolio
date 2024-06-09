import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { Navbar } from "@/components/ui/Navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="bg-black relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <Navbar navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
