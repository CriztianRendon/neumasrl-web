import { Routes, Route } from 'react-router-dom';
// LIBRARIES

// PAGES
import Home from '../pages/Home';
import About from '../pages/About';
// COMPONENTS
import MainLayout from '../components/MainLayout';
import NotFound from '../pages/NotFound';

import './index.css';

import { useTranslation } from 'react-i18next';

function App() {
	const [t, i18n] = useTranslation('global');
	const lang = i18n.language;

	return (
		<>
			<Routes>
				<Route
					path='*'
					element={<NotFound />}
				/>
				<Route
					path={`/`}
					element={<MainLayout />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path={`/about`}
						element={<About />}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
