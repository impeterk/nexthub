"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

import BrowserBlock from "@/assets/BrowserBlock";

import { Skeleton } from "./skeleton";

export const AnimatedImages = ({
  autoplay = false,
  images = [],
  internal = false,
}: {
  autoplay?: boolean;
  images?: string[];
  internal?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  if (!mounted) {
    return <AnimatedImagesSkeleton />;
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative h-60 w-full md:h-80">
          <AnimatePresence>
            {internal && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  z: 0,
                  rotate: 0,
                  zIndex: 40,
                  y: [0, -80, 0],
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <div className="bg-accent/60 grid h-full w-full place-items-center rounded-3xl object-cover object-center py-6">
                  <BrowserBlock className="text-accent-foreground size-full" />
                </div>

                <h4 className="mt-4 scroll-m-20 text-center text-xl font-semibold tracking-tight">
                  Images are not available
                </h4>
              </motion.div>
            )}
            {images.map((src, index) => (
              <motion.div
                key={src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 40 : images.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={src}
                  alt="hello"
                  fill
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex gap-4 pt-12">
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export function AnimatedImagesSkeleton() {
  return (
    <div className="flex flex-col items-center rounded-lg">
      <Skeleton className="relative h-60 w-full md:h-80" />
    </div>
  );
}
