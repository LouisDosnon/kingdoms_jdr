<script setup lang="ts">
import Home from "@/components/Home.vue";
import CharacterCreationGuidePage from "@/components/guide/CharacterCreationGuidePage.vue";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
</script>

<template>
  <header>
    <Home/>
  </header>
  <character-creation-guide-page/>
</template>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.min.css';
</style>
