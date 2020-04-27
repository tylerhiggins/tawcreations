<template>
  <div class="home">
      <b-container>
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
       <b-carousel-slide :img-src="require('@/assets/home/slide1.png')" caption="Welcome to Toxic Angel Wolfy Creations!"
                         text="Freelance artist and crafter.">
       </b-carousel-slide>
         <b-carousel-slide :img-src="require('@/assets/home/slide2.jpg')" caption="SFW Gallery Now Open!"
                           text="Check it out!">
             <b-button to="/sfwgallery">SFW Gallery</b-button>
         </b-carousel-slide>
         <b-carousel-slide :img-src="require('@/assets/home/slide4.jpg')" caption="New Adopts page!"
         text="Buy an OC!">
             <b-button to="/adopts">Adopts Page</b-button>
         </b-carousel-slide>
         <b-carousel-slide :img-src="require('@/assets/home/ychslide.jpg')" caption="Featured YCH"
         text="Sergal or Shark Icons! Only $10!">
             <span class="pr-sm-2">
             <b-button  class="featuredych" href="https://www.furaffinity.net/view/35707066/">More Info!</b-button>
             </span>
             <b-button class="featuredych" to="/ych">All YCH's</b-button>
         </b-carousel-slide>
     </b-carousel>
      </b-container>
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
    .featuredych {
        background-color: cadetblue;
    }
</style>
