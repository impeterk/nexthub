"use client";

import type { JSX } from "react";
import { useEffect, useState } from "react";

import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/cn";

function ThemeOption({
  icon,
  value,
  isActive,
  onClick,
}: {
  icon: JSX.Element;
  value: string;
  isActive?: boolean;
  onClick?: (value: string) => void;
}) {
  return (
    <button
      className={cn(
        "relative flex size-8 cursor-default items-center justify-center rounded transition-all [&_svg]:size-4",
        isActive
          ? "bg-muted text-indigo-500"
          : "text-foreground hover:bg-muted",
      )}
      role="radio"
      aria-checked={isActive}
      aria-label={`Switch to ${value} theme`}
      onClick={() => onClick(value)}
    >
      {icon}

      {isActive && (
        <motion.div
          layoutId="theme-option"
          transition={{ type: "keyframes", duration: 0.3 }}
          className="border-primary absolute inset-0 rounded border"
        />
      )}
    </button>
  );
}

const THEME_OPTIONS = [
  {
    icon: <IconDeviceDesktop />,
    value: "system",
  },
  {
    icon: <IconSun />,
    value: "light",
  },
  {
    icon: <IconMoon />,
    value: "dark",
  },
];

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Fallback />;
  }

  return (
    <div
      className="bg-background ring-accent inline-flex items-center overflow-hidden rounded ring-1 ring-inset"
      role="radiogroup"
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={setTheme}
        />
      ))}
    </div>
  );
}

function Fallback() {
  return (
    <div
      className="bg-background ring-accent inline-flex items-center overflow-hidden rounded ring-1 ring-inset"
      role="radiogroup"
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
        />
      ))}
    </div>
  );
}

export { ThemeSwitcher };
