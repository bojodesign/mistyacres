const productsArray = [
	// small plants
	{
		id: "s00",
		thumb: "/assets/img/plants/small/oioi_thumb.jpg",
		image: "/assets/img/plants/small/oioi.jpg",
		category: ['small'],
		title: "Apodasmia similis",
		subtitle: "Oioi",
		measure: "1m x 1m",
		description: <>Very hardy. Green/grey reed. Can tolerate some dry but thrives in wet or even coastal.</>
	},
	{
		id: "s01",
		thumb: "/assets/img/plants/small/kiokio_thumb.jpg",
		image: "/assets/img/plants/small/kiokio.jpg",
		category: [''],
		title: "Blechnum novae-zelandiae",
		subtitle: "Kiokio",
		measure: "1m x 1.5m",
		description: <>Widely distributed common fern. Hardy fern that handles clay banks and also damp/wet areas. Red/bronze new growth.</>
	},
	{
		id: "s02",
		thumb: "/assets/img/plants/small/buchanan_thumb.jpg",
		image: "/assets/img/plants/small/buchanan.jpg",
		category: ['small'],
		title: "Carex buchananii",
		subtitle: "Buchanan’s Sedge - Cutty Grass",
		measure: "0.6m x 0.4m",
		description: <>Hardy reddish/brown upright growth. Suits well drained conditions.</>
	},
	{
		id: "s03",
		thumb: "/assets/img/plants/small/purei_thumb.jpg",
		image: "/assets/img/plants/small/purei.jpg",
		category: ['small'],
		title: "Carex secta",
		subtitle: "Purei",
		measure: "1.5m x 1.5m",
		description: <>Hardy fast growing grass that can take wet or dry soils. Wind, frost, sun or shade. Can grows in wet areas.</>
	},
	{
		id: "s04",
		thumb: "/assets/img/plants/small/speckled_thumb.jpg",
		image: "/assets/img/plants/small/speckled.jpg",
		category: ['small'],
		title: "Carex testacea",
		subtitle: "Speckled Sedge - Trip Me Up",
		measure: "0.6m x 0.6m",
		description: <>Hardy grass. Orange growth especially in full sun.</>
	},
	{
		id: "s05",
		thumb: "/assets/img/plants/small/pukio_thumb.jpg",
		image: "/assets/img/plants/small/pukio.jpg",
		category: ['small'],
		title: "Carex virgata",
		subtitle: "Swamp Sedge - Pukio",
		measure: "1m x 1m",
		description: <>Hardy large growing grass that can take wet or dry soils. Wind, frost, sun or shade.</>
	},
	{
		id: "s06",
		thumb: "/assets/img/plants/small/kakabeak_thumb.jpg",
		image: "/assets/img/plants/small/kakabeak.jpg",
		category: ['small'],
		title: "Clianthus puniceus",
		subtitle: "Red Kakabeak",
		measure: "3m x 3m",
		description: <>A fantastic large shrub red flowering through spring. Sun or partial shade.</>
	},
	{
		id: "s07",
		thumb: "/assets/img/plants/small/wkakabeak_thumb.jpg",
		image: "/assets/img/plants/small/wkakabeak.jpg",
		category: ['small'],
		title: "Clianthus puniceus albus",
		subtitle: "White Kakabeak",
		measure: "3m x 3m",
		description: <>A fantastic large shrub white flowering through spring. Sun or partial shade.</>
	},
	{
		id: "s08",
		thumb: "/assets/img/plants/small/kanono_thumb.jpg",
		image: "/assets/img/plants/small/kanono.jpg",
		category: ['small'],
		title: "Coprosma grandiflora",
		subtitle: "Kanono",
		measure: "6m x 3m",
		description: <>Broad leaf. Great in a bush or shady position. Red/orange berries.</>
	},
	{
		id: "s09",
		thumb: "/assets/img/plants/small/skaramu_thumb.jpg",
		image: "/assets/img/plants/small/skaramu.jpg",
		category: ['small'],
		title: "Coprosma lucida",
		subtitle: "Shiny Karamu",
		measure: "4m x 2m",
		description: <>Hardy glossy green leaves with orange hanging berries.</>
	},
	{
		id: "s10",
		thumb: "/assets/img/plants/small/karamu_thumb.jpg",
		image: "/assets/img/plants/small/karamu.jpg",
		category: ['small'],
		title: "Coprosma robusta",
		subtitle: "Karamu",
		measure: "2m x 1.5m",
		description: <>Easily grown shrub. Glossy dark green leaves. Bright orange-red berries on female plants.</>
	},
	{
		id: "s11",
		thumb: "/assets/img/plants/small/tikouka_thumb.jpg",
		image: "/assets/img/plants/small/tikouka.jpg",
		category: ['small'],
		title: "Cordyline australis",
		subtitle: "Cabbage Tree - Ti Kouka",
		measure: "6m x 2m",
		description: <>Hardy sword leaf type palm with tall trunk. Sprays of white flowers in late spring.</>
	},
	{
		id: "s12",
		thumb: "/assets/img/plants/small/blueberry_thumb.jpg",
		image: "/assets/img/plants/small/blueberry.jpg",
		category: ['small'],
		title: "Dianella nigra",
		subtitle: "NZ Blueberry - Turutu",
		measure: "0.5m x 0.5m",
		description: <>Small soft sword leaf. Stunning iridescent purple berries in summer. Prefers shady sites until established. </>
	},
	{
		id: "s13",
		thumb: "/assets/img/plants/small/akeake_thumb.jpg",
		image: "/assets/img/plants/small/akeake.jpg",
		category: ['small'],
		title: "Dodonaea viscosa",
		subtitle: "Ake Ake",
		measure: "7m x 2.5m",
		description: <>Hardy green bushy large shrub. Excellent for hedges.</>
	},
	{
		id: "s14",
		thumb: "/assets/img/plants/small/pakeake_thumb.jpg",
		image: "/assets/img/plants/small/pakeake.jpg",
		category: ['small'],
		title: "Dodonaea viscosa purpurea",
		subtitle: "Purple Ake Ake",
		measure: "6m x 2.5m",
		description: <>Hardy, fast growing bushy shrub or small tree. Purple/burgundy leaves. Great for hedges.</>
	},
	{
		id: "s15",
		thumb: "/assets/img/plants/small/fuchsia_thumb.jpg",
		image: "/assets/img/plants/small/fuchsia.jpg",
		category: ['small'],
		title: "Fuchsia excorticata",
		subtitle: "Tree Fuchsia - Kotukutuku",
		measure: "7m x 6m",
		description: <>Deciduous tree. Great for nectar loving birds with its purple flowers from August to December.</>
	},
	{
		id: "s16",
		thumb: "/assets/img/plants/small/kapuka_thumb.jpg",
		image: "/assets/img/plants/small/kapuka.jpg",
		category: ['small'],
		title: "Griselinia littoralis",
		subtitle: "Native Broadleaf - Kapuka",
		measure: "3m x 2m",
		description: <>Glossy green, leathery leaves. Hardy shrub/small tree.</>
	},
	{
		id: "s17",
		thumb: "/assets/img/plants/small/koromiko_thumb.jpg",
		image: "/assets/img/plants/small/koromiko.jpg",
		category: ['small'],
		title: "Hebe stricta",
		subtitle: "Koromiko",
		measure: "2m x 2m",
		description: <>Full sun, free draining site. Long white flower heads attracting bees.</>
	},
	{
		id: "s18",
		thumb: "/assets/img/plants/small/kanuka_thumb.jpg",
		image: "/assets/img/plants/small/kanuka.jpg",
		category: ['small'],
		title: "Kunzea ericoides",
		subtitle: "Kanuka",
		measure: "8m x 3m",
		description: <>Great for re-vegetation and can handle dry ground. Small leaves with bright white flowers.</>
	},
	{
		id: "s19",
		thumb: "/assets/img/plants/small/manuka_thumb.jpg",
		image: "/assets/img/plants/small/manuka.jpg",
		category: ['small'],
		title: "Leptospermum scoparium",
		subtitle: "Tea Tree - Manuka",
		measure: "4m x 3m",
		description: <>Similar to Kanuka. Slightly larger leaves. Can handle moist soils.</>
	},
	{
		id: "s20",
		thumb: "/assets/img/plants/small/whiteywood_thumb.jpg",
		image: "/assets/img/plants/small/whiteywood.jpg",
		category: ['small'],
		title: "Melicytus ramiflorus",
		subtitle: "Whiteywood - Mahoe",
		measure: "8m x 2m",
		description: <>White bark and bushy, tall, leafy tree. Frost tender when young but hardier with age.</>
	},
	{
		id: "s21",
		thumb: "/assets/img/plants/small/mountainflax_thumb.jpg",
		image: "/assets/img/plants/small/mountainflax.jpg",
		category: ['small'],
		title: "Phormium cookianum",
		subtitle: "Mountain Flax",
		measure: "1m x 1m",
		description: <>Smaller growing flax than P. tenax. Good on hills, cliffs, dry areas.</>
	},
	{
		id: "s22",
		thumb: "/assets/img/plants/small/harakeke_thumb.jpg",
		image: "/assets/img/plants/small/harakeke.jpg",
		category: ['small'],
		title: "Phormium tenax",
		subtitle: "NZ Flax - Harakeke",
		measure: "2m x 2m",
		description: <>Well-known plant with green sword leaves. Handles wet areas.</>
	},
	{
		id: "s23",
		thumb: "/assets/img/plants/small/tarata_thumb.jpg",
		image: "/assets/img/plants/small/tarata.jpg",
		category: ['small'],
		title: "Pittosporum eugenoides",
		subtitle: "Lemonwood - Tarata",
		measure: "5m x 3m",
		description: <>Hardy, bushy trees with large light green leaves.</>
	},
	{
		id: "s24",
		thumb: "/assets/img/plants/small/kohuhu_thumb.jpg",
		image: "/assets/img/plants/small/kohuhu.jpg",
		category: ['small'],
		title: "Pittosporum tenuifolium",
		subtitle: "Kohuhu",
		measure: "5m x 3m",
		description: <>Easily grown, hardy small leaf Pittosporum.</>
	},
	{
		id: "s25",
		thumb: "/assets/img/plants/small/manata_thumb.jpg",
		image: "/assets/img/plants/small/manata.jpg",
		category: ['small'],
		title: "Plagianthus regius",
		subtitle: "Ribbon Wood - Manata",
		measure: "12m x 4m",
		description: <>Medium tree with divaricating growth. Hardy and semi deciduous.</>
	},
	{
		id: "s26",
		thumb: "/assets/img/plants/small/fivefinger_thumb.jpg",
		image: "/assets/img/plants/small/fivefinger.jpg",
		category: [''],
		title: "Pseudopanax arboreus",
		subtitle: "Five Finger",
		measure: "3m x 1.5m",
		description: <>Rapid growing dark green glossy leaves. Grows across centre of north island.</>
	},
	{
		id: "s27",
		thumb: "/assets/img/plants/small/kowhai_thumb.jpg",
		image: "/assets/img/plants/small/kowhai.jpg",
		category: [''],
		title: "Sophora tetraptera",
		subtitle: "Kowhai",
		measure: "4.5 x 3m",
		description: <>Well-known tree with distinctive yellow flowers through spring. Requires free draining, moisture-retentive soil sheltered from cold wind.</>
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
		availability: ""
	},
	{
		id: "l01",
		thumb: "/assets/img/plants/large/kahikatea_thumb.jpg",
		image: "/assets/img/plants/large/kahikatea.jpg",
		category: ['large'],
		title: "Dacrycarpus dacrydioides",
		subtitle: "White Pine - Kahikatea",
		measure: "7m x 4m",
		description: <>Tallest native tree after many years. Thrives on moist to wet soils.</>,
		size: "",
		availability: ""
	},
	{
		id: "l02",
		thumb: "/assets/img/plants/placeholder_thumb.jpg",
		image: "/assets/img/plants/placeholder.jpg",
		category: ['large'],
		title: "Dacrydium cupressinum",
		subtitle: "Red Pine - Rimu",
		measure: "60m+",
		description: <>Well-known large native tree.</>,
		size: "",
		availability: ""
	},
	{
		id: "l03",
		thumb: "/assets/img/plants/large/akeake_large_thumb.jpg",
		image: "/assets/img/plants/large/akeake_large.jpg",
		category: [''],
		title: "Dodonaea viscosa",
		subtitle: "Ake Ake",
		measure: "7m x 2.5m",
		description: <>Hardy green bushy large shrub. Excellent for hedges.</>,
		size: "Pb18",
		availability: ""
	},
	{
		id: "l04",
		thumb: "/assets/img/plants/large/pakeake_large_thumb.jpg",
		image: "/assets/img/plants/large/pakeake_large.jpg",
		category: [''],
		title: "Dodonaea viscosa purpurea",
		subtitle: "Purple Ake Ake",
		measure: "6m x 2.5m",
		description: <>Hardy, fast growing bushy shrub or small tree. Purple/burgundy leaves. Great for hedges.</>,
		size: "8L",
		availability: ""
	},
	{
		id: "l05",
		thumb: "/assets/img/plants/large/rewarewa_thumb.jpg",
		image: "/assets/img/plants/large/rewarewa.jpg",
		category: ['large'],
		title: "Knightia excelsa",
		subtitle: "NZ Honeysuckle - Rewarewa",
		measure: "30m",
		description: <>Tall cylindrical tree. Reddish/brown spiky flower heads. Jagged leathery leaves.</>,
		size: "",
		availability: ""
	},
	{
		id: "l06",
		thumb: "/assets/img/plants/large/kawaka_thumb.jpg",
		image: "/assets/img/plants/large/kawaka.jpg",
		category: ['large'],
		title: "Libocedrus plumosa",
		subtitle: "NZ Cedar - Kawaka",
		measure: "35m x 3m",
		description: <>When young, is a pyramidal-shaped evergreen conifer, maturing to a rounded shape.</>,
		size: "",
		availability: ""
	},
	{
		id: "l07",
		thumb: "/assets/img/plants/large/tarata_large_thumb.jpg",
		image: "/assets/img/plants/large/tarata_large.jpg",
		category: ['large'],
		title: "Pittosporum eugenoides",
		subtitle: "Lemonwood - Tarata",
		measure: "5m x 3m",
		description: <>Hardy, bushy trees with large light green leaves.</>,
		size: "Pb8",
		availability: ""
	},
	{
		id: "l08",
		thumb: "/assets/img/plants/large/manata_large_thumb.jpg",
		image: "/assets/img/plants/large/manata_large.jpg",
		category: ['large'],
		title: "Plagianthus regius",
		subtitle: "Ribbon Wood - Manata",
		measure: "12m x 4m",
		description: <>Medium tree with divaricating growth. Hardy and semi deciduous.</>,
		size: "",
		availability: ""
	},
	{
		id: "l09",
		thumb: "/assets/img/plants/large/totara_thumb.jpg",
		image: "/assets/img/plants/large/totara.jpg",
		category: ['large'],
		title: "Podocarpus totara",
		subtitle: "Totara",
		measure: "15m+",
		description: <>Large well-known native tree.</>
	},
	{
		id: "l10",
		thumb: "/assets/img/plants/large/matai_thumb.jpg",
		image: "/assets/img/plants/large/matai.jpg",
		category: ['large'],
		title: "Prumnopitys taxifolia",
		subtitle: "Black Pine - Matai",
		measure: "30m",
		description: <>Large native tree. Divaricating branches with few leaves when juvenile.</>,
		size: "",
		availability: ""
	},
	{
		id: "l11",
		thumb: "/assets/img/plants/large/fivefinger_large_thumb.jpg",
		image: "/assets/img/plants/large/fivefinger_large.jpg",
		category: ['large'],
		title: "Pseudopanax arboreus",
		subtitle: "Five Finger",
		measure: "3m x 1.5m",
		description: <>Rapid growing dark green glossy leaves. Grows across centre of north island.</>,
		size: "5L",
		availability: ""
	},
	{
		id: "l12",
		thumb: "/assets/img/plants/large/lancewood_thumb.jpg",
		image: "/assets/img/plants/large/lancewood.jpg",
		category: ['large'],
		title: "Pseudopanax crassifolius",
		subtitle: "Lancewood - Horoeka",
		measure: "4m x 1m",
		description: <>Tall stem with long serrated leaves until older when they become leathery and bushy. Hardy; avoid frost when young.</>,
		size: "8L",
		availability: "Available Spring 2025"
	},
	{
		id: "l13",
		thumb: "/assets/img/plants/large/toothedlancewood_thumb.jpg",
		image: "/assets/img/plants/large/toothedlancewood.jpg",
		category: [''],
		title: "Pseudopanax ferox",
		subtitle: "Toothed Lancewood - Horoeka",
		measure: "3m x 1.5m",
		description: <>Tall stem with long saw tooth leaves. Bushes out with age. Hardy, avoid frost when young.</>,
		size: "8L",
		availability: "Available Spring 2025"
	},
	{
		id: "l14",
		thumb: "/assets/img/plants/large/kowhai_large_thumb.jpg",
		image: "/assets/img/plants/large/kowhai_large.jpg",
		category: ['large'],
		title: "Sophora tetraptera",
		subtitle: "Kowhai",
		measure: "4.5 x 3m",
		description: <>Well-known tree with distinctive yellow flowers through spring. Requires free draining, moisture-retentive soil sheltered from cold wind.</>,
		size: "",
		availability: "Available Spring 2025"
	},
	// exotic plants
	{
		id: "e00",
		thumb: "/assets/img/plants/exotic/silverbirch_thumb.jpg",
		image: "/assets/img/plants/exotic/silverbirch.jpg",
		category: ['exotic'],
		title: "Betula pendula",
		subtitle: "Silver Birch",
		measure: "8m x 4m",
		description: <>With a distinctive white trunk and elegant, drooping young stems. Its glossy green leaves turn yellow during the autumn season. Deciduous.</>
	},
	{
		id: "e01",
		thumb: "/assets/img/plants/exotic/magnolia_thumb.jpg",
		image: "/assets/img/plants/exotic/magnolia.jpg",
		category: ['exotic'],
		title: "Magnolia sieboldii",
		subtitle: "Oyama Magnolia",
		measure: "4m x 3m",
		description: <>A bushy, small tree. Lovely small cup-shaped white flowers with crimson and yellow centre in late spring. Red seedpods in summer. Deciduous.</>
	},
];

function getProductData(id) {
	let productData = productsArray.find((product) => product.id === id);

	if (productData === undefined) {
		return undefined;
	}

	return productData;
}

export { getProductData, productsArray };

