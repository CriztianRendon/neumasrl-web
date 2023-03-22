import { useTranslation } from 'react-i18next';

const About = () => {
	const {t} = useTranslation('global');

	return (
		<div className='page'>
		<h1>{t("about.page-title")}</h1>
			<h1>{t("about.section-title")}</h1>
			<p>{t("about.content-text")}</p>
		</div>
	);
};

export default About;
