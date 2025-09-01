import fs from "fs/promises";
import { globby } from "globby";
import matter from "gray-matter";
import path from "path";

import { markdownToHtml } from "../utils";
import { projects } from "./projects";

export async function projectLoader({
  project,
  lang,
}: {
  project: string;
  lang: string;
}) {
  const fileContent = await fs.readFile(
    path.join(process.cwd(), "src/lib/data/md", lang, `${project}.md`),
    "utf-8",
  );
  const images = await Promise.all(
    (await globby(path.posix.join(process.cwd(), "src/assets", project))).map(
      async (image) => {
        const base64url = await fs.readFile(image, "base64");
        return `data:image/png;base64,${base64url}`;
      },
    ),
  );

  const tech = projects.find((val) => val.id === project)?.tech;
  const { data, content: markdown } = matter(fileContent);
  return { images, tech, data, content: await markdownToHtml(markdown) };
}
