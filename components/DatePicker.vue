<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">
        <span class="display-2">{{ day }}</span>
        <span>th {{ month }}</span>
        <v-icon>mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-date-picker
      v-model="date"
      no-title
      scrollable
      reactive
      @change="$refs.menu.save(date)"
    >
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'DatePicker',
  data: () => ({
    date: new Date().toISOString(),
    menu: false,
    modal: false
  }),
  computed: {
    getDateFromISO() {
      return new Date(Date.parse(this.date))
    },
    day() {
      return this.getDateFromISO.getDate()
    },
    month() {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      return months[this.getDateFromISO.getMonth()]
    }
  }
}
</script>
