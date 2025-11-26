import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Often safer for simple VPS deployments without external image optimization services
  }
};

export default nextConfig;
