import {useEffect, useState} from 'react'

import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const Header = () => {

	const [t, i18n] = useTranslation('global');

	const [language, setLanguage] = useState(i18n.language);

	useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

	console.log(language)
	
	return (
		<header className='component'>
			<h1>Demo i18next</h1>
			<nav>
				<ul>
					<li>
						<NavLink to={`/`} >{t("home.page-title")}</NavLink>
					</li>
					<li>
						<NavLink to={`/about`} >{t("about.page-title")}</NavLink>
					</li>
				</ul>
			</nav>
			<button onClick={() => i18n.changeLanguage('es')} >Es</button>
			<button onClick={() => i18n.changeLanguage('pt')} >Pt</button>
			<button onClick={() => i18n.changeLanguage('gn')} >Gn</button>
		</header>

	);
};

export default Header;
