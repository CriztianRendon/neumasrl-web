import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import logo from '/img/Neuma_logo.png';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleMenuClose = () => {
		setIsOpen(false);
	};

	return (
		<div className='navbar'>
			<div className='navbar__logo'>
				<img
					className='logo'
					src={logo}
					alt='Neuma_logo'
					loading='lazy'
				/>
			</div>
			<div
				className='burguer-menu'
				onClick={handleToggle}>
				<span>
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
				</span>
			</div>
			<div className={`navbar__items ${isOpen ? 'navbar__items--open' : ''}`}>
				<li className='item'>
					<Link
						to='/especialidades'
						onClick={handleMenuClose}>
						Especialidades
					</Link>
				</li>
				<li className='item'>
					<Link
						to='/'
						onClick={handleMenuClose}>
						Coberturas
					</Link>
				</li>
				<li className='item'>
					<Link
						to='/nosotros'
						onClick={handleMenuClose}>
						Nosotros
					</Link>
				</li>
			</div>
		</div>
	);
}

export default Navbar;
