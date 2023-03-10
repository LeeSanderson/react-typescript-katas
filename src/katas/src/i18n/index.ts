import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enDefaultNamespaceTranslations from "./locales/en/translations.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enDefaultNamespaceTranslations,
      },
    },
    fallbackLng: "en",
    defaultNS: "translation",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
