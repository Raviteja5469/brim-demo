import { Hero } from "@/components/sections/Hero";
import { HowItsMade } from "@/components/sections/HowItsMade";
import { ExploreCTA } from "@/components/sections/ExploreCTA";

// Landing page composition. Order matters for the scroll story:
//   Hero (friend) → How It's Made (pinned) → Explore CTAs → Footer (in layout).
export default function Home() {
  return (
    <>
      <Hero />
      <HowItsMade />
      <ExploreCTA />
    </>
  );
}
