//LIBRARIES
import { useTranslation } from 'react-i18next';
//AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faUserNurse } from '@fortawesome/free-solid-svg-icons';
const CardsEquipo = () => {
	const { t } = useTranslation('global');
	const equipo = t('equipo', { returnObjects: true });

	return (
		<div className='section'>
			<div className='container'>
				<div className='wrapper wrapper--text'>
					<h2
						dangerouslySetInnerHTML={{
							__html: t('home.equipo.title'),
						}}
					/>
				</div>

				<div className='wrapper wrapper__cards wrapper__cards--especialidad'>
					{equipo.admin.map((medico, index) => (
						<div
							className='card card--especialidad'
							key={index}>
							<div className='wrapper__img wrapper__img--card-equipo'>
								<FontAwesomeIcon
									className='img img--card-equipo'
									icon={faUserNurse}
								/>
								{/* <img
									className='img img--card-especialidad '
									src={`/img${t(medico.pathImg)}.jpg`}
									alt='card-especialidad'
								/> */}
							</div>
							<div className='wrapper__bodyCard'>
								<h3>{t(medico.name)}</h3>
								<hr />
								<p className='text--primary'>{t(medico.spacialty)}</p>
							</div>
						</div>
					))}
					{equipo.staffMedico.map((medico, index) => (
						<div
							className='card card--especialidad'
							key={index}>
							<div className='wrapper__img wrapper__img--cardEquipo'>
								<FontAwesomeIcon
									className='img img--card-equipo'
									icon={faUserNurse}
								/>
								{/* <img
									className='img img--card-especialidad '
									src={`/img${t(medico.pathImg)}.jpg`}
									alt='card-especialidad'
								/> */}
							</div>
							<div className='wrapper__bodyCard wrapper__bodyCard--full'>
								<h3>{t(medico.name)}</h3>
								<hr />
								<div className='wrapper'>
									<p className='text--primary'>{t(medico.profPosition)}</p>
									<p>{t(medico.mp)}</p>
								</div>
								<a
									className='link-text link-text--card link-text--sm link-text--primary'
									href={`${t(medico.turnero)}`}
									target='_blank'
									rel='noopener noreferrer'>
									{t('navbar.turnos')}
									<FontAwesomeIcon icon={faChevronRight} />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CardsEquipo;
