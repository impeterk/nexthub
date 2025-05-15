"use client";

import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

import { HoverEffect } from "../ui/card-hover-effect";

export default function Projects() {
  return (
    <section className="bg-background relative mt-10 min-h-screen w-full">
      <div className="container mx-auto">
        <h2 className="to-primary relative z-20 bg-gradient-to-b from-indigo-950 to-50% bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Projects
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
      <HoverEffect items={projects} />
    </section>
  );
}
