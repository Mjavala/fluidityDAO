<template>
    <div id="about-wrap">
        <div class="card">

        </div>
        <div class="card">

        </div>
        <div class="card">

        </div>
        <div class="card">

        </div>
    </div>
</template>

<script>
export default {}
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
    width: 85%;
    height: 25vh;
    margin: 1em 0;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(27, 58, 119, 0.5);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    z-index: 2;
}
canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
</style>