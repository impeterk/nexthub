---
liveLink: "https://henkel-adhesives.com/check-my-ticket.html"
images:
  [
    https://raw.githubusercontent.com/impeterk/sveltefolio/refs/heads/main/src/lib/assets/vue-desktop.webp,
  ]
title: Check My Ticket
---

## Overview

This project is a **single-page full-stack web application** designed to extend and streamline workflows with **Azure DevOps**. The application focuses on secure **user authentication**, comprehensive **CRUD operations**, and direct integration with **Azure Logic Apps** for process automation. Built with a modern web technology stack, it demonstrates end-to-end development skills, including frontend engineering, backend integration, and deployment.

---

## Core Features

- **User Authentication & Authorization**

  - Implemented secure sign-up, login, and session handling using **Firebase Authentication**.
  - Supports email/password-based authentication with token management.
  - Integrated role-based access control for restricted operations.

- **CRUD Operations**

  - Designed full **Create, Read, Update, Delete** functionality for managing Azure DevOps-related data entities.
  - Implemented RESTful API endpoints and optimized database interactions.
  - Ensured atomic operations with Firebase’s NoSQL database structure.

- **Azure Logic Apps Integration**
  - Connected application workflows with **Azure Logic Apps** to trigger automated processes.
  - Enabled seamless communication between user actions and DevOps pipelines.
  - Configured webhook-based triggers to respond to real-time events.

---

## Tech Stack

### Frontend

- **Vue.js** – Component-based architecture for building reactive user interfaces.
- **Pinia** – State management library for handling application-level state efficiently.
- **TailwindCSS** – Utility-first CSS framework for responsive and maintainable UI styling.

### Backend

- **Firebase** – Provided serverless backend with authentication, cloud database (Firestore), and hosting.
- **Azure Logic Apps** – Integrated workflows with external DevOps automation pipelines.

### Additional Tools

- **Git & Azure DevOps Repos** for version control and CI/CD.
- **Postman** for API testing and debugging.
- **Vite** as the build tool for fast local development.

---

## Architecture

The application follows a **modular SPA (Single-Page Application) architecture**:

1. **Frontend Layer**

   - Vue.js handles routing, component rendering, and UI interaction.
   - Pinia ensures predictable state management across views.
   - TailwindCSS provides reusable, responsive design patterns.

2. **Backend Layer**

   - Firebase Authentication manages users and sessions.
   - Firestore stores persistent user data and project-related records.
   - Cloud Functions (serverless) handle asynchronous operations when needed.

3. **Integration Layer**
   - Azure Logic Apps enable automation of workflows (e.g., triggering pipeline runs based on app data changes).
   - Webhooks connect DevOps events back into the app ecosystem.

---

## Development Process

- **Project Setup**: Initialized Vue project with Vite, integrated Pinia, and set up TailwindCSS.
- **Authentication Module**: Configured Firebase Auth and built login/registration flows with proper error handling.
- **CRUD Implementation**: Designed modular services for Firestore to handle all database transactions.
- **Azure Integration**: Configured API connections to Logic Apps and validated end-to-end DevOps pipeline automation.
- **Testing & Debugging**: Used Postman and Firebase emulator suite for local testing.
- **Deployment**: Deployed frontend and backend via Firebase Hosting with CI/CD pipelines connected to Azure DevOps.

---

## Key Takeaways

- Strengthened knowledge of **Vue.js composition API** and modern state management with Pinia.
- Gained experience in **serverless backend development** with Firebase.
- Learned practical **DevOps automation practices** by integrating with Azure Logic Apps.
- Built a scalable and maintainable SPA architecture that can be extended with new features.

---

## Repository & Demo

- **Source Code**: [GitHub Repository](#) _(link here if available)_
- **Live Demo**: [Hosted Application](#) _(link here if available)_
