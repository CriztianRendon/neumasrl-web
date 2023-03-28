import { useTranslation } from 'react-i18next';

const SwicthLang = () => {

  const {i18n} = useTranslation('global');

	return (
		<div className='wrapper-swicth-lang'>
			<button onClick={() => i18n.changeLanguage('es')}>Es</button>
			<button onClick={() => i18n.changeLanguage('pt')}>Pt</button>
			<button onClick={() => i18n.changeLanguage('gn')}>Gn</button>
		</div>
	);
};

export default SwicthLang;
