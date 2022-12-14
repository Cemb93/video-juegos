let filter_genres = [
  {
    id: "85f3a185-5104-4fd5-8660-0a2dd99c53e4",
    name: "PROBANDO PLATAFORMAS DOS",
    description: "PRUEBA DE PLATAFORMAS",
    released: "2013-09-17",
    rating: 3.33,
    platforms: [],
    image: null,
    createdInDb: true,
    generos: [],
  },
  {
    id: 3498,
    name: "Grand Theft Auto V",
    released: "2013-09-17",
    image:
      "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    rating: 4.47,
    platforms: [
      "PC",
      "Xbox Series S/X",
      "PlayStation 4",
      "PlayStation 3",
      "Xbox 360",
      "Xbox One",
      "PlayStation 5",
    ],
    genres: ["Action", "Adventure"],
  },
  {
    id: 3328,
    name: "The Witcher 3: Wild Hunt",
    released: "2015-05-18",
    image:
      "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    rating: 4.67,
    platforms: [
      "Nintendo Switch",
      "PlayStation 5",
      "Xbox Series S/X",
      "Xbox One",
      "PC",
      "PlayStation 4",
    ],
    genres: ["Action", "Adventure", "RPG"],
  },
  {
    id: 4200,
    name: "Portal 2",
    released: "2011-04-18",
    image:
      "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    rating: 4.61,
    platforms: [
      "Xbox 360",
      "Linux",
      "macOS",
      "PlayStation 3",
      "PC",
      "Xbox One",
    ],
    genres: ["Shooter", "Puzzle"],
  },
  {
    id: 5286,
    name: "Tomb Raider (2013)",
    released: "2013-03-05",
    image:
      "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    rating: 4.06,
    platforms: [
      "PlayStation 4",
      "macOS",
      "PC",
      "Xbox One",
      "Xbox 360",
      "PlayStation 3",
    ],
    genres: ["Action", "Adventure"],
  },
  {
    id: 4291,
    name: "Counter-Strike: Global Offensive",
    released: "2012-08-21",
    image:
      "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    rating: 3.57,
    platforms: ["PC", "Xbox 360", "PlayStation 3"],
    genres: ["Action", "Shooter"],
  },
  {
    id: 5679,
    name: "The Elder Scrolls V: Skyrim",
    released: "2011-11-11",
    image:
      "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    rating: 4.42,
    platforms: ["PC", "Nintendo Switch", "Xbox 360", "PlayStation 3"],
    genres: ["Action", "RPG"],
  },
  {
    id: 12020,
    name: "Left 4 Dead 2",
    released: "2009-11-17",
    image:
      "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    rating: 4.08,
    platforms: ["macOS", "Linux", "PC", "Xbox 360"],
    genres: ["Action", "Shooter"],
  },
  {
    id: 13536,
    name: "Portal",
    released: "2007-10-09",
    image:
      "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    rating: 4.51,
    platforms: ["PC", "macOS", "Linux", "Xbox 360", "PlayStation 3", "Android"],
    genres: ["Adventure", "Puzzle"],
  },
  {
    id: 4062,
    name: "BioShock Infinite",
    released: "2013-03-26",
    image:
      "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    rating: 4.39,
    platforms: [
      "PlayStation 4",
      "Xbox 360",
      "Nintendo Switch",
      "Linux",
      "PC",
      "PlayStation 3",
      "Xbox One",
    ],
    genres: ["Action", "Shooter"],
  },
  {
    id: 3439,
    name: "Life is Strange",
    released: "2015-01-29",
    image:
      "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    rating: 4.11,
    platforms: [
      "PC",
      "Linux",
      "PlayStation 3",
      "macOS",
      "iOS",
      "Xbox 360",
      "Android",
      "PlayStation 4",
      "Xbox One",
    ],
    genres: ["Adventure"],
  },
  {
    id: 802,
    name: "Borderlands 2",
    released: "2012-09-18",
    image:
      "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
    rating: 4.03,
    platforms: [
      "PlayStation 4",
      "Xbox 360",
      "PlayStation 3",
      "PC",
      "Xbox One",
      "macOS",
    ],
    genres: ["Action", "Shooter", "RPG"],
  },
  {
    id: 28,
    name: "Red Dead Redemption 2",
    released: "2018-10-26",
    image:
      "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    rating: 4.59,
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    genres: ["Action", "Adventure"],
  },
  {
    id: 13537,
    name: "Half-Life 2",
    released: "2004-11-16",
    image:
      "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
    rating: 4.5,
    platforms: ["PC", "Xbox 360", "Linux", "Xbox", "Android", "macOS"],
    genres: ["Action", "Shooter"],
  },
  {
    id: 4286,
    name: "BioShock",
    released: "2007-08-21",
    image:
      "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
    rating: 4.37,
    platforms: [
      "Xbox 360",
      "PlayStation 3",
      "iOS",
      "Nintendo Switch",
      "Xbox One",
      "PC",
      "macOS",
      "PlayStation 4",
    ],
    genres: ["Action", "Shooter"],
  },
  {
    id: 1030,
    name: "Limbo",
    released: "2010-07-21",
    image:
      "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    rating: 4.16,
    platforms: [
      "Linux",
      "PS Vita",
      "Android",
      "Xbox One",
      "Nintendo Switch",
      "iOS",
      "PC",
      "macOS",
      "Xbox 360",
      "PlayStation 3",
      "PlayStation 4",
    ],
    genres: ["Adventure", "Indie", "Puzzle", "Platformer"],
  },
  {
    id: 2454,
    name: "DOOM (2016)",
    released: "2016-05-13",
    image:
      "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
    rating: 4.39,
    platforms: ["Xbox One", "PC", "Nintendo Switch", "PlayStation 4"],
    genres: ["Action", "Shooter"],
  },
  {
    id: 3070,
    name: "Fallout 4",
    released: "2015-11-09",
    image:
      "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    rating: 3.79,
    platforms: ["Xbox One", "PC", "PlayStation 4"],
    genres: ["Action", "RPG"],
  },
  {
    id: 32,
    name: "Destiny 2",
    released: "2017-09-06",
    image:
      "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
    rating: 3.56,
    platforms: [
      "Xbox One",
      "PC",
      "PlayStation 4",
      "Web",
      "Xbox Series S/X",
      "PlayStation 5",
    ],
    genres: ["Action", "Shooter", "Adventure", "Massively Multiplayer"],
  },
  {
    id: 58175,
    name: "God of War",
    released: "2018-04-20",
    image:
      "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    rating: 4.59,
    platforms: ["PlayStation 5", "PlayStation 4", "PC"],
    genres: ["Action", "Adventure", "RPG"],
  },
  {
    id: 11859,
    name: "Team Fortress 2",
    released: "2007-10-10",
    image:
      "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
    rating: 3.66,
    platforms: ["PC", "macOS", "Linux"],
    genres: ["Action", "Shooter"],
  },
];
const filtros = filter_genres.filter(el => el.genres && el.genres.includes('Action'));
console.log('MIS FILTROS:', filtros)