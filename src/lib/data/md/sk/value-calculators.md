---
title: Value Calculators
---

## Prehľad

**Interná web aplikácia** navrhnutá pre predajný tím na efektívny výpočet a vyhodnocovanie obchodných hodnôt.  
Postavená na **React**, **Redux Toolkit** a **Sass**, aplikácia poskytuje interaktívne kalkulačky, centralizovanú správu stavu a bezproblémovú integráciu s **Azure Cosmos DB** pre bezpečné ukladanie dát.  
Používatelia môžu taktiež **exportovať vypočítané výsledky do PDF** na zdieľanie a archiváciu.

---

## Kľúčové funkcie

- **Interaktívne hodnotové kalkulačky**
  - Poskytuje viacero kalkulačiek prispôsobených rôznym predajným scenárom.
  - Dynamické formuláre s okamžitou aktualizáciou výsledkov.

- **Správa stavu s Redux Toolkit**
  - Centralizovaný stav pre spracovanie logiky kalkulačiek a používateľských vstupov.
  - Zabezpečuje predvídateľný tok dát a jednoduchšiu diagnostiku.

- **Integrácia databázy s Azure Cosmos DB**
  - Ukladá výpočty používateľov a historické dáta bezpečne.
  - Rýchly a škálovateľný prístup k predajným datasetom.

- **Export do PDF**
  - Používatelia môžu generovať a sťahovať výsledky výpočtov vo formáte **PDF**.
  - Zabezpečuje prenosnosť dát a offline prístup pre predajné prezentácie.

- **Routing a navigácia**
  - **React Router** poskytuje štruktúrovanú navigáciu medzi viacerými modulmi kalkulačiek.

---

## Tech Stack

### Frontend

- **React** – Architektúra založená na komponentoch pre tvorbu interaktívnych kalkulačiek.
- **React Router** – Client-side routing medzi rôznymi modulmi.
- **Redux Toolkit** – Efektívna a škálovateľná správa stavu.
- **Sass** – Pokročilé CSS štýlovanie s premennými, mixinmi a modularitou.

### Backend / Databáza

- **Azure Cosmos DB** – Globálne distribuovaná NoSQL databáza na ukladanie a získavanie predajných dát.

### Ďalšie nástroje

- **PDF generation library** (napr. jsPDF alebo pdfmake) – Konvertuje výsledky do exportovateľných PDF dokumentov.
- **Git & GitHub** – Verzovanie a kolaborácia.
- **ESLint + Prettier** – Formátovanie kódu a linting pre udržiavateľnosť.

---

## Repository & Demo

- **Zdrojový kód**: ~~súkromný repozitár~~
- **Live Demo**: (iba interné použitie)
