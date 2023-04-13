//LIBRARIES
import { useTranslation } from 'react-i18next';
//IMAGES
import EquipoImg from '/img/equipo_1_960.png';
import EquipoImg2 from '/img/equipo_2_960.png';
import DecorImg from '/img/decor_img.svg';

const Nosotros = () => {
	const { t } = useTranslation('global');

	return (
		<div className='section'>
			<div className='container'>
				<div className='wrapper'>
					<h2
						className='section-title'
						dangerouslySetInnerHTML={{ __html: t('nosotros.title') }}></h2>
					<p className='p-block--principal text--primary'>
						{t('nosotros.text.parrafo1')}
					</p>
				</div>
				<div className='wrapper wrapper__img wrapper__img--section'>
					<img
						className='img--section'
						src={EquipoImg}
						alt='Hero imagen'
					/>
					<img
						className='img--decoration1'
						src={DecorImg}
						alt='Hero imagen'
					/>
				</div>
				<div>
					<p className='p-block--secondary'>{t('nosotros.text.parrafo2')}</p>
					<p className='p-block--secondary'>{t('nosotros.text.parrafo3')}</p>
					<p
						className='p-block--secondary'
						dangerouslySetInnerHTML={{
							__html: t('nosotros.text.parrafo4') }}></p>
				</div>
				<div className='wrapper wrapper__img wrapper__img--full'>
					<img
						className='img--section'
						src={EquipoImg2}
						alt='Hero imagen'
					/>
					<img
						className='img--decoration2'
						src={DecorImg}
						alt='Hero imagen'
					/>
				</div>
			</div>
		</div>
	);
};

export default Nosotros;
