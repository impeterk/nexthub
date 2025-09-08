import { ComponentType } from "react";

import {
  IconBrandAstro,
  IconBrandFirebase,
  IconBrandGit,
  IconBrandLaravel,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandNuxt,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandSupabase,
  IconBrandSvelte,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconBrandVue,
  IconServer2,
} from "@tabler/icons-react";

import SimpleIconsDrizzle from "@/assets/icon-drizzle";
import DeviconPlainPostgresql from "@/assets/icon-postgres";
import VscodeIconsFileTypeReactrouter from "@/assets/icon-react-router";
import DeviconSqlite from "@/assets/icon-sqlite";
import SimpleIconsTurso from "@/assets/icon-turso";

export type Tech = {
  name: string;
  className: string;
  icon: ComponentType<{ className: string }>;
  link?: string;
  description: { en: string; sk: string };
};
export const tech: Tech[] = [
  {
    name: "Next js",
    icon: IconBrandNextjs,
    className: "",
    description: {
      en: "React framework with server-side rendering, static site generation, and API routes for production-ready applications.",
      sk: "React framework with server-side rendering, static site generation, and API routes for production-ready applications.",
    },

    link: "https://nextjs.org",
  },
  {
    name: "Svelte",
    icon: IconBrandSvelte,
    className: "text-orange-500",
    description: {
      en: "Compiler-based framework that shifts work to build time for highly efficient, reactive UIs with minimal runtime code.",
      sk: "Compiler-based framework that shifts work to build time for highly efficient, reactive UIs with minimal runtime code.",
    },
    link: "https://svelte.dev",
  },
  {
    name: "Nuxt",
    icon: IconBrandNuxt,
    className: "text-green-500",
    description: {
      en: "Vue framework offering server-side rendering, automatic routing, and powerful modules for building modern web apps.",
      sk: "Vue framework offering server-side rendering, automatic routing, and powerful modules for building modern web apps.",
    },
    link: "https://nuxt.com",
  },
  {
    name: "Astro",
    icon: IconBrandAstro,
    className: "",
    description: {
      en: "All-in-one web framework for building fast, content-focused websites with less JavaScript and island architecture.",
      sk: "All-in-one web framework for building fast, content-focused websites with less JavaScript and island architecture.",
    },
    link: "https://astro.build",
  },
  {
    name: "Laravel",
    icon: IconBrandLaravel,
    className: "text-red-500 stroke-[0.75]",
    description: {
      en: "Complete  PHP framework framework for web artisans. Everything you need to build, deploy, and monitor web applications.",
      sk: "Complete  PHP framework framework for web artisans. Everything you need to build, deploy, and monitor web applications.",
    },
    link: "https://laravel.com",
  },
  {
    name: "React Router / Remix",
    icon: VscodeIconsFileTypeReactrouter,
    className: "size-7",
    description: {
      en: "Full-stack React framework for fast, resilient web apps.",
      sk: "Full-stack React framework for fast, resilient web apps.",
    },
    link: "https://reactrouter.com",
  },
  {
    name: "TailwindCSS",
    icon: IconBrandTailwind,
    className: "text-cyan-500",
    description: {
      en: "Utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
      sk: "Utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
    },
    link: "https://tailwindcss.com",
  },
  {
    name: "Firebase",
    icon: IconBrandFirebase,
    className: "text-amber-500",
    description: {
      en: "Google's platform providing authentication, databases, storage, and serverless functions for full-stack development.",
      sk: "Google's platform providing authentication, databases, storage, and serverless functions for full-stack development.",
    },
    link: "https://firebase.google.com",
  },
  {
    name: "Supabase",
    icon: IconBrandSupabase,
    className: "text-green-500",
    description: {
      en: "Open-source Firebase alternative with PostgreSQL database, authentication, and real-time subscriptions.",
      sk: "Open-source Firebase alternative with PostgreSQL database, authentication, and real-time subscriptions.",
    },
    link: "https://supabase.com",
  },
  {
    name: "React",
    icon: IconBrandReact,
    className: "text-sky-500",
    description: {
      en: "Component-based UI library for building interactive web interfaces with a virtual DOM for optimal performance.",
      sk: "Component-based UI library for building interactive web interfaces with a virtual DOM for optimal performance.",
    },
    link: "https://react.dev",
  },
  {
    name: "Vue.js",
    icon: IconBrandVue,
    className: "text-emerald-500",
    description: {
      en: "Progressive JavaScript framework for building UIs with an approachable learning curve and flexible integration options.",
      sk: "Progressive JavaScript framework for building UIs with an approachable learning curve and flexible integration options.",
    },
    link: "https://vuejs.org",
  },

  // second row

  {
    name: "Self hosting",
    icon: IconServer2,
    className: "",
    description: {
      en: "Virtual private server deployment for complete control over hosting environment, configuration, and scalability.",
      sk: "Virtual private server deployment for complete control over hosting environment, configuration, and scalability.",
    },
  },
  {
    name: "Drizzle ORM",
    icon: SimpleIconsDrizzle,
    className: "text-lime-400 p-1 rounded size-6",
    description: {
      en: "TypeScript ORM with a focus on type safety, performance, and developer experience for SQL databases.",
      sk: "TypeScript ORM with a focus on type safety, performance, and developer experience for SQL databases.",
    },
    link: "https://orm.drizzle.team",
  },
  {
    name: "Vercel",
    icon: IconBrandVercel,
    className: "fill-white",
    description: {
      en: "Platform for frontend frameworks and static sites with global CDN, serverless functions, and continuous deployment.",
      sk: "Platform for frontend frameworks and static sites with global CDN, serverless functions, and continuous deployment.",
    },
    link: "https://vercel.com",
  },
  {
    name: "Turso DB",
    icon: SimpleIconsTurso,
    className: "text-teal-500",
    description: {
      en: "Distributed SQLite database built for edge computing with global replication and minimal latency.",
      sk: "Distributed SQLite database built for edge computing with global replication and minimal latency.",
    },
    link: "https://turso.tech",
  },
  {
    name: "SQ Lite",
    icon: DeviconSqlite,
    className: "",
    description: {
      en: "Self-contained, serverless database engine perfect for embedded applications and development environments.",
      sk: "Self-contained, serverless database engine perfect for embedded applications and development environments.",
    },
    link: "https://www.sqlite.org",
  },
  {
    name: "Prisma",
    icon: IconBrandPrisma,
    className: "",
    description: {
      en: "Next-generation ORM with intuitive data model, type safety, and automated migrations for various databases.",
      sk: "Next-generation ORM with intuitive data model, type safety, and automated migrations for various databases.",
    },
    link: "https://www.prisma.io",
  },
  {
    name: "PostgreSQL",
    icon: DeviconPlainPostgresql,
    className: "text-sky-500 size-5",
    description: {
      en: "Powerful, open-source object-relational database system with strong reputation for reliability and data integrity.",
      sk: "Powerful, open-source object-relational database system with strong reputation for reliability and data integrity.",
    },
    link: "https://www.postgresql.org",
  },
  {
    name: "Node.js",
    icon: IconBrandNodejs,
    className: "text-green-500",
    description: {
      en: "JavaScript runtime built on Chrome's V8 engine for building scalable network applications and APIs.",
      sk: "JavaScript runtime built on Chrome's V8 engine for building scalable network applications and APIs.",
    },
    link: "https://nodejs.org",
  },
  {
    name: "Typescript",
    icon: IconBrandTypescript,
    className: "text-blue-500",
    description: {
      en: "Strongly-typed JavaScript superset that enhances code quality, developer experience, and maintainability.",
      sk: "Strongly-typed JavaScript superset that enhances code quality, developer experience, and maintainability.",
    },
    link: "https://www.typescriptlang.org",
  },

  {
    name: "Git",
    icon: IconBrandGit,
    className: "text-orange-500",
    description: {
      en: "Distributed version control system for tracking changes, collaborating with teams, and managing code history.",
      sk: "Distributed version control system for tracking changes, collaborating with teams, and managing code history.",
    },
    link: "https://git-scm.com",
  },
];
