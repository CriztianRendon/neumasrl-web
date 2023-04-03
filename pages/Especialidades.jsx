import { useTranslation } from 'react-i18next';
import CardsEspecialidades from '../components/CardsEspecialidades';

const Especialidades = () => {
	const { t } = useTranslation('global');

	return (
		<CardsEspecialidades/>
	);
};

export default Especialidades;
