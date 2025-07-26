import { Suspense } from "react";

import AboutMeSection from "@/components/about-me/section";
import ContactSection from "@/components/contact/section";
import Hero from "@/components/hero";
import Projects from "@/components/projects/section";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "sk" }>;
}) {
  const { lang } = await params;
  console.log({ lang });
  return (
    <section className="mx-auto px-4 md:px-6">
      <div className="container mx-auto">
        <Hero />
        <Projects lang={lang} />
        <AboutMeSection />
      </div>
      <Suspense>
        <ContactSection />
      </Suspense>
    </section>
  );
}
