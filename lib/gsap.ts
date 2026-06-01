// Single place to register GSAP plugins so we never double-register or forget one.
// Import { gsap, ScrollTrigger } from "@/lib/gsap" anywhere animation is needed.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// registerPlugin is idempotent, but guard for SSR just in case.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export { gsap, ScrollTrigger, useGSAP };
