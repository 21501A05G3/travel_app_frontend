import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address:'London SW1A 2JH, UK',
    price: 99,
    maxGroupSize: 10,
    desc: "Westminster Bridge, situated in London SW1A 2JH, UK, is an iconic landmark encapsulating centuries of history. Spanning the River Thames, its elegant arches and ornate lampposts create a timeless charm. The bridge offers breathtaking panoramic views of London's skyline, with the majestic Big Ben and the Houses of Parliament in the backdrop. The hustle and bustle of pedestrians, cyclists, and vehicles add vibrancy to its ambiance, echoing the city's dynamic energy. As one of London's oldest river crossings, Westminster Bridge stands as a testament to architectural brilliance and remains a symbol of the city's rich heritage and cultural significance.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
      {
        name: "Lia Franklin",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address:'Badung Regency, Bali',
    price: 99,
    maxGroupSize: 8,
    desc: "Badung Regency in Bali, Indonesia, is a vibrant region known for its beautiful beaches, rich cultural heritage, and bustling urban centers. The regency encompasses a diverse landscape, from stunning coastal areas like Kuta, Seminyak, and Canggu, renowned for their surf spots and lively nightlife, to lush inland areas with picturesque rice terraces and traditional villages. <br/>In Badung, you'll find a perfect blend of modern amenities and Balinese traditions. The regency is home to vibrant markets, art galleries showcasing local talent, and temples such as the iconic Tanah Lot and Uluwatu. Visitors can indulge in delicious Balinese cuisine, relax on pristine beaches, or explore the region's natural beauty through hiking, cycling, or water sports. Badung Regency truly offers a multifaceted experience that captures the essence of Bali's allure.",
    reviews: [
      {
        name: "Rigel Jax",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address:'Khiri Nakhon 8/1 Alley, Huai Kapi, Chonburi 20000 Thailand',
    price: 99,
    maxGroupSize: 8,
    desc: "The Snowy Mountains in Khiri Nakhon 8/1 Alley, Huai Kapi, Chonburi, Thailand, offers a unique and enchanting experience. Despite being in a tropical country, this indoor snow park creates a winter wonderland with its snow-covered slopes, ice sculptures, and frosty landscapes. Visitors can enjoy skiing, snowboarding, and snow tubing regardless of the outside weather. The park also features a cozy winter village atmosphere complete with cafes, shops, and entertainment options. It's a delightful escape for both locals and tourists seeking a break from the tropical heat, providing a memorable experience of snow and winter activities in the heart of Thailand",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address:'Phu Langka village,Phayao National Park,Thailand',
    price: 99,
    maxGroupSize: 8,
    desc: "The sunrise in Phu Langka village, nestled within Phayao National Park, Thailand, is a breathtaking spectacle of natural beauty. As the first light of dawn paints the sky in hues of pink, orange, and gold, it illuminates the misty mountains and lush forests, creating a picturesque panorama. The tranquil ambiance is enhanced by the chirping of birds and the gentle rustle of leaves. The sun's rays gradually reveal the serene landscape, including the serene Phayao Lake nearby. This tranquil and scenic setting makes Phu Langka village a perfect retreat for nature lovers, photographers, and those seeking moments of serenity and awe-inspiring beauty.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address:'Klungkung Regency, Bali',
    price: 99,
    maxGroupSize: 8,
    desc: "Nusa Penida in Bali, Indonesia, is a hidden gem boasting stunning natural beauty. The island's rugged cliffs, pristine beaches, and crystal-clear waters create a paradise for adventurers and nature enthusiasts alike. Visitors can explore iconic landmarks like Kelingking Beach with its dinosaur-shaped cliff, the picturesque Angel's Billabong natural pool, and the breathtaking views from Atuh Beach. Nusa Penida is also renowned for its vibrant underwater world, making it a popular destination for snorkeling and diving. The island's laid-back atmosphere, untouched landscapes, and awe-inspiring vistas offer a serene escape from the bustling tourist areas of mainland Bali.",
    reviews: [
      {
        name: "Lia Franklin",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address:"Tokyo's Ueno Park, Kyoto's Maruyama Park, and Hiroshima's Hiroshima Peace Memorial Park.",
    price: 99,
    maxGroupSize: 8,
    desc: "Cherry Blossoms Spring in Japan is a mesmerizing spectacle of nature's beauty. As winter fades, delicate pink and white cherry blossoms, known as sakura, blanket the country in a breathtaking floral display. The blooming season, typically from late March to early April, marks a time of celebration and renewal called Hanami. Families and friends gather for picnics under the blooming trees, enjoying traditional foods and drinks. The ethereal beauty of cherry blossoms symbolizes the fleeting nature of life, yet also represents hope and new beginnings. This annual phenomenon draws millions of visitors from around the world to witness Japan's enchanting springtime.",
    reviews: [
      {
        name: "Rigel Jax",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address:'Flathaugen 36, Sorvagen 8392 Norway',
    price: 99,
    maxGroupSize: 8,
    desc: "Holmen Lofoten in France offers a tranquil retreat amidst stunning natural beauty. Nestled in the Lofoten archipelago, this picturesque island is surrounded by rugged mountains, deep fjords, and pristine Arctic waters. The landscape is dotted with traditional red wooden cabins, creating a charming and cozy atmosphere. Visitors can indulge in outdoor activities like hiking, fishing, and kayaking while immersing themselves in the serene Scandinavian wilderness. The region is also known for its vibrant cultural scene, featuring art galleries, music festivals, and local seafood delicacies. Holmen Lofoten is a haven for those seeking adventure, relaxation, and a connection with nature. ",
    reviews: [
      // {
      //   name: "jhon doe",
      //   rating: 4.6,
      // },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address:'Huai Kapi Mueang Chon Buri Chon Buri 20000',
    price: 99,
    maxGroupSize: 8,
    desc: "Snowy Mountains in Huai Kapi, Mueang Chon Buri, Thailand, offers a unique winter experience in a tropical setting. This indoor snow park transports visitors to a snowy wonderland with its snow-covered slopes, ice sculptures, and frosty landscapes. Whether you're a beginner or an experienced snow enthusiast, the park offers various snow activities like skiing, snowboarding, and snow tubing. The ambiance is complemented by cozy winter-themed cafes, shops, and entertainment options, providing a complete winter experience. Snowy Mountains is a perfect escape for locals and tourists alike, offering a taste of snowy fun and winter charm in the heart of Thailand.",
    reviews: [
      // {
      //   name: "jhon doe",
      //   rating: 4.6,
      // },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;