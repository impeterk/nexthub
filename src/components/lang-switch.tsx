import { IconCheck, IconLanguage } from "@tabler/icons-react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const langs = ["en", "sk"];

export default function LanguageSwitch({ lang }: { lang: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <IconLanguage className="mr-1 size-5" /> {lang}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full min-w-0">
        {langs.map((el) => (
          <DropdownMenuItem key={el} asChild>
            <a href={`/${el}`} className="flex items-center justify-between">
              {el} {el === lang && <IconCheck />}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
