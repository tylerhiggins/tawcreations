<template>
  <div class="home">
    <b-carousel
            id="carousel"
            v-model="slide"
            :interval="4000"
            controls
            background="#ababab"
            img-width="1024"
            img-height="700"
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
      <b-carousel-slide style="background-color: black" class="slide" caption="Pardon our Dust"
      img-src="../assets/slide3.png">
        <p>We are under construction. If you would
        like to get more information, please click on one of my social media or art pages!</p>
        <span class="pr-sm-2">
        <b-button href="https://www.furaffinity.net/user/toxicangelwolfy">Furaffinity</b-button>
        </span>
        <span class="pr-sm-2">
        <b-button href="https://www.deviantart.com/toxicangelwolfy">DeviantArt</b-button>
        </span>
        <span class="pr-sm-2">
          <b-button href="https://twitter.com/wolfy_creations">Twitter</b-button>
        </span>
        <span>
          <b-button href="https://www.instagram.com/toxicangelwolfy/">Instagram</b-button>
        </span>
      </b-carousel-slide>
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
  #carousel {
    margin-top: 50px;
  }
</style>
