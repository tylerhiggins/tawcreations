<template>
  <div class="prices">
    <b-container>
      <b-alert
        :show="dismissCountDown"
        fade
        variant="info"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        <p>
          Please read my
          <a class="alert-link" href="tos">Terms of Service</a> before
          commissioning me!
        </p>
      </b-alert>
    </b-container>
    <h1>Prices</h1>
    <h3>Digital Artwork Prices:</h3>
    <div class="ex_section">
      <p><span>Reference Sheet</span> - Starting at $50<br>
       Includes 3 poses, character bio, a simple background, character name,
        and color palette<br><br>
      Addons: Additional pose(s): +$30 each, Chibi: +$25, NSFW: +$40, Realistic: +$20,
      Clothing +$35, Mate/Partner: +$30 each, Headshot on reference: +$25</p>
      <b-img
        class="ref-example"
        :src="require('@/assets/prices/ref_example.png')"
      ></b-img>
    </div>
    <div class="ex_section">
      <p><span>Fullbody</span> - Starting at $40<br>
      Includes one character and a simple background.<br><br>
      Addons: Complex background: +$25, NSFW: +$40, Clothing +$35</p>
      <b-img
        class="ref-example"
        :src="require('@/assets/prices/fullb_example.png')"
      ></b-img>
    </div>
    <div class="ex_section">
      <p><span>Halfbody</span> - Starting at $35<br>
        Includes a simple background.<br><br>
        Addons: Complex background +$25, NSFW +$20, Clothing +$15</p>
      <b-img
        class="example"
        :src="require('@/assets/prices/halfb_example.png')"
      ></b-img>
    </div>
    <div class="ex_section">
      <p><span>Headshot</span> - Starting at $25<br>
        Includes a simple background.<br><br>
        Addons: Complex background +$25, NSFW: +$10
      </p>
      <b-img
        class="example"
        :src="require('@/assets/prices/head_ex.png')"
      ></b-img>
    </div>
    <div class="ex_section">
      <p><span>Couples/Multi-Character</span> - Starting at $80 for Couple +$30 each additional character<br>
      Includes Fullbody characters and a simple background.<br><br>
      Complex background +$25, NSFW +$40,
      Clothing +$35</p>
      <b-img
        class="example"
        :src="require('@/assets/prices/couples_ex.png')"
      ></b-img>
    </div>
    <div class="ex_section">
      <p><span>Feral</span> - Starting at $40<br>
      Includes a simple background.<br><br>
        Addons: Additional Character(s) +$30 each, Complex background +$25,
        Clothing +$15
      </p>
      <b-img
        class="example"
        :src="require('@/assets/prices/feral_ex.png')"
      ></b-img>
    </div>
    <div class="ex_section">
      <p><span>Chibi</span> - Starting at $25<br>
      Includes a simple background<br><br>
      Addons: Additional Character(s): +$15 each, Complex Background: +$25, NSFW +$10,
      Clothing +$10</p>
      <b-img
        class="example"
        :src="require('@/assets/prices/chibi_ex.png')"
      ></b-img>
    </div>
    <div class="ex_section">
      <p><span>Sketch/Lineart</span> - Sketch: $15 Lineart: $20<br>
      Includes one character of any type(headshot, halfbody, fullbody, etc.)<br><br>
      Addons: Additional Character(s) +$10 each, NSFW +$10</p>
      <b-img
        class="example"
        :src="require('@/assets/prices/sketch_ex.png')"
      ></b-img>
    </div>
    <div class="ex_section">
      <p><span>Icons</span> - Starting at $15<br>
      Includes one character with a simple background and a high res version.<br><br>
      Addons: Additional Character(s): +$10 each (includes both separate and combined image),
        Complex Background: +$20</p>
      <b-img
        class="example"
        :src="require('@/assets/prices/icon_ex.png')"
      ></b-img>
    </div>
    <div class="ex_section">
      <p><span>Stickers</span> - Small: $5 each, Medium: $10 each, Large $20 each<br>
      Includes one character and any type (headshot, halfbody, fullbody, etc.)<br><br>
      Addons: NSFW +$10</p>
      <b-img
        class="example"
        :src="require('@/assets/prices/sticker_ex.jpg')"
      ></b-img>
    </div>
    <div class="ex_section">
      <p><font-awesome-icon id="tele" size="lg" :icon="['fab','telegram']"></font-awesome-icon>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span>Telegram Stickers</span> - $10 Each<br>
        Includes one character and any type (headshot, halfbody, fullbody, etc.)<br><br>
        Addons: NSFW +$10</p>
      <b-img
              class="example"
              :src="require('@/assets/prices/tele_sticker_ex.png')"
      ></b-img>
    </div>
  </div>
</template>

<script>
export default {
  name: "digitalprices",
  data() {
    return {
      dismissSecs: 10,
      dismissCountdown: 0,
    };
  },
  created: function() {
    this.showAlert();
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>

<style scoped lang="scss">
.prices {
  text-align: center;
}
h1 {
  text-decoration: underline;
  font-weight: bold;
  margin-bottom: 50px;
}
h3 {
  font-weight: bold;
  margin-bottom: 10px;
}
.example {
  max-width: 30%;
}
.ref-example {
  max-width: 50%;
}
.ex_section {
  margin-top: 25px;
  margin-bottom: 25px;
}
span {
  text-decoration: underline;
  font-weight: bold;
}
p {
  margin-top: 10px;
}
  #tele {
    color: #27A6E6;
    background-color: white;
  }
</style>
