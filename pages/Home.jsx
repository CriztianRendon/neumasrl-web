//LIBRARIES
import { useTranslation } from 'react-i18next';
//COMPONENTS
import Hero from '../components/Hero';
import Equipo from '../components/Equipo';
import CardsEspecialidades from '../components/CardsEspecialidades';
import CardsCoberturas from '../components/CardsCoberturas';

const Home = () => {
	const [t, i18n] = useTranslation('global');
	const lang = i18n.language;

	return (
		<>
			<Hero />
			<Equipo />
			<CardsEspecialidades />
			{lang === 'es-ES' && <CardsCoberturas />}
		</>
	);
};

export default Home;
