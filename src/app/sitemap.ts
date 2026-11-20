import type { MetadataRoute } from "next";
import { destinations, posts } from "@/data/site";
import { brand } from "@/lib/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.url;
  const staticRoutes = ["", "/about", "/destinations", "/blog", "/contact", "/plan"].map(
    (path) => ({
      url: `${base}${path || "/"}`,
      lastModified: new Date("2026-11-20"),
    }),
  );

  const destinationRoutes = destinations.map((d) => ({
    url: `${base}/destinations/${d.slug}`,
    lastModified: new Date("2026-11-20"),
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date("2026-11-20"),
  }));

  return [...staticRoutes, ...destinationRoutes, ...blogRoutes];
}
