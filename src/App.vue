<template>
  <div id="app-wrapper">
    <Navigation />
    <Home />
    <About />
    <Roadmap />
    <Footie />
  </div>
</template>

<script setup>
import Home from "@/components/Home.vue";
import Navigation from "./components/Navigation.vue";
import About from "./components/About.vue";
import Roadmap from "./components/Roadmap.vue";
import Footie from "./components/Footie.vue";
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
#app-wrapper {
  height: 100%;
  position: relative;
}
</style>
