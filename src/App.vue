<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About Me</b-nav-item>
          <b-nav-item-dropdown class="nav_drop" text="Prices">
            <b-dropdown-item style="color: black" to="/digitalprices">Digital</b-dropdown-item>
            <b-dropdown-item to="/traditionalprices">Traditional</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/tos">Terms of Service</b-nav-item>
          <b-nav-item-dropdown class="nav_drop" text="Galleries">
            <b-dropdown-item to="/#" disabled>SFW Gallery (Coming soon!)</b-dropdown-item>
            <b-dropdown-item to="/#" disabled>18+ NSFW Gallery (Coming Soon!)</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item to="/#" disabled>Crafts! (Coming Soon!)</b-dropdown-item>
            <b-dropdown-item to="/#" disabled>Fursuits! (Coming Soon!)</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
        <b-nav-item style="padding-right: 10px" href="https://twitter.com/wolfy_creations">
          <font-awesome-icon size="lg" :icon="[ 'fab','twitter-square']"/>
        </b-nav-item>
          <b-nav-item style="padding-right: 10px" href="https://www.instagram.com/toxicangelwolfy/">
            <font-awesome-icon size="lg" :icon="['fab','instagram']" />
          </b-nav-item>
        <b-nav-item style="padding-right: 10px" href="https://www.deviantart.com/toxicangelwolfy">
          <font-awesome-icon size="lg" :icon="['fab', 'deviantart']" />
        </b-nav-item>
        <b-nav-item style="padding-right: 10px" href="https://trello.com/b/QLelcq6Z/toxic-angel-wolfy-creations-queues">
          <font-awesome-icon size="lg" :icon="['fab', 'trello']" />
        </b-nav-item>
        <b-nav-item style="padding-right: 10px" href="https://www.furaffinity.net/user/toxicangelwolfy">
          <font-awesome-icon icon="paw" size="lg" />
        </b-nav-item>
          <b-nav-item href="https://ko-fi.com/toxicangelwolfycreations">
            <font-awesome-icon icon="coffee" size="lg"/>
          </b-nav-item>
        </b-nav-form>
      </b-navbar-nav>
       </b-collapse>
    </b-navbar>
    <router-view />
    <footer id="footer">
      <div class="footer-copyright text-center py-3">Copyright &copy;2020 Toxic Angel Wolfy Creations<br>
        Created and maintained by <a href="https://furaffinity.net/user/luckyhusky">luckyhusky</a><br>
        <div class="text-center pt-lg-2">
          <a class="btn" href="https://github.com/tylerhiggins/tawcreations2">
        <font-awesome-icon size="2x" :icon="['fab','github']" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    watch: {
      '$route'(to) {
        document.title = to.meta.title || "TAWCreations";
      }
    },
  }
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: black;
}
#footer {
  font-size: 12px;
  }
  a, a:link, a:visited, a:hover, a:active {
    color: white;
    margin-bottom: fill;
  }
  .nav_drop a{
    color: black;
  }
body {
  background-color: black;
}
</style>
