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
