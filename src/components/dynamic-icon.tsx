"use client";

import { useEffect, useState } from "react";

import { useFavicon } from "@reactuses/core";

import useSystemTheme from "@/hooks/use-system-theme";

export default function DynamicFavicon() {
  const { theme } = useSystemTheme();
  // After mounting, we can safely show the favicon that matches the theme
  const [favicon, setFavicon] = useState("/favicon.png");

  useEffect(() => {
    setFavicon(theme === "dark" ? "/favicon-dark.png" : "/favicon.png");
  }, [theme]);

  useFavicon(favicon);

  return null;
}
