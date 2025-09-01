import { IconArrowNarrowRight } from "@tabler/icons-react";

import { TechSection } from "@/components/projects/tech";
import { AnimatedImages } from "@/components/ui/animated-images";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projectLoader } from "@/lib/data/loaders";

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
  } = await projectLoader({ lang, project });
  return (
    <DialogContent className="h-full gap-0 max-lg:max-h-[95svh] sm:max-w-7xl lg:h-[calc(100vh-2*4rem)]">
      <DialogHeader className="mb-1 border-b">
        <DialogTitle className="pb-2">{project}</DialogTitle>
      </DialogHeader>
      <section className="flex min-h-0 flex-1 flex-col gap-12 max-lg:overflow-y-auto lg:grid lg:grid-cols-2">
        <article className="max-md:prose-sm prose prose-indigo dark:prose-invert lg:min-h-0 lg:overflow-y-auto">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
        <div className="flex w-full flex-col justify-center px-2 md:px-12">
          <div className="">
            <AnimatedImages images={metaData.images} />
          </div>
          <TechSection tech={tech} />
        </div>
      </section>

      <DialogFooter className="mt-4">
        <Button className="mr-12 max-sm:mx-auto max-sm:w-full" size={"lg"}>
          <>
            Live in Prod
            <IconArrowNarrowRight />
          </>
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
