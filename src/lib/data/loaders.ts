import { notFound } from "next/navigation";

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
  let fileContent = null;
  try {
    fileContent = await fs.readFile(
      path.join(process.cwd(), "src/lib/data/md", lang, `${project}.md`),
      "utf-8",
    );
  } catch (e) {
    console.log(e);
  }
  if (!fileContent) {
    throw notFound();
  }
  const images = await Promise.all(
    (await fs.readdir(path.posix.join(process.cwd(), "public", project))).map(
      async (image) => {
        return `/${project}/${image}`;
      },
    ),
  );

  const activeProject = projects.find((val) => val.id === project);
  const { data, content: markdown } = matter(fileContent);
  return {
    ...activeProject,
    images,
    data,
    content: await markdownToHtml(markdown),
  };
}
