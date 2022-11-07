import { ICollection } from '../interfaces/ICollection'

export const collections: ICollection[] = [
	{
		backgroundImage: require('../assets/collections/1b.png').default.src,
		image: require('../assets/collections/1i.png').default.src,
		title: 'Антигерои',
		description: 'Собрали для Вас подборку лучших произведений с антигероями.',
		href: 'test1',
	},
	{
		backgroundImage: require('../assets/collections/2b.png').default.src,
		image: require('../assets/collections/2i.png').default.src,
		title: 'Монстры',
		description:
			'В этой подборке собрали для Вас лучшие тайтлы в жанре фэнтези с монстрами.',
		href: 'test2',
	},
	{
		backgroundImage: require('../assets/collections/3b.png').default.src,
		image: require('../assets/collections/3i.png').default.src,
		title: 'Боевые искусств',
		description:
			'В этой подборке собрали для Вас лучшие тайтлы в жанре фэнтези с монстрами.',
		href: 'test3',
	},
	{
		backgroundImage: require('../assets/collections/4b.png').default.src,
		image: require('../assets/collections/4i.png').default.src,
		title: 'Два ГГ',
		description:
			'Наблюдать за одним героем интересно, а что, если героев будет двое?',
		href: 'test4',
	},
]
