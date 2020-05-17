<template>
  <div class="nsfwGallery text-center">
    <div id="notconfirmed" v-if="!inStorage">
      <confirmation :coming-from="'gallery'"></confirmation>
    </div>
    <div id="confirmed" v-if="ofAge">
      <h1 id="title">18+ Gallery</h1>
      <b-container id="nsfwconainter">
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
        <b-row class="pb-3">
          <b-img :src="require('@/assets/nsfwgallery/nsfw9.jpg')" fluid />
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
</style>
