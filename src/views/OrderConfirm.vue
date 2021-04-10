<template>
  <div class="orderconfirm">
    <b-container>
      <b-row>
        <b-col>
        <b-img
          class="logoimg"
          fluid
          :src="require('@/assets/logos/logo.jpg')" />
        </b-col>
        <b-col class="align-self-center">
          <h1 id="message">Thank you for your purchase!</h1>
          <h4>I hope you enjoy!</h4>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'orderconfirm'
};

</script>

<style scoped lang="scss">
#message{
  font-weight: bold;
}
</style>
