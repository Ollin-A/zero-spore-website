import type { MetadataRoute } from "next";
import { getAllAreaSlugs } from "@/data/areas";

const BASE_URL = "https://zerosporerestoration.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${BASE_URL}/services/water-damage`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/mold-remediation`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/emergency`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const areaPages: MetadataRoute.Sitemap = getAllAreaSlugs().map((slug) => ({
    url: `${BASE_URL}/areas/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...areaPages];
}
