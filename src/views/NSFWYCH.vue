<template>
  <div class="nsfwych text-center">
    <div id="notconfirmed" v-if="!inStorage">
      <confirmation :coming-from="'ych'"></confirmation>
    </div>
    <div id="confirmed" v-if="ofAge">
      <h1 id="nsfwych_title">Current 18+ YCH's</h1>
      <b-container class="ych_table">
        <b-row>
          <b-col align="center">
            <h4 class="ych_title">Tied Up YCH - $20</h4>
            <b-img
              class="ychimg"
              :src="require('@/assets/nsfwych/nsfwych1.png')"
              fluid
            ></b-img>
            <p class="ych_description">
              <span class="ych_notes"
                >Note: Canine or feline female characters only.</span
              ><br />
              Comes with a clean and messy version! I can make small edits to
              this piece.<br />
              This is a pay-to-use base by
              <a href="https://www.furaffinity.net/user/tailung">
                tai_lung <font-awesome-icon icon="paw" />
              </a><br>
              <span style="color: red">IMPORTANT: PLEASE PROVIDE LINK TO REFERENCE SHEET AFTER PAYMENT!!!!</span>
            </p>
            <form target="_self" action="https://www.paypal.com/cgi-bin/webscr" method="post">
              <input type="hidden" name="cmd" value="_s-xclick">
              <input type="hidden" name="hosted_button_id" value="M4BPCQ4RPDRMU">
              <table>
                <tr><td><input type="hidden" name="on0" value="Species">Species</td></tr><tr><td><select name="os0">
                <option value="Canine">Canine $20.00 USD</option>
                <option value="Feline">Feline $20.00 USD</option>
              </select> </td></tr>
              </table>
              <input type="hidden" name="currency_code" value="USD">
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </form>

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
  name: "nsfwych",
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
        this.$router.push("ych");
      }
    } else {
      this.inStorage = false;
    }
  }
};
</script>

<style lang="scss" scoped>
#nsfwych_title {
  font-weight: bold;
  text-decoration: underline;
}
.ych_table {
  margin-top: 50px;
  margin-bottom: 50px;
}
.ychimg {
  max-width: 75%;
}
.ych_description {
  font-size: 18px;
  margin-top: 20px;
}
.ych_notes {
  color: red;
}
</style>
