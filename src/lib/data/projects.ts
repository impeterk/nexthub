import { ComponentType } from "react";

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

import SimpleIconsDrizzle from "@/assets/icon-drizzle";
import VscodeIconsFileTypeMjml from "@/assets/icon-mjml";
import VscodeIconsFileTypeReactrouter from "@/assets/icon-react-router";
import SimpleIconsTurso from "@/assets/icon-turso";

export type Project = {
  id: string;
  title: string;
  description: {
    en: string;
    sk: string;
  };
  link: string;
  tech?: {
    name: string;
    icon: ComponentType<{ className?: string }>;
    className: string;
  }[];
};

export const projects: Project[] = [
  {
    id: "check-my-ticket",
    title: "Check My Ticket",
    description: {
      en: "Single page Full-stack Web Application for Azure DevOps. Handles user authentification, CRUD Operations and connection with Azure LogicApps. Created with Vue, Pinia for state management, TailwindCSS for styling and Firebase for backend.",
      sk: "Single page Full-stack Web Application for Azure DevOps. Handles user authentification, CRUD Operations and connection with Azure LogicApps. Created with Vue, Pinia for state management, TailwindCSS for styling and Firebase for backend.",
    },
    tech: [
      { name: "Vue.js", icon: IconBrandVue, className: "text-emerald-500" },
      {
        name: "Tailwind CSS",
        icon: IconBrandTailwind,
        className: "text-cyan-500",
      },
      { name: "Azure Cloud", icon: IconBrandAzure, className: "text-sky-500" },
      {
        name: "Supabase",
        icon: IconBrandSupabase,
        className: "text-green-500",
      },
    ],
    link: "https://henkel-adhesives.com/check-my-ticket.html",
  },
  {
    id: "for-every-you",
    title: "For Every You",
    description: { en: "Selfie generation App for Schwarzkopf", sk: "" },
    link: "#",
    tech: [
      { name: "React", icon: IconBrandReact, className: "text-sky-500" },
      {
        name: "React Router",
        icon: VscodeIconsFileTypeReactrouter,
        className: "size-7",
      },
      {
        name: "Typescript",
        icon: IconBrandTypescript,
        className: "text-blue-500",
      },
      {
        name: "TailwindCSS",
        icon: IconBrandTailwind,
        className: "text-cyan-500",
      },
    ],
  },
  {
    id: "mj2r",
    title: "MJ2R",
    description: { en: "Scalable email templates for (non)developers", sk: "" },
    tech: [
      { name: "React", icon: IconBrandReact, className: "text-sky-500" },
      {
        name: "React Router",
        icon: VscodeIconsFileTypeReactrouter,
        className: "size-7",
      },

      { name: "MJML", icon: VscodeIconsFileTypeMjml, className: "size-5" },
      {
        name: "Typescript",
        icon: IconBrandTypescript,
        className: "text-blue-500",
      },
      {
        name: "TailwindCSS",
        icon: IconBrandTailwind,
        className: "text-cyan-500",
      },
    ],
    link: "https://mj2r.peterk.dev",
  },
  {
    id: "my-linkz-one",
    title: "mylinkzone",
    description: { en: "LinkTree clone", sk: "" },
    link: "mylinkzone.vercel.app",
    tech: [
      { name: "Next js", icon: IconBrandNextjs, className: "" },
      { name: "Vercel", icon: IconBrandVercel, className: "fill-white" },
      {
        name: "Drizzle ORM",
        icon: SimpleIconsDrizzle,
        className: "text-lime-400 p-1 rounded size-6",
      },
      { name: "Turso DB", icon: SimpleIconsTurso, className: "text-teal-500" },
    ],
  },
  {
    id: "value-calculators",
    title: "Value calculators",
    description: { en: "Rebuild calculators for Henkel", sk: "" },
    tech: [
      { name: "React", icon: IconBrandReact, className: "text-sky-500" },
      { name: "Sass", icon: IconBrandSass, className: "text-pink-500" },
      {
        name: "React Router",
        icon: VscodeIconsFileTypeReactrouter,
        className: "size-7",
      },
    ],
    link: "#",
  },
];
