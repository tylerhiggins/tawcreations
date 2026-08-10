<template>
  <div class="about">
    <h1 class="text-center" id="abtitle">About Me!</h1>
    <b-container>
      <b-row>
        <b-col>
          <b-img id="avatar" :src="require('@/assets/about/avatar.jpg')" fluid></b-img>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col>
          <p>
            Hello! My name is Toxic Angel Wolfy! I am a freelance artist and crafter
            specializing in artwork and crafts for the
            <a href="https://furscience.com/whats-a-furry/"> furry fandom!</a> I
            currently live in Washington, U.S. and recently got married 
            on September 4th, 2022 to a wonderful husky who
            is named Lucky! My hobbies and interests include exploring new places,
            drawing, and video gaming!<br /><br />My goal in life is to create a
            better world through art and helping others. I would like to thank you
            for your interest in my work, and hope that you enjoy my arts and
            crafts!<br /><br />
            Feel free to contact me through any of my social media pages, or email
            me at
            <a href="mailto: toxicangelwolfycreations@gmail.com"
            >toxicangelwolfycreations@gmail.com</a
            >
            for any inquiries about my work!
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style scoped lang="scss">
.about {
  text-align: center;
}
p {
  color: white;
  font-weight: bold;
}
#abtitle {
  text-decoration: underline;
  margin-bottom: 30px;
}
</style>
