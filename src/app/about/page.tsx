import About from "@/components/About";

export const metadata = {
  title: "About | Bull Runner",
  description: "Learn more about Bull Runner's journey from photographer to successful stock market trader.",
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden w-full pt-24 min-h-screen">
      <About />
    </main>
  );
}
