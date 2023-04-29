import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ContactForm from './ContactForm';
import Footer from './Footer';
import SwicthLang from './SwicthLang';
import WhatsappContact from './WhatsappContact';

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<div className='main-container'>
				<Outlet />
				<ContactForm />
				<Footer />
				<SwicthLang />
				<WhatsappContact />
			</div>
		</>
	);
};

export default MainLayout;
