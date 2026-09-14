<script lang="ts">
import {defineComponent,} from 'vue'
import ConsequenceTable from "@/components/guide/healthBar/consequences/ConsequenceTable.vue";
import headConsequences from "@/assets/healthBarConsequence/head.json"
import bodyConsequences from "@/assets/healthBarConsequence/body.json"
import leftArmConsequences from "@/assets/healthBarConsequence/left-arm.json"
import rightArmConsequences from "@/assets/healthBarConsequence/right-arm.json"
import leftLegConsequences from "@/assets/healthBarConsequence/left-leg.json"
import rightLegConsequences from "@/assets/healthBarConsequence/right-leg.json"

export default defineComponent({
  name: "HealthBarGuide",
  components: {ConsequenceTable, HeadConsequence: ConsequenceTable},
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
    <h3><u>bars de vie:</u></h3>
    <p>
      Dans ce jdr vous n'avée qu'une simple bar de vie,<br/>
      Une bar de vie seras présente par partie du corp(bras, torse, tête, jambes), ainsi qu'une bar de vitalité
      representant l'état générale du personnage.<br/>
      Si la bar de vitalité du personnage tombe a 0, le personnage tombe dans le commas et dois effectuez des jet de
      survie.<br/>
      Si une bar de vie (or vitalité) tombe a 0, 1d20 dois etre lancé pour determiné la consequence<br/>
    </p>
    <br/>
    <h3><u>consequence d'une bar de vie a 0:</u></h3>

    <div>
      <b-accordion>
        <consequence-table name="tête" :consequences="headConsequences"/>
        <consequence-table name="torse" :consequences="bodyConsequences"/>
        <consequence-table name="bras gauche" :consequences="leftArmConsequences"/>
        <consequence-table name="bras droit" :consequences="rightArmConsequences"/>
        <consequence-table name="jambe gauche" :consequences="leftLegConsequences"/>
        <consequence-table name="jambe droite" :consequences="rightLegConsequences"/>

      </b-accordion>
    </div>
  </div>
</template>

<style scoped>

</style>