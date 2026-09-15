<script lang="ts">
import {defineComponent} from 'vue'
import Equipment from "@/components/guide/equipment/Equipment.vue";
import swordEquipment from "@/assets/equipment/sword.json"
import massEquipment from "@/assets/equipment/mass.json"
import arcEquipment from "@/assets/equipment/arc.json"
import lightArmor from "@/assets/equipment/light-armor.json"
import mediumArmor from "@/assets/equipment/medium-armor.json"
import heavyArmor from "@/assets/equipment/heavy-armor.json"

export default defineComponent({
  name: "EquipmentGuide",
  components: {Equipment},
  data() {
    return {
      swordEquipment: swordEquipment,
      massEquipment: massEquipment,
      arcEquipment: arcEquipment,
      lightArmor: lightArmor,
      mediumArmor: mediumArmor,
      heavyArmor: heavyArmor
    }
  }
})
</script>

<template>
  <div>
    <h3 class=" fw-bolder">Equipment:</h3>
    <b-accordion>
      <equipment :equipment="swordEquipment" class="shadow-lg rounded"/>
      <equipment :equipment="massEquipment" class="shadow-lg rounded"/>
      <equipment :equipment="arcEquipment" class="shadow-lg rounded"/>
      <equipment :armor="lightArmor" class="shadow-lg rounded"/>
      <equipment :armor="mediumArmor" class="shadow-lg rounded"/>
      <equipment :armor="heavyArmor" class="shadow-lg rounded"/>
    </b-accordion>
  </div>
</template>

<style scoped>

</style>