import { Link } from 'react-router-dom';
//LIBRARIES
import { useTranslation } from 'react-i18next';
//AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
//IMAGES
import EquipoImg from '/img/equipo_1_960.png';
import DecorImg from '/img/decor_img.svg';



const Equipo = () => {
	const { t } = useTranslation('global');
	return (
		<div className='section'>
			<div className='container'>
				<div className='wrapper'>
					<h2
						className='section-title'
						dangerouslySetInnerHTML={{ __html: t('home.equipo.title') }}></h2>
					<p>{t('home.equipo.text')}</p>
				</div>
				<div className='wrapper wrapper__img wrapper__img--section'>
					<img
						className='img img--section'
						src={EquipoImg}
						alt='Hero imagen'
					/>
					<img
						className='img img--decoration'
						src={DecorImg}
						alt='Hero imagen'
					/>
				</div>
				<div className='wrapper wrapper-link'>
					<Link
						to='/nosotros'
						className='link-text link-text--md'>
						{t('home.equipo.button')}
						<FontAwesomeIcon icon={faChevronRight} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Equipo;
