import Link from "next/link";

import { IconArrowNarrowRight } from "@tabler/icons-react";

import { TechSection } from "@/components/projects/tech";
import { AnimatedImages } from "@/components/ui/animated-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projectLoader } from "@/lib/data/loaders";
import { useLocales } from "@/lib/data/locales";
import { projects } from "@/lib/data/projects";
import { ProjectPageProps } from "@/lib/shared/types";

export async function generateMetadata({ params }: ProjectPageProps) {
  const { project, lang } = await params;
  const activeProject = projects.find((proj) => proj.id === project);

  return {
    title: activeProject?.title,
    description: activeProject?.description[lang],
  };
}

export default async function ProjectModal({
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
    <DialogContent className="h-full gap-0 max-lg:max-h-[95svh] sm:max-w-7xl lg:h-[calc(100vh-2*4rem)]">
      <DialogHeader className="mb-1 items-center border-b pb-2 lg:flex-row">
        <DialogTitle className="pb-0">{metaData.title}</DialogTitle>
        <div className="mr-auto ml-6 self-center max-lg:mx-auto">
          {wip && (
            <Badge variant={"secondary"}>
              <p>{locale?.wip}</p>
            </Badge>
          )}
          {demo && (
            <Badge>
              <p>Demo Project</p>
            </Badge>
          )}
        </div>
      </DialogHeader>
      <section className="flex min-h-0 flex-1 flex-col gap-12 max-lg:overflow-y-auto lg:grid lg:grid-cols-2">
        <article className="max-md:prose-sm prose prose-indigo dark:prose-invert lg:min-h-0 lg:overflow-y-auto">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
        <div className="flex w-full flex-col justify-center px-2 md:px-12">
          <div className="">
            <AnimatedImages images={images} internal={internal} />
          </div>
          <TechSection tech={tech} />
        </div>
      </section>

      <DialogFooter className="mt-4">
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
    </DialogContent>
  );
}
