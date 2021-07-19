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
