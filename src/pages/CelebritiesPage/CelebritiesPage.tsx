import { сelebritiesPageData } from '@/data/CelebritiesPage.data'
import CenterLayout from '@/layouts/CenterLayout/CenterLayout'
import cl from './CelebritiesPage.module.scss'

const CelebritiesPage = () => {
	return (
		<CenterLayout>
			<section className={cl.container}>
				<h1 className={`title ${cl.title}`}>Знаменитые личности команды</h1>
				<h2 className={cl.subtitle}>Каждый год о них говорят как о "Лучших"</h2>

				<ul className={cl.list}>
					{сelebritiesPageData.map(el => (
						<li key={el.id}>
							<img src={el.img} alt='' className={cl.img} />
							<div className={cl.info}>
								<p>{el.name}</p>
								<p>{el.info()}</p>
							</div>
						</li>
					))}
				</ul>
			</section>
		</CenterLayout>
	)
}

export default CelebritiesPage
