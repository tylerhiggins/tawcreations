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
          <form target="_self" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="NF24GGBL9ZRAG">
            <table>
              <tr><td><input type="hidden" name="on0" value="Sticker Type">Sticker Type</td></tr><tr><td><select name="os0">
              <option value="Individual Sticker">Individual Sticker $1.00 USD</option>
              <option value="Sticker Sheet">Sticker Sheet $5.00 USD</option>
              <option value="Car Decal Vinyl Ind.">Car Decal Vinyl Ind. $10.00 USD</option>
              <option value="Car Decal Vinyl Set">Car Decal Vinyl Set $20.00 USD</option>
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
          <form target="_self" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="MRXDC66N8QC6W">
            <table>
              <tr><td><input type="hidden" name="on0" value="Sticker Type">Sticker Type</td></tr><tr><td><select name="os0">
              <option value="Individual Sticker">Individual Sticker $1.00 USD</option>
              <option value="Sticker Sheet">Sticker Sheet $5.00 USD</option>
              <option value="Car Decal Vinyl Ind.">Car Decal Vinyl Ind. $10.00 USD</option>
              <option value="Car Decal Vinyl Set">Car Decal Vinyl Set $20.00 USD</option>
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
          <h3>Easter Egg Grab Bags (Limited Time!!!)</h3>
          <b-img
              class="itm-img"
              :src="require('@/assets/merch/easter_eggs.png')"
              fluid
          >
          </b-img>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
        <p class="desc">
          ~Small regular colored eggs comes with 1 adopt, stickers: $40<br>
          ~Small non-shiny eggs comes with 1 adopt,1 badge, stickers: $50<br>
          ~Small shiny eggs comes with 1 adopt,1 fullbody badge, stickers: $80<br>
          ~Big non-shiny eggs comes with 2 adopts,2 badges, stickers: $100<br>
          ~Big shiny eggs comes with 2 adopts,2 badges,stickers, shoutout for donations!: $150<br>
          -Eggs can come with candy or goodies! These are grab bags!!!
        </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col align="center" class="mt-md-2">
          <form target="_self" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="SEDGQQ84ZQC6Q">
            <table>
              <tr><td><input type="hidden" name="on0" value="Bag Type">Bag Type</td></tr><tr><td><select name="os0">
              <option value="Small Regular Colored Egg">Small Regular Colored Egg $40.00 USD</option>
              <option value="Small non-shiny Egg">Small non-shiny Egg $50.00 USD</option>
              <option value="Small Shiny Egg">Small Shiny Egg $80.00 USD</option>
              <option value="Big non-shiny Egg">Big non-shiny Egg $100.00 USD</option>
              <option value="Big Shiny Egg">Big Shiny Egg $150.00 USD</option>
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
  max-width: 50%;
}
.desc {
  font-size: 20px;
}
.desctext {
  font-weight: bold;
  text-decoration: underline;
}
</style>
