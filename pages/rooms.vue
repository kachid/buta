<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="9" lg="6">
        <v-card flat>
          <v-card-title class="justify-center display-3">
            <span>{{ $t('rooms.ourRooms') }}</span>
          </v-card-title>
          <v-card-text>
            <p>{{ $t('rooms.p1') }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <app-room-description v-for="(item, k) in rooms" :key="k" :img="item.img">
      <template #title>
        {{ item.title }}
      </template>
      <template #sleeps>
        <span>{{ $t('rooms.sleeps') }}</span>
        <v-icon>mdi-account</v-icon>
        <v-icon x-small>mdi-close</v-icon>
        {{ item.sleeps }}
      </template>
      <template #description>
        <div v-for="({ room, icons, amount }, i) in item.description" :key="i">
          <span class="font-weight-bold">{{ room.name }}</span>
          <span>{{ amount }} {{ room.amountSleeps }}</span>
          <v-icon v-for="(icon, j) in amount" :key="j">{{ icons }}</v-icon>
        </div>
      </template>
      <template #price>
        {{ item.price }}
      </template>
    </app-room-description>
  </div>
</template>

<script>
import AppRoomDescription from '@@/components/RoomDescription'

export default {
  name: 'Rooms',
  components: {
    AppRoomDescription
  },
  computed: {
    rooms() {
      return [
        {
          title: this.$t('rooms.twoBedroomHouse'),
          sleeps: 5,
          img: '/images/house.jpg',
          price: '4 542 руб.',
          description: [
            {
              room: {
                name: this.$t('rooms.livingRoom'),
                amountSleeps: this.$t('rooms.sofaBed')
              },
              icons: 'mdi-sofa',
              amount: 1
            },
            {
              room: {
                name: this.$t('rooms.bedroom1'),
                amountSleeps: this.$tc('rooms.singleBed', 2)
              },
              icons: 'mdi-bed-single',
              amount: 2
            },
            {
              room: {
                name: this.$t('rooms.bedroom2'),
                amountSleeps: this.$t('rooms.largeDoubleBed')
              },
              icons: 'mdi-bed-king',
              amount: 1
            }
          ]
        },
        {
          title: this.$t('rooms.standardTripleRoom'),
          sleeps: 3,
          img: '/images/standart_triple_room.jpg',
          price: '1 363 руб.',
          description: [
            {
              room: { name: '', amountSleeps: this.$tc('rooms.singleBed', 3) },
              icons: 'mdi-bed-single',
              amount: 3
            }
          ]
        },
        {
          title: this.$t('rooms.superiorTripleRoom'),
          sleeps: 3,
          img: '/images/superior_triple_room.jpg',
          price: '1 363 руб.',
          description: [
            {
              room: { name: '', amountSleeps: this.$tc('rooms.singleBed', 1) },
              icons: 'mdi-bed-single',
              amount: 1
            },
            {
              room: { name: '', amountSleeps: this.$t('rooms.largeDoubleBed') },
              icons: 'mdi-bed-king',
              amount: 1
            }
          ]
        },
        {
          title: this.$t('rooms.deluxeApartment'),
          sleeps: 5,
          img: '/images/deluxe_apartment.jpg',
          price: '2 271 руб.',
          description: [
            {
              room: {
                name: 'Living room:',
                amountSleeps: this.$t('rooms.sofaBed')
              },
              icons: 'mdi-sofa',
              amount: 1
            },
            {
              room: {
                name: 'Bedroom:',
                amountSleeps: this.$tc('rooms.singleBed', 1)
              },
              icons: 'mdi-bed-single',
              amount: 1
            },
            {
              room: { name: '', amountSleeps: this.$t('rooms.largeDoubleBed') },
              icons: 'mdi-bed-king',
              amount: 1
            }
          ]
        }
      ]
    }
  }
}
</script>
