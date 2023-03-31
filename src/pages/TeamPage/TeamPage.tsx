import { teamPageData } from '@/data/teamPage.data'
import CenterLayout from '@/layouts/CenterLayout/CenterLayout'
import cl from './TeamPage.module.scss'

const TeamPage = () => {
	return (
		<CenterLayout>
			<section className={cl.wrapper}>
				<h1 className='title'>Состав комады</h1>
				<ul className={cl.list}>
					{teamPageData.map(team => (
						<li key={team.id}>
							<img src={team.img} alt='' />
							<div className={cl.info}>
								<p>{team.title}</p>
								<p>{team.team}</p>
							</div>
						</li>
					))}
				</ul>
			</section>
		</CenterLayout>
	)
}

export default TeamPage
