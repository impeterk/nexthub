import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const resume = await readFile(
    path.join(process.cwd(), "public", "dummy.pdf"),
  );
  const headers = new Headers();
  // remember to change the filename here
  headers.append("Content-Type", "application/pdf");

  return new Response(resume, {
    headers,
  });
}
