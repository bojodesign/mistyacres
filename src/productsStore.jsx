const productsArray = [
	{
		id: "1",
		thumb: "/assets/img/plants/karamu_thumb.jpg",
		image: "/assets/img/plants/karamu.jpg",
		category: ['small',],
		title: "Coprosma robusta",
		subtitle: "Karamu",
		description: <>Easily grown shrub. Glossy dark green leaves. Bright orange-red berries on female plants.</>,
		size: "2m x 1.5m",
		price: 4.00
	},
	{
		id: "2",
		thumb: "/assets/img/plants/tikouka_thumb.jpg",
		image: "/assets/img/plants/tikouka.jpg",
		category: ['small',],
		title: "Cordyline australis",
		subtitle: "Cabbage Tree - Ti Kouka",
		description: <>Hardy sword leaf type palm with tall trunk. Sprays of white flowers in late spring.</>,
		size: "6m x 2m",
		price: 4.00
	},
	{
		id: "3",
		thumb: "/assets/img/plants/akeake_thumb.jpg",
		image: "/assets/img/plants/akeake.jpg",
		category: ['small',],
		title: "Dodonaea viscosa",
		subtitle: "Ake Ake",
		description: <>Hardy green bushy large shrub. Excellent for hedges.</>,
		size: "7m x 2.5m",
		price: 4.00
	},
	{
		id: "4",
		thumb: "/assets/img/plants/pakeake_thumb.jpg",
		image: "/assets/img/plants/pakeake.jpg",
		category: ['small',],
		title: "Dodonaea viscosa purpurea",
		subtitle: "Purple Ake Ake",
		description: <>Hardy, fast growing bushy shrub or small tree. Purple/burgundy leaves. Great for hedges.</>,
		size: "6m x 2.5m",
		price: 4.00
	},
	{
		id: "5",
		thumb: "/assets/img/plants/kapuka_thumb.jpg",
		image: "/assets/img/plants/kapuka.jpg",
		category: ['small',],
		title: "Griselinia littoralis",
		subtitle: "Native Broadleaf - Kapuka",
		description: <>Glossy green, leathery leaves. Hardy shrub/small tree.</>,
		size: "3m x 2m",
		price: 4.00
	},
	{
		id: "6",
		thumb: "/assets/img/plants/kanuka_thumb.jpg",
		image: "/assets/img/plants/kanuka.jpg",
		category: ['small',],
		title: "Kunzea ericoides",
		subtitle: "Kanuka",
		description: <>Great for re-vegetation and can handle dry ground. Small leaves with bright white flowers.</>,
		size: "8m x 3m",
		price: 4.00
	},
	{
		id: "7",
		thumb: "/assets/img/plants/manuka_thumb.jpg",
		image: "/assets/img/plants/manuka.jpg",
		category: ['small',],
		title: "Leptospermum scoparium",
		subtitle: "Tea Tree - Manuka",
		description: <>Similar to Kanuka. Slightly larger leaves. Can handle moist soils.</>,
		size: "4m x 3m",
		price: 4.00
	},
	{
		id: "8",
		thumb: "/assets/img/plants/mountainflax_thumb.jpg",
		image: "/assets/img/plants/mountainflax.jpg",
		category: ['small',],
		title: "Phormium cookianum",
		subtitle: "Mountain Flax",
		description: <>Smaller growing flax than P. tenax. Good on hills, cliffs, dry areas.</>,
		size: "1m x 1m",
		price: 4.00
	},
	{
		id: "9",
		thumb: "/assets/img/plants/harakeke_thumb.jpg",
		image: "/assets/img/plants/harakeke.jpg",
		category: ['small',],
		title: "Phormium tenax",
		subtitle: "NZ Flax - Harakeke",
		description: <>Well-known plant with green sword leaves. Handles wet areas.</>,
		size: "2m x 2m",
		price: 4.00
	},
	{
		id: "10",
		thumb: "/assets/img/plants/tarata_thumb.jpg",
		image: "/assets/img/plants/tarata.jpg",
		category: ['small',],
		title: "Pittosporum eugenoides",
		subtitle: "Lemonwood - Tarata",
		description: <>Hardy, bushy trees with large light green leaves.</>,
		size: "5m x 3m",
		price: 4.00
	},
	{
		id: "11",
		thumb: "/assets/img/plants/kohuhu_thumb.jpg",
		image: "/assets/img/plants/kohuhu.jpg",
		category: ['small',],
		title: "Pittosporum tenuifolium",
		subtitle: "Kohuhu",
		description: <>Easily grown, hardy small leaf Pittosporum.</>,
		size: "5m x 3m",
		price: 4.00
	},
	{
		id: "12",
		thumb: "/assets/img/plants/fivefinger_thumb.jpg",
		image: "/assets/img/plants/fivefinger.jpg",
		category: ['small',],
		title: "Pseudopanax arboreus",
		subtitle: "Five Finger",
		description: <>Rapid growing dark green glossy leaves. Grows across centre of north island.</>,
		size: "3m x 1.5m",
		price: 4.00
	},
	{
		id: "13",
		thumb: "/assets/img/plants/pukio_thumb.jpg",
		image: "/assets/img/plants/pukio.jpg",
		category: ['small',],
		title: "Carex virgata",
		subtitle: "Pukio",
		description: <>Hardy large growing grass that can take wet or dry soils. Wind, frost, sun or shade.</>,
		size: "1m x 1m",
		price: 4.00
	},
	{
		id: "14",
		thumb: "/assets/img/plants/kowhai_thumb.jpg",
		image: "/assets/img/plants/kowhai.jpg",
		category: ['small',],
		title: "Sophora tetraptera",
		subtitle: "Kowhai",
		description: <>Well-known tree with distinctive yellow flowers through spring. Requires free draining, moisture-retentive soil sheltered from cold wind.</>,
		size: "4.5 x 3m",
		price: 4.00
	},
]

function getProductData(id) {
	let productData = productsArray.find((product) => product.id === id);

	if (productData === undefined) {
		return undefined;
	}

	return productData;
}

export { productsArray, getProductData };

