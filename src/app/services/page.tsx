import Services from "@/components/Services";

export const metadata = {
  title: "Services | Bull Runner",
  description: "Explore our premium trading mentorship, courses, and market analysis services.",
};

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden w-full pt-24 min-h-screen">
      <Services />
    </main>
  );
}
