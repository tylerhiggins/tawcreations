<template>
  <div class="adopts">
    <h1>Current Adopts!</h1>
    <b-container id="adopt-table">
      <b-row>
        <b-col align="center">
          <h4 class="adopt-desc">Custom Adopts: Starting at $40</h4>
          <b-img
            class="adopt-img"
            :src="require('@/assets/adopts/custom_ex.jpg')"
            style="max-width: 75%"
            fluid
            ></b-img>
          <p>
            Comes with a simple design, can be made on a base or my own art.
            Complex designs are an additional $20.<br>
            Base by <a href="https://www.furaffinity.net/user/chesta"
          ><font-awesome-icon icon="paw" /> Chesta</a
          ><br>
            <span style="color: red">IMPORTANT: PLEASE PROVIDE DESCRIPTION AFTER PAYMENT!!!!</span>
          </p>
          <form target="_self" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="N4U8ARBUUV9VQ">
            <table>
              <tr><td><input type="hidden" name="on0" value="Adopt Type">Adopt Type</td></tr><tr><td><select name="os0">
              <option value="Basic Adopt">Basic Adopt $40.00 USD</option>
              <option value="Complex Adopt">Complex Adopt $60.00 USD</option>
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
  name: "adopts"
};
</script>

<style scoped lang="scss">
.adopts {
  text-align: center;
}
#adopt-table {
  margin-top: 30px;
  margin-bottom: 30px;
}

.adopt-desc {
  font-weight: bolder;
  text-decoration: underline;
  margin-bottom: 25px;
}
p {
  font-size: 20px;
  margin-top: 20px;
  font-weight: bold;
}
</style>
