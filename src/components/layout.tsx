import Image from "next/image";
import Link from "next/link";

import logo from "@@/public/favicon-dark.png";

import LanguageSwitch from "./lang-switch";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";

export const Header = ({ lang }: { lang: string }) => {
  return (
    <header className="bg-background text-foreground sticky top-0 left-0 z-50 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-xl"
        >
          <Image
            src={logo.src}
            width={32}
            height={(936 / 1080) * 32}
            alt="logo"
            className="not-dark:invert"
          />
          Peterk.dev
        </Link>
        {/* <ThemeSwitch /> */}
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export const Footer = ({ lang }: { lang: string }) => {
  return (
    <footer className="text-muted-foreground container mx-auto flex items-center justify-center p-4 text-center">
      <Button variant={"link"} className="ml-auto">
        <> &copy; Peter Kudelas | {new Date().getUTCFullYear()}</>
      </Button>
      <div className="ml-auto">
        <LanguageSwitch lang={lang} />
      </div>
    </footer>
  );
};
