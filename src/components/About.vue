<template>
  <div id="about-wrap">
    <div class="card" data-aos="zoom-in">
      <div class="card-item">
        <div class="card-item-title">APY</div>
        <div class="card-item-info">31,200%</div>
        <div class="spacer"></div>
      </div>
      <div class="card-item">
        <div class="card-item-title">Treasury Balance</div>
        <div class="card-item-info">$11,200,122</div>
        <div class="spacer"></div>
      </div>
      <div class="card-item">
        <div class="card-item-title">Market Cap</div>
        <div class="card-item-info">$9,107,220</div>
        <div class="spacer"></div>
      </div>
      <div class="card-item">
        <div class="card-item-title">TVL</div>
        <div class="card-item-info">$99,027,820</div>
        <div class="spacer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#about-wrap {
  height: 100%;
  width: 100vw;
  background: #09062d;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding-top: 3em;
  position: relative;
}
.card {
  width: 88.5%;
  height: 40vh;
  margin: 1em 0;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: #15a5b0;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  z-index: 2;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.card-item {
  color: white;
  flex-grow: 1;
  width: 50%;
  text-align: center;
  font-family: "Baloo Bhaina 2", cursive;
  font-size: 1em;
}
.spacer {
  margin: 0 auto;
  width: 75%;
  border-top: 1px solid lightgrey;
}
.card-item-info {
  font-size: 1.25em;
}
</style>
