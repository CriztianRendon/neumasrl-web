import { Link } from 'react-router-dom';

//LIBRARIES
import { useTranslation } from 'react-i18next';

//AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

//IMAGES
import HeroImg from '/img/hero_home-720.jpg';

const Hero = () => {
	const { t } = useTranslation('global');
	return (
		<div className='section'>
			<div className='container'>
				<div className='wrapper wrapper__hero'>
					<div className='wrapper wrapper__img wrapper__img--hero'>
						<img
							src={HeroImg}
							alt='Hero imagen'
						/>
					</div>
					<div className='wrapper'>
						<h1
							className='hero-title'
							dangerouslySetInnerHTML={{
								__html: t('home.hero.hero-title'),
							}}></h1>
						<p className='p-block--principal hero-text'>
							{t('home.hero.hero-text')}
						</p>
						<a
							href='https://bit.ly/Clinica-Neuma'
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn--primary btn--lg'>
							{t('home.hero.hero-button')}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
