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
						<p className='p-block--principal'>{t('home.especialidades.text')}</p>
						<a
							href='https://github.com/CriztianRendon'
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn--primary btn--md'>
							{t('home.especialidades.button')}
						</a>
					</div>

					<div className='wrapper wrapper__cards wrapper__cards--especialidad'>
						{especialidades.map((especialidad, index) => (
							<div
								className='card card--especialidad'
								key={index}>
								<div className='wrapper wrapper__img'>
									<img
										className='img img--card-especialidad '
										src={`/img${t(especialidad.pathImg)}.jpg`}
										alt='card-especialidad'
									/>
								</div>
								<div className='wrapper__bodyCard'>
									<h3>{t(especialidad.title)}</h3>
									<p>{t(especialidad.extract)}</p>
									<div className='wrapper'></div>
									<Link
										className='link-text link-text--card link-text--sm link-text--primary'
										to='/nosotros'>
										{t('navbar.turnos')}
										<FontAwesomeIcon icon={faChevronRight} />
									</Link>
								</div>
								{/* <div dangerouslySetInnerHTML={{ __html: t(especialidad.text) }}/> */}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default CardsEspecialidades;
