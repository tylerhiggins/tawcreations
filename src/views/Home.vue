<template>
  <div class="home">
    <b-container>
      <b-row>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="5000"
        controls
        img-width="1280"
        img-height="720"
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          :img-src="require('@/assets/home/slide1.png')"
          caption="Welcome to Toxic Angel Wolfy Creations!"
          text="Freelance artist and crafter."
        >
        </b-carousel-slide>
        <b-carousel-slide
            :img-src="require('@/assets/home/storeslide.jpg')"
          >
          <h3 id="storehead">Store Now Open!</h3>
          <b-button to="/store">Check it out here!</b-button>
        </b-carousel-slide>
        <b-carousel-slide
          :img-src="require('@/assets/home/discord.jpg')"
          >
          <span class="pr-2">
          <b-button class="discordbtn" href="#discord">Read My Reviews!</b-button>
          </span>
          <b-button class="discordbtn" href="https://discord.gg/tGejHWc">Join Server</b-button>

        </b-carousel-slide>
        <b-carousel-slide
          :img-src="require('@/assets/home/slide2.jpg')"
          caption="Check out my Gallery!"
        >
          <span class="pr-2">
            <b-button to="/sfwgallery">Gallery</b-button>
          </span>
          <b-button to="/nsfwgallery">18+ Gallery</b-button>
        </b-carousel-slide>
        <b-carousel-slide
          :img-src="require('@/assets/home/ychslide.jpg')"
          caption="Featured YCH"
          text="Sergal or Shark Icons! Only $10!"
        >
          <span class="pr-sm-2">
            <b-button
              class="featuredych"
              href="https://www.furaffinity.net/view/35707066/"
              >More Info! (FA Link)</b-button
            >
          </span>
          <b-button class="featuredych" to="/ych">All YCH's</b-button>
        </b-carousel-slide>
        <b-carousel-slide
          :img-src="require('@/assets/home/slide4.jpg')"
          caption="Featured Adopt"
          text="Adopt this Pretty Kitty!"
        >
          <span class="pr-sm-2">
            <b-button
                    href="https://www.furaffinity.net/view/36202023/"
            >More Info! (FA Link)</b-button
            >
          </span>
          <b-button to="/adopts">All Adopts</b-button>
        </b-carousel-slide>
      </b-carousel>
      </b-row>
      <b-row class="mt-lg-5 mb-md-2" id="discord">
        <b-col><h1 class="text-center font-weight-bold mb-md-4">Reviews and Discord Server</h1></b-col>
        <widgetbot
                server="657054643699843095"
                channel="735532848454303775"
                width="1280"
                height="500"
        ></widgetbot>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>

<style scoped lang="scss">
#footer {
  padding-bottom: 100px;
}
.featuredych {
  background-color: cadetblue;
}
.discordbtn {
  background-color: #8c9fff;
  font-weight: bold;
}
</style>
