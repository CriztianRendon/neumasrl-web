import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { scrollWidthOffset } from './scrollWidthOffset';
//LIBRARIES
import { useTranslation } from 'react-i18next';
//AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
//IMG
import logo from '/img/Neuma_logo.png';

function Navbar() {
	const [t, i18n] = useTranslation('global');
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleMenuClose = () => {
		setIsOpen(false);
	};

	return (
		<div className='container container__nav'>
			<div className='navbar'>
				<div className='navbar__logo'>
					<NavLink
						to='/'
						onClick={handleMenuClose}>
						<img
							className='logo'
							src={logo}
							alt='Neuma_logo'
							loading='lazy'
						/>
					</NavLink>
				</div>
				<div
					className='burguer-menu'
					onClick={handleToggle}>
					<i>
						{!isOpen ? (
							<FontAwesomeIcon
								className='burguer-menu__icon'
								icon={faBars}
							/>
						) : (
							<FontAwesomeIcon
								className='burguer-menu__icon'
								icon={faXmark}
							/>
						)}
					</i>
				</div>
				<div className={`navbar__items ${isOpen ? 'navbar__items--open' : ''}`}>
					<li className='item'>
						<NavLink
							to='/especialidades'
							onClick={handleMenuClose}
							className='navlink'>
							{t('navbar.especialidades')}
						</NavLink>
					</li>
					{i18n.language === 'es-ES' && (
						<li className='item'>
							<NavLink
								to='/coberturas'
								onClick={handleMenuClose}
								className='navlink'>
								coberturas
							</NavLink>
						</li>
					)}
					<li className='item'>
						<NavLink
							to='/nosotros'
							onClick={handleMenuClose}
							className='navlink'>
							{t('navbar.nosotros')}
						</NavLink>
					</li>
					<a
						href='https://bit.ly/Clinica-Neuma'
						target='_blank'
						rel='noopener noreferrer'
						className='btn btn--primary btn--lg'>
						turnos
					</a>
					<HashLink smooth
						to='/#contactForm'
						scroll={scrollWidthOffset}
						onClick={handleMenuClose}
						className='btn btn--secondary btn--lg'>
						{t('navbar.contacto')}
					</HashLink>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
