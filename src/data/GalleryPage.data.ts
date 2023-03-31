import fans1 from '@/assets/GalleryPage/fans/fans_1.jpg'
import fans2 from '@/assets/GalleryPage/fans/fans_2.jpg'
import fans3 from '@/assets/GalleryPage/fans/fans_3.jpg'
import fans4 from '@/assets/GalleryPage/fans/fans_4.jpg'

import moment1 from '@/assets/GalleryPage/brightMoments/moment_1.jpg'
import moment2 from '@/assets/GalleryPage/brightMoments/moment_2.jpg'
import moment3 from '@/assets/GalleryPage/brightMoments/moment_3.jpg'
import moment4 from '@/assets/GalleryPage/brightMoments/moment_4.jpg'
import moment5 from '@/assets/GalleryPage/brightMoments/moment_5.jpg'
import moment6 from '@/assets/GalleryPage/brightMoments/moment_6.jpg'

import { IGalleryEl } from '@/types/galleryEl.type'

export const galleryPageData: IGalleryEl[] = [
	{
		id: 1,
		title: 'Наши болельщики',
		subtitle: 'Наш Текстиль великий клуб! Это знают все вокруг',
		href: 'fans',
		blocks: [
			{
				id: 1,
				img: fans1,
				title: 'Создание энергии трибун для достижения успехов',
			},
			{ id: 2, img: fans2, title: 'Организация досуга любителей футбола' },
			{ id: 3, img: fans3, title: 'Поддержание команды во всех соревнованиях' },
			{ id: 4, img: fans4, title: 'Организация выездов болельщиков на игры' },
		],
	},
	{
		id: 2,
		title: 'Яркие моменты с игр команды',
		href: 'brights',
		blocks: [
			{ id: 1, img: moment1 },
			{ id: 2, img: moment2 },
			{ id: 3, img: moment3 },
			{ id: 4, img: moment4 },
			{ id: 4, img: moment5 },
			{ id: 4, img: moment6 },
		],
	},
]
