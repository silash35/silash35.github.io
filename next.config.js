import CompressionPlugin from "compression-webpack-plugin";
import nextPWA from "next-pwa";
import * as path from "path";
import { fileURLToPath } from "url";

/**
 * @type {import('next').NextConfig}
 */

const withPWA = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async () => {
  let nextConfig = {
    reactStrictMode: true,
    output: "export",
    sassOptions: {
      includePaths: [path.join(__dirname, "src/styles")],
    },
    env: {
      SITE_URL: process.env.SITE_URL,
    },

    webpack: (config, { dev, isServer }) => {
      // Only in client production build
      if (!dev && !isServer) {
        // Enable Compression
        config.plugins.push(new CompressionPlugin());
        config.plugins.push(
          new CompressionPlugin({
            filename: "[path][base].br",
            algorithm: "brotliCompress",
          }),
        );
      }

      return config;
    },
  };

  nextConfig = withPWA(nextConfig);

  if (process.env.ANALYZE === "true") {
    const withBundleAnalyzer = await import("@next/bundle-analyzer")({
      enabled: true,
    });

    nextConfig = withBundleAnalyzer(nextConfig);
  }

  return nextConfig;
};
