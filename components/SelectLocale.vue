<template>
  <div class="select">
    <v-select :items="currency" :value="currency" solo flat dense />
    <v-select :items="language" :value="language" solo flat dense />
  </div>
</template>

<script>
export default {
  name: 'SelectLocale',
  props: {
    currency: {
      type: String,
      default: 'USD'
    },
    language: {
      type: String,
      default: 'RUS'
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
