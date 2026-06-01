import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Tells Next.js to generate a static HTML/CSS/JS export
  images: {
    unoptimized: true, // Required for static export since Next.js image optimization features won't work on static hosting
  },
  // Replace 'brim-demo' with your repository name if it changes
  basePath: process.env.NODE_ENV === 'production' ? '/brim-demo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/brim-demo/' : '',
};

export default nextConfig;