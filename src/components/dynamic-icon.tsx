"use client";

import { useEffect, useState } from "react";

import faviconDark from "@/assets/favicon-dark.png";
import faviconLight from "@/assets/icon.png";

export default function DynamicFavicon() {
  const [mounted, setMounted] = useState(false);
  // After mounting, we can safely show the favicon that matches the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Get all existing favicon links
    const existingFavicons = document.querySelectorAll('link[rel="icon"]');
    const darkTheme = document
      .querySelector("html")
      ?.classList.contains("dark");
    // Remove any existing favicons
    existingFavicons.forEach((favicon) => {
      document.head.removeChild(favicon);
    });

    // Create new favicon link
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = darkTheme ? faviconDark.src : faviconLight.src;
    // Add the new favicon to the document
    document.head.appendChild(link);
  }, [mounted]);

  // Don't render anything on the server or during client hydration
  if (!mounted) return null;

  return null;
}
