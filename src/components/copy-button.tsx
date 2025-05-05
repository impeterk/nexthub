"use client";

import { useRef, useState } from "react";

import {
  IconCheck,
  IconClipboard,
  type Icon as IconType,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export default function CopyButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [Icon, setIcon] = useState<IconType>(IconClipboard);
  const [iconClass, setIconClass] = useState("");
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  function handleClick() {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    navigator.clipboard.writeText(text);
    setIcon(IconCheck);
    setIconClass("text-[#17c964]");
    timeoutId.current = setTimeout(() => {
      console.log("timeout");
      setIcon(IconClipboard);
      setIconClass("");
    }, 750);
  }
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("size-10 border", className)}
      onClick={handleClick}
    >
      <Icon className={cn("text-muted-foreground size-4", iconClass)} />
    </Button>
  );
}
