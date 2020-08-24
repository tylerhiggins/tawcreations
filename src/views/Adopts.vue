<template>
  <div class="adopts">
    <h1>Current Adopts!</h1>
    <b-container id="adopt-table">
      <b-row>
        <b-col>
          <h4 class="adopt-desc">Mystery Egg Adopts! (Only 1 Left!): $5</h4>
          <b-img
            class="adopt-img"
            :src="require('@/assets/adopts/eggadopts.png')"
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
        <b-col>
          <h4 class="adopt-desc">Cat Adopt - $20</h4>
          <b-img
                  class="adopt-img"
                  :src="require('@/assets/adopts/catadopt.jpg')"
                  fluid
          ></b-img>
          <p>
            Description: This pretty kitty is up for adoption for $20!<br />
            You can get a custom icon made by me for an extra $10!<br />
            Base made by:
            <a href="https://www.furaffinity.net/user/chesta"
            ><font-awesome-icon icon="paw" /> Chesta</a
            >
          </p>
          <b-button href="https://www.furaffinity.net/view/36202023/"
          >Claim her here! (FA Notes)</b-button
          >
        </b-col>
      </b-row>
      <b-row class="mt-lg-5">
        <b-col>
          <h4 class="adopt-desc">Big Batch Adopts: $10 per character! (4 Left!)</h4>
          <b-img
            class="adopt-img"
            :src="require('@/assets/adopts/big_batch.png')"
            fluid
            style="max-width: 50%"
          ></b-img>
          <p>
            Species list:<br />
            &nbsp;<strike>1) Ferret</strike><br />
            <strike>2) Squirrel</strike><br />
            <strike>3) Otter</strike><br />
            <strike>4) Tanuki</strike><br />
            <strike>5) Possum</strike><br />
            <strike>6) Raccoon<br /></strike>
            7) Mouse<br />
            <strike>8) Kangaroo</strike><br />
            9) Rabbit<br />
            10) Monkey<br />
            <strike>11) Skunk<br /></strike>
            12) Hyena<br /><br />
            I can add a custom ref sheet for an additional $30! (Feral +$15,
            Adult Version(Id Required) +$25).<br />
            These adopts were colored using a P2U base by:
            <a href="https://www.furaffinity.net/user/gatorbite"
              ><font-awesome-icon icon="paw" /> gatorbite</a
            >
          </p>
          <b-button href="https://www.furaffinity.net/view/36345662/"
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
