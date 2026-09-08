import { Preloader } from "@/components/sections/Preloader";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { HowItsMade } from "@/components/sections/HowItsMade";
import { BrimBuild } from "@/components/sections/BrimBuild";
import { BrandStory } from "@/components/sections/BrandStory";
import { HalalPromise } from "@/components/sections/HalalPromise";
import { ExploreCTA } from "@/components/sections/ExploreCTA";

// Hero → kitchen film → burger process → Halal promise → explore → brand story.
export default function Home() {
  return (
    <>
      <Preloader />
      <HeroVideo />
      <HowItsMade />
      <BrimBuild />
      <HalalPromise variant="home" />
      <ExploreCTA />
      <BrandStory />
    </>
  );
}
