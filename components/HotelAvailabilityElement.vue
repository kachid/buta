<template>
  <v-col>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'HotelAvailabilityElement',
  props: {
    title: {
      type: String,
      default: 'Header'
    }
  }
}
</script>
