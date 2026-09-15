<script lang="ts">
import {defineComponent} from 'vue'
import Equipment from "@/components/guide/equipment/Equipment.ts";
import Armor from "@/components/guide/equipment/Armor.ts";

export default defineComponent({
  props: {
    equipment: Equipment,
    armor: Armor
  },
  name: "Equipment"
})
</script>

<template>
  <b-accordion-item v-if="equipment" :title="equipment.name">
    <b-table
        striped
        over
        :items="equipment.element"
        class="shadow-lg rounded"
    />
  </b-accordion-item>
  <b-accordion-item v-if="armor" :title="armor.name">
    <b-table
        striped
        over
        :items="armor.element"
        class="shadow-lg rounded"
    />

  </b-accordion-item>
</template>

<style scoped>

</style>