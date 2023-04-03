import { useTranslation } from 'react-i18next';

const Noticias = () => {
	const { t } = useTranslation('global');
	return (
		<div className='section'>
		<div className='container'>
			<div className='wrapper'>
					<h2 className='section-title'>{t('home.noticias.title')}</h2>
					<p>{t('home.noticias.text')}</p>
			</div>
		</div>
	</div>
	);
};

export default Noticias;
