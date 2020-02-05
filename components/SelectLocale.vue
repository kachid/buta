<template>
  <div class="select">
    <v-select
      :items="currency"
      :value="currencyValue"
      background-color="transparent"
      solo
      flat
      dense
    />
    <v-select
      v-model="currentLanguage"
      :items="language"
      background-color="transparent"
      solo
      flat
      dense
    />
  </div>
</template>

<script>
export default {
  name: 'SelectLocale',
  props: {
    currencyValue: {
      type: String,
      default: 'USD'
    }
  },
  data: () => ({
    currency: ['RUB', 'USD', 'EUR'],
    currentLanguage: ''
  }),
  computed: {
    language() {
      const lang = this.$i18n.locales // .filter(
      // (i) => i.code !== this.$i18n.locale
      // )
      return lang.map((l) => l.code.toUpperCase())
    }
  },
  watch: {
    currentLanguage(locale) {
      this.$i18n.setLocale(locale.toLowerCase())
    }
  },
  mounted() {
    this.currentLanguage = this.$i18n.locale.toUpperCase()
  } // ,
  // methods: {
  //   onChangeLanguage(e) {
  //     this.currentLanguage = e.toLowerCase()
  //   }
  // }
}
</script>

<style scoped>
.select {
  display: flex;
  width: 174px;
}
</style>
