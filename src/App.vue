<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-navbar-brand to="/"><img id="navlogo" src="./assets/home/navicon.png"> Toxic Angel Wolfy Creations</b-navbar-brand>
          <b-nav-item-dropdown class="nav_drop" text="Prices">
            <b-dropdown-item style="color: black" to="/digitalprices">Digital</b-dropdown-item>
            <b-dropdown-item to="/traditionalprices">Traditional</b-dropdown-item>
            <b-dropdown-item to="/adopts">Adopts</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown class="nav_drop" text="Galleries">
            <b-dropdown-item to="/sfwgallery">SFW Gallery</b-dropdown-item>
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
          <font-awesome-icon icon="paw" size="lg"/>
        </b-nav-item>
          <b-nav-item href="https://ko-fi.com/toxicangelwolfycreations">
            <font-awesome-icon icon="coffee" size="lg"/>
          </b-nav-item>
        </b-nav-form>
      </b-navbar-nav>
       </b-collapse>
    </b-navbar>
    <div class="status">
      <b-table-simple id="statustable" bordered small dark>
        <colgroup><col></colgroup>
        <colgroup><col><col><col></colgroup>
        <b-thead>
          <b-tr>
            <b-th colspan="3" id="cstatustitle">Current Commission Status:</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr>
            <b-th variant="success"><span id="artstatus">Art: Open!</span></b-th>
            <b-th variant="success"><span id="craftstatus">Crafts: Open!</span></b-th>
            <b-th variant="danger"><span id="fsstatus">Fursuits: Closed</span></b-th>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
    <router-view />
    <footer id="footer">
      <div class="mobileLinks kofiLink text-center">
        <a href="https://ko-fi.com/toxicangelwolfycreations">
          Buy me a coffee!
          <font-awesome-icon size="lg" icon="coffee"/>
        </a>
      </div>
      <div class="extraLinks text-center">
        <router-link to="/about">About me</router-link>&ensp;&ensp;&ensp;&ensp;<span class="splitter">|</span>&ensp;&ensp;&ensp;&ensp;<router-link to="/tos">Terms of Service</router-link>
      </div>
      <div class="mobileLinks footerInfo text-center py-1">
        <a href="https://www.furaffinity.net/user/toxicangelwolfy">Furaffinity</a>&ensp;&ensp;&ensp;&ensp;<span class="splitter">|</span>
        &ensp;&ensp;&ensp;&ensp;<a href="https://www.deviantart.com/toxicangelwolfy">Deviantart</a>&ensp;&ensp;&ensp;&ensp;<span class="splitter">|</span>
        &ensp;&ensp;&ensp;&ensp;<a href="https://twitter.com/wolfy_creations">Twitter</a>&ensp;&ensp;&ensp;&ensp;<span class="splitter">|</span>
        &ensp;&ensp;&ensp;&ensp;<a href="https://www.instagram.com/toxicangelwolfy/">Instagram</a>&ensp;&ensp;&ensp;&ensp;<span class="splitter">|</span>
        &ensp;&ensp;&ensp;&ensp;<a href="https://trello.com/b/QLelcq6Z/toxic-angel-wolfy-creations-queues">Trello</a>
      </div>
      <div class="footer-copyright text-center py-2">Copyright &copy;2020 Toxic Angel Wolfy Creations<br>
        Created and maintained by <a href="https://furaffinity.net/user/luckyhusky">luckyhusky</a><br>
        <div class="text-center pt-lg-2">
          <a class="btn" href="https://github.com/tylerhiggins/tawcreations2">
        <font-awesome-icon size="2x" :icon="['fab','github']" />
          </a>
          <a class="btn" href="https://bootstrap-vue.js.org/">
            <font-awesome-icon size="2x" :icon="['fab','bootstrap']" />
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
  .nav_drop {
    margin-top: 6px;
    a {
      color: black;
    }
  }
body {
  background-color: black;
}
  .footerInfo {
    font-size: 16px;
  }
  .splitter {
    font-weight: bold;
  }
  .kofiLink {
    font-weight: bold;
    font-size: 16px;
    margin-top: 20px;
  }
  @media only screen and (min-width: 550px){
    .mobileLinks {
      display: none;
    }
  }
  .status {
    text-align: center;
    background-color: black;
  }
  #cstatustitle {
    text-decoration: underline;
    font-weight: bold;
    font-size: 20px;
  }
  #statustable {
    background-color: black;
  }
  .extraLinks{
    margin-top: 20px;
    margin-bottom:10px;
    font-size: 18px;
  }
  #navlogo {
    max-width: 40px;
    max-height: 46px;
  }
</style>
