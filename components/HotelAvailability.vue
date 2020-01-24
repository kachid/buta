<template>
  <v-row>
    <app-hotel-availability-element />
    <app-hotel-availability-element />
    <app-hotel-availability-element />
  </v-row>
</template>

<script>
import AppHotelAvailabilityElement from '@@/components/HotelAvailabilityElement'

export default {
  name: 'HotelAvailability',
  components: {
    AppHotelAvailabilityElement
  }
}
</script>
