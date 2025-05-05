import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // typedRoutes: true, //not supported by turbopack yet :-(
    reactCompiler: true,
  },
};

export default nextConfig;
