<template>
  <div class="select">
    <v-select v-model="selectedAmount" :items="amount" solo flat full-width>
      <template v-slot:selection="data">
        <span class="display-2 number">{{ data.item }}</span>
      </template>
      <template v-slot:append>
        <span class="person">{{ person }}</span>
        <v-icon>mdi-menu-down</v-icon>
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  name: 'SelectNumberOfPerson',
  data: () => ({
    amount: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    selectedAmount: 1
  }),
  computed: {
    person() {
      return this.$tc('person', this.selectedAmount)
    }
  }
}
</script>
<style scoped>
.select {
  max-width: 160px;
}
.person {
  line-height: normal;
}
</style>
