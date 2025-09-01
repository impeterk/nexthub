"use client";

import { useFavicon } from "@uidotdev/usehooks";

import useSystemTheme from "@/hooks/use-system-theme";

export default function DynamicFavicon() {
  const { theme } = useSystemTheme();
  // After mounting, we can safely show the favicon that matches the theme
  useFavicon(theme === "dark" ? "/favicon-dark.png" : "/favicon.png");

  return null;
}
