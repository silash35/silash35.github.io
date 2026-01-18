import BundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

let nextConfig: NextConfig = {
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

if (process.env.ANALYZE === "true") {
  const withBundleAnalyzer = BundleAnalyzer({
    enabled: true,
  });

  nextConfig = withBundleAnalyzer(nextConfig);
}

export default nextConfig;
