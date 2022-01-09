<template>
  <div id="navigation-wrap">
    <img id="logo" src="../assets/logo.png" />
    <div id="menu" @click="toggleNavigation">
      <div class="menu-inner-wrap" v-if="!active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div v-if="active" class="menu-inner-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
    <transition name="fade">
      <div id="navigation-links" class="fade-in" v-if="active">
        <div class="navlinks">Home</div>
        <div class="navlinks">About</div>
        <div class="navlinks">Roadmap</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleNavigation() {
      console.log("here");
      this.active = !this.active;
    },
  },
};
</script>

<style>
#navigation-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  width: 100%;
  position: fixed;
  max-height: 108px;
}
#menu {
  cursor: pointer;
  height: auto;
  width: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}
.menu-inner-wrap {
  width: 2em;
}
#logo {
  width: 12.5em;
}
#navigation-links {
  height: 100vh;
  width: 100vw;
  background: #15a5b0;
  position: absolute;
  opacity: 0.9;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.navlinks {
  padding: 0.25em 0;
  font-family: "Baloo Bhaina 2", cursive;
  font-size: 2.5em;
  color: white;
}

.fade-enter-active {
  animation: fade 1s forwards;
}
.fade-leave-active {
  animation: fade 1s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.9;
  }
}
</style>
