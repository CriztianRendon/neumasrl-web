import { useTranslation } from 'react-i18next';
import Nosotros from '../components/Nosotros';
import CardsEquipo from '../components/CardsEquipo';

const AboutUs = () => {
	const { t } = useTranslation('global');

	return (
		<>
			<Nosotros />
			<CardsEquipo />
		</>
	);
};

export default AboutUs;
