import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SwicthLang from './SwicthLang';
import WhatsappContact from './WhatsappContact';

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
			<SwicthLang />
			<WhatsappContact />
		</>
	);
};

export default MainLayout;
