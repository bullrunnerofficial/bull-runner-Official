import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative overflow-hidden w-full">
      <Hero />
      <Stats />
      <About />
    </main>
  );
}
