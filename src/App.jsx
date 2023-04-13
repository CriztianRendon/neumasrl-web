import { Routes, Route } from 'react-router-dom';
// LIBRARIES

// PAGES
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Especialidades from '../pages/Especialidades';
// COMPONENTS
import MainLayout from '../components/MainLayout';
import NotFound from '../pages/NotFound';

import { useTranslation } from 'react-i18next';

import '../styles/app.scss';


function App() {
	const [t, i18n] = useTranslation('global');

	return (
		<Routes>
			<Route
				path='*'
				element={<NotFound />}
			/>
			<Route
				path='/'
				element={<MainLayout />}>
				<Route
					index
					path='/'
					element={<Home />}
				/>
				<Route
					path={`/especialidades`}
					element={<Especialidades />}
				/>
				<Route
					path={`/nosotros`}
					element={<AboutUs />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
