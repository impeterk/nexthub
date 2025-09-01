import { NextRequest } from "next/server";

import { readFile } from "fs/promises";
import path from "path";

import { getLocale } from "@/lib/data/locales";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lang = searchParams.get("lang") || getLocale(request);
  const resume = await readFile(
    path.join(process.cwd(), "src/assets", `resume-${lang}.pdf`),
  );
  const headers = new Headers(request.headers);
  // remember to change the filename here
  headers.append("Content-Type", "application/pdf");
  // @ts-expect-error response is not body
  return new Response(resume, {
    headers,
  });
}
