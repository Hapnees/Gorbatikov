export interface IGalleryEl {
	id: number
	title: string
	subtitle?: string
	href: string
	blocks: { id: number; img: string; title?: string }[]
}
