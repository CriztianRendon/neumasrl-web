import { Routes, Route } from 'react-router-dom';
// LIBRARIES

// PAGES
import Home from '../pages/Home';
import Especialidades from '../pages/Especialidades';
import AboutUs from '../pages/AboutUs';
import Coberturas from '../pages/Coberturas';

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
					path={`/coberturas`}
					element={<Coberturas />}
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
