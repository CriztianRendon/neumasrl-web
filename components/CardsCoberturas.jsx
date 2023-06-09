import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
//LIBRARIES
import { useTranslation } from 'react-i18next';
//AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
//IMAGES

import { scrollWidthOffset } from './scrollWidthOffset';

//JSON
import coberturas from '/src/coberturas.json';

const CardsCoberturas = () => {
	const { t } = useTranslation('global');
	const pageActual = useLocation().pathname;

	return (
		<div
			id='coberturas'
			className='section'>
			<div className='container'>
				<div className='wrapper'>
					<h2
						dangerouslySetInnerHTML={{ __html: t('home.coberturas.title') }}
					/>
					<p className='p-block--principal text--primary'>{t('home.coberturas.text')}</p>
					<div
						id='obrasSociales'
						className='wrapper'>
						{pageActual !== '/coberturas' && (
							<div className='wrapper-link'>
								<HashLink smooth
									to='/coberturas#obrasSociales'
									scroll={scrollWidthOffset}
									className='link-text link-text--md'>
									Obras Sociales
									<FontAwesomeIcon icon={faChevronRight} />
								</HashLink>
							</div>
						)}
						{pageActual === '/coberturas' && (
							<h3>
								<span>Obras </span>Sociales
							</h3>
						)}

						<div
							className={`wrapper__cards ${
								pageActual === '/coberturas'
									? 'wrapper__cards--coberturas-list'
									: 'wrapper__cards--coberturas-horizontal'
							}`}>
							{coberturas.obrasSociales.map((entidad, index) => (
								<div
									className={`${
										pageActual === '/coberturas'
											? 'card--cobertura-list'
											: 'card--cobertura-horizontal'
									}`}
									key={index}>
									<div className='card wrapper wrapper__img'>
										<img
											className='img--cobertura'
											src={`/img/coberturas${entidad.pathImg}.jpg`}
											alt=''
										/>
										{pageActual === '/coberturas' && (
											<>
												<hr />
												<p>{entidad.title}</p>
											</>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
					<div
						id='arts'
						className='wrapper'>
						{pageActual !== '/coberturas' && (
							<div className='wrapper-link'>
								<HashLink smooth
									to='/coberturas#arts'
									scroll={scrollWidthOffset}
									className='link-text link-text--md'>
									ARTs
									<FontAwesomeIcon icon={faChevronRight} />
								</HashLink>
							</div>
						)}
						{pageActual === '/coberturas' && (
							<h3>
								<span>ARTs</span>
							</h3>
						)}
						<div
							className={`wrapper__cards ${
								pageActual === '/coberturas'
									? 'wrapper__cards--coberturas-list'
									: 'wrapper__cards--coberturas-horizontal'
							}`}>
							{coberturas.arts.map((entidad, index) => (
								<div
									className={`${
										pageActual === '/coberturas'
											? 'card--cobertura-list'
											: 'card--cobertura-horizontal'
									}`}
									key={index}>
									<div className='card wrapper__img'>
										<img
											className='img--cobertura'
											src={`/img/coberturas${entidad.pathImg}.jpg`}
											alt=''
										/>
										{pageActual === '/coberturas' && (
											<>
												<hr />
												<p>{entidad.title}</p>
											</>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardsCoberturas;
