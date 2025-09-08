"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { useLocales } from "@/lib/data/locales";
import { type Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export const HoverEffect = ({
  items,
  className,
}: {
  items: Project[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const params = useParams<{ lang: "en" | "sk"; project: string }>();
  const locale = useLocales(params.lang);

  return (
    <div
      className={cn(
        "flex w-full flex-wrap content-center items-center justify-center gap-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="group relative block h-full w-full max-w-md p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-xl bg-neutral-200 dark:bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="relative z-20 h-full overflow-hidden border border-transparent">
            <CardHeader className="align-center flex-row">
              <CardTitle className="mb-0 inline-flex items-center gap-2">
                <p>{item.title}</p>
              </CardTitle>
              {item.wip && (
                <Badge variant={"destructive"} className="ml-auto">
                  <p>{locale.wip}</p>
                </Badge>
              )}
              {item.demo && (
                <Badge variant={"secondary"} className="ml-auto">
                  <p>Demo Project</p>
                </Badge>
              )}
            </CardHeader>
            <CardContent>
              <div className="py-2">{item.description[params.lang]}</div>
            </CardContent>
            <CardFooter>
              <section className="flex w-full items-center gap-2">
                {item.tech?.map((el, idx) => {
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
                <Link href={`/${params.lang}/${item.id}`} scroll={false}>
                  <Button
                    variant={"link"}
                    className="ml-auto hover:cursor-pointer"
                  >
                    Learn More
                  </Button>
                </Link>
              </section>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};
