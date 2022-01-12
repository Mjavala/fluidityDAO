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
        <div class="navlinks" @click="toLocation(0)">Home</div>
        <div class="navlinks" @click="toLocation(0)">Blog</div>
        <div class="navlinks" @click="toLocation(0)">Docs</div>
        <div class="navlinks" @click="toLocation(2)">Roadmap</div>
        <div id="cta-wrap-nav">
          <button class="cta-btn" data-aos="fade-left">
            <div>Presale</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 cta-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#00df57"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      desktop: false,
    };
  },
  mounted() {
    if (Number(window.innerWidth) >= 900) {
      this.active = true;
      this.desktop = true;
    }
  },
  methods: {
    toggleNavigation() {
      this.active = !this.active;
    },
    toLocation(number) {
      let el;
      if (number == 0) el = document.getElementById("home");
      else if (number == 1) el = document.getElementById("about-wrap");
      else if (number == 2) el = document.getElementById("roadmap-wrapper");

      this.$smoothScroll({
        scrollTo: el,
      });
      if (!this.desktop) {
        setTimeout(() => {
          this.toggleNavigation();
        }, 500);
      }
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
  z-index: 11;
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
.cta-wrap-nav {
  display: none;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.9;
  }
}
@media screen and (min-width: 600px) {
  #navigation-wrap {
    width: 100vw;
    justify-content: space-between;
  }
  #navigation-links {
    width: 50%;
  }
  #menu {
    margin-right: 2.5em;
  }
  #logo {
    margin-left: 1em;
    width: 14.5em;
  }
}
@media screen and (min-width: 600px) {
  #navigation-links {
    width: 65%;
  }
  #logo {
    margin-left: 2em;
    width: 17.5em;
    margin-bottom: 0.5em;
  }
  .navlinks {
    font-size: 1.75em;
  }
}

@media screen and (min-width: 900px) {
  #navigation-wrap {
    width: 100vw;
    justify-content: space-between;
  }
  #menu {
    display: none;
  }
  #navigation-links {
    position: relative;
    flex-direction: row;
    justify-content: space-evenly;
    height: auto;
    background: transparent;
    width: 57.5%;
  }
  .navlinks {
    padding: 0.25em 0;
    font-family: "Baloo Bhaina 2", cursive;
    font-size: 1.5em;
    color: white;
    cursor: pointer;
  }
  .navlinks-about {
    display: none;
  }
  .cta-wrap-nav {
    display: unset;
  }
  .cta-btn {
    font-size: 1.5em !important;
    min-height: 47.5px;
    padding: 0 0.75em;
  }
}
</style>
