<template>
  <div class="select">
    <app-select-locale-element
      :select="currencyValue"
      :items="currency"
      @onSelected="currentCurrency = $event"
    />
    <app-select-locale-element
      :select="currentLanguage"
      :items="language"
      @onSelected="currentLanguage = $event"
    />
  </div>
</template>

<script>
export default {
  name: 'SelectLocale',
  components: {
    AppSelectLocaleElement: () => import('@@/components/SelectLocaleElement')
  },
  props: {
    currencyValue: {
      type: String,
      default: 'USD'
    }
  },
  data: () => ({
    currency: ['RUB', 'USD', 'EUR'],
    currentLanguage: '',
    currentCurrency: ''
  }),
  computed: {
    language() {
      const lang = this.$i18n.locales
      return lang.map((l) => l.code)
    }
  },
  watch: {
    currentLanguage(locale) {
      this.$i18n.setLocale(locale)
    }
  },
  mounted() {
    this.currentLanguage = this.$i18n.locale
    this.currentCurrency = this.currencyValue
  }
}
</script>

<style scoped>
.select {
  display: flex;
  width: 174px;
}
</style>
