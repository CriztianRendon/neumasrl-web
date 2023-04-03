import { useTranslation } from 'react-i18next';
import CardsEspecialidades from '../components/CardsEspecialidades';
import ContactForm from '../components/ContactForm';
import Equipo from '../components/Equipo';
import Hero from '../components/Hero';
import Noticias from '../components/Noticias';

const Home = () => {
	const { t } = useTranslation('global');

	return (
		<>
			<Hero />
			{/* <CardsEspecialidades /> */}
			<Equipo />
			<Noticias />
			<ContactForm/>
		</>
	);
};

export default Home;
