import fs from "fs/promises";
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
  const tech = projects.find((val) => val.id === project)?.tech;
  const { data, content: markdown } = matter(fileContent);
  return { tech, data, content: await markdownToHtml(markdown) };
}
