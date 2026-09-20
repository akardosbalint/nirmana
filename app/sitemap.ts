import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

const paths = [
  "",
  "/modszer",
  "/szolgaltatasok",
  "/szolgaltatasok/muhely",
  "/bemutatkozom",
  "/kozpont",
  "/kapcsolat",
  "/adatvedelem",
  "/impresszum",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}
