"use client";

import { Suspense } from "react";

import { AnimatedImagesSkeleton } from "@/components/ui/animated-images";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

import { Modal } from "./project-modal";

export default function ProjectLayout(props: LayoutProps<"/[lang]/[project]">) {
  return (
    <Modal>
      <Suspense fallback={<LoadingSkeleton />}>{props.children}</Suspense>
    </Modal>
  );
}

export function LoadingSkeleton() {
  return (
    <DialogContent className="flex h-full flex-col gap-2 max-lg:max-h-[95svh] sm:max-w-7xl">
      <DialogTitle>Loading...</DialogTitle>
      <div className="my-5 space-y-2">
        <Skeleton className="h-6 w-[50%]" />
        <Skeleton className="h-6 w-[45%]" />
        <Skeleton className="h-6 w-[50%]" />
        <Skeleton className="h-6 w-[50%]" />
        <Skeleton className="h-6 w-[40%]" />
      </div>
      <div className="hidden gap-2 md:grid md:grid-cols-2">
        <div className="space-y-2">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <br />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <br />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>
        <div className="my-6">
          <AnimatedImagesSkeleton />
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-end">
        <Skeleton className="h-12 w-40" />
      </div>
    </DialogContent>
  );
}
