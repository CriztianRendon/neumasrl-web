import { useTranslation } from 'react-i18next';

const SwicthLang = () => {
	const { i18n } = useTranslation('global');

	return (
			<div className='wrapper__swicth-lang'>
				<button className='btn btn--secondary btn--xs' onClick={() => i18n.changeLanguage('es')}>Es</button>
				<button className='btn btn--secondary btn--xs' onClick={() => i18n.changeLanguage('pt')}>Pt</button>
				<button className='btn btn--secondary btn--xs' onClick={() => i18n.changeLanguage('gn')}>Gn</button>
			</div>
	);
};

export default SwicthLang;
