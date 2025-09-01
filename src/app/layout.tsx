import type { Metadata } from "next";

import { BASE_URL } from "@/lib/consts";

export const metadata: Metadata = {
  title: {
    template: "%s | Peterk.dev Full-stack developer",
    default: ` Peterk.dev Full-stack developer`,
  },
  metadataBase: new URL(BASE_URL),
};
export default async function Layout(props: LayoutProps<"/">) {
  return (
    <>
      {props.project}
      {props.children}
    </>
  );
}
