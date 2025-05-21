import Link from "next/link";

import { IconFileCv } from "@tabler/icons-react";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";

import ProfileImage from "./profile";

export default function AboutMeSection() {
  return (
    <section className="mt-10 bg-transparent pt-20 pb-10">
      <h2 className="to-primary relative z-20 bg-gradient-to-b from-indigo-950 to-50% bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        About Me
      </h2>
      <div className="flex flex-col justify-around gap-8 md:flex-row">
        <div className="shrink-0">
          <ProfileImage />
          <BlurFade
            delay={0.65}
            direction="up"
            inView
            className="hidden md:block"
          >
            <Button className="mt-6" size={"lg"} asChild>
              <Link href="/resume.pdf" target="_blank">
                <IconFileCv className="mr-2 size-5" />
                Resume
              </Link>
            </Button>
          </BlurFade>
        </div>
        <article className="w-full max-w-2xl overflow-x-hidden">
          <BlurFade delay={0.35} direction="left" inView offset={100}>
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
          </BlurFade>
        </article>
        <BlurFade delay={0.65} direction="up" inView className="flex md:hidden">
          <Button className="mx-auto w-full max-w-xs" size={"lg"} asChild>
            <Link href="/resume.pdf" target="_blank">
              <IconFileCv className="mr-2 size-5" />
              Resume
            </Link>
          </Button>
        </BlurFade>
      </div>
    </section>
  );
}
