import { timeDataTablePage } from '@/data/timeTablePage.data'
import CenterLayout from '@/layouts/CenterLayout/CenterLayout'
import cl from './TimeTablePage.module.scss'

const TimeTablePage = () => {
	return (
		<CenterLayout>
			<section>
				<h1 className='title'>Расписание игр</h1>
				<ul className={cl.list}>
					{timeDataTablePage.map(el => (
						<li key={el.id}>
							<img src={el.img} alt='' className={cl.img} />
							<p className={cl.title}>{el.title}</p>
							<p>{el.date}</p>
						</li>
					))}
				</ul>
			</section>
		</CenterLayout>
	)
}

export default TimeTablePage
