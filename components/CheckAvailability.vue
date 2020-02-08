<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-sheet
      height="200"
      color="rgba(100,115,201,.2)"
      class="d-flex justify-center align-center"
      tile
    >
      <v-btn color="rgb(100,115,201)" dark tile x-large depressed>{{
        $t('checkAvailability')
      }}</v-btn>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  name: 'CheckAvailability'
}
</script>
