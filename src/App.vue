<script setup>
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="h-full w-full fixed">
    <header class="fixed">
      <NavBar />
    </header>
    <div class="wrapper">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<style src="./style.css"></style>
<style scoped>
header {
  height: 53px;
  width: 100%;
  top: 0;
}
.wrapper {
  height: calc(100% - 53px);
  margin-top: 53px;
  background-color: #eee;
  overflow: hidden;
}
</style>
