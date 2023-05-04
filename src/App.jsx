import { Routes, Route } from 'react-router-dom';

// LIBRARIES
import { useTranslation } from 'react-i18next';

// PAGES
import Home from '../pages/Home';
import Especialidades from '../pages/Especialidades';
import DetalleEspecialidad from '../components/DetalleEspecialidad';
import AboutUs from '../pages/AboutUs';
import Coberturas from '../pages/Coberturas';
// import Sitemap from '../components/Sitemap';

// COMPONENTS
import MainLayout from '../components/MainLayout';
import NotFound from '../pages/NotFound';
import ScrollToTop from '../components/ScrollToTop';

//STYLES
import '../styles/app.scss';

function App() {
	const { t } = useTranslation('global');

	return (
		<>
			<ScrollToTop />
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
						path={`/especialidades/:id`}
						element={<DetalleEspecialidad />}
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
		</>
	);
}

export default App;
