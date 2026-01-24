import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  sassOptions: {
    loadPaths: ["src/styles"],
  },
  images: {
    loader: "custom",
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    SITE_URL: process.env.SITE_URL,
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
  },
};

export default nextConfig;
