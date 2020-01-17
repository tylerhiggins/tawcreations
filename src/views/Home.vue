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
      img-src="https://d.facdn.net/art/toxicangelwolfy/1550148498/1550148498.toxicangelwolfy_v-day_play_time.png">
        <p>
          Freelance artist and crafter.
        </p>
      </b-carousel-slide>
      <b-carousel-slide class="slide" caption="Reference Sheets"
                        img-src="https://d.facdn.net/art/toxicangelwolfy/1570001131/1570001131.toxicangelwolfy_amber_ref_sfw.png"></b-carousel-slide>
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
