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
    <h2 class=" fw-bolder">création du personnage</h2>
    <b-tabs>
      <b-tab title="bar de vie" active class="shadow-lg bg-secondary.bg-gradient rounded">
        <health-bar-guide class="p-3"/>
      </b-tab>
      <b-tab title="equipement" class="shadow-lg bg-secondary.bg-gradient rounded">
        <equipment-guide class="p-3"/>
      </b-tab>
      <b-tab title="combat" class="shadow-lg bg-secondary.bg-gradient rounded">
        <combat-guide class="p-3"/>
      </b-tab>
    </b-tabs>
  </div>
</template>

<style scoped>

</style>