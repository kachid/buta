<template>
  <v-col cols="12" sm="6" md="4" lg="3" class="d-flex">
    <v-card flat height="200" class="flex-grow-1">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-actions>
        <app-date-picker v-if="isDatePicker" />
        <app-select-number-of-person v-else />
      </v-card-actions>
    </v-card>
    <v-divider v-if="showGutter" inset vertical />
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
    },
    noGutter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showGutter() {
      return !this.noGutter && !this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>
