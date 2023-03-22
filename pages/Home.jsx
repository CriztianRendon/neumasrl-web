import { useTranslation } from 'react-i18next';

const Home = () => {
	const {t} = useTranslation('global');
	return (
		<div className='page'>
		<h1>{t("home.page-title")}</h1>
			<h1>{t("home.section-title")}</h1>
			<p>{t("home.content-text")}</p>
		</div>
	);
};

export default Home;
