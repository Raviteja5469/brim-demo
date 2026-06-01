import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: `Menu — ${SITE.name}`,
  description: "Smashed, Halal, grass-fed. The full Brim menu.",
};

export default function MenuPage() {
  return (
    <ComingSoon
      eyebrow="The Menu"
      title="Coming Soon"
      blurb="The full Brim menu — smashed patties, loaded fries, and shakes — lands here next."
    />
  );
}
