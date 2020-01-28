<template>
  <v-row justify="center" class="ma-8">
    <app-hotel-availability-element title="check-in" is-date-picker />
    <v-divider inset vertical />
    <app-hotel-availability-element title="check-out" is-date-picker />
    <v-divider inset vertical />
    <app-hotel-availability-element title="total guest" />
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
