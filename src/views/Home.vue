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
        <span class="pr-sm-2 desktopb">
        <b-button href="https://www.furaffinity.net/user/toxicangelwolfy">Furaffinity</b-button>
        </span>
         <span class="pr-sm-2 desktopb">
        <b-button href="https://www.deviantart.com/toxicangelwolfy">DeviantArt</b-button>
        </span>
         <span class="pr-sm-2 desktopb">
          <b-button href="https://twitter.com/wolfy_creations">Twitter</b-button>
        </span>
         <span class=" pr-sm-2 desktopb">
          <b-button href="https://www.instagram.com/toxicangelwolfy/">Instagram</b-button>
        </span>
           <span class="desktopb">
          <b-button href="https://trello.com/b/QLelcq6Z/toxic-angel-wolfy-creations-queues">Trello</b-button>
        </span>
         <br><br>
         <a class="btn desktopb" href="https://ko-fi.com/toxicangelwolfycreations">
           Buy me a coffee!
           <font-awesome-icon size="lg" icon="coffee"/>
         </a>
       </b-carousel-slide>
         <b-carousel-slide :img-src="require('@/assets/home/ychslide.jpg')" caption="Sergal or Shark icon YCH!"
         text="Only $10!">
             <b-button href="https://www.furaffinity.net/view/35707066/">More Info!</b-button>
         </b-carousel-slide>
         <b-carousel-slide :img-src="require('@/assets/home/slide2.jpg')" caption="Coming soon: Galleries!"
         text="Click the button to see my Furaffinity gallery!">
        <b-button href="https://www.furaffinity.net/gallery/toxicangelwolfy/">FA Gallery</b-button>

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
    @media only screen and (max-width: 550px){
        .desktopb {
            display: none
        }
    }
</style>
