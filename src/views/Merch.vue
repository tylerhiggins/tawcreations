<template>
  <div class="merch">
    <h1 class="mb-lg-5">Stickers & Prints for Sale</h1>
    <b-container>
      <b-row>
        <b-col>
          <h3>Orca-Puppy Stickers</h3>
          <b-img
              class="itm-img"
            :src="require('@/assets/merch/orca_pups.jpg')"
            fluid
          >
          </b-img>
        </b-col>
      </b-row>
      <b-row>
        <b-col align="center" class="mt-md-2">
          <form target="paypal" action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="T28SKHYAXSKNL">
            <table>
              <tr><td><input type="hidden" name="on0" value="Sticker Type">Sticker Type</td></tr><tr><td><select name="os0">
              <option value="Individual Sticker">Individual Sticker $1.00 USD</option>
              <option value="Sticker Sheet">Sticker Sheet $5.00 USD</option>
              <option value="Vinyl Car Decal Ind.">Vinyl Car Decal Ind. $10.00 USD</option>
              <option value="Vinyl Car Decal Set">Vinyl Car Decal Set $20.00 USD</option>
            </select> </td></tr>
            </table>
            <input type="hidden" name="currency_code" value="USD">
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
          </form>

        </b-col>
      </b-row>
      <b-row style="margin-top: 20px">
        <b-col>
          <h3>Easter Stickers (Limited Time!!!)</h3>
          <b-img
              class="itm-img"
              :src="require('@/assets/merch/easter_stickers.png')"
              fluid
          >
          </b-img>
        </b-col>
      </b-row>
      <b-row>
        <b-col align="center" class="mt-md-2">
          <form target="paypal" action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="RAS327LPL56UL">
            <table>
              <tr><td><input type="hidden" name="on0" value="Sticker Type">Sticker Type</td></tr><tr><td><select name="os0">
              <option value="Individual Sticker">Individual Sticker $1.00 USD</option>
              <option value="Sticker Sheet">Sticker Sheet $5.00 USD</option>
              <option value="Vinyl Car Decal Ind.">Vinyl Car Decal Ind. $10.00 USD</option>
              <option value="Vinyl Car Decal Set">Vinyl Car Decal Set $20.00 USD</option>
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
</template>

<script>
export default {
  name: "store"
};
</script>

<style scoped lang="scss">
.merch {
  text-align: center;
}
.itm-img {
  max-width: 75%;
}
.desc {
  font-size: 20px;
}
.desctext {
  font-weight: bold;
  text-decoration: underline;
}
</style>
