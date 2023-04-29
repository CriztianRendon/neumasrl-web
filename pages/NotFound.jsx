import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SwicthLang from '../components/SwicthLang';
import WhatsappContact from '../components/WhatsappContact';

const NotFound = () => {
	return (
		<div className='main-container'>
			<Navbar />
			<h1>Page not found 👀</h1>
			<ContactForm />
			<Footer />
			<SwicthLang />
			<WhatsappContact />
		</div>
	);
};

export default NotFound;
