import { Link } from 'react-router-dom';
//LIBRARIES
import { useTranslation } from 'react-i18next';
//AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
//IMAGES

const CardsEspecialidades = () => {
	const { t } = useTranslation('global');
	const especialidades = t('especialidades', { returnObjects: true });

	return (
		<>
			<div className='section'>
				<div className='container'>
					<div className='wrapper wrapper--text'>
						<h2
							dangerouslySetInnerHTML={{
								__html: t('home.especialidades.title'),
							}}
						/>
						<p className='p-block--secondary text--primary'>
							{t('home.especialidades.text')}
						</p>
					</div>

					<div className='wrapper wrapper__cards wrapper__cards--especialidades'>
						{especialidades.map((especialidad, index) => (
							<div
								className='card card--especialidad'
								key={index}>
								<div className='wrapper wrapper__img'>
									<img
										className='img img--card-especialidad'
										src={`/img${t(especialidad.pathImg)}.jpg`}
										alt='card-especialidad'
									/>
								</div>
								<div className='card__body card__body--center'>
									<h3>{t(especialidad.title)}</h3>
									<p className='p-block--secondary'>
										{t(especialidad.extract)}
									</p>
								</div>
								<div className='card__link card__link--end'>
									<Link
										className='link-text link-text--sm link-text--primary'
										to={`/especialidades/${especialidad.id}`}>
										{t('home.especialidades.button')}
										<FontAwesomeIcon icon={faChevronRight} />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default CardsEspecialidades;
