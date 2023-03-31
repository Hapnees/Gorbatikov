import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import AboutPage from './pages/AboutPage/AboutPage'
import CelebritiesPage from './pages/CelebritiesPage/CelebritiesPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import GalleryOnePage from './pages/GalleryOnePage/GalleryOnePage'
import GalleryPage from './pages/GalleryPage/GalleryPage'
import HomePage from './pages/HomePage/HomePage'
import TeamPage from './pages/TeamPage/TeamPage'
import TicketsPage from './pages/TicketsPage/TicketsPage'
import TimeTablePage from './pages/TimeTablePage/TimeTablePage'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/team' element={<TeamPage />} />
				<Route path='/timetable' element={<TimeTablePage />} />
				<Route path='/tickets' element={<TicketsPage />} />
				<Route path='/celebrities' element={<CelebritiesPage />} />
				<Route path='/gallery' element={<GalleryPage />} />
				<Route path='/gallery/:slug' element={<GalleryOnePage />} />
				<Route path='/contacts' element={<ContactsPage />} />
			</Route>
		</Routes>
	)
}

export default App
