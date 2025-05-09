import Image from "next/image";

import { IconFileCv } from "@tabler/icons-react";

import Hero from "@/components/hero";
import { BlurFade } from "@/components/magicui/blur-fade";
import Projects from "@/components/projects/section";
import { Button } from "@/components/ui/button";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";

export default function Home() {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <Hero />
      <Projects />
      <section className="mt-10">
        <h2 className="from-accent to-primary relative z-20 bg-gradient-to-b bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          About Me
        </h2>
        <div className="flex justify-around gap-8">
          <div className="shrink-0">
            <BlurFade delay={0.25} direction="right" inView offset={25}>
              <GlowingStarsBackgroundCard>
                <Image
                  src="/AboutMe.webp"
                  alt="Profile image"
                  width={300}
                  height={400}
                  className="relative z-50 -translate-y-[250px]"
                />
              </GlowingStarsBackgroundCard>
              <Button className="mt-6" size={"lg"}>
                <IconFileCv className="mr-2 size-5" />
                Resume
              </Button>
            </BlurFade>
          </div>
          <article className="w-full max-w-2xl">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              The Joke Tax Chronicles
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              The King's Plan
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The king thought long and hard, and finally came up with{" "}
              <a
                href="#"
                className="text-primary font-medium underline underline-offset-4"
              >
                a brilliant plan
              </a>
              : he would tax the jokes in the kingdom.
            </p>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              "After all," he said, "everyone enjoys a good joke, so it's only
              fair that they should pay for the privilege."
            </blockquote>
          </article>
        </div>
      </section>
    </section>
  );
}
