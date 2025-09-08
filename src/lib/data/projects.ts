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
  wip?: boolean;
  description: {
    en: string;
    sk: string;
  };
  link?: string;
  tech?: {
    name: string;
    icon: ComponentType<{ className?: string }>;
    className: string;
    link: string;
  }[];
};

export const projects: Project[] = [
  {
    id: "check-my-ticket",
    title: "Check My Ticket",
    description: {
      en: "Single Page Application (SPA) built for Henkel Webstudio for Azure DevOps integration.",
      sk: "Single Page Application (SPA) vytvorená pre Henkel Webstudio pre lepšiu integráciu s Azure DevOps",
    },
    tech: [
      {
        name: "Vue.js",
        icon: IconBrandVue,
        className: "text-emerald-500",
        link: "https://vuejs.org",
      },
      {
        name: "Tailwind CSS",
        icon: IconBrandTailwind,
        className: "text-cyan-500",
        link: "https://tailwindcss.com",
      },
      {
        name: "Azure Cloud",
        icon: IconBrandAzure,
        className: "text-sky-500",
        link: "https://azure.microsoft.com/",
      },
      {
        name: "Supabase",
        icon: IconBrandSupabase,
        className: "text-green-500",
        link: "https://supabase.com",
      },
    ],
    link: "https://henkel-adhesives.com/check-my-ticket.html",
  },
  {
    id: "for-every-you",
    title: "For Every You",
    description: {
      en: "Selfie generation React application built for Schwarzkopf campaign",
      sk: "Selfie generátor vytvorený v Reacte pre novú Schwarzkopf kampaň",
    },
    link: "https://www.schwarzkopf-professional.com/com/en/silhouette-selfie.html",
    tech: [
      {
        name: "React",
        icon: IconBrandReact,
        className: "text-sky-500",
        link: "https://react.dev",
      },
      {
        name: "React Router",
        icon: VscodeIconsFileTypeReactrouter,
        className: "size-7",
        link: "https://reactrouter.com",
      },
      {
        name: "Typescript",
        icon: IconBrandTypescript,
        className: "text-blue-500",
        link: "https://typescriptlang.org",
      },
      {
        name: "TailwindCSS",
        icon: IconBrandTailwind,
        className: "text-cyan-500",
        link: "https://tailwindcss.com",
      },
    ],
  },
  {
    id: "mj2r",
    title: "MJML + React Router",
    wip: true,
    description: {
      en: "Scalable email templates solution for non-developers built with MJML and React Router (v7)",
      sk: "Riešenie Emailových templatov pre ne-vývojárov. Postavené na MJML a React Router (v7)",
    },
    tech: [
      {
        name: "React",
        icon: IconBrandReact,
        className: "text-sky-500",
        link: "https://react.dev",
      },
      {
        name: "React Router",
        icon: VscodeIconsFileTypeReactrouter,
        className: "size-7",
        link: "https://reactrouter.com",
      },

      {
        name: "MJML",
        icon: VscodeIconsFileTypeMjml,
        className: "size-5",
        link: "https://mjml.io",
      },
      {
        name: "Typescript",
        icon: IconBrandTypescript,
        className: "text-blue-500",
        link: "https://typescriptlang.org",
      },
      {
        name: "TailwindCSS",
        icon: IconBrandTailwind,
        className: "text-cyan-500",
        link: "https://tailwindcss.com",
      },
    ],
    link: "https://mj2r.peterk.dev",
  },
  {
    id: "my-link-zone",
    title: "My Link zone",
    description: {
      en: "My LinkTree clone built with Next.js and React server components",
      sk: "Klon populárneho LinkTr.ee. Postavený na Next.js a React server komponentoch",
    },
    link: "mylinkzone.vercel.app",
    tech: [
      {
        name: "Next js",
        icon: IconBrandNextjs,
        className: "",
        link: "https://nextjs.org",
      },
      {
        name: "Vercel",
        icon: IconBrandVercel,
        className: "fill-white",
        link: "https://vercel.com",
      },
      {
        name: "Drizzle ORM",
        icon: SimpleIconsDrizzle,
        className: "text-lime-400 p-1 rounded size-6",
        link: "https://orm.drizzle.team",
      },
      {
        name: "Turso DB",
        icon: SimpleIconsTurso,
        className: "text-teal-500",
        link: "https://turso.tech",
      },
    ],
  },
  {
    id: "value-calculators",
    title: "Value Calculators for Henkel",
    description: {
      en: "Relaunch of multiple extensive calculators built with React",
      sk: "Prerobenie komplexných kalkulátorov pre Henkel pomocou React-u",
    },
    tech: [
      {
        name: "React",
        icon: IconBrandReact,
        className: "text-sky-500",
        link: "https://react.dev",
      },
      {
        name: "Sass",
        icon: IconBrandSass,
        className: "text-pink-500",
        link: "https://sass-lang.com/",
      },

      {
        name: "React Router",
        icon: VscodeIconsFileTypeReactrouter,
        className: "size-7",
        link: "https://reactrouter.com",
      },
    ],
    link: "",
  },
];
