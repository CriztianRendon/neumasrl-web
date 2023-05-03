import { Navigate } from 'react-router-dom';

import CardsCoberturas from '../components/CardsCoberturas';
import { useTranslation } from 'react-i18next';

const Coberturas = () => {
	const [t, i18n] = useTranslation('global');
	const lang = i18n.language;

	return <>{lang === 'es' ? <CardsCoberturas /> : <Navigate to='/' />}</>;
};

export default Coberturas;
