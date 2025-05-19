import Image from "next/image";

import { BlurFade } from "@/components/magicui/blur-fade";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";

export default function ProfileImage() {
  return (
    <BlurFade delay={0.25} direction="right" inView offset={100}>
      <GlowingStarsBackgroundCard className="mx-auto outline">
        <Image
          src="/AboutMe.webp"
          alt="Profile image"
          width={300}
          height={400}
          className="relative z-50 -translate-y-[250px]"
        />
      </GlowingStarsBackgroundCard>
    </BlurFade>
  );
}
