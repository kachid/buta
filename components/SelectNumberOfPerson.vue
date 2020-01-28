<template>
  <div class="select">
    <v-select
      :value="amount[0]"
      :items="amount"
      :suffix="person"
      solo
      flat
      full-width
    >
      <template v-slot:selection="data">
        <span class="display-2 number">{{ data.item }}</span>
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  name: 'SelectNumberOfPerson',
  data: () => ({
    amount: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    person: 'person'
  })
}
</script>
<style scoped>
.select {
  max-width: 135px;
}
</style>
