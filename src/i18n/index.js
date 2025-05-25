// src/i18n/index.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationUZ from "./uz.json";
import translationRU from "./ru.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: translationUZ },
      ru: { translation: translationRU },
    },
    lng: "uz",
    fallbackLng: "uz",
    supportedLngs: ["uz", "ru"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;

