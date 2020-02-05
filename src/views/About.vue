<template>
  <div class="about">
    <b-table-simple borderless id="about-table">
      <b-thead>
        <colgroup><col></colgroup>
        <colgroup><col><col></colgroup>
      </b-thead>
      <b-tbody>
        <b-tr><br></b-tr>
        <b-tr>
          <b-th>
          <b-img id="avatar" :src="require('@/assets/about/avatar.jpg')"
                 alt="Toxic and Lucky Real Life"></b-img>
          </b-th>
          <b-th id="paragraph">
          <p>
            Hello! My name is Toxic Angel Wolfy! I am a freelance artist and crafter
            specializing in artwork and crafts for the <a href="https://furscience.com/whats-a-furry/">
            furry fandom!</a> I currently live in Oregon, U.S. and am engaged to a wonderful
            husky who is named Lucky! My hobbies and interests include exploring new places,
            drawing, and video gaming! My goal in life is to create a better world through art and
            helping others. I would like to thank you for your interest in my work, and hope
            that you enjoy my arts and crafts!<br> Feel free to contact me through any of my
            social media pages, or email me at <a href="mailto: toxicangelwolfycreations@gmail.com">toxicangelwolfycreations@gmail.com</a>
            for any inquiries about my work!
          </p>
          </b-th>
        </b-tr>
      </b-tbody>
    </b-table-simple>
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
  }
  #avatar {
    max-width: 100%;
    margin-right: 200px;
    color: white;
  }
</style>
