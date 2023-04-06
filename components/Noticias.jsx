import { useTranslation } from 'react-i18next';

const Noticias = () => {
	const { t } = useTranslation('global');
	return (
		<div className='section'>
			<div className='container'>
				<div className='wrapper'>
					<h2 dangerouslySetInnerHTML={{ __html: t('home.noticias.title') }} />
					<p>{t('home.noticias.text')}</p>
				</div>
			</div>
		</div>
	);
};

export default Noticias;
