import callIcon from '@/assets/call.png'
import logo from '@/assets/header/logo.jpg'
import ModifMap from '@/components/ModifMap/ModifMap'
import CenterLayout from '@/layouts/CenterLayout/CenterLayout'
import cl from './ContactsPage.module.scss'

const ContactsPage = () => {
	return (
		<CenterLayout>
			<section className={cl.container}>
				<h1 className='title'>Контакты</h1>
				<ModifMap />

				<article className={cl.bottomInfo}>
					<div className={cl.leftSide}>
						<img src={logo} alt='' />
						<div>
							<p>ФК "Текстильщик, 78390, г. Камышин, ул. Короленко 24"</p>
							<p>ИНН 1234567890 ОГРН 123456789012</p>
							<p>Политика конфиденциальности</p>
						</div>
					</div>

					<div className={cl.rightSide}>
						<div>
							<img src={callIcon} alt='' className={cl.callIcon} />
							<p className={cl.number}>8 800 343 22 33</p>
						</div>
						<p>Звонок по России бесплатный</p>
					</div>
				</article>
			</section>
		</CenterLayout>
	)
}

export default ContactsPage
