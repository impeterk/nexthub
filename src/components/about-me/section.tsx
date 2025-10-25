import Link from "next/link";
import { Suspense } from "react";

import { IconFileCv } from "@tabler/icons-react";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { useLocales } from "@/lib/data/locales";
import { markdownToHtml } from "@/lib/utils";

import ProfileImage from "./profile";

export default function AboutMeSection({ lang }: { lang: "en" | "sk" }) {
  const locale = useLocales(lang);
  return (
    <section className="mt-10 bg-transparent pt-20 pb-10">
      <h2 className="to-primary relative z-20 bg-gradient-to-b from-indigo-950 to-50% bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        {locale?.aboutMe.title}
      </h2>
      <div className="flex flex-col justify-around gap-8 md:flex-row">
        <div className="shrink-0">
          <ProfileImage />
          <BlurFade
            delay={0.65}
            direction="up"
            inView
            className="hidden md:block"
          >
            <Button className="mt-6" size={"lg"} asChild>
              <Link
                href={{ pathname: "/resume.pdf", query: { lang } }}
                target="_blank"
              >
                <IconFileCv className="mr-2 size-5 capitalize" />
                {locale?.aboutMe.resume}
              </Link>
            </Button>
          </BlurFade>
        </div>
        <article className="w-full max-w-2xl overflow-x-hidden">
          <BlurFade delay={0.35} direction="left" inView offset={100}>
            <Suspense>
              <Content lang={lang} />
            </Suspense>
          </BlurFade>
        </article>
        <BlurFade delay={0.65} direction="up" inView className="flex md:hidden">
          <Button className="mx-auto w-full max-w-xs" size={"lg"} asChild>
            <Link
              href={{ pathname: "/resume.pdf", query: { lang } }}
              target="_blank"
            >
              <IconFileCv className="mr-2 size-5" />
              {locale?.aboutMe.resume}
            </Link>
          </Button>
        </BlurFade>
      </div>
    </section>
  );
}

async function Content({ lang }: { lang: "en" | "sk" }) {
  const fileContent = await fs.readFile(
    path.join(process.cwd(), "src/lib/data/md", lang, "about-me.md"),
    "utf-8",
  );
  const { content: markdown } = matter(fileContent);
  const article = await markdownToHtml(markdown);
  return (
    <article className="prose prose-indigo dark:prose-invert">
      <div dangerouslySetInnerHTML={{ __html: article }} />
    </article>
  );
}
