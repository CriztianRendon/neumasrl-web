import { Link } from 'react-router-dom';
//LIBRARIES
import { useTranslation } from 'react-i18next';
//AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
//IMAGES

//JSON
import coberturas from '/src/coberturas.json';

const Coberturas = () => {
	const {t} = useTranslation('global');

	return (
		<div id='coberturas' className='section'>
			<div className='container'>
				<div className='wrapper'>
					<h2
						dangerouslySetInnerHTML={{ __html: t('home.coberturas.title') }}
					/>
					<p className='p-block--principal'>{t('home.coberturas.text')}</p>
					<div className='wrapper'>
						<h3>Obras Sociales</h3>
						<div className='wrapper__cards wrapper__cards--cobertura'>
							{coberturas.obrasSociales.map((entidad, index) => (
								<div
									className='card--cobertura'
									key={index}>
									<div className='card wrapper wrapper__img'>
										<img
										className='img--cobertura'
											src={`/img/coberturas${entidad.pathImg}.jpg`}
											alt=''
										/>
									</div>
									{/* <div className='wrapper__bodyCard'>
										<p> {entidad.title} </p>
									</div> */}
								</div>
							))}
						</div>
					</div>
					<div className='wrapper'>
						<h3>ARTs</h3>
						<div className='wrapper__cards wrapper__cards--cobertura'>
							{coberturas.arts.map((entidad, index) => (
								<div
									className='card--cobertura'
									key={index}>
									<div className='card wrapper wrapper__img'>
										<img
										className='img--cobertura'
											src={`/img/coberturas${entidad.pathImg}.jpg`}
											alt=''
										/>
									</div>
									{/* <div className='wrapper__bodyCard'>
										<p> {entidad.title} </p>
									</div> */}
								</div>
							))}
						</div>
					</div>
					
					<div className='wrapper wrapper-link'>
						<Link
							to='/nosotros'
							className='link-text link-text--md'>
							Ver listado
							<FontAwesomeIcon icon={faChevronRight} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Coberturas;
