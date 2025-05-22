import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // typedRoutes: true, //not supported by turbopack yet :-(
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
