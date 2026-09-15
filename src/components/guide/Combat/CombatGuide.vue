<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CombatGuide",
  data() {
    return {
      hitLocations: hitLocations
    }
  }
})
const hitLocations = [
  {resultat: "1", membre: "jambe gauche"},
  {resultat: "2", membre: "jambe droite"},
  {resultat: "3-4", membre: "bras gauche"},
  {resultat: "4-5", membre: "bras droit"},
  {resultat: "6-8", membre: "torse"},
  {resultat: "9-10", membre: "tête"}
];
</script>

<template>
  <div>
    <h3 class=" fw-bolder">déroulement d'un combat</h3>
    <ol>
      <li>lancé des jets d'initiative</li>
      <li>
        lancé d'un d20 d'attaque et d'un d10 pour savoir où le coup touche.<br/>
        <b-table
            striped
            hover
            :items="hitLocations"
            class="shadow-lg rounded"
        />
        Il est possible de choisir la cible d'une attaque mais cela engendre un desavantage<br>
      </li>
      <li>en cas de dégat si l'armure possède un resistance a ce type de dégat les dégat sont divisé par 2</li>
      <li>si le membre touché atteint 0 pv se referer au au tableau de consequence relatif a ce membre</li>
    </ol>
  </div>
</template>

<style scoped>

</style>