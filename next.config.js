/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const withPWA = require("next-pwa");
const path = require("path");

module.exports = () => {
  /**
   * @type {import('next').NextConfig}
   */

  return withPWA({
    pwa: {
      dest: "public",
      disable: process.env.NODE_ENV === "development",
    },
    sassOptions: {
      includePaths: [path.join(__dirname, "src/styles")],
    },
  });
};
