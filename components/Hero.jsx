//LIBRARIES
import { useTranslation } from 'react-i18next';

import HeroImg from '../public/img/hero_home-960.png';

const Hero = () => {
	const { t } = useTranslation('global');
	return (
		<div className='section'>
			<div className='container'>
				<div className='wrapper wrapper-img'>
					<img
						src={HeroImg}
						alt='Hero imagen'
					/>
				</div>
				<div className='wrapper'>
					<h1
						className='hero-title'
						dangerouslySetInnerHTML={{__html: t('home.hero.hero-title'),}}>
					</h1>
					<p className='hero-text'>{t('home.hero.hero-text')}</p>
					<a
						href='https://github.com/CriztianRendon'
						target='_blank'
						rel='noopener noreferrer'
						className='btn btn--primary btn--lg'>
						{t('home.hero.hero-button')}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
