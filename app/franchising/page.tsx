import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: `Franchising — ${SITE.name}`,
  description: "Bring Brim to your city. Enquire about a franchise.",
};

export default function FranchisingPage() {
  return (
    <ComingSoon
      eyebrow="Franchising"
      title="Coming Soon"
      blurb="Want to bring Brim to your city? The enquiry form and franchise pack will live here."
    />
  );
}
