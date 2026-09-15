<script lang="ts">
import {defineComponent} from 'vue'
import infectionConsequences from "@/assets/healthBarConsequence/infection.json"

export default defineComponent({
  name: "InfectionConsequence",
  data () {
    return {
      infectionConsequences: infectionConsequences
    }
  }
})
</script>

<template>
  <b-table
      striped
      over
      :items="infectionConsequences?.infections"
  />
</template>

<style scoped>

</style>