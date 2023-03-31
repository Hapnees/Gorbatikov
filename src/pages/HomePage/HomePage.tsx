import banner from '@/assets/HomePage/homePageBanner.png'
import cl from './HomePage.module.scss'

const HomePage = () => {
	return (
		<main className={cl.main}>
			<img src={banner} alt='' className={cl.banner} />
		</main>
	)
}

export default HomePage
