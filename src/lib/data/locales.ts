import { NextRequest } from "next/server";

export const locales = {
  en: {
    projects: {
      title: "Projects",
    },
    aboutMe: {
      title: "About Me",
      resume: "Resume",
    },
    contact: {
      title: ["Get in Touch", "Book a consultation"],
      git: {
        title: "Get in Touch",
        desc: "Have a project in mind or need a developer's insight? <br />Reach out below—I'd love to hear from you!",
        name: "Name",
        message: "Message",
        submit: "Send message",
        errors: {
          name: "Name is required",
          email: "Please provide a valid e-mail",
          message: "Please provide a lovely message",
        },
      },
    },
  },
  sk: {
    projects: {
      title: "Projekty",
    },
    aboutMe: {
      title: "O mne",
      resume: "Životopis",
    },
    contact: {
      title: ["Kontaktujte ma", "Rezervujte si konzultáciu"],
      git: {
        title: "Kontaktujte ma",
        desc: "Máte projekt na mysli alebo potrebujete pohľad vývojára? <br />Napíšte mi nižšie — rád sa vám ozvem!",
        name: "Meno",
        message: "Správa",
        submit: "Odoslať správu",
        errors: {
          name: "Meno je povinné",
          email: "Zadajte platný e-mail",
          message: "Napíšte milú správu",
        },
      },
    },
  },
};

export function useLocales(locale: "en" | "sk") {
  return locales[locale];
}

export function getLocale(request: NextRequest) {
  const locales = request.headers.get("accept-language");
  const localeFromCookies = request.cookies.get("__pref_lang");
  if (localeFromCookies) {
    return localeFromCookies.value;
  }
  if (!locales) {
    return "en";
  }
  const locale = locales.split(",").at(0);

  if (locale?.includes("en")) {
    return "en";
  }
  if (/(?:sk|cs)/i.test(locale!)) {
    return "sk";
  }
}
