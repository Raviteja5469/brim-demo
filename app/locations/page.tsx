import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: `Locations — ${SITE.name}`,
  description: "Find your nearest Brim across the UK & Pakistan.",
};

export default function LocationsPage() {
  return (
    <ComingSoon
      eyebrow="Locations"
      title="Coming Soon"
      blurb="Find your nearest Brim across the UK & Pakistan — map and store list arriving here."
    />
  );
}
