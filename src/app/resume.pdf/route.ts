import { readFile } from "fs/promises";
import path from "path";

export const dynamic = "force-static";

export async function GET() {
  const resume = await readFile(
    path.join(process.cwd(), "src/assets", "resume.pdf"),
  );
  const headers = new Headers();
  // remember to change the filename here
  headers.append("Content-Type", "application/pdf");

  return new Response(resume, {
    headers,
  });
}
