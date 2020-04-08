<template>
    <div class="adopts">
        <h1>Current Adopts!</h1>
        <b-container class="adopt-container">
                <h4 class="adopt-desc">Mystery Egg Adopts! (Only 4 Left!)</h4>
                <b-img class="adopt-img" :src="require('@/assets/adopts/eggadopts.png')" fluid></b-img>
                <p>Description: Choose an egg and you will receive a mystery character reference sheet based on the egg color!<br>
                <br>Price: $5 per egg, or egg with head shot commission for $15!</p>
                <b-button href="https://www.furaffinity.net/view/34595548/">Claim Here!</b-button>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "adopts",
    }
</script>

<style scoped lang="scss">
    .adopts {
        text-align: center;
    }
    .adopt-container {
        margin-top: 20px;
    }
    .adopt-img {
        max-width: 50%;
    }
    .adopt-desc {
        font-weight: bolder;
        text-decoration: underline;
        margin-bottom: 10px;
    }
    p {
        font-size: 20px;
        margin-top: 20px;
        font-weight: bold;
    }
</style>
