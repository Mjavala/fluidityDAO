<template>
  <div id="footer-wrap">
    <div id="footer-inner-wrap">
      <div class="footer-item">@2022 FluidityDAO, All rights reserved.</div>
    </div>
    <img class="avalanche" src="../assets/avalanche.svg" />
    <!-- 
    <div class="footer-socials">
      <a href="https://twitter.com/FluidityDao">
        <img class="footer-socials-items" src="../assets/twitter.svg" alt="" />
      </a>
      <a href="https://twitter.com/FluidityDao">
        <img class="footer-socials-items" src="../assets/tg.svg" alt="" />
      </a>
      <a href="https://twitter.com/FluidityDao">
        <img class="footer-socials-items" src="../assets/discord.svg" alt="" />
      </a>
    </div>
    -->
  </div>
</template>

<style>
#footer-wrap {
  position: absolute;
  bottom: 0;
  height: max-content;
  width: 100vw;
  background: #09062d;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
  min-height: 50px;
}
.footer-item {
  color: white;
  font-family: "Baloo Bhaina 2", cursive;
  font-size: 0.75em;
}
.avalanche {
  width: 35%;
  padding-bottom: 0.25em;
}
.footer-socials {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0.5em 0;
}
.footer-socials-items {
  height: 30px;
  width: 30px;
  cursor: pointer;
}
/** landscape, tablet, responsive design */
@media screen and (min-width: 600px) {
  .avalanche {
    width: 22.5%;
  }
  .avalanche {
    width: 12.5%;
    position: absolute;
    right: 0;
    padding-right: 1em;
    flex-direction: unset;
  }
.footer-socials-items {
  height: 40px;
  width: 40px;
}
}

/** landscape, tablet, responsive design */
@media screen and (min-width: 900px) {
  .avalanche {
    width: 12.5%;
    position: absolute;
    right: 0;
    padding-right: 1em;
    flex-direction: unset;
  }
}
@media screen and (min-width: 1200px) {
  #footer-wrap {
    bottom: 2.5%;
  }
  .avalanche {
    width: 15%;
  }
}
@media screen and (min-width: 1900px) {
  .avalanche {
    width: 12.5%;
  }
}
</style>
