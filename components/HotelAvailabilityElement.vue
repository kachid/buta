<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card flat outlined>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-actions>
        <app-date-picker v-if="isDatePicker" />
        <app-select-number-of-person v-else />
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import AppDatePicker from '@@/components/DatePicker'
import AppSelectNumberOfPerson from '@@/components/SelectNumberOfPerson'

export default {
  name: 'HotelAvailabilityElement',
  components: {
    AppDatePicker,
    AppSelectNumberOfPerson
  },
  props: {
    title: {
      type: String,
      default: 'Header'
    },
    isDatePicker: {
      type: Boolean,
      default: false
    }
  }
}
</script>
