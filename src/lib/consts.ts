export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.BASE_URL!;
export const LANGS = ["en", "sk"];
export const GTM_ID = process.env.GTM_ID ?? null;
