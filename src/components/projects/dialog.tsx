import { ReactNode } from "react";

import { IconArrowNarrowRight } from "@tabler/icons-react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

import { AnimatedImages } from "../ui/animated-images";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const ProjectDialog = ({
  title,
  children,
  tech,
}: {
  title: string;
  children: ReactNode;
  tech: Project["tech"];
}) => {
  return (
    <Dialog>
      {children}
      <DialogContent className="max-lg:h-[95svh] sm:max-w-7xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <section className="grid gap-12 overflow-y-auto lg:grid-cols-2">
          <article className="prose prose-indigo dark:prose-invert">
            <section aria-labelledby="overview">
              <h2 id="overview">Overview</h2>
              <p>
                This application provides a responsive, user-friendly interface
                to track and update Azure DevOps work items. Built with a Vue.js
                frontend and styled using TailwindCSS, it delivers a fast,
                mobile-first experience.
              </p>
            </section>

            <section aria-labelledby="frontend">
              <h2 id="frontend">Frontend Technology</h2>
              <p>
                We chose <strong>Vue.js</strong> for its component-driven
                architecture and reactivity. Combined with{" "}
                <strong>TailwindCSS</strong>, we achieve a clean design system
                and utility-first styling without ever leaving our markup.
              </p>
            </section>

            <section aria-labelledby="authentication">
              <h2 id="authentication">Authentication</h2>
              <p>
                Secure user sign-in and session management are powered by{" "}
                <strong>Supabase Auth</strong>. With email/password and OAuth
                providers, users can log in quickly and safely.
              </p>
            </section>

            <section aria-labelledby="backend">
              <h2 id="backend">Backend Integration</h2>
              <p>
                All communication with Azure DevOps boards is orchestrated via{" "}
                <strong>Azure Logic Apps</strong>. Logic Apps handle
                authentication, message routing, and API calls, ensuring
                reliable, serverless workflows between our frontend and Azure
                DevOps.
              </p>
            </section>
          </article>
          <div className="flex w-full flex-col justify-center px-2 md:px-12">
            <div className="mt-auto">
              <AnimatedImages />
            </div>
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
          </div>
        </section>
        <DialogFooter>
          <Button className="mr-12 max-sm:mx-auto max-sm:w-full" size={"lg"}>
            <>
              Live in Prod
              <IconArrowNarrowRight />
            </>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
