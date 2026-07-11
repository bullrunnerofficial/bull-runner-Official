import Results from "@/components/Results";

export const metadata = {
  title: "Results | Bull Runner",
  description: "See the trading results and performance metrics of our strategies.",
};

export default function ResultsPage() {
  return (
    <main className="relative overflow-hidden w-full pt-24 min-h-screen">
      <Results />
    </main>
  );
}
