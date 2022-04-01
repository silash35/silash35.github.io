/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const CompressionPlugin = require("compression-webpack-plugin");
const withPWA = require("next-pwa");
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = () => {
  /**
   * @type {import('next').NextConfig}
   */

  const nextConfig = {
    reactStrictMode: true,
    pwa: {
      dest: "public",
      disable: process.env.NODE_ENV === "development",
    },
    sassOptions: {
      includePaths: [path.join(__dirname, "src/styles")],
    },
    env: {
      SITE_URL: "https://silash35.github.io",
    },

    webpack: (config, { dev, isServer }) => {
      // Only in client production build
      if (!dev && !isServer) {
        // Replace React with Preact
        Object.assign(config.resolve.alias, {
          react: "preact/compat",
          "react-dom/test-utils": "preact/test-utils",
          "react-dom": "preact/compat",
        });

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

  return withBundleAnalyzer(withPWA(nextConfig));
};
