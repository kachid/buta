<template>
  <div>
    <app-hotel-availability />
    <app-about-us />
  </div>
</template>

<script>
import AppHotelAvailability from '@@/components/HotelAvailability'
import AppAboutUs from '@@/components/AboutUs'

export default {
  components: {
    AppHotelAvailability,
    AppAboutUs
  }
}
</script>
