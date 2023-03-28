import { useTranslation } from 'react-i18next';

const Home = () => {
	const {t} = useTranslation('global');
	return (
		<div className='page'>
		<h1>Home</h1>
		</div>
	);
};

export default Home;
