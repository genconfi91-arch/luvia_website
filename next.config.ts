import type { NextConfig } from "next";

/** Static export for Firebase Hosting (`out/`). Requires `images.unoptimized` when using `next/image`. */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
