"use client";

import { useEffect, useState } from "react";

import useSystemTheme from "@/hooks/use-system-theme";

export default function DynamicFavicon() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useSystemTheme();
  // After mounting, we can safely show the favicon that matches the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Get all existing favicon links
    const existingFavicons = document.querySelectorAll('link[rel="icon"]');
    // Remove any existing favicons
    existingFavicons.forEach((favicon) => {
      document.head.removeChild(favicon);
    });

    // Create new favicon link
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = theme === "dark" ? "/favicon-dark.png" : "/favicon.png";
    // Add the new favicon to the document
    document.head.appendChild(link);
  }, [theme, mounted]);

  // Don't render anything on the server or during client hydration
  if (!mounted) return null;

  return null;
}
