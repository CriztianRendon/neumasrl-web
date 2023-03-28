import { useTranslation } from 'react-i18next';

const Specialties = () => {
	const { t } = useTranslation('global');

	return (
		<div className='page'>
			<h1>{t('especialidades.page-title')}</h1>
			<h1>{t('especialidades.section-title')}</h1>
			<p>{t('especialidades.content-text')}</p>
		</div>
	);
};

export default Specialties;
