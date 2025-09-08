"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLocales } from "@/lib/data/locales";
import { LANGS } from "@/lib/shared/types";

export default function NotFoundProjectPage() {
  const params = useParams<{ lang: LANGS }>();
  const locale = useLocales(params.lang);
  return (
    <DialogContent className="max-lg:max-h-[95svh] sm:max-w-xl">
      <DialogHeader className="mb-1">
        <DialogTitle className="pb-2">{locale[404].title}</DialogTitle>
      </DialogHeader>
      <article className="max-md:prose-sm prose prose-indigo dark:prose-invert mt-auto">
        <p>{locale[404].description}</p>
      </article>
      <DialogFooter className="mt-auto">
        <Button className="w-full" asChild>
          <Link href={`/${params.lang}`}>{locale[404].button}</Link>
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
