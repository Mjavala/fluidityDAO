<template>
  <div id="footer-wrap">
    <img class="avalanche" src="../assets/avalanche.svg" />
    <div class="footer-item">@2022 FluidityDAO, All rights reserved.</div>
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
      <a href="https://twitter.com/FluidityDao">
        <img class="footer-socials-items" src="../assets/mail.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<style>
#footer-wrap {
  height: 100%;
  width: 100vw;
  background: #09062d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer-item {
  color: white;
  font-family: "Baloo Bhaina 2", cursive;
}
.avalanche {
  width: 75%;
  padding-bottom: 1em;
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
    width: 50%;
  }
}
</style>
