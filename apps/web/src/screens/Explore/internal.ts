import { LayoutCardProps } from './components/LayoutCard';
export const mockLayoutCards: LayoutCardProps[] = [
	{
		id: '1',
		name: 'Magic Eden',
		description:
			'Lorem ipsum dolor sit amet consectetur. Amet lectus volutpat nulla dapibus ornare ...',
		thumbnail: '/img/explore/thumbnail-magic-eden.png',
		logo: '/img/explore/logo-magic-eden.png',
		loveCount: 100,
		isLoved: true,
		activeUsers: 100,
	},
	{
		id: '2',
		name: 'Axie',
		description:
			'Lorem ipsum dolor sit amet consectetur. Amet lectus volutpat nulla dapibus ornare ...',
		thumbnail: '/img/explore/thumbnail-axie.png',
		logo: '/img/explore/logo-axie.png',
		loveCount: 100,
		isLoved: false,
		activeUsers: 100,
	},
];