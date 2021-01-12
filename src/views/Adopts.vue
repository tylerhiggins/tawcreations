<template>
  <div class="adopts">
    <h1>Current Adopts!</h1>
    <b-container id="adopt-table">
      <b-row>
        <b-col>
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
          >
          </p>
          <b-button href="https://www.furaffinity.net/view/39977781/"
          >More Info</b-button
          >
        </b-col>
        <b-col>
          <h4 class="adopt-desc">Mystery Egg Adopts! (Only 1 Left!): $5</h4>
          <b-img
              class="adopt-img"
              :src="require('@/assets/adopts/eggadopts.png')"
              style="max-width: 75%"
              fluid
          ></b-img>
          <p>
            Choose an egg and you will receive a mystery character reference
            sheet based on the egg color!<br />
            Price is $5 per egg, or egg with head shot commission for $15!
          </p>
          <b-button href="https://www.furaffinity.net/view/34595548/"
          >Claim Here! (FA Notes)</b-button
          >
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
