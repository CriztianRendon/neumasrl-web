import { useTranslation } from 'react-i18next';
import CardsEspecialidades from '../components/CardsEspecialidades';
import ContactForm from '../components/ContactForm';
import Equipo from '../components/Equipo';
import Hero from '../components/Hero';
import Noticias from '../components/Noticias';
import Coberturas from '../components/Coberturas';

const Home = () => {
	const [t, i18n] = useTranslation('global');
	const lang = i18n.language;

	return (
		<>
			<Hero />
			<Equipo />
			<CardsEspecialidades />
			{lang === 'es' ? <Coberturas /> : ''}
			<Noticias />
			<ContactForm />
		</>
	);
};

export default Home;
