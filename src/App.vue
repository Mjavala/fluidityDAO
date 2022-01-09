<template>
  <div id="app-wrapper">
    <Navigation />
    <Home />
    <About />
  </div>
</template>

<script setup>
import Home from "@/components/Home.vue";
import Navigation from "./components/Navigation.vue";
import About from "./components/About.vue";
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app-wrapper {
  height: 100%;
}
</style>
