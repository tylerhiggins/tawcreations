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
          <h4 class="adopt-desc">Big Batch Adopts: $10 per character! (3 Left!)</h4>
          <b-img
            class="adopt-img"
            :src="require('@/assets/adopts/batch1.png')"
            fluid
          ></b-img>
          <p>
            Species left: Mouse, Hyena, Rabbit<br /><br />
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
      <b-row class="mt-lg-4">
        <b-col>
          <h4 class="adopt-desc">Lava Cheetah: $45</h4>
          <b-img
              class="adopt-img"
              style="max-width: 40%"
              :src="require('@/assets/adopts/lava_cheetah.jpg')"
              fluid
          ></b-img>
          <p>
            Adopt this firey-quick Cheetah for only $45!<br />
            Additional Options: <br />
            Icon: +$10, General Reference Sheet: +$30, Adult Reference Sheet(ID Required): +$25 <br />
            Base by <a href="https://www.furaffinity.net/user/chesta"
            ><font-awesome-icon icon="paw" /> Chesta</a
            >
          </p>
          <b-button href="https://www.furaffinity.net/view/39248112/"
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
