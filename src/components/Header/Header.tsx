import logo from '@/assets/header/logo.jpg'
import { Link, useNavigate } from 'react-router-dom'
import cl from './Header.module.scss'

const Header = () => {
	const navigate = useNavigate()
	return (
		<header className={cl.header}>
			<nav className={cl.nav}>
				<ul className={cl.list}>
					<li>
						<Link to='/about'>О клубе</Link>
					</li>
					<li>
						<Link to='/team'>Состав команды</Link>
					</li>
					<li>
						<Link to='/timetable'>Расписание</Link>
					</li>
				</ul>

				<img
					src={logo}
					alt=''
					className={cl.logo}
					onClick={() => navigate('/')}
				/>

				<ul className={cl.list}>
					<li>
						<Link to='/tickets'>Билеты на матч</Link>
					</li>
					<li>
						<Link to='/celebrities'>Знаменитости</Link>
					</li>
					<li>
						<Link to='/gallery'>Галерея</Link>
					</li>
					<li>
						<Link to='/contacts'>Контакты</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
