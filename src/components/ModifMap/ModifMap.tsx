import { useState } from 'react'
import {
	FullscreenControl,
	Map,
	SearchControl,
	TrafficControl,
	YMaps,
	ZoomControl,
} from 'react-yandex-maps'
import cl from './ModifMap.module.scss'

const ModifMap = () => {
	const [isShowInfo, setIsShowInfo] = useState(true)

	const mapOptions = {
		modules: ['geocode', 'SuggestView'],
		defaultOptions: { suppressMapOpenBlock: true },
		width: 600,
		height: 400,
	}

	return (
		<article className={cl.mapWrapper}>
			{!isShowInfo && (
				<button className={cl.contactBtn} onClick={() => setIsShowInfo(true)}>
					Инфо
				</button>
			)}
			<YMaps>
				<Map
					defaultState={{ center: [50.066383, 45.394768], zoom: 11 }}
					{...mapOptions}
					className={cl.map}
				>
					<ZoomControl defaultOptions={{ innerWidth: 128 }} />
					<FullscreenControl />
					<SearchControl />
					<TrafficControl />
				</Map>
			</YMaps>
			<div
				className={cl.mapInfo}
				style={{ transform: `scale(${isShowInfo ? 1 : 0})` }}
				onClick={() => setIsShowInfo(false)}
			>
				<p>Контактная информация</p>
				<ul>
					<li>Камышин, Короленко 24</li>
					<li>Email: fk.tk@yandex.ru</li>
					<li>Телефон: 8 800 300 06 00</li>
					<li>Телфефон: 8 800 340 06 00</li>
					<li>Контакное лицо: Зенин М.А.</li>
				</ul>
			</div>
		</article>
	)
}

export default ModifMap
