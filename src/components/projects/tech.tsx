import { type Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

import { Badge } from "../ui/badge";

export function TechSection({ tech }: { tech: Project["tech"] }) {
  return (
    <>
      <div className="my-10 flex w-full flex-wrap items-center justify-center gap-6 md:my-20">
        {tech?.map((el, idx) => {
          const Icon = el.icon;
          return (
            <div className="flex flex-col items-center gap-2" key={idx}>
              <Icon className={cn(el.className, "size-12 md:size-12")} />
              <Badge variant={"outline"}>{el.name}</Badge>
            </div>
          );
        })}
      </div>
    </>
  );
}
