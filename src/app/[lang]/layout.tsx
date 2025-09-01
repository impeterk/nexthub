import type { Metadata, ResolvingMetadata } from "next";
import localFont from "next/font/local";

import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NextTopLoader from "nextjs-toploader";

import DynamicFavicon from "@/components/dynamic-icon";
import { Footer, Header } from "@/components/layout";
import { GTM_ID } from "@/lib/consts";
import { useLocales } from "@/lib/data/locales";
import Providers from "@/providers";

import "../globals.css";

const geistSans = localFont({
  src: "../../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "../../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export async function generateMetadata(
  props: LayoutProps<"/[lang]">,
): Promise<Metadata> {
  const { lang } = (await props.params) as { lang: "en" | "sk" };
  const locale = useLocales(lang);
  return {
    title: locale.meta.title,
    description: locale.meta.description,
  };
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "sk" }];
}

export default async function RootLayout(props: LayoutProps<"/[lang]">) {
  const { lang } = await props.params;

  return (
    <html lang={lang} suppressHydrationWarning>
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body
        className={`${geistSans.variable} ${geistMono.variable} grid min-h-screen grid-rows-[auto_1fr_auto] font-sans`}
      >
        <NextTopLoader color="oklch(0.71 0.16 293.4)" />
        <Providers>
          <DynamicFavicon />
          <Header lang={lang} />
          <main>{props.children}</main>
          <Footer lang={lang} />
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
