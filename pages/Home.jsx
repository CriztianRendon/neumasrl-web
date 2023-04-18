import { useTranslation } from 'react-i18next';
import CardsEspecialidades from '../components/CardsEspecialidades';
import ContactForm from '../components/ContactForm';
import Equipo from '../components/Equipo';
import Hero from '../components/Hero';
import Noticias from '../components/Noticias';
import CardsCoberturas from '../components/CardsCoberturas';

const Home = () => {
	const [t, i18n] = useTranslation('global');
	const lang = i18n.language;

	return (
		<>
			<Hero />
			<Equipo />
			<CardsEspecialidades />
			{lang === 'es' ? <CardsCoberturas /> : ''}
			<ContactForm />
		</>
	);
};

export default Home;
