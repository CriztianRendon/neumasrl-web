import { useParams } from 'react-router-dom';
//LIBRARIES
import { useTranslation } from 'react-i18next';
//AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faUserNurse } from '@fortawesome/free-solid-svg-icons';

const DetalleEspecialidad = () => {
	const { id } = useParams();
	const { t } = useTranslation('global');
	const especialidades = t('especialidades', { returnObjects: true });
	const especialidad = especialidades.find((e) => e.id === Number(id));

	const staffMedico = t('equipo.staffMedico', { returnObjects: true });
	// console.log(staffMedico)
	const medicosEspecialistas = staffMedico.filter(
		(e) => e.spacialtyId === Number(id)
	);
	// console.log(medicosEspecialistas)

	return (
		<div className='container'>
			<h2 dangerouslySetInnerHTML={{ __html: t(especialidad.title) }}/>
			<div className='wrapper wrapper__cards wrapper__cards--especialidad'>
				{medicosEspecialistas.map((medico, index) => {
					return (
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
							<div className='wrapper__bodyCard wrapper__bodyCard--md'>
								<h4>{t(medico.name)}</h4>
								
								<hr />
								<div className='wrapper'>
									<p>{t(medico.profPosition)}</p>
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
					);
				})}
			</div>

			<div className='wrapper'
			dangerouslySetInnerHTML={{ __html: t(especialidad.text) }} />
		</div>
	);
};

export default DetalleEspecialidad;
