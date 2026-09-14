<script lang="ts">
import {defineComponent} from 'vue'
import Consequences from "@/components/guide/healthBar/consequences/Consequences.ts";

export default defineComponent({
  props: {
    name: String,
    consequences: Consequences
  },
  name: "ConsequenceTable"
})
</script>

<template>
  <b-accordion-item :title="name">
    <b-table
        striped
        over
        :items="consequences?.consequences"
    />
  </b-accordion-item>
</template>

<style scoped>

</style>