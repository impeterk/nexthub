import Hero from "@/components/hero";
import { ProjectCard } from "@/components/projects/card";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <Hero />
      <section className="bg-background relative mt-10 min-h-screen w-full">
        <div className="container mx-auto">
          <h2 className="from-accent to-primary relative z-20 bg-gradient-to-b bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
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
        <div className="dark:bg-background pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute inset-0 flex flex-wrap content-center items-center justify-center gap-6">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
    </section>
  );
}
