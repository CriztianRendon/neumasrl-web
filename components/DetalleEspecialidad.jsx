import { useParams } from 'react-router-dom';
//LIBRARIES
import { useTranslation } from 'react-i18next';

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
		<div>
			<h1>{especialidad.title}</h1>
			{medicosEspecialistas.map((medico, index) => {
				return (
					<div>
						<p>
							<strong>{t(medico.name)}</strong>
							<br />
							{t(medico.profPosition)}, {t(medico.mp)}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default DetalleEspecialidad;
