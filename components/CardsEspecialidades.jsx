import { useTranslation } from 'react-i18next';

const CardsEspecialidades = () => {
	const { t } = useTranslation('global');
	const especialidades = t('especialidades', { returnObjects: true });

	return (
		<>
			<h1>{t('home.especialidades.title')}</h1>
			
			{especialidades.map((especialidad, index) => (
				<div key={index}>
					<h2>{t(especialidad.title)}</h2>
					<p>{t(especialidad.extract)}</p>
					<div dangerouslySetInnerHTML={{ __html: t(especialidad.text) }}/>
					
				</div>
			))}
		</>
	);
};

export default CardsEspecialidades;