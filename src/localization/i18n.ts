import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./Languages/english.json"
import arabic from "./Languages/arabic.json";
import hindi from "./Languages/hindi.json";
import marathi from "./Languages/marathi.json";
import spanish from "./Languages/spanish.json";
import german from "./Languages/german.json";


const LANGUAGES = {
  english: {
    translation: english,
  },
  arabic: {
    translation: arabic,
  },
  hindi: {
    translation: hindi,
  },
  marathi: {
    translation: marathi,
  },
  spanish: {
    translation: spanish,
  },
  german: {
    translation: german,
  },
};
  

i18n.use(initReactI18next).init({
  resources: LANGUAGES,
  fallbackLng: "english",
  defaultNS: "translation",
  ns: ["translation"],
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
