import { initReactI18next } from "react-i18next";

import enJson from "../../locale/en.json";
import ptJson from "../../locale/pt.json";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "pt",
    debug: true,
    load: "all",
    detection: {
      order: ["queryString", "cookie"],
      caches: ["cookie"]
    },
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: { ...enJson },
      pt: {
        ...ptJson
      }
    }
  });
export default i18n;
