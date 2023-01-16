// import the original type declarations
import "i18next";
import translations from "./locales/en/translations.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: { en: typeof translations };
  }
}
