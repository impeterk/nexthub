---
liveLink: "https://hn.peterk.dev"
title: Hono Hacker News
---

## Prehľad

**Server-side renderovaný sumarizátor článkov z Hacker News** postavený na **Hono** a **HonoJSX**, so štýlmi v **PicoCSS** a nasadený globálne na **Cloudflare Workers**.  
Aplikácia načítava články z **RSS feedu Hacker News** a používa **Cloudflare Workers AI** na generovanie stručných, AI-poháňaných súhrnov — všetko vykresľované priamo na serveri pre rýchly a SEO-friendly výkon.

---

## Hlavné funkcie

- **AI Súhrny**
  - Zhrňuje články z Hacker News pomocou **Cloudflare Workers AI**.

- **Server-Side Rendering (SSR)**
  - Všetky stránky sú renderované na serveri pomocou **HonoJSX**.
  - Nie je potrebný žiadny klientsky JavaScript na zobrazovanie súhrnov.

- **Nasadenie na Edge**
  - Beží na **Cloudflare Workers**, čo zaručuje globálny prístup s nízkou latenciou.
  - Súhrny aj renderovanie prebiehajú na edge, blízko k používateľovi.

- **Čisté a minimalistické UI**
  - Štýlované pomocou **PicoCSS** pre ľahký a responzívny dizajn.
  - Optimalizované pre čítanie na desktope aj mobile.

---

## Technologický stack

### Framework a runtime

- **Hono** – Ľahký webový framework pre Cloudflare Workers.
- **HonoJSX** – JSX templating pre server-side renderované HTML.
- **Cloudflare Workers** – Edge runtime s okamžitým škálovaním.

### AI a dáta

- **Cloudflare Workers AI** – Generuje prirodzené jazykové súhrny.
- **Hacker News RSS Feed** – Zdroj najnovších trendových článkov.

### Štýlovanie

- **PicoCSS** – Minimalistický, responzívny CSS framework.

### Nasadenie a nástroje

- **Cloudflare Workers** – Edge hosting a AI runtime.
- **Git & GitHub** – Verzovanie kódu a spolupráca.
- **ESLint + Prettier** – Formátovanie a kvalita kódu.

---

## Repository & Demo

- **Source Code**: [GitHub Repository](https://github.com/impeterk/hn-hono)
- **Live Demo**: [HackerNews Summarizer](https://hn.peterk.dev)
