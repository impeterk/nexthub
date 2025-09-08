---
liveLink: "https://henkel-adhesives.com/check-my-ticket.html"
title: Check My Ticket
---

## Prehľad

Single-page web aplikácia navrhnutá na rozšírenie a zefektívnenie pracovných postupov s **Azure DevOps**.  
Aplikácia sa zameriava na bezpečnú **autentifikáciu používateľov**, komplexné **CRUD operácie** a priamu integráciu s **Azure Logic Apps** pre automatizáciu procesov. Vytvorená s moderným web technology stack.

---

## Kľúčové funkcie

- **Autentifikácia a autorizácia používateľov**
  - Implementované bezpečné registrácie, prihlásenie a spracovanie relácií pomocou **Supabase Authentication**.
  - Podpora autentifikácie cez email/heslo s token manažmentom.
  - Integrované riadenie prístupu založené na rolách pre obmedzené operácie.

- **CRUD operácie**
  - Navrhnutá kompletná funkcionalita **Create, Read, Update, Delete** pre správu dátových entít súvisiacich s Azure DevOps.

- **Integrácia s Azure Logic Apps**
  - Prepojené workflowy aplikácie s **Azure Logic Apps** na spúšťanie automatizovaných procesov.
  - Umožnená plynulá komunikácia medzi akciami používateľov a DevOps pipeline.
  - Nakonfigurované webhook triggery na reakciu v reálnom čase.

---

## Tech Stack

### Frontend

- **Vue.js** – Architektúra založená na komponentoch pre tvorbu reaktívnych používateľských rozhraní.
- Vue Router – Výrazné, konfigurovateľné a pohodlné smerovanie pre Vue.js.
- **Pinia** – Knižnica na správu stavu pre efektívne spracovanie aplikačného stavu.
- **TailwindCSS** – CSS framework založený na utility-first prístupe pre responzívny a udržiavateľný dizajn UI.

### Backend

- **Supabase** – Poskytuje serverless autentifikáciu.
- **Firebase** – Hosting.
- **Azure Logic Apps** – Integrované workflowy s externými DevOps automatizačnými pipeline.

### Ďalšie nástroje

- **Git** pre verzionovanie kódu.
- **Github workflows** pre automatizované nasadenia a testovacie prostredia.
- **Vite** ako build nástroj pre rýchly lokálny vývoj.

---

## Repository & Demo

- **Zdrojový kód**: ~~súkromný repozitár~~
- **Live Demo**: [Prod Application](https://henkel-adhesives.com/check-my-ticket.html)
  > Kompletný náhľad iba pre zamestnancov Henkel
