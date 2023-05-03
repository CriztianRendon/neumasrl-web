import { useTranslation } from 'react-i18next';
import CardsEspecialidades from '../components/CardsEspecialidades';
import Equipo from '../components/Equipo';
import Hero from '../components/Hero';
import CardsCoberturas from '../components/CardsCoberturas';

const Home = () => {
	const [t, i18n] = useTranslation('global');
	const lang = i18n.language;

	return (
		<>
			<Hero />
			<Equipo />
			<CardsEspecialidades />
			{lang === 'es' && <CardsCoberturas />}
		</>
	);
};

export default Home;
