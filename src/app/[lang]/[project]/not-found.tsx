"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useLocales } from "@/lib/data/locales";
import { LANGS } from "@/lib/shared/types";

export default function NotFoundProjectPage() {
  const params = useParams<{ lang: LANGS }>();
  const locale = useLocales(params.lang);
  return (
    <div className="relative container mx-auto h-full">
      <article className="px-6">
        <h1 className="mb-1 scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
          {locale[404].title}
        </h1>
        <Button className="w-full" asChild>
          <Link href="/">{locale[404].button}</Link>
        </Button>
      </article>
    </div>
  );
}
