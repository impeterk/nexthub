import { Suspense } from "react";

import AboutMeSection from "@/components/about-me/section";
import BookConsultation from "@/components/contact/consultation";
import ContactSection from "@/components/contact/section";
import Hero from "@/components/hero";
import Projects from "@/components/projects/section";

export default async function Home({
  params,
  searchParams,
}: {
  params: Promise<{ lang: "en" | "sk" }>;
  searchParams?: {
    tab?: string;
  };
}) {
  const { lang } = await params;
  return (
    <section className="mx-auto px-4 md:px-6">
      <div className="container mx-auto">
        <Hero />
        <Projects lang={lang} />
        <AboutMeSection />
      </div>
      <Suspense>
        <ContactSection>
          <BookConsultation />
        </ContactSection>
      </Suspense>
    </section>
  );
}
