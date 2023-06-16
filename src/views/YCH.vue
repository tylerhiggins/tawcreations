<template>
  <div class="ych text-center">
    <b-container>
      <div id="ych_intro">
        <h1>YCH Commissions</h1>
        <p>
          What is a YCH? YCH means Your Character Here. They are commissions
          where the pose of the character is pre-made but will be drawn with
          your character or fursona. Here are the current YCH's I am offering.
        </p>
      </div>
      <hr />
      <b-row class="mt-md-4">
        <b-col align="center">
          <h4 class="ych_title">Sergal or Shark Headshot Icon - $10</h4>
          <b-img
            class="ychimg"
            :src="require('@/assets/safeych/sergal.jpg')"
            fluid
          ></b-img>
          <p class="ych_description">
            <span class="ych_notes"
              >Note: Sergal or shark characters only.<br
            /></span>
            Headshot icon of your sergal or shark character with background of
            your choice! Only $10 per icon!<br>
            <span style="color: red">IMPORTANT: PLEASE PROVIDE LINK TO REFERENCE SHEET AFTER PAYMENT!!!!</span>
          </p>
          <form target="_self" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="9ZQBZ4VUZC5UJ">
            <table>
              <tr><td><input type="hidden" name="on0" value="Option">Option</td></tr><tr><td><select name="os0">
              <option value="Shark">Shark $10.00 USD</option>
              <option value="Sergal">Sergal $10.00 USD</option>
            </select> </td></tr>
            </table>
            <input type="hidden" name="currency_code" value="USD">
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
          </form>

        </b-col>
        <b-col align="center">
          <h4 class="ych_title">Dutch Angel Dragon YCH - $10</h4>
          <b-img
            class="ychimg"
            :src="require('@/assets/safeych/dadych.jpg')"
            style="max-width: 75%"
            fluid
          ></b-img>
          <p class="ych_description">
            Includes a custom background and expression. For $3.50 I can have it
            shipped as a badge (shipping available in U.S. only).<br>
            <span style="color: red">IMPORTANT: PLEASE PROVIDE LINK TO REFERENCE SHEET AFTER PAYMENT!!!!</span>
          </p>
          <form target="_self" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="A7BCD26CUWVD8">
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
          </form>

        </b-col>
      </b-row>
      <b-row class="mt-lg-4">
        <b-col>
          <h4 class="ych_title">Trick-or-Treat!</h4>
          <b-img
              class="ychimg"
              :src="require('@/assets/safeych/haloweenych.png')"
              style="max-width: 40%"
              fluid
          ></b-img>
          <p></p>
          <b-button href="https://www.furaffinity.net/view/38609421/"
          >More Info</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ych"
};
</script>

<style lang="scss" scoped>
hr {
  border-color: white;
  border-width: 3px;
}

#ychtable {
  color: white;
}
.ych_description {
  font-size: 18px;
  margin-top: 20px;
}
.ych_notes {
  color: red;
}
#halloweenbtn {
  background-color: #F76302;
  font-weight: bold;
}
</style>
