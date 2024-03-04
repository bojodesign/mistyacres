const productsArray = [
	// small plants
	{
		id: "s00",
		thumb: "/assets/img/plants/pukio_thumb.jpg",
		image: "/assets/img/plants/pukio.jpg",
		category: ['small',],
		title: "Carex virgata",
		subtitle: "Pukio",
		description: <>Hardy large growing grass that can take wet or dry soils. Wind, frost, sun or shade.</>,
		size: "1m x 1m",
		price: 4.75
	},
	{
		id: "s01",
		thumb: "/assets/img/plants/karamu_thumb.jpg",
		image: "/assets/img/plants/karamu.jpg",
		category: ['small',],
		title: "Coprosma robusta",
		subtitle: "Karamu",
		description: <>Easily grown shrub. Glossy dark green leaves. Bright orange-red berries on female plants.</>,
		size: "2m x 1.5m",
		price: 4.75
	},
	{
		id: "s02",
		thumb: "/assets/img/plants/tikouka_thumb.jpg",
		image: "/assets/img/plants/tikouka.jpg",
		category: ['small',],
		title: "Cordyline australis",
		subtitle: "Cabbage Tree - Ti Kouka",
		description: <>Hardy sword leaf type palm with tall trunk. Sprays of white flowers in late spring.</>,
		size: "6m x 2m",
		price: 4.75
	},
	{
		id: "s03",
		thumb: "/assets/img/plants/akeake_thumb.jpg",
		image: "/assets/img/plants/akeake.jpg",
		category: ['small',],
		title: "Dodonaea viscosa",
		subtitle: "Ake Ake",
		description: <>Hardy green bushy large shrub. Excellent for hedges.</>,
		size: "7m x 2.5m",
		price: 4.75
	},
	{
		id: "s04",
		thumb: "/assets/img/plants/pakeake_thumb.jpg",
		image: "/assets/img/plants/pakeake.jpg",
		category: ['small',],
		title: "Dodonaea viscosa purpurea",
		subtitle: "Purple Ake Ake",
		description: <>Hardy, fast growing bushy shrub or small tree. Purple/burgundy leaves. Great for hedges.</>,
		size: "6m x 2.5m",
		price: 4.75
	},
	{
		id: "s05",
		thumb: "/assets/img/plants/kapuka_thumb.jpg",
		image: "/assets/img/plants/kapuka.jpg",
		category: ['small',],
		title: "Griselinia littoralis",
		subtitle: "Native Broadleaf - Kapuka",
		description: <>Glossy green, leathery leaves. Hardy shrub/small tree.</>,
		size: "3m x 2m",
		price: 4.75
	},
	{
		id: "s06",
		thumb: "/assets/img/plants/kanuka_thumb.jpg",
		image: "/assets/img/plants/kanuka.jpg",
		category: ['small',],
		title: "Kunzea ericoides",
		subtitle: "Kanuka",
		description: <>Great for re-vegetation and can handle dry ground. Small leaves with bright white flowers.</>,
		size: "8m x 3m",
		price: 4.75
	},
	{
		id: "s07",
		thumb: "/assets/img/plants/manuka_thumb.jpg",
		image: "/assets/img/plants/manuka.jpg",
		category: ['small',],
		title: "Leptospermum scoparium",
		subtitle: "Tea Tree - Manuka",
		description: <>Similar to Kanuka. Slightly larger leaves. Can handle moist soils.</>,
		size: "4m x 3m",
		price: 4.75
	},
	{
		id: "s08",
		thumb: "/assets/img/plants/whiteywood_thumb.jpg",
		image: "/assets/img/plants/whiteywood.jpg",
		category: ['small',],
		title: "Melicytus ramiflorus",
		subtitle: "Whiteywood - Mahoe",
		description: <>White bark and bushy, tall, leafy tree. Frost tender when young but hardier with age.</>,
		size: "8m x 2m",
		price: 4.75
	},
	{
		id: "s09",
		thumb: "/assets/img/plants/mountainflax_thumb.jpg",
		image: "/assets/img/plants/mountainflax.jpg",
		category: ['small',],
		title: "Phormium cookianum",
		subtitle: "Mountain Flax",
		description: <>Smaller growing flax than P. tenax. Good on hills, cliffs, dry areas.</>,
		size: "1m x 1m",
		price: 4.75
	},
	{
		id: "s10",
		thumb: "/assets/img/plants/harakeke_thumb.jpg",
		image: "/assets/img/plants/harakeke.jpg",
		category: ['small',],
		title: "Phormium tenax",
		subtitle: "NZ Flax - Harakeke",
		description: <>Well-known plant with green sword leaves. Handles wet areas.</>,
		size: "2m x 2m",
		price: 4.75
	},
	{
		id: "s11",
		thumb: "/assets/img/plants/tarata_thumb.jpg",
		image: "/assets/img/plants/tarata.jpg",
		category: ['small',],
		title: "Pittosporum eugenoides",
		subtitle: "Lemonwood - Tarata",
		description: <>Hardy, bushy trees with large light green leaves.</>,
		size: "5m x 3m",
		price: 4.75
	},
	{
		id: "s12",
		thumb: "/assets/img/plants/kohuhu_thumb.jpg",
		image: "/assets/img/plants/kohuhu.jpg",
		category: ['small',],
		title: "Pittosporum tenuifolium",
		subtitle: "Kohuhu",
		description: <>Easily grown, hardy small leaf Pittosporum.</>,
		size: "5m x 3m",
		price: 4.75
	},
	{
		id: "s13",
		thumb: "/assets/img/plants/manata_thumb.jpg",
		image: "/assets/img/plants/manata.jpg",
		category: ['small',],
		title: "Plagianthus regius",
		subtitle: "Ribbon Wood - Manata",
		description: <>Medium tree with divaricating growth. Hardy and semi deciduous.</>,
		size: "12m x 4m",
		price: 4.75
	},
	{
		id: "s14",
		thumb: "/assets/img/plants/fivefinger_thumb.jpg",
		image: "/assets/img/plants/fivefinger.jpg",
		category: ['small',],
		title: "Pseudopanax arboreus",
		subtitle: "Five Finger",
		description: <>Rapid growing dark green glossy leaves. Grows across centre of north island.</>,
		size: "3m x 1.5m",
		price: 4.75
	},
	{
		id: "s15",
		thumb: "/assets/img/plants/kowhai_thumb.jpg",
		image: "/assets/img/plants/kowhai.jpg",
		category: ['small',],
		title: "Sophora tetraptera",
		subtitle: "Kowhai",
		description: <>Well-known tree with distinctive yellow flowers through spring. Requires free draining, moisture-retentive soil sheltered from cold wind.</>,
		size: "4.5 x 3m",
		price: 4.75
	},

	// large plants
	{
		id: "l00",
		thumb: "/assets/img/plants/large/tikouka_large_thumb.jpg",
		image: "/assets/img/plants/large/tikouka_large.jpg",
		category: ['large',],
		title: "Cordyline australis",
		subtitle: "Cabbage Tree - Ti Kouka",
		description: <>Hardy sword leaf type palm with tall trunk. Sprays of white flowers in late spring.</>,
		size: "6m x 2m, Pb18",
		price: 15
	},
	{
		id: "l01",
		thumb: "/assets/img/plants/placeholder_thumb.jpg",
		image: "/assets/img/plants/placeholder.jpg",
		category: ['large',],
		title: "Dacrycarpus dacrydioides",
		subtitle: "White Pine - Kahikatea",
		description: <>Tallest native tree after many years. Thrives on moist to wet soils.</>,
		size: "7m x 4m, 10yrs",
		price: 15
	},
	{
		id: "l02",
		thumb: "/assets/img/plants/large/akeake_thumb.jpg",
		image: "/assets/img/plants/large/akeake.jpg",
		category: ['large',],
		title: "Dodonaea viscosa",
		subtitle: "Ake Ake",
		description: <>Hardy green bushy large shrub. Excellent for hedges.</>,
		size: "7m x 2.5m",
		price: 15
	},
	{
		id: "l03",
		thumb: "/assets/img/plants/large/pakeake_large_thumb.jpg",
		image: "/assets/img/plants/large/pakeake_large.jpg",
		category: ['large',],
		title: "Dodonaea viscosa purpurea",
		subtitle: "Purple Ake Ake",
		description: <>Hardy, fast growing bushy shrub or small tree. Purple/burgundy leaves. Great for hedges.</>,
		size: "6m x 2.5m, 8L",
		price: 15
	},
	{
		id: "l04",
		thumb: "/assets/img/plants/large/tarata_thumb.jpg",
		image: "/assets/img/plants/large/tarata.jpg",
		category: ['large',],
		title: "Pittosporum eugenoides",
		subtitle: "Lemonwood - Tarata",
		description: <>Hardy, bushy trees with large light green leaves.</>,
		size: "5m x 3m, Pb8",
		price: 10
	},
	{
		id: "l05",
		thumb: "/assets/img/plants/large/fivefinger_large_thumb.jpg",
		image: "/assets/img/plants/large/fivefinger_large.jpg",
		category: ['large',],
		title: "Pseudopanax arboreus",
		subtitle: "Five Finger",
		description: <>Rapid growing dark green glossy leaves. Grows across centre of north island.</>,
		size: "3m x 1.5m, 5L",
		price: 12
	},
	{
		id: "l06",
		thumb: "/assets/img/plants/large/lancewood_thumb.jpg",
		image: "/assets/img/plants/large/lancewood.jpg",
		category: ['large',],
		title: "Pseudopanax crassifolius",
		subtitle: "Lancewood - Horoeka",
		description: <>Tall stem with long serrated leaves until older when they become leathery and bushy. Hardy; avoid frost when young.</>,
		size: "4m x 1m, 8L, 10yrs",
		price: 25
	},
	{
		id: "l07",
		thumb: "/assets/img/plants/large/toothedlancewood_thumb.jpg",
		image: "/assets/img/plants/large/toothedlancewood.jpg",
		category: ['large',],
		title: "Pseudopanax ferox",
		subtitle: "Toothed Lancewood - Horoeka",
		description: <>Tall stem with long saw tooth leaves. Bushes out with age. Hardy, avoid frost when young.</>,
		size: "3m x 1.5m, 8L, 10yrs",
		price: 25
	},
	{
		id: "l08",
		thumb: "/assets/img/plants/large/kowhai_thumb.jpg",
		image: "/assets/img/plants/large/kowhai.jpg",
		category: ['large',],
		title: "Sophora tetraptera",
		subtitle: "Kowhai",
		description: <>Well-known tree with distinctive yellow flowers through spring. Requires free draining, moisture-retentive soil sheltered from cold wind.</>,
		size: "4.5 x 3m",
		price: 4.75
	},
]

function getProductData(id) {
	let productData = productsArray.find((product) => product.id === id);

	if (productData === undefined) {
		return undefined;
	}

	return productData;
}

export { getProductData, productsArray };

