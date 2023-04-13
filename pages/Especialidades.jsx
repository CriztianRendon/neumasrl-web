import { useTranslation } from 'react-i18next';
import CardsEspecialidades from '../components/CardsEspecialidades';
import ContactForm from '../components/ContactForm';

const Especialidades = () => {
	const { t } = useTranslation('global');

	return (
		<>
		<CardsEspecialidades/>
		<ContactForm />

		</>
	);
};

export default Especialidades;
