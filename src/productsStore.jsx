const productsArray = [
	// small plants
	{
		id: "s00",
		thumb: "/assets/img/plants/small/kiokio_thumb.jpg",
		image: "/assets/img/plants/small/kiokio.jpg",
		category: ['small'],
		title: "Blechnum novae-zelandiae",
		subtitle: "Kiokio",
		measure: "1m x 1.5m",
		description: <>Widely distributed common fern. Hardy fern that handles clay banks and also damp/wet areas. Red/bronze new growth.</>,
		price: 4.75
	},
	{
		id: "s01",
		thumb: "/assets/img/plants/small/pukio_thumb.jpg",
		image: "/assets/img/plants/small/pukio.jpg",
		category: ['small'],
		title: "Carex virgata",
		subtitle: "Pukio",
		measure: "1m x 1m",
		description: <>Hardy large growing grass that can take wet or dry soils. Wind, frost, sun or shade.</>,
		price: 4.75
	},
	{
		id: "s02",
		thumb: "/assets/img/plants/small/karamu_thumb.jpg",
		image: "/assets/img/plants/small/karamu.jpg",
		category: ['small'],
		title: "Coprosma robusta",
		subtitle: "Karamu",
		measure: "2m x 1.5m",
		description: <>Easily grown shrub. Glossy dark green leaves. Bright orange-red berries on female plants.</>,
		price: 4.75
	},
	{
		id: "s03",
		thumb: "/assets/img/plants/small/tikouka_thumb.jpg",
		image: "/assets/img/plants/small/tikouka.jpg",
		category: ['small'],
		title: "Cordyline australis",
		subtitle: "Cabbage Tree - Ti Kouka",
		measure: "6m x 2m",
		description: <>Hardy sword leaf type palm with tall trunk. Sprays of white flowers in late spring.</>,
		price: 4.75
	},
	{
		id: "s04",
		thumb: "/assets/img/plants/small/blueberry_thumb.jpg",
		image: "/assets/img/plants/small/blueberry.jpg",
		category: ['small'],
		title: "Dianella nigra",
		subtitle: "NZ Blueberry - Turutu",
		measure: "0.5m x 0.5m",
		description: <>Small soft sword leaf. Stunning iridescent purple berries in summer. Prefers shady sites until established. </>,
		price: 4.75
	},
	{
		id: "s05",
		thumb: "/assets/img/plants/small/akeake_thumb.jpg",
		image: "/assets/img/plants/small/akeake.jpg",
		category: ['small'],
		title: "Dodonaea viscosa",
		subtitle: "Ake Ake",
		measure: "7m x 2.5m",
		description: <>Hardy green bushy large shrub. Excellent for hedges.</>,
		price: 4.75
	},
	{
		id: "s06",
		thumb: "/assets/img/plants/small/pakeake_thumb.jpg",
		image: "/assets/img/plants/small/pakeake.jpg",
		category: ['small'],
		title: "Dodonaea viscosa purpurea",
		subtitle: "Purple Ake Ake",
		measure: "6m x 2.5m",
		description: <>Hardy, fast growing bushy shrub or small tree. Purple/burgundy leaves. Great for hedges.</>,
		price: 4.75
	},
	{
		id: "s07",
		thumb: "/assets/img/plants/small/kapuka_thumb.jpg",
		image: "/assets/img/plants/small/kapuka.jpg",
		category: ['small'],
		title: "Griselinia littoralis",
		subtitle: "Native Broadleaf - Kapuka",
		measure: "3m x 2m",
		description: <>Glossy green, leathery leaves. Hardy shrub/small tree.</>,
		price: 4.75
	},
	{
		id: "s08",
		thumb: "/assets/img/plants/small/kanuka_thumb.jpg",
		image: "/assets/img/plants/small/kanuka.jpg",
		category: ['small'],
		title: "Kunzea ericoides",
		subtitle: "Kanuka",
		measure: "8m x 3m",
		description: <>Great for re-vegetation and can handle dry ground. Small leaves with bright white flowers.</>,
		price: 4.75
	},
	{
		id: "s09",
		thumb: "/assets/img/plants/small/manuka_thumb.jpg",
		image: "/assets/img/plants/small/manuka.jpg",
		category: ['small'],
		title: "Leptospermum scoparium",
		subtitle: "Tea Tree - Manuka",
		measure: "4m x 3m",
		description: <>Similar to Kanuka. Slightly larger leaves. Can handle moist soils.</>,
		price: 4.75
	},
	{
		id: "s10",
		thumb: "/assets/img/plants/small/whiteywood_thumb.jpg",
		image: "/assets/img/plants/small/whiteywood.jpg",
		category: ['small'],
		title: "Melicytus ramiflorus",
		subtitle: "Whiteywood - Mahoe",
		measure: "8m x 2m",
		description: <>White bark and bushy, tall, leafy tree. Frost tender when young but hardier with age.</>,
		price: 4.75
	},
	{
		id: "s11",
		thumb: "/assets/img/plants/small/mountainflax_thumb.jpg",
		image: "/assets/img/plants/small/mountainflax.jpg",
		category: ['small'],
		title: "Phormium cookianum",
		subtitle: "Mountain Flax",
		measure: "1m x 1m",
		description: <>Smaller growing flax than P. tenax. Good on hills, cliffs, dry areas.</>,
		price: 4.75
	},
	{
		id: "s12",
		thumb: "/assets/img/plants/small/harakeke_thumb.jpg",
		image: "/assets/img/plants/small/harakeke.jpg",
		category: ['small'],
		title: "Phormium tenax",
		subtitle: "NZ Flax - Harakeke",
		measure: "2m x 2m",
		description: <>Well-known plant with green sword leaves. Handles wet areas.</>,
		price: 4.75
	},
	{
		id: "s13",
		thumb: "/assets/img/plants/small/tarata_thumb.jpg",
		image: "/assets/img/plants/small/tarata.jpg",
		category: ['small'],
		title: "Pittosporum eugenoides",
		subtitle: "Lemonwood - Tarata",
		measure: "5m x 3m",
		description: <>Hardy, bushy trees with large light green leaves.</>,
		price: 4.75
	},
	{
		id: "s14",
		thumb: "/assets/img/plants/small/kohuhu_thumb.jpg",
		image: "/assets/img/plants/small/kohuhu.jpg",
		category: ['small'],
		title: "Pittosporum tenuifolium",
		subtitle: "Kohuhu",
		measure: "5m x 3m",
		description: <>Easily grown, hardy small leaf Pittosporum.</>,
		price: 4.75
	},
	{
		id: "s15",
		thumb: "/assets/img/plants/small/manata_thumb.jpg",
		image: "/assets/img/plants/small/manata.jpg",
		category: ['small'],
		title: "Plagianthus regius",
		subtitle: "Ribbon Wood - Manata",
		measure: "12m x 4m",
		description: <>Medium tree with divaricating growth. Hardy and semi deciduous.</>,
		price: 4.75
	},
	{
		id: "s16",
		thumb: "/assets/img/plants/small/fivefinger_thumb.jpg",
		image: "/assets/img/plants/small/fivefinger.jpg",
		category: ['small'],
		title: "Pseudopanax arboreus",
		subtitle: "Five Finger",
		measure: "3m x 1.5m",
		description: <>Rapid growing dark green glossy leaves. Grows across centre of north island.</>,
		price: 4.75
	},
	{
		id: "s17",
		thumb: "/assets/img/plants/small/kowhai_thumb.jpg",
		image: "/assets/img/plants/small/kowhai.jpg",
		category: ['small'],
		title: "Sophora tetraptera",
		subtitle: "Kowhai",
		measure: "4.5 x 3m",
		description: <>Well-known tree with distinctive yellow flowers through spring. Requires free draining, moisture-retentive soil sheltered from cold wind.</>,
		price: 4.75
	},

	// large plants
	{
		id: "l00",
		thumb: "/assets/img/plants/large/tikouka_large_thumb.jpg",
		image: "/assets/img/plants/large/tikouka_large.jpg",
		category: ['large'],
		title: "Cordyline australis",
		subtitle: "Cabbage Tree - Ti Kouka",
		measure: "6m x 2m",
		description: <>Hardy sword leaf type palm with tall trunk. Sprays of white flowers in late spring.</>,
		size: "Pb18",
		availability: "",
		price: 25
	},
	{
		id: "l01",
		thumb: "/assets/img/plants/placeholder_thumb.jpg",
		image: "/assets/img/plants/placeholder.jpg",
		category: ['large'],
		title: "Dacrycarpus dacrydioides",
		subtitle: "White Pine - Kahikatea",
		measure: "7m x 4m",
		description: <>Tallest native tree after many years. Thrives on moist to wet soils.</>,
		size: "",
		availability: "",
		//price: 
	},
	{
		id: "l02",
		thumb: "/assets/img/plants/large/akeake_large_thumb.jpg",
		image: "/assets/img/plants/large/akeake_large.jpg",
		category: ['large'],
		title: "Dodonaea viscosa",
		subtitle: "Ake Ake",
		measure: "7m x 2.5m",
		description: <>Hardy green bushy large shrub. Excellent for hedges.</>,
		size: "Pb18",
		availability: "",
		price: 20
	},
	{
		id: "l03",
		thumb: "/assets/img/plants/large/pakeake_large_thumb.jpg",
		image: "/assets/img/plants/large/pakeake_large.jpg",
		category: ['large'],
		title: "Dodonaea viscosa purpurea",
		subtitle: "Purple Ake Ake",
		measure: "6m x 2.5m",
		description: <>Hardy, fast growing bushy shrub or small tree. Purple/burgundy leaves. Great for hedges.</>,
		size: "8L",
		availability: "",
		price: 20
	},
	{
		id: "l04",
		thumb: "/assets/img/plants/large/tarata_large_thumb.jpg",
		image: "/assets/img/plants/large/tarata_large.jpg",
		category: ['large'],
		title: "Pittosporum eugenoides",
		subtitle: "Lemonwood - Tarata",
		measure: "5m x 3m",
		description: <>Hardy, bushy trees with large light green leaves.</>,
		size: "Pb8",
		availability: "",
		price: 12
	},
	{
		id: "l05",
		thumb: "/assets/img/plants/large/fivefinger_large_thumb.jpg",
		image: "/assets/img/plants/large/fivefinger_large.jpg",
		category: ['large'],
		title: "Pseudopanax arboreus",
		subtitle: "Five Finger",
		measure: "3m x 1.5m",
		description: <>Rapid growing dark green glossy leaves. Grows across centre of north island.</>,
		size: "5L",
		availability: "",
		price: 12
	},
	{
		id: "l06",
		thumb: "/assets/img/plants/large/lancewood_thumb.jpg",
		image: "/assets/img/plants/large/lancewood.jpg",
		category: ['large'],
		title: "Pseudopanax crassifolius",
		subtitle: "Lancewood - Horoeka",
		measure: "4m x 1m",
		description: <>Tall stem with long serrated leaves until older when they become leathery and bushy. Hardy; avoid frost when young.</>,
		size: "8L",
		availability: "Available Spring 2025",
		price: 40
	},
	{
		id: "l07",
		thumb: "/assets/img/plants/large/toothedlancewood_thumb.jpg",
		image: "/assets/img/plants/large/toothedlancewood.jpg",
		category: ['large'],
		title: "Pseudopanax ferox",
		subtitle: "Toothed Lancewood - Horoeka",
		measure: "3m x 1.5m",
		description: <>Tall stem with long saw tooth leaves. Bushes out with age. Hardy, avoid frost when young.</>,
		size: "8L",
		availability: "Available Spring 2025",
		price: 40
	},
	{
		id: "l08",
		thumb: "/assets/img/plants/large/kowhai_large_thumb.jpg",
		image: "/assets/img/plants/large/kowhai_large.jpg",
		category: ['large'],
		title: "Sophora tetraptera",
		subtitle: "Kowhai",
		measure: "4.5 x 3m",
		description: <>Well-known tree with distinctive yellow flowers through spring. Requires free draining, moisture-retentive soil sheltered from cold wind.</>,
		size: "",
		availability: "Available Spring 2025",
		price: 30
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

