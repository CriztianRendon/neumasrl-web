import logo from '/img/Neuma_logo blanco.png';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='container'>
				<div className='wrapper'>
					<div className='wrapper__img wrapper__img--footer'>
						<img
							className=''
							src={logo}
							alt='Hero imagen'
						/>
					</div>
					<h3>Neuma Respiratoria SRL</h3>
				</div>
				<p className='p-block--secondary '>
					{'+54 (0376) '}
					<a
						href='tel:+5403764425175'
						target='_blank'>
						4425175
					</a>
					{' - '}
					<a
						href='tel:+540374439239'
						target='_blank'>
						4439239
					</a>
				</p>
				<a
					href='https://www.google.com.ar/maps/place/25+de+Mayo+2241,+N3300DYO+Posadas,+Misiones/@-27.3716129,-55.9000554,15z/data=!3m1!4b1!4m6!3m5!1s0x9457bfb5182e96f5:0x60e4fe51d90a02eb!8m2!3d-27.3716323!4d-55.8897771!16s%2Fg%2F11jxt35lyj'
					target='_blank'>
					<p className='p-block--principal '>
						25 de Mayo 2241
						<br />
						Posadas, Misiones
						<br />
						ARGENTINA
					</p>
				</a>
			</div>
			<div className='wrapper--copywrite'>
				<p className='p--copywrite '>
					{new Date().getFullYear()} © Neuma Respiratoria SRL
				</p>
			</div>
		</div>
	);
};

export default Footer;
