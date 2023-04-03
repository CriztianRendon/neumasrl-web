import { useTranslation } from 'react-i18next';

const Equipo = () => {
	const { t } = useTranslation('global');
	return (
		<div className='section'>
			<div className='container'>
				<div className='wrapper'>
						<h2 className='section-title' dangerouslySetInnerHTML={{ __html: t('home.equipo.title') }}></h2>
						<p>{t('home.equipo.text')}</p>
				</div>
			</div>
		</div>
	);
};

export default Equipo;
