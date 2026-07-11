import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Testimonials | Bull Runner",
  description: "Read what our community members and mentees have to say about their trading journey.",
};

export default function TestimonialsPage() {
  return (
    <main className="relative overflow-hidden w-full pt-24 min-h-screen">
      <Testimonials />
    </main>
  );
}
