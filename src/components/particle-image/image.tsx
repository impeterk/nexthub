"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

import { imageParticles } from "./particles.js";

type ParticleImageProps = {
  src: string;
  className?: string;
  canvasWidth?: string;
  canvasHeight?: string;
  gravity?: string;
  particleSize?: string;
  particleGap?: string;
  mouseForce?: string;
  renderer?: "default" | "webgl";
  color?: string;
  colorArr?: number[];
  initPosition?:
    | "random"
    | "top"
    | "left"
    | "bottom"
    | "right"
    | "misplaced"
    | "none";
  initDirection?: "random" | "top" | "left" | "bottom" | "right" | "none";
  fadePosition?:
    | "explode"
    | "top"
    | "left"
    | "bottom"
    | "right"
    | "random"
    | "none";
  fadeDirection?: "random" | "top" | "left" | "bottom" | "right" | "none";
  noise?: number;
  responsiveWidth?: boolean;
};

export default function ParticleImage({
  initPosition,
  initDirection,
  fadeDirection,
  fadePosition,
  noise,
  responsiveWidth,
  src,
  className,
  particleGap,
  canvasHeight,
  canvasWidth,
  gravity,
  particleSize,
  mouseForce,
  renderer,
  color,
  colorArr,
}: ParticleImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  let particles;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const { InspiraImageParticle } = imageParticles();
      particles = new InspiraImageParticle(imageRef.current);
    });

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={src}
      className={cn("hidden h-32 w-32", className)}
      data-particle-gap={particleGap}
      data-width={canvasWidth}
      data-height={canvasHeight}
      data-gravity={gravity}
      data-particle-size={particleSize}
      data-mouse-force={mouseForce}
      data-renderer={renderer}
      data-color={color}
      data-color-arr={colorArr}
      data-init-position={initPosition}
      data-init-direction={initDirection}
      data-fade-position={fadePosition}
      data-fade-direction={fadeDirection}
      data-noise={noise}
      data-responsive-width={responsiveWidth}
    />
  );
}
