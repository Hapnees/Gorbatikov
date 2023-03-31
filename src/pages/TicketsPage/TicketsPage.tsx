import banner from '@/assets/TicketsPage/banner.jpg'
import cl from './TicketsPage.module.scss'

const TicketsPage = () => {
	return (
		<section>
			<img src={banner} alt='' className={cl.banner} />
		</section>
	)
}

export default TicketsPage
