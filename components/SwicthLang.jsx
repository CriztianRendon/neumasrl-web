import { useEffect, useState } from 'react';
//LIBRARIES
import { useTranslation } from 'react-i18next';
//IMAGES
import argFlag from '../public/img/argentina_flag.svg';
import braFlag from '../public/img/brazil_flag.svg';
import parFlag from '../public/img/paraguay_flag.svg';

const SwicthLang = () => {
	const { i18n } = useTranslation('global');
	const lang = i18n.language;

	const [activeLang, setActiveLang] = useState(lang);

	const handleLangChange = (newLang) => {
		i18n.changeLanguage(newLang);
		setActiveLang(newLang);
	};

	useEffect(() => {
		if (lang === 'es-ES' || 'es') {
			handleLangChange('es');
		} else if (lang === 'pt-BR' || 'pt') {
			handleLangChange('pt');
		} else if (lang === 'gn-PY' || 'gn') {
			handleLangChange('gn');
		}
	}, []);

	return (
		<div className='wrapper__swicth-lang'>
			<a
				className={`btn btn--xs ${
					activeLang === 'es' ? 'btn--language-active' : 'btn--languaje'
				}`}
				onClick={() => handleLangChange('es')}>
				<img
					src={argFlag}
					alt='Argentina flag language'
					width={'auto'}
					height={'18px'}
				/>
			</a>
			<button
				className={`btn btn--xs ${
					activeLang === 'pt' ? 'btn--language-active' : 'btn--languaje'
				}`}
				onClick={() => handleLangChange('pt')}>
				<img
					src={braFlag}
					alt='Argentina flag language'
					width={'auto'}
					height={'18px'}
				/>
			</button>
			<button
				className={`btn btn--xs ${
					activeLang === 'gn' ? 'btn--language-active' : 'btn--languaje'
				}`}
				onClick={() => handleLangChange('gn')}>
				<img
					src={parFlag}
					alt='Argentina flag language'
					width={'auto'}
					height={'18px'}
				/>
			</button>
		</div>
	);
};

export default SwicthLang;
