"use client";

import { useEffect, useState } from "react";

import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import { Button } from "./button";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <ThemeSwitchFallback />;
  }

  return (
    <div className="inline-flex rounded-lg border">
      <Button
        variant={theme == "light" ? "secondary" : "ghost"}
        size="icon"
        onClick={() => {
          setTheme("light");
        }}
        className={cn(
          "size-8 rounded-r-none",
          theme === "light" && "text-indigo-600",
        )}
      >
        <IconSun className="size-5" />
      </Button>
      <Button
        variant={theme == "dark" ? "secondary" : "ghost"}
        size="icon"
        onClick={() => {
          setTheme("dark");
        }}
        className={cn(
          "size-8 rounded-none",
          theme === "dark" && "text-indigo-600",
        )}
      >
        <IconMoon className="size-5" />
      </Button>
      <Button
        variant={theme == "system" ? "secondary" : "ghost"}
        size="icon"
        onClick={() => {
          setTheme("system");
        }}
        className={cn(
          "size-8 rounded-l-none",
          theme === "system" && "text-indigo-600",
        )}
      >
        <IconDeviceDesktop className="size-5" />
      </Button>
    </div>
  );
}

export function ThemeSwitchFallback() {
  return (
    <div className="inline-flex rounded-lg border">
      <Button
        variant="ghost"
        size="icon"
        className={cn("size-8 rounded-r-none")}
      >
        <IconDeviceDesktop className="size-4" />
      </Button>
      <Button variant="ghost" size="icon" className={cn("size-8 rounded-none")}>
        <IconSun className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn("size-8 rounded-l-none")}
      >
        <IconMoon className="size-4" />
      </Button>
    </div>
  );
}
