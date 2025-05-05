"use client";

import dynamic from "next/dynamic";

import useSystemTheme from "@/hooks/use-system-theme";

const ParticleImage = dynamic(() => import("./image"), { ssr: false });

export default function ClientParticleImage() {
  const { theme } = useSystemTheme();
  return (
    <section className="container" key={theme}>
      <ParticleImage
        src="/hero-logo.png"
        renderer="webgl"
        canvasHeight="300"
        className="h-full w-full"
        responsiveWidth={true}
        particleSize="1.65"
        color={theme === "dark" ? "#f8fafc" : "#020617"}
      />
    </section>
  );
}
