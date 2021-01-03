<template>
  <div class="craftprices">
    <b-container>
      <h1 id="crafttitle">Craft Prices</h1>
      <b-row>
        <b-col><h4 class="typetitle">Wood Burning:</h4>
          <h5>$60 for basic<br>$80 for color</h5>
          <p>Addons: NSFW: +$10, Extra Details: +$20</p></b-col>
      </b-row>
      <b-row>
        <b-col><h4 class="typetitle">Airbrushing:<br></h4>
          <h5>Headshots - $40<br>
          Halfbody(thighs up) - $80<br> Fullbody Chibi - $110<br> Fullbody - $160<br>
            Couples Fullbody - $320<br> Couples Halfbody - $160</h5><p>
          Addons: Tail +$20, Wings +$20
        </p></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "craftprices"
};
</script>

<style scoped lang="scss">
.craftprices{
  text-align: center;
}
.typetitle {
  font-weight: bold;
  text-decoration: underline;
}
#crafttitle {
  font-weight: bold;
}
</style>
