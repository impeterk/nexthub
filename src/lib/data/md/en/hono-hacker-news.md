---
liveLink: "https://hn.peterk.dev"
title: Hono Hacker News
---

## Overview

A **server-side rendered Hacker News summarizer** built with **Hono** and **HonoJSX**, styled with **PicoCSS**, and deployed globally on **Cloudflare Workers**.  
The application fetches articles from the **Hacker News RSS feed** and uses **Cloudflare Workers AI** to generate concise, AI-powered summaries — all rendered entirely on the server for fast, SEO-friendly performance.

---

## Core Features

- **AI-Powered Summaries**
  - Summarizes Hacker News articles using **Cloudflare Workers AI**.

- **Server-Side Rendering (SSR)**
  - All pages rendered with **HonoJSX** on the server.
  - No client-side JavaScript required for displaying summaries.

- **Edge Deployment**
  - Runs on **Cloudflare Workers**, ensuring global, low-latency access.
  - Summaries and rendering happen at the edge, close to the user.

- **Clean & Minimal UI**
  - Styled with **PicoCSS** for a lightweight, responsive design.
  - Optimized for both desktop and mobile reading.

---

## Tech Stack

### Framework & Runtime

- **Hono** – Lightweight web framework for Cloudflare Workers.
- **HonoJSX** – JSX templating for server-side rendered HTML.
- **Cloudflare Workers** – Edge runtime with instant scaling.

### AI & Data

- **Cloudflare Workers AI** – Generates natural language summaries.
- **Hacker News RSS Feed** – Source of the latest trending articles.

### Styling

- **PicoCSS** – Minimal, responsive CSS framework.

### Deployment & Tooling

- **Cloudflare Workers** – Edge hosting and AI runtime.
- **Git & GitHub** – Version control and collaboration.
- **ESLint + Prettier** – Code formatting and quality.

---

## Repository & Demo

- **Source Code**: [GitHub Repository](https://github.com/impeterk/hn-hono)
- **Live Demo**: [HackerNews Summarizer](https://hn.peterk.dev)

---
