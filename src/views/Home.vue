<template>
  <div class="home">
    <b-carousel
            id="carousel"
            v-model="slide"
            :interval="4000"
            controls
            background="#ababab"
            img-width="1195"
            img-height="436"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
    >

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide class="slide" caption="Welcome to Toxic Angel Wolfy Creations!"
      img-src="../assets/slide1.png">
        <p>
          Freelance artist and crafter.
        </p>
      </b-carousel-slide>
      <b-carousel-slide class="slide" caption="Reference Sheets"
                        img-src="../assets/slide2.png"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",

};
</script>

<style scoped lang="scss">

</style>
