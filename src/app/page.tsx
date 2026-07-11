import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden w-full">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Results />
      <Testimonials />
      <Blog />
      <CTABanner />
      <Footer />
    </main>
  );
}
