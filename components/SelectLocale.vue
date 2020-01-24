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
      :items="language"
      :value="languageValue"
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
    },
    languageValue: {
      type: String,
      default: 'RUS'
    }
  },
  data: () => ({
    currency: ['RUB', 'USD', 'EUR'],
    language: ['ENG', 'RUS']
  })
}
</script>

<style scoped>
.select {
  display: flex;
  width: 174px;
}
</style>
