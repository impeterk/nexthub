import Link from "next/link";

import { useLocales } from "@/lib/data/locales";
import { Tech, tech } from "@/lib/data/tech";
import { cn } from "@/lib/utils";

import { Marquee } from "../magicui/marquee";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import FeaturedProjects from "./featured";

const firstRow = tech.slice(0, tech.length / 2);
const secondRow = tech.slice(tech.length / 2);

interface ReviewCardProps extends Tech {
  lang?: "en" | "sk";
}

const ReviewCard = ({
  name,
  icon,
  className,
  link = "",
  description,
  lang = "en",
}: ReviewCardProps) => {
  const Icon = icon;
  return link ? (
    <Link href={link} target="_blank">
      <Card className="hover:bg-accent h-40 w-full max-w-xs hover:outline-2">
        <CardHeader className="px-4 pb-2">
          <div className="flex flex-row items-center gap-2">
            <div className="grid place-items-center rounded-full p-2">
              <Icon className={className} />
            </div>
            <div className="flex flex-col">
              <CardTitle>{name}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 pt-0">
          <CardDescription className="text-pretty">
            {description[lang]}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  ) : (
    <Card className="hover:bg-accent h-40 w-full max-w-xs hover:outline-2">
      <CardHeader className="px-4 pb-2">
        <div className="flex flex-row items-center gap-2">
          <div className="grid place-items-center rounded-full p-2">
            <Icon className={className} />
          </div>
          <div className="flex flex-col">
            <CardTitle>{name}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pt-0">
        <CardDescription className="text-pretty">
          {description[lang]}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default function Projects({ lang }: { lang: "en" | "sk" }) {
  const locale = useLocales(lang);
  return (
    <section className="bg-background relative mt-10 w-full py-20">
      <div className="container mx-auto pb-20">
        <h2 className="to-primary relative z-20 bg-gradient-to-b from-indigo-950 to-50% bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          {locale?.projects.title}
        </h2>
      </div>
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="cover"></div>
      {/* {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))} */}
      <FeaturedProjects />
      <div className="relative grid grid-rows-2 overflow-hidden pt-20">
        <Marquee pauseOnHover className="[--duration:90s]">
          {firstRow.map((tech) => (
            <ReviewCard key={tech.name} {...tech} lang={lang} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:90s]">
          {secondRow.map((tech) => (
            <ReviewCard key={tech.name} {...tech} lang={lang} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </section>
  );
}
