<template>
    <div class="pgnotfound">
        <h1>Error - 404</h1>
        <b-img class="errorimg" :src="require('@/assets/sfwgallery/headshots/hs1.png')" fluid></b-img>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
    .pgnotfound {
        text-align: center;
    }
    .errorimg {
        max-width: 25%;
    }
</style>
