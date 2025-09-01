import type { MetadataRoute } from "next";

import { BASE_URL, LANGS } from "@/lib/consts";
import { projects } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const langsUrls = LANGS.map((lang) => {
    return { url: `${BASE_URL}/${lang}` };
  });

  const projectsUrls = projects.flatMap((proj) =>
    LANGS.map((lang) => {
      return { url: `${BASE_URL}/${lang}/${proj.id}` };
    }),
  );
  return [{ url: BASE_URL }, ...langsUrls, ...projectsUrls];
}
