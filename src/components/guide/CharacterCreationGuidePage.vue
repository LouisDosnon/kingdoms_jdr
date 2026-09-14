<script lang="ts">
import {defineComponent} from 'vue'
import HealthBarGuide from "@/components/guide/healthBar/HealthBarGuide.vue";
import Equipment from "@/components/guide/equipment/Equipment.vue";
import EquipmentGuide from "@/components/guide/equipment/EquipmentGuide.vue";
import CombatGuide from "@/components/guide/Combat/CombatGuide.vue";

export default defineComponent({
  name: "CharacterCreationGuidePage",
  components: {CombatGuide, EquipmentGuide, Equipement: Equipment, HealthBarGuide}
})
</script>

<template>
  <div>
    <h2><u>création du personnage</u></h2>
    <b-tabs>
      <b-tab title="bar de vie" active>
        <health-bar-guide/>
      </b-tab>
      <b-tab title="equipement">
        <equipment-guide/>
      </b-tab>
      <b-tab title="combat">
        <combat-guide/>
      </b-tab>
    </b-tabs>
  </div>
</template>

<style scoped>

</style>