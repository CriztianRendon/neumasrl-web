import { useEffect, useState } from 'react';
import axios from 'axios';
//i18n
import { useTranslation } from 'react-i18next';

const Noticias = () => {
	const { t } = useTranslation('global');

	const [noticias, setNoticias] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://newsapi.org/v2/top-headlines?country=ar&category=health&apiKey=956618f8df104a10a51317fdd47e3384'
			)
			.then((resp) => {
				console.log(resp.data.articles);
				const apiData = resp.data.articles;
				setNoticias(apiData);
			})
			.catch((error) => {
				console.log('Oh, algo falló', error.message);
			});
	}, []);

	return (
		<div className='section'>
			<div className='container'>
				<div className='wrapper'>
					<h2 dangerouslySetInnerHTML={{ __html: t('home.noticias.title') }} />
					<p>{t('home.noticias.text')}</p>
					{/* <div>
					<rssapp-carousel id="zrq4xhIsBmD34kES"></rssapp-carousel>
					<script
						src="https://widget.rss.app/v1/carousel.js"
						type="text/javascript"
						async>
					</script>
				</div> */}

					{/* <div>
						{noticias.map((noticia, index) => (
							<h3>{noticia.title}</h3>
						))}
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Noticias;
