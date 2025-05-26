import { Suspense } from "react";

import AboutMeSection from "@/components/about-me/section";
import ContactSection from "@/components/contact/section";
import Hero from "@/components/hero";
import Projects from "@/components/projects/section";

export default function Home() {
  return (
    <section className="mx-auto px-4 md:px-6">
      <div className="container mx-auto">
        <Hero />
        <Projects />
        <AboutMeSection />
      </div>
      <Suspense>
        <ContactSection />
      </Suspense>
    </section>
  );
}
