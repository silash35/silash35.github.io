import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const highPriorityPaths = ["/"];
  const mediumPriorityPaths = ["/contact", "/contact"];
  const lowPriorityPaths = ["/curriculo", "/curriculum"];

  const createSitemapEntry = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${process.env.SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  });

  const sitemapEntries: MetadataRoute.Sitemap = [
    ...highPriorityPaths.map((path) => createSitemapEntry(path, 1)),
    ...mediumPriorityPaths.map((path) => createSitemapEntry(path, 0.8)),
    ...lowPriorityPaths.map((path) => createSitemapEntry(path, 0.5)),
  ];

  return sitemapEntries;
}
