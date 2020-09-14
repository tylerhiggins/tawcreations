<template>
  <div class="nsfwGallery text-center">
    <div id="notconfirmed" v-if="!inStorage">
      <confirmation :coming-from="'gallery'"></confirmation>
    </div>
    <div id="confirmed" v-if="ofAge">
      <h1 id="title">18+ Gallery</h1>
      <div id="jumplinks">
        <span style="font-weight: bold">Jump to:</span><br /><a href="#fullbody"
      >Full Body</a
      >&ensp;|&ensp; <a href="#refsheets">Reference Sheets</a>
      </div>
      <b-container id="nsfwconainter" class="mt-4">
        <b-row class="mb-sm-2">
          <b-col class="title-col" id="multi">Multiple Characters</b-col>
        </b-row>
        <b-row class="pb-3">
          <b-col></b-col>
          <b-col cols="6">
            <b-img
              :src="require('@/assets/nsfwgallery/nsfw10.png')"
              fluid
              />
          </b-col>
          <b-col></b-col>
        </b-row>
        <b-row class="mt-lg-3 mb-sm-2">
          <b-col class="title-col" id="fullbody">Full Body</b-col>
        </b-row>
        <b-row class="pb-3">
          <b-col>
            <b-img
              :src="require('@/assets/nsfwgallery/nsfw1.png')"
              fluid
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              :src="require('@/assets/nsfwgallery/nsfw2.png')"
              fluid
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              :src="require('@/assets/nsfwgallery/nsfw3.png')"
              fluid
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              :src="require('@/assets/nsfwgallery/nsfw4.png')"
              fluid
            ></b-img>
          </b-col>
        </b-row>
        <b-row class="mt-lg-3 mb-sm-2">
          <b-col class="title-col" id="refsheets">Reference Sheets</b-col>
        </b-row>
        <b-row class="pb-3">
          <b-col>
            <b-img :src="require('@/assets/nsfwgallery/nsfw11.jpg')" fluid />
          </b-col>
        </b-row>
        <b-row class="pb-3">
          <b-col>
          <b-img :src="require('@/assets/nsfwgallery/nsfw9.jpg')" fluid />
          </b-col>
        </b-row>
        <b-row class="pb-3">
          <b-col>
            <b-img
              :src="require('@/assets/nsfwgallery/nsfw5.jpg')"
              fluid
            ></b-img>
          </b-col>
        </b-row>
        <b-row class="pb-3">
          <b-col>
            <b-img
              :src="require('@/assets/nsfwgallery/nsfw6.png')"
              fluid
            ></b-img>
          </b-col>
        </b-row>
        <b-row class="pb-3">
          <b-col>
            <b-img
              :src="require('@/assets/nsfwgallery/nsfw7.png')"
              fluid
            ></b-img>
          </b-col>
        </b-row>
        <b-row class="pb-3">
          <b-col>
            <b-img
              :src="require('@/assets/nsfwgallery/nsfw8.png')"
              fluid
            ></b-img>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import confirmation from "../components/Confirmation.vue";
export default {
  components: {
    confirmation
  },
  name: "nsfwGallery",
  data() {
    return {
      ofAge: false,
      inStorage: false
    };
  },
  created() {
    let confirmStr = localStorage.getItem("confirm");
    if (confirmStr !== null) {
      this.inStorage = true;
      let confirm = JSON.parse(confirmStr);
      let date = new Date();
      if (date.getTime() > confirm.expDate) {
        localStorage.removeItem("confirm");
        this.inStorage = false;
      } else {
        this.ofAge = confirm.ofAge;
      }
      if (this.inStorage && !this.ofAge) {
        this.$router.push("sfwgallery");
      }
    } else {
      this.inStorage = false;
    }
  }
};
</script>

<style lang="scss" scoped>
#title {
  font-weight: bold;
  margin-bottom: 50px;
  margin-top: 30px;
}
#nsfwconainter {
  margin-bottom: 50px;
}
#jumplinks {
  font-size: 16px;
}
.title-col {
  text-decoration: underline;
  font-weight: bold;
  font-size: 18pt;
}
</style>
