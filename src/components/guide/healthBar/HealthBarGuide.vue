<script lang="ts">
import {defineComponent,} from 'vue'
import ConsequenceTable from "@/components/guide/healthBar/consequences/ConsequenceTable.vue";
import headConsequences from "@/assets/healthBarConsequence/head.json"
import bodyConsequences from "@/assets/healthBarConsequence/body.json"
import leftArmConsequences from "@/assets/healthBarConsequence/left-arm.json"
import rightArmConsequences from "@/assets/healthBarConsequence/right-arm.json"
import leftLegConsequences from "@/assets/healthBarConsequence/left-leg.json"
import rightLegConsequences from "@/assets/healthBarConsequence/right-leg.json"
import InfectionConsequence from "@/components/guide/healthBar/consequences/InfectionConsequence.vue";
import GlobalConsequence from "@/components/guide/healthBar/consequences/GlobalConsequence.vue";

export default defineComponent({
  name: "HealthBarGuide",
  components: {GlobalConsequence, InfectionConsequence, ConsequenceTable, HeadConsequence: ConsequenceTable},
  data() {
    return {
      headConsequences: headConsequences,
      bodyConsequences: bodyConsequences,
      leftArmConsequences: leftArmConsequences,
      rightArmConsequences: rightArmConsequences,
      leftLegConsequences: leftLegConsequences,
      rightLegConsequences: rightLegConsequences,
    }
  }
})
</script>

<template>
  <div>
    <h3 class="fw-bolder">bars de vie:</h3>
    <p >
      Dans ce jdr vous n'avée qu'une simple bar de vie,<br/>
      Une bar de vie seras présente par partie du corp(bras, torse, tête, jambes), ainsi qu'une bar de vitalité
      representant l'état générale du personnage.<br/>
      Si la bar de vitalité du personnage tombe a 0, le personnage tombe dans le commas et dois effectuez des jet de
      survie.<br/>
      Si une bar de vie (or vitalité) tombe a 0, 1d20 dois etre lancé pour determiné la consequence<br/>
    </p>
    <br/>
    <h3 class="fw-bolder">consequence d'une bar de vie a 0:</h3>

    <div>
      <b-accordion>
        <consequence-table name="tête" :consequences="headConsequences" class="shadow-lg rounded"/>
        <consequence-table name="torse" :consequences="bodyConsequences" class="shadow-lg rounded"/>
        <consequence-table name="bras gauche" :consequences="leftArmConsequences" class="shadow-lg rounded"/>
        <consequence-table name="bras droit" :consequences="rightArmConsequences" class="shadow-lg rounded"/>
        <consequence-table name="jambe gauche" :consequences="leftLegConsequences" class="shadow-lg rounded"/>
        <consequence-table name="jambe droite" :consequences="rightLegConsequences" class="shadow-lg rounded"/>

      </b-accordion>
    </div>

    <h3 class="fw-bolder">infection</h3>
    <infection-consequence/>

    <h3 class="fw-bolder">Global</h3>
    <global-consequence/>
  </div>
</template>

<style scoped>

</style>