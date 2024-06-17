import BundleAnalyzer from "@next/bundle-analyzer";
/**
 * @type {import('next').NextConfig}
 */

let nextConfig = {
  reactStrictMode: true,
  output: "export",
  sassOptions: {
    includePaths: ["./src/styles"],
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

export default () => {
  if (process.env.ANALYZE === "true") {
    const withBundleAnalyzer = BundleAnalyzer({
      enabled: true,
    });

    nextConfig = withBundleAnalyzer(nextConfig);
  }

  return nextConfig;
};
