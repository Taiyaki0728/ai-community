import type { MetadataRoute } from "next";
import { categories, threads } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ai-community.jp";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-26"),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/category`,
      lastModified: new Date("2026-03-26"),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/new`,
      lastModified: new Date("2026-03-26"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.id}`,
    lastModified: new Date(cat.latestActivity),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  const threadPages: MetadataRoute.Sitemap = threads.map((thread) => ({
    url: `${baseUrl}/thread/${thread.id}`,
    lastModified: new Date(thread.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...threadPages];
}
