import { useTranslation } from 'react-i18next';
import Nosotros from '../components/Nosotros';
import CardsEquipo from '../components/CardsEquipo';
import ContactForm from '../components/ContactForm'

const AboutUs = () => {
	const { t } = useTranslation('global');

	return (
		<>
			<Nosotros />
			<CardsEquipo />
			<ContactForm />
		</>
	);
};

export default AboutUs;
