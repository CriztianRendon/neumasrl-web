import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout = () => {
	return (
		<div className='layout'>
			<Header />
			<Outlet />
		</div>
	);
};

export default MainLayout;
