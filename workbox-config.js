module.exports = {
  globDirectory: "dist/",
  globPatterns: [
    "**/*.{html,js,css,png,svg,gz,br,jpg,gif,json,woff,woff2,eot,ico,webmanifest,map,webp}",
  ],
  swDest: "dist/service-worker.js",
  cleanupOutdatedCaches: true,
};
