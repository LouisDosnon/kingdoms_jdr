<script lang="ts">
import {defineComponent} from 'vue'
import globalConsequences from "@/assets/healthBarConsequence/global.json"

export default defineComponent({
  name: "GlobalConsequence",
  data () {
    return {
      globalConsequences: globalConsequences
    }
  }
})
</script>

<template>
  <b-table
      striped
      over
      :items="globalConsequences?.degats"
      class="shadow-lg rounded"
  />
</template>

<style scoped>

</style>