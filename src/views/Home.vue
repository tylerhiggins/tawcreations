<template>
  <div class="home">
     <b-carousel
             id="carousel-1"
             v-model="slide"
             :interval="4000"
             controls
             img-width="1280"
             img-height="720"
             background="#ababab"
             style="text-shadow: 1px 1px 2px #333;"
             @sliding-start="onSlideStart"
             @sliding-end="onSlideEnd"
     >
       <b-carousel-slide :img-src="require('@/assets/home/slide1.png')" caption="Toxic Angel Wolfy Creations!"
                         text="Freelance artist and crafter.">
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
         <br><br>
         <a class="btn" href="https://ko-fi.com/toxicangelwolfycreations">
           Buy me a coffee!
           <font-awesome-icon size="lg" icon="coffee"/>
         </a>
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
  #footer {
    padding-bottom: 100px;
  }
  #carousel-1 {
    margin-top: 50px;
  }
</style>
