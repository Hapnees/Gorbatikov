import { galleryPageData } from '@/data/GalleryPage.data'
import CenterLayout from '@/layouts/CenterLayout/CenterLayout'
import { useParams } from 'react-router'
import cl from './GalleryOnePage.module.scss'

const GalleryOnePage = () => {
	const { slug } = useParams<{ slug: string }>()
	const data = galleryPageData.find(el => el.href === slug)

	if (!data) return <h1 className='title'>Данные не найдены</h1>

	return (
		<CenterLayout>
			<section>
				<h1 className={`title ${cl.title}`}>{data.title}</h1>
				{!!data.subtitle && <h2 className={cl.subtitle}>{data.subtitle}</h2>}
				<ul className={cl.list}>
					{data.blocks.map(el => (
						<li key={el.id}>
							<img src={el.img} alt='' />
							{!!el.title && <p>{el.title}</p>}
						</li>
					))}
				</ul>
			</section>
		</CenterLayout>
	)
}

export default GalleryOnePage
