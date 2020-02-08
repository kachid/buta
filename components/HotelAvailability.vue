<template>
  <v-row justify="center" align-content="center">
    <app-hotel-availability-element :title="$t('ava.checkIn')" is-date-picker />
    <app-hotel-availability-element
      :title="$t('ava.checkOut')"
      is-date-picker
    />
    <app-hotel-availability-element :title="$t('ava.totalGuest')" no-gutter />
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
