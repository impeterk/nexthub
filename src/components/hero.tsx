import { cn } from "@/lib/utils";

import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { TextAnimate } from "./magicui/text-animate";
import ClientParticleImage from "./particle-image";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center overflow-hidden md:h-[80vh]">
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] skew-y-12",
        )}
      />
      <div className="pt-12 pl-4">
        <ClientParticleImage />
      </div>
      <div className="space-y-2 text-center">
        <h1 className="text-5xl font-bold">Peterk.dev</h1>
        <h2 className="text-muted-foreground text-2xl font-semibold italic">
          Fullstack developer
        </h2>
        <div className="mx-auto mt-12 max-w-5xl text-xl font-medium tracking-wide">
          <TextAnimate animation="blurIn" delay={0.75} by="word" duration={1}>
            Design. Develop. Deliver.
          </TextAnimate>
        </div>
      </div>
    </section>
  );
}
