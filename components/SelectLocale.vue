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
      :filter="availableLocales"
      background-color="transparent"
      solo
      flat
      dense
    >
      <template v-slot:selection="{ item }">
        {{ item | toUpperCase }}
      </template>
      <template v-slot:item="{ item }">
        {{ item | toUpperCase }}
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  name: 'SelectLocale',
  filters: {
    toUpperCase(value) {
      return value.toUpperCase()
    }
  },
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
  },
  methods: {
    availableLocales(item, queryText, itemText) {
      return item !== this.$i18n.locale
    }
  }
}
</script>

<style scoped>
.select {
  display: flex;
  width: 174px;
}
</style>
