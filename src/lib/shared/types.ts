export type LANGS = "sk" | "en";
export type ProjectPageProps = {
  params: Promise<{ lang: "en" | "sk"; project: string }>;
};
