<template>
  <div class="merch">
    <h1 class="mb-lg-5">Stickers & Prints for Sale</h1>
    <b-container>
      <b-row>
        <b-col>
          <h3>Orca-Puppy stickers Pre-order</h3>
          <b-img
              class="onlyimg"
            :src="require('@/assets/merch/orca_pups.jpg')"
            fluid
          >
          </b-img>
          <p class="desc mt-sm-3"><span class="desctext">Full sticker set (image above):</span> $5 + shipping<br>
            <span class="desctext">Individual sticker(s):</span> $1 each + shipping<br>
            <span class="desctext">Vinyl Car Decals:</span> $10 individual / $20 set + shipping<br>
            <span class="desctext">Additional Details:</span> To pre-order, the preferred method is through Furaffinity via
           notes.  Alternatively, you can e-mail me.</p>
          <b-button class="mr-sm-2" href="https://www.furaffinity.net/newpm/toxicangelwolfy/">Note me on FA (Preferred)</b-button>
          <b-button href="mailto:toxicangelwolfycreations@gmail.com?subject=Orca-Puppy Sticker Pre-Order">
            E-mail Me
          </b-button>
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
.onlyimg {
  max-width: 40%;
}
.desc {
  font-size: 20px;
}
.desctext {
  font-weight: bold;
  text-decoration: underline;
}
</style>
