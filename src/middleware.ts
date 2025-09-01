import { NextRequest, NextResponse } from "next/server";

import { getLocale } from "./lib/data/locales";

const validLocales = ["en", "sk"];

// Get the preferred locale, similar to the above or using a library
export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = validLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  //   // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // "/((?!_next).*)",
    "/((?!api|admin|_next/static|_next/image|sitemap.xml|robots.txt|resume.pdf|.*\\.png$|.*\\.webp$).*)",
    // Optional: only run on root (/) URL
  ],
};
