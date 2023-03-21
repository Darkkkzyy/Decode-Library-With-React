import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJson from '../i18n/translations/en.json'
import frJson from '../i18n/translations/fr.json'
import ptJson from '../i18n/translations/pt.json'


i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: enJson,
    fr: frJson,
    pt: ptJson
  },
}).catch((error) => {
  console.error(error);
});


export default i18n;