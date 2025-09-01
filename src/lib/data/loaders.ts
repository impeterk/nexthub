import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

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
  const result = await remark().use(html).process(markdown);
  return { tech, data, content: result.toString() };
}
