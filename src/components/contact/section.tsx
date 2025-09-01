"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

import { IconCalendarPlus, IconMail } from "@tabler/icons-react";

import { locales, useLocales } from "@/lib/data/locales";

import { RetroGrid } from "../magicui/retro-grid";
import { WordRotate } from "../magicui/word-rotate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { GetInTouch } from "./get-in-touch";

export default function ContactSection({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const params = useParams<{ lang: "en" | "sk" }>();
  const locale = useLocales(params.lang).contact;

  const tab = searchParams.get("tab") ?? "contact";
  return (
    <>
      <section className="relative z-[40] my-10 min-h-[50vh] overflow-hidden bg-transparent antialiased">
        <RetroGrid className="z-[-1] h-[125%] -translate-y-1/3" angle={65} />
        <WordRotate
          duration={5000}
          words={locale.title}
          className="bg-opacity-50 from-foreground to-primary bg-gradient-to-b bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
        />

        <div className="mt-10 grid place-items-center">
          <Tabs
            defaultValue={tab}
            className="min-w-0 max-md:w-full md:min-w-lg"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="contact" asChild>
                <Link
                  href={{
                    query: {
                      tab: "contact",
                    },
                  }}
                  scroll={false}
                >
                  <IconMail /> {locales[params.lang].contact.title[0]}
                </Link>
              </TabsTrigger>
              <TabsTrigger value="consultation" disabled>
                {/* <Link */}
                {/*   href={{ */}
                {/*     query: { */}
                {/*       tab: "consultation", */}
                {/*     }, */}
                {/*   }} */}
                {/*   scroll={false} */}
                {/* > */}
                <IconCalendarPlus /> {
                  locales[params.lang].contact.title[1]
                }{" "}
                {/* </Link> */}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="contact">
              <GetInTouch />
            </TabsContent>
            <TabsContent value="consultation">{children}</TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
