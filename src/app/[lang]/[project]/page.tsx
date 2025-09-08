import Link from "next/link";

import { IconArrowNarrowRight, IconX } from "@tabler/icons-react";

import { TechSection } from "@/components/projects/tech";
import { AnimatedImages } from "@/components/ui/animated-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { projectLoader } from "@/lib/data/loaders";
import { useLocales } from "@/lib/data/locales";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: "en" | "sk"; project: string }>;
}) {
  const { project, lang } = await params;
  const {
    tech,
    data: metaData,
    content,
    link,
    images,
    wip,
    demo,
    internal,
  } = await projectLoader({ lang, project });
  const locale = useLocales(lang);
  return (
    <div className="relative container mx-auto grid h-full place-items-center">
      <article className="px-6">
        <div className="bg-background sticky top-[65px] flex justify-between py-2">
          <h1 className="mb-1 scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
            {metaData.title}
          </h1>
          <div className="mr-auto ml-6 self-center">
            {wip && (
              <Badge variant={"secondary"}>
                <p>{locale.wip}</p>
              </Badge>
            )}
            {demo && (
              <Badge>
                <p>Demo Project</p>
              </Badge>
            )}
          </div>
          <Button
            asChild
            variant={"link"}
            className="text-muted-foreground hover:text-foreground pr-0"
          >
            <Link href={`/${lang}`}>
              <IconX />
            </Link>
          </Button>
        </div>
        <section className="flex min-h-0 flex-1 flex-col gap-12 max-lg:overflow-y-auto lg:grid lg:grid-cols-2">
          <article className="max-md:prose-sm prose prose-indigo dark:prose-invert lg:max-h-[70vh] lg:min-h-0 lg:overflow-y-auto">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>
          <div className="flex w-full flex-col justify-center px-2 md:px-12">
            <div className="mt-auto">
              <AnimatedImages images={images} internal={internal} />
            </div>
            <TechSection tech={tech} />
          </div>
        </section>

        <DialogFooter>
          {link && (
            <Button
              className="mr-12 max-sm:mx-auto max-sm:w-full"
              size={"lg"}
              asChild
            >
              <Link href={link} target="_blank">
                Live in Prod
                <IconArrowNarrowRight />
              </Link>
            </Button>
          )}
        </DialogFooter>
      </article>
    </div>
  );
}
