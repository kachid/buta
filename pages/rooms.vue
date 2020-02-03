<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="9" lg="6">
        <v-card flat>
          <v-card-title class="justify-center display-3">
            <span>Our Rooms</span>
          </v-card-title>
          <v-card-text>
            <p>
              Situated in Batumi, 1.2 km from Makhinjauri Beach, Hotel Buta
              features accommodation with a restaurant, free private parking, a
              seasonal outdoor swimming pool and a bar. Among the facilities at
              this property are a shared kitchen and free shuttle service, along
              with free WiFi throughout the property. The property offers bike
              hire and features a garden and children's playground.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <app-room-description v-for="(item, k) in rooms" :key="k" :img="item.img">
      <template #title>
        {{ item.title }}
      </template>
      <template #sleeps>
        <span>Sleeps:</span>
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
    </app-room-description>
  </div>
</template>

<script>
import { rooms } from '@@/data'
import AppRoomDescription from '@@/components/RoomDescription'

export default {
  name: 'Rooms',
  components: {
    AppRoomDescription
  },
  data: () => ({
    rooms
  })
}
</script>
