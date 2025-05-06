"use client";

import dynamic from "next/dynamic";

import logo from "@/app/icon.png";
import useSystemTheme from "@/hooks/use-system-theme";

const ParticleImage = dynamic(() => import("./image"), { ssr: false });

export default function ClientParticleImage() {
  const { theme } = useSystemTheme();
  return (
    <section className="container h-[300px]" key={theme}>
      <ParticleImage
        src={logo.src}
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
