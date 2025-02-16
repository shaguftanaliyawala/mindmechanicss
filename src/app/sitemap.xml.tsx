import { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "mindmechanicss.com"; // Change to your actual domain

  const pages = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/therapist",
    "/workshops",
  ];

  return pages.map((page) => ({
    url: `${siteUrl}${page}`,
    lastModified: new Date().toISOString(),
  }));
}
