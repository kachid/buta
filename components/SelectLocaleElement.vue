<template>
  <v-select
    v-model="currentSelect"
    :items="items"
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
</template>

<script>
export default {
  name: 'SelectLocaleElement',
  filters: {
    toUpperCase(value) {
      return value.toUpperCase()
    }
  },
  props: {
    select: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    currentSelect: ''
  }),
  watch: {
    currentSelect(value) {
      this.$emit('onSelected', value)
    }
  },
  mounted() {
    this.currentSelect = this.select
  }
}
</script>
