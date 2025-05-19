import { type Project } from "@/lib/data/projects";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export function ProjectCard({ item }: { item: Project }) {
  return (
    <Card className="relative z-20 h-full overflow-hidden border border-transparent">
      <CardHeader>
        <CardTitle className="inline-flex items-center gap-2">
          <p>{item.title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-4">{item.description}</div>
      </CardContent>
      <CardFooter>
        <section className="flex w-full items-center gap-2">
          {item.tech?.map((el, idx) => <TechIcons el={el} key={idx} />)}
          {/* <ProjectDialog title={item.title}>
            <DialogTrigger asChild>
              <Button variant={"link"} className="ml-auto hover:cursor-pointer">
                <a href={item.link} target="_blank">
                <>
                  Discover
                  <IconArrowNarrowRight />
                </>
                </a>
              </Button>
            </DialogTrigger>
          </ProjectDialog> */}
        </section>
      </CardFooter>
    </Card>
  );
}

export function TechIcons({
  el,
}: {
  el: NonNullable<Project["tech"]>[number];
}) {
  const Icon = el.icon;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Icon className={el.className} />
        </TooltipTrigger>

        <TooltipContent>
          <p>{el.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
