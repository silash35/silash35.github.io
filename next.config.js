import BundleAnalyzer from "@next/bundle-analyzer";
import * as path from "path";
import { fileURLToPath } from "url";

/**
 * @type {import('next').NextConfig}
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default () => {
  let nextConfig = {
    reactStrictMode: true,
    output: "export",
    sassOptions: {
      includePaths: [path.join(__dirname, "src/styles")],
    },
    env: {
      SITE_URL: process.env.SITE_URL,
    },
  };

  if (process.env.ANALYZE === "true") {
    const withBundleAnalyzer = BundleAnalyzer({
      enabled: true,
    });

    nextConfig = withBundleAnalyzer(nextConfig);
  }

  return nextConfig;
};
