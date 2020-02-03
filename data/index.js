export const images = [
  { src: '/images/hotel_pool_02.jpg' },
  { src: '/images/hotel_pool_03.jpg' },
  { src: '/images/sunbeds.jpg' },
  { src: '/images/sunbeds_02.jpg' },
  { src: '/images/sunbeds_03.jpg' },
  { src: '/images/sunbeds_04.jpg' },
  { src: '/images/cafe.jpg' },
  { src: '/images/cafe_02.jpg' },
  { src: '/images/cafe_03.jpg' },
  { src: '/images/bicycles.jpg' },
  { src: '/images/bicycles_02.jpg' },
  { src: '/images/bicycles_03.jpg' }
]

export const rooms = [
  {
    title: 'Two-Bedroom House',
    sleeps: 5,
    img: '/images/house.jpg',
    description: [
      {
        room: { name: 'Living room:', amountSleeps: 'sofa bed' },
        icons: 'mdi-sofa',
        amount: 1
      },
      {
        room: { name: 'Bedroom 2:', amountSleeps: 'single beds' },
        icons: 'mdi-bed-single',
        amount: 2
      },
      {
        room: { name: 'Bedroom 3:', amountSleeps: 'large double bed' },
        icons: 'mdi-bed-king',
        amount: 1
      }
    ]
  },
  {
    title: 'Standard Triple Room',
    sleeps: 3,
    img: '/images/standart_triple_room.jpg',
    description: [
      {
        room: { name: '', amountSleeps: 'single beds' },
        icons: 'mdi-bed-single',
        amount: 3
      }
    ]
  },
  {
    title: 'Superior Triple Room',
    sleeps: 3,
    img: '/images/superior_triple_room.jpg',
    description: [
      {
        room: { name: '', amountSleeps: 'single beds' },
        icons: 'mdi-bed-single',
        amount: 1
      },
      {
        room: { name: '', amountSleeps: 'large double bed' },
        icons: 'mdi-bed-king',
        amount: 1
      }
    ]
  },
  {
    title: 'Deluxe Apartment',
    sleeps: 5,
    img: '/images/deluxe_apartment.jpg',
    description: [
      {
        room: { name: 'Living room:', amountSleeps: 'sofa bed' },
        icons: 'mdi-sofa',
        amount: 1
      },
      {
        room: { name: 'Bedroom:', amountSleeps: 'single bed' },
        icons: 'mdi-bed-single',
        amount: 1
      },
      {
        room: { name: '', amountSleeps: 'large double bed' },
        icons: 'mdi-bed-king',
        amount: 1
      }
    ]
  }
]
