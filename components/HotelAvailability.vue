<template>
  <v-row justify="center" align-content="center">
    <app-hotel-availability-element title="check-in" is-date-picker />
    <app-hotel-availability-element title="check-out" is-date-picker />
    <app-hotel-availability-element title="total guest" no-gutter />
    <app-check-availability />
  </v-row>
</template>

<script>
import AppHotelAvailabilityElement from '@@/components/HotelAvailabilityElement'
import AppCheckAvailability from '@@/components/CheckAvailability'

export default {
  name: 'HotelAvailability',
  components: {
    AppHotelAvailabilityElement,
    AppCheckAvailability
  }
}
</script>
