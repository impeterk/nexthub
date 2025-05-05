import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import { ThemeSwitch } from "./ui/theme-switch";

export const Header = () => {
  return (
    <header className="bg-background text-foreground border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-xl">
          <Image
            src="/hero-logo.png"
            width={32}
            height={(936 / 1080) * 32}
            alt="logo"
            className="dark:invert"
          />
          Peterk.dev
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="text-muted-foreground p-4 text-center">
      <Button asChild variant={"link"}>
        <> &copy; Peter Kudelas | {new Date().getUTCFullYear()}</>
      </Button>
    </footer>
  );
};
