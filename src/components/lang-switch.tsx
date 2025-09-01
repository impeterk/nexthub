"use client";

import { usePathname, useRouter } from "next/navigation";

import { IconCheck, IconLanguage } from "@tabler/icons-react";

import { setPrefLang } from "@/lib/data/actions";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const langs = ["en", "sk"];

export default function LanguageSwitch({ lang }: { lang: string }) {
  const pathname = usePathname();
  const router = useRouter();
  function handleLangSwitch(lang: (typeof langs)[number]) {
    const newPath = pathname.split("/").toSpliced(1, 1, lang).join("/");
    router.push(newPath, { scroll: false });
    setPrefLang(lang);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <IconLanguage className="mr-1 size-5" /> {lang}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full min-w-0">
        {langs.map((el) => (
          <DropdownMenuItem
            key={el}
            className="flex items-center justify-between"
            onClick={() => handleLangSwitch(el)}
          >
            {el} {el === lang && <IconCheck />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
