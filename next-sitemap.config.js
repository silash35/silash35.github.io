/** @type {import('next-sitemap').IConfig} */

export default {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,

  changefreq: "monthly",
  priority: 0.8,

  transform: async (config, path) => {
    let priority = config.priority;

    if (path === "/") {
      priority = 1.0;
    }

    if (path === "/curriculo" || path === "/curriculum") {
      priority = 0.6;
    }

    // Use default transformation for all other cases
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
