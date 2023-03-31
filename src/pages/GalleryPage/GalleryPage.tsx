import { galleryPageData } from '@/data/GalleryPage.data'
import CenterLayout from '@/layouts/CenterLayout/CenterLayout'
import { useNavigate } from 'react-router-dom'
import cl from './GalleryPage.module.scss'

const GalleryPage = () => {
	const navigate = useNavigate()

	return (
		<CenterLayout>
			<section>
				<h1 className='title'>Галерея</h1>
				<ul className={cl.list}>
					{galleryPageData.map(el => (
						<li key={el.id} onClick={() => navigate(el.href)}>
							<img src={el.blocks[0].img} alt='' className={cl.img} />
							<p className={cl.title}>{el.title}</p>
						</li>
					))}
				</ul>
			</section>
		</CenterLayout>
	)
}

export default GalleryPage
