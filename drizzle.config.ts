import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/lib/drizzle",
  schema: "./src/lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEON_URL!,
  },
});
