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
        <span>{{ $t('dateEnding') }} {{ month }}</span>
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
    getMonthLocale() {
      return this.$t('month')
    },
    month() {
      const months = [
        this.getMonthLocale.january,
        this.getMonthLocale.february,
        this.getMonthLocale.march,
        this.getMonthLocale.april,
        this.getMonthLocale.may,
        this.getMonthLocale.june,
        this.getMonthLocale.jule,
        this.getMonthLocale.august,
        this.getMonthLocale.september,
        this.getMonthLocale.october,
        this.getMonthLocale.november,
        this.getMonthLocale.december
      ]
      return months[this.getDateFromISO.getMonth()]
    }
  },
  watch: {
    '$i18n.locale'(newLocale) {
      this.$vuetify.lang.current = newLocale
    }
  }
}
</script>
