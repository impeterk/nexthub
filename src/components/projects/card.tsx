import { IconArrowNarrowRight } from "@tabler/icons-react";

import { type Project } from "@/lib/data/projects";

import { MagicCard } from "../magicui/magic-card";
import { Button } from "../ui/button";
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

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      className="w-full max-w-md border-none shadow-none"
      key={project.title}
    >
      <MagicCard
        gradientColor={"#D9D9D955"}
        className="p-0"
        gradientTo="var(--color-indigo-400)"
      >
        <CardHeader>
          <CardTitle className="inline-flex items-center gap-2">
            <p>{project.title}</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4">{project.description}</div>
        </CardContent>
        <CardFooter>
          <section className="flex w-full items-center gap-2">
            {project.tech?.map((el, idx) => {
              const Icon = el.icon;
              return (
                <TooltipProvider key={idx}>
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
            })}
            <Button variant={"link"} asChild className="ml-auto">
              <a href={project.link} target="_blank">
                Discover
                <IconArrowNarrowRight />
              </a>
            </Button>
          </section>
        </CardFooter>
      </MagicCard>
    </Card>
  );
}
