import { useTranslation } from 'react-i18next';

const ContactForm = () => {
	const { t } = useTranslation('global');
	return (
		<div className='section'>
			<div className='container'>
				<div className='wrapper'>
					<h2>{t('home.contact-form.title')}</h2>
					<form>
						<input
							type='text'
							name='fullname'
							id='fullname'
							placeholder={t('home.contact-form.name')}
						/>
						<input
							type='email'
							name='email'
							id='email'
							placeholder={t('home.contact-form.email')}
						/>
						<input
							type='text-area'
							name='consult'
							id='consult'
							placeholder={t('home.contact-form.consulta')}
						/>
						<button type='submit'>{t('home.contact-form.submit')}</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
