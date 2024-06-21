const productsArray = [
	// small plants
	{
		id: "s00",
		thumb: "/assets/img/plants/kiokio_thumb.jpg",
		image: "/assets/img/plants/kiokio.jpg",
		category: ['small'],
		title: "Blechnum novae-zelandiae",
		subtitle: "Kiokio",
		measure: "1m x 1.5m",
		description: <>Widely distributed common fern. Hardy fern that handles clay banks and also damp/wet areas. Red/bronze new growth.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s01",
		thumb: "/assets/img/plants/pukio_thumb.jpg",
		image: "/assets/img/plants/pukio.jpg",
		category: ['small'],
		title: "Carex virgata",
		subtitle: "Pukio",
		measure: "1m x 1m",
		description: <>Hardy large growing grass that can take wet or dry soils. Wind, frost, sun or shade.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s02",
		thumb: "/assets/img/plants/karamu_thumb.jpg",
		image: "/assets/img/plants/karamu.jpg",
		category: ['small'],
		title: "Coprosma robusta",
		subtitle: "Karamu",
		measure: "2m x 1.5m",
		description: <>Easily grown shrub. Glossy dark green leaves. Bright orange-red berries on female plants.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s03",
		thumb: "/assets/img/plants/tikouka_thumb.jpg",
		image: "/assets/img/plants/tikouka.jpg",
		category: ['small'],
		title: "Cordyline australis",
		subtitle: "Cabbage Tree - Ti Kouka",
		measure: "6m x 2m",
		description: <>Hardy sword leaf type palm with tall trunk. Sprays of white flowers in late spring.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s04",
		thumb: "/assets/img/plants/blueberry_thumb.jpg",
		image: "/assets/img/plants/blueberry.jpg",
		category: ['small'],
		title: "Dianella nigra",
		subtitle: "NZ Blueberry - Turutu",
		measure: "0.5m x 0.5m",
		description: <>Small soft sword leaf. Stunning iridescent purple berries in summer. Prefers shady sites until established. </>,
		size: "",
		price: 4.75
	},
	{
		id: "s05",
		thumb: "/assets/img/plants/akeake_thumb.jpg",
		image: "/assets/img/plants/akeake.jpg",
		category: ['small'],
		title: "Dodonaea viscosa",
		subtitle: "Ake Ake",
		measure: "7m x 2.5m",
		description: <>Hardy green bushy large shrub. Excellent for hedges.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s06",
		thumb: "/assets/img/plants/pakeake_thumb.jpg",
		image: "/assets/img/plants/pakeake.jpg",
		category: ['small'],
		title: "Dodonaea viscosa purpurea",
		subtitle: "Purple Ake Ake",
		measure: "6m x 2.5m",
		description: <>Hardy, fast growing bushy shrub or small tree. Purple/burgundy leaves. Great for hedges.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s07",
		thumb: "/assets/img/plants/kapuka_thumb.jpg",
		image: "/assets/img/plants/kapuka.jpg",
		category: ['small'],
		title: "Griselinia littoralis",
		subtitle: "Native Broadleaf - Kapuka",
		measure: "3m x 2m",
		description: <>Glossy green, leathery leaves. Hardy shrub/small tree.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s08",
		thumb: "/assets/img/plants/kanuka_thumb.jpg",
		image: "/assets/img/plants/kanuka.jpg",
		category: ['small'],
		title: "Kunzea ericoides",
		subtitle: "Kanuka",
		measure: "8m x 3m",
		description: <>Great for re-vegetation and can handle dry ground. Small leaves with bright white flowers.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s09",
		thumb: "/assets/img/plants/manuka_thumb.jpg",
		image: "/assets/img/plants/manuka.jpg",
		category: ['small'],
		title: "Leptospermum scoparium",
		subtitle: "Tea Tree - Manuka",
		measure: "4m x 3m",
		description: <>Similar to Kanuka. Slightly larger leaves. Can handle moist soils.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s10",
		thumb: "/assets/img/plants/whiteywood_thumb.jpg",
		image: "/assets/img/plants/whiteywood.jpg",
		category: ['small'],
		title: "Melicytus ramiflorus",
		subtitle: "Whiteywood - Mahoe",
		measure: "8m x 2m",
		description: <>White bark and bushy, tall, leafy tree. Frost tender when young but hardier with age.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s11",
		thumb: "/assets/img/plants/mountainflax_thumb.jpg",
		image: "/assets/img/plants/mountainflax.jpg",
		category: ['small'],
		title: "Phormium cookianum",
		subtitle: "Mountain Flax",
		measure: "1m x 1m",
		description: <>Smaller growing flax than P. tenax. Good on hills, cliffs, dry areas.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s12",
		thumb: "/assets/img/plants/harakeke_thumb.jpg",
		image: "/assets/img/plants/harakeke.jpg",
		category: ['small'],
		title: "Phormium tenax",
		subtitle: "NZ Flax - Harakeke",
		measure: "2m x 2m",
		description: <>Well-known plant with green sword leaves. Handles wet areas.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s13",
		thumb: "/assets/img/plants/tarata_thumb.jpg",
		image: "/assets/img/plants/tarata.jpg",
		category: ['small'],
		title: "Pittosporum eugenoides",
		subtitle: "Lemonwood - Tarata",
		measure: "5m x 3m",
		description: <>Hardy, bushy trees with large light green leaves.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s14",
		thumb: "/assets/img/plants/kohuhu_thumb.jpg",
		image: "/assets/img/plants/kohuhu.jpg",
		category: ['small'],
		title: "Pittosporum tenuifolium",
		subtitle: "Kohuhu",
		measure: "5m x 3m",
		description: <>Easily grown, hardy small leaf Pittosporum.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s15",
		thumb: "/assets/img/plants/manata_thumb.jpg",
		image: "/assets/img/plants/manata.jpg",
		category: ['small'],
		title: "Plagianthus regius",
		subtitle: "Ribbon Wood - Manata",
		measure: "12m x 4m",
		description: <>Medium tree with divaricating growth. Hardy and semi deciduous.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s16",
		thumb: "/assets/img/plants/fivefinger_thumb.jpg",
		image: "/assets/img/plants/fivefinger.jpg",
		category: ['small'],
		title: "Pseudopanax arboreus",
		subtitle: "Five Finger",
		measure: "3m x 1.5m",
		description: <>Rapid growing dark green glossy leaves. Grows across centre of north island.</>,
		size: "",
		price: 4.75
	},
	{
		id: "s17",
		thumb: "/assets/img/plants/kowhai_thumb.jpg",
		image: "/assets/img/plants/kowhai.jpg",
		category: ['small'],
		title: "Sophora tetraptera",
		subtitle: "Kowhai",
		measure: "4.5 x 3m",
		description: <>Well-known tree with distinctive yellow flowers through spring. Requires free draining, moisture-retentive soil sheltered from cold wind.</>,
		size: "",
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
		price: 15
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
		// price: 15
	},
	{
		id: "l02",
		thumb: "/assets/img/plants/large/akeake_thumb.jpg",
		image: "/assets/img/plants/large/akeake.jpg",
		category: ['large'],
		title: "Dodonaea viscosa",
		subtitle: "Ake Ake",
		measure: "7m x 2.5m",
		description: <>Hardy green bushy large shrub. Excellent for hedges.</>,
		size: "Pb18",
		price: 15
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
		price: 15
	},
	{
		id: "l04",
		thumb: "/assets/img/plants/large/tarata_thumb.jpg",
		image: "/assets/img/plants/large/tarata.jpg",
		category: ['large'],
		title: "Pittosporum eugenoides",
		subtitle: "Lemonwood - Tarata",
		measure: "5m x 3m",
		description: <>Hardy, bushy trees with large light green leaves.</>,
		size: "Pb8",
		price: 10
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
		price: 25
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
		price: 25
	},
	{
		id: "l08",
		thumb: "/assets/img/plants/large/kowhai_thumb.jpg",
		image: "/assets/img/plants/large/kowhai.jpg",
		category: ['large'],
		title: "Sophora tetraptera",
		subtitle: "Kowhai",
		measure: "4.5 x 3m",
		description: <>Well-known tree with distinctive yellow flowers through spring. Requires free draining, moisture-retentive soil sheltered from cold wind.</>,
		size: "",
		// price: 15
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

