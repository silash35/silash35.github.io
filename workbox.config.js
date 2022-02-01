module.exports = {
  globDirectory: "dist",
  globPatterns: [
    "**/*.{html,js,css,png,svg,jpg,gif,json,gz,br,woff,woff2,eot,ico,webmanifest,map,webp}",
  ],
  swDest: "dist/service-worker.js",
  skipWaiting: true,
  cleanupOutdatedCaches: true,
  sourcemap: true,
};
