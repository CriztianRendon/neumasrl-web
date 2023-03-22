import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from 'i18next';

import global_es from '../translations/es/global.json';
import global_pt from '../translations/pt/global.json';
import global_gn from '../translations/gn/global.json';

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
	interpolation: { escapeValue: false },
	fallbacklng: 'es',
	resources: {
		es: {
			global: global_es,
		},
		pt: {
			global: global_pt,
		},
		gn: {
			global: global_gn,
		},
	},
});

export default i18n;
