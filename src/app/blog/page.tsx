import Blog from "@/components/Blog";

export const metadata = {
  title: "Blog & Market Insights | Bull Runner",
  description: "Read the latest market insights, trading strategies, and IPO analysis.",
};

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden w-full pt-24 min-h-screen">
      <Blog />
    </main>
  );
}
