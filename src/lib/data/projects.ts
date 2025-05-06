import { ComponentType } from "react";

import SimpleIconsDrizzle from "@@/assets/icon-drizzle";
import VscodeIconsFileTypeMjml from "@@/assets/icon-mjml";
import VscodeIconsFileTypeReactrouter from "@@/assets/icon-react-router";
import SimpleIconsTurso from "@@/assets/icon-turso";
import {
  IconBrandAzure,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandSass,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconBrandVue,
} from "@tabler/icons-react";

export type Project = {
  title: string;
  description: string;
  link: string;
  tech?: {
    icon: ComponentType<{ className?: string }>;
    className: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "Check My Ticket",
    description: "salalj la laj la laj",
    tech: [
      { icon: IconBrandVue, className: "text-emerald-500" },
      { icon: IconBrandTailwind, className: "text-cyan-500" },
      { icon: IconBrandAzure, className: "text-sky-500" },
      { icon: IconBrandSupabase, className: "text-green-500" },
    ],
    link: "https://henkel-adhesives.com/check-my-ticket.html",
  },
  {
    title: "MJ2R",
    description: "Scalable email templates for (non)developers",
    tech: [
      { icon: IconBrandReact, className: "text-sky-500" },
      { icon: VscodeIconsFileTypeReactrouter, className: "size-7" },
      { icon: VscodeIconsFileTypeMjml, className: "size-5" },
      { icon: IconBrandTypescript, className: "text-blue-500" },
      { icon: IconBrandTailwind, className: "text-cyan-500" },
    ],
    link: "https://mj2r.peterk.dev",
  },
  {
    title: "For Every You",
    description: "Selfie generation App for Schwarzkopf",
    link: "#",
    tech: [
      { icon: IconBrandReact, className: "text-sky-500" },
      { icon: VscodeIconsFileTypeReactrouter, className: "size-7" },
      { icon: IconBrandTypescript, className: "text-blue-500" },
      { icon: IconBrandTailwind, className: "text-cyan-500" },
    ],
  },
  {
    title: "mylinkzone",
    description: "LinkTree clone",
    link: "mylinkzone.vercel.app",
    tech: [
      { icon: IconBrandNextjs, className: "" },
      { icon: IconBrandVercel, className: "fill-primary" },
      { icon: SimpleIconsDrizzle, className: "" },
      { icon: SimpleIconsTurso, className: "" },
    ],
  },
  {
    title: "Value calculators",
    description: "Rebuild calculators for Henkel",
    tech: [
      { icon: IconBrandReact, className: "text-sky-500" },
      { icon: IconBrandSass, className: "text-pink-500" },
      { icon: VscodeIconsFileTypeReactrouter, className: "size-7" },
    ],
    link: "#",
  },
];
