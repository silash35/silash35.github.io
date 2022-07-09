/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const CompressionPlugin = require("compression-webpack-plugin");
const withPreact = require("next-plugin-preact");
const withPWA = require("next-pwa");
const path = require("path");

module.exports = () => {
  /**
   * @type {import('next').NextConfig}
   */

  let nextConfig = {
    reactStrictMode: true,
    pwa: {
      dest: "public",
      disable: process.env.NODE_ENV === "development",
    },
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
          })
        );
      }

      return config;
    },
  };

  nextConfig = withPWA(nextConfig);

  if (process.env.ANALYZE === "true") {
    const withBundleAnalyzer = require("@next/bundle-analyzer")({
      enabled: true,
    });

    nextConfig = withBundleAnalyzer(nextConfig);
  }

  if (process.env.NODE_ENV === "production") {
    nextConfig = withPreact(nextConfig);
  }

  return nextConfig;
};
