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
  env: {
    SITE_URL: process.env.SITE_URL,
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
