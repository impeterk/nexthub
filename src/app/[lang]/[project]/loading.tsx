import { Suspense } from "react";

import { AnimatedImagesSkeleton } from "@/components/ui/animated-images";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingProjectPage() {
  return <LoadingSkeleton />;
}

export function LoadingSkeleton() {
  return (
    <section className="container mx-auto flex h-full flex-col gap-2 max-lg:max-h-[95svh] sm:max-w-7xl">
      <h1 className="mb-1 scroll-m-20 py-2 text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
        Loading...
      </h1>
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
    </section>
  );
}
