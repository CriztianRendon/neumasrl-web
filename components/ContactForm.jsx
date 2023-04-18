import { useRef, useState } from 'react';
//LIBRARIES
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
	//Objeto para traducciones de texto en este componente
	const { t } = useTranslation('global');

	const [submitAlert, setSubmitAlert] = useState('');

	//Envio de form a mail por EmailJS - ver configuraciones en su web
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_muoiz9k',
				'template_no38vlr',
				form.current,
				'FIdcWro__2BdVEVYG'
			)
			.then(
				(result) => {
					console.log(result.text);
					setSubmitAlert('sucess');
					form.current.reset();
				},
				(error) => {
					console.log(error.text);
					setSubmitAlert('error');
				}
			);

			
	};

	return (
		<div
			id='contactForm'
			className='section'>
			<div className='container'>
				<div className='wrapper'>
					<h2
						dangerouslySetInnerHTML={{ __html: t('home.contact-form.title') }}
					/>
					<form
						ref={form}
						onSubmit={sendEmail}>
						<input
							className='text-field'
							type='text'
							name='user_name'
							id='user_name'
							required
							placeholder={t('home.contact-form.name')}
						/>
						<input
							className='text-field'
							type='email'
							name='user_email'
							id='user_email'
							required
							placeholder={t('home.contact-form.email')}
						/>
						<input
							className='text-field'
							type='text-area'
							name='user_message'
							id='user_message'
							required
							placeholder={t('home.contact-form.consulta')}
						/>
						{submitAlert && 
						<div className={`wrapper alert ${submitAlert === 'sucess' ? 'alert--sucess' : 'alert--error'}`}>
						Consulta enviada ✓
						</div>
						}
						<button
							className='btn btn--primary btn--lg'
							type='submit'>
							{t('home.contact-form.submit')}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
