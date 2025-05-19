"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

import { type Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
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
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();
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
                <ProjectDialog title={item.title}>
                  <DialogTrigger asChild>
                    <Button variant={"link"} className="ml-auto">
                      {/* <a href={item.link} target="_blank"> */}
                      Discover
                      <IconArrowNarrowRight />
                      {/* </a> */}
                    </Button>
                  </DialogTrigger>
                </ProjectDialog>
              </section>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

const ProjectDialog = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Dialog>
      {children}
      <DialogContent className="sm:max-w-7xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.This action cannot be
          undone. This will permanently delete your account and remove your data
          from our servers.This action cannot be undone. This will permanently
          delete your account and remove your data from our servers.This action
          cannot be undone. This will permanently delete your account and remove
          your data from our servers.This action cannot be undone. This will
          permanently delete your account and remove your data from our
          servers.This action cannot be undone. This will permanently delete
          your account and remove your data from our servers.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
