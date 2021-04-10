<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">
            <font-awesome-icon icon="home" size="lg" />
          </b-nav-item>
          <b-nav-item-dropdown class="nav_drop" text="Prices">
            <b-dropdown-item style="color: black" to="/digitalprices"
              >Digital</b-dropdown-item
            >
            <b-dropdown-item to="/traditionalprices"
              >Traditional</b-dropdown-item
            >
            <b-dropdown-item to="/craftprices">Crafts</b-dropdown-item>
            <b-dropdown-item to="/#" disabled>Fursuits (Coming Soon!)</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item to="/adopts">Adopts</b-dropdown-item>
            <b-dropdown-item to="/ych">YCH Commissions</b-dropdown-item>
            <b-dropdown-item to="/nsfwych">18+ YCH</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown class="nav_drop" text="Galleries">
            <b-dropdown-item to="/sfwgallery">Gallery</b-dropdown-item>
            <b-dropdown-item to="/nsfwgallery">18+ Gallery</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item to="/#" disabled
              >Crafts! (Coming Soon!)</b-dropdown-item
            >
            <b-dropdown-item to="/#" disabled
              >Fursuits! (Coming Soon!)</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item-dropdown class="nav_drop" text="About">
            <b-dropdown-item to="/about">About Me</b-dropdown-item>
            <b-dropdown-item to="/tos">Terms of Service(TOS)</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/store">Store</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-nav-item
              style="padding-right: 10px"
              href="https://discord.gg/gzm29Nr"
            >
              <font-awesome-icon :icon="['fab', 'discord']" />
            </b-nav-item>
            <b-nav-item
              style="padding-right: 10px"
              href="https://www.instagram.com/toxicangelwolfy/"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </b-nav-item>
            <b-nav-item
              style="padding-right: 10px"
              href="https://www.deviantart.com/toxicangelwolfy"
            >
              <font-awesome-icon :icon="['fab', 'deviantart']" />
            </b-nav-item>
            <b-nav-item
              style="padding-right: 10px"
              href="https://trello.com/b/QLelcq6Z/toxic-angel-wolfy-creations-queues"
            >
              <font-awesome-icon :icon="['fab', 'trello']" />
            </b-nav-item>
            <b-nav-item
              style="padding-right: 10px"
              href="https://www.furaffinity.net/user/toxicangelwolfy"
            >
              <font-awesome-icon icon="paw" />
            </b-nav-item>
            <b-nav-item href="https://ko-fi.com/toxicangelwolfycreations">
              <font-awesome-icon icon="coffee" />
            </b-nav-item>
          </b-nav-form>
          <b-nav-item>
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
              <input type="hidden" name="cmd" value="_s-xclick">
              <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </form>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="status">
      <b-table-simple id="statustable" bordered small dark>
        <colgroup>
          <col />
        </colgroup>
        <colgroup>
          <col />
          <col />
          <col />
        </colgroup>
        <b-thead>
          <b-tr>
            <b-th colspan="3" id="cstatustitle"
              >Current Commission Status:</b-th
            >
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr>
            <b-th variant="success"
              ><span id="artstatus">Art: Open!</span></b-th
            >
            <b-th variant="success"
              ><span id="craftstatus">Crafts: Open!</span></b-th
            >
            <b-th variant="danger"
              ><span id="fsstatus">Fursuits: Closed</span></b-th
            >
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
    <router-view />
    <footer id="footer">
      <b-container>
        <b-row>
          <b-col>
            <div class="mobileLinks kofiLink text-center">
              <a href="https://ko-fi.com/toxicangelwolfycreations">
                Buy me a coffee!
                <font-awesome-icon size="lg" icon="coffee" />
              </a>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="extraLinks text-center">
              <router-link to="/about">About me</router-link
              >&ensp;&ensp;&ensp;&ensp;<span class="splitter">|</span
              >&ensp;&ensp;&ensp;&ensp;<router-link to="/tos"
                >Terms of Service</router-link
              >
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="mobileLinks footerInfo text-center py-1">
              <a href="https://www.furaffinity.net/user/toxicangelwolfy"
                >Furaffinity</a
              >&ensp;&ensp;&ensp;&ensp;<span class="splitter">|</span>
              &ensp;&ensp;&ensp;&ensp;<a
                href="https://www.deviantart.com/toxicangelwolfy"
                >Deviantart</a
              >&ensp;&ensp;&ensp;&ensp;<span class="splitter">|</span>
              &ensp;&ensp;&ensp;&ensp;<a
                href="https://twitter.com/wolfy_creations"
                >Twitter</a
              >&ensp;&ensp;&ensp;&ensp;<span class="splitter">|</span>
              &ensp;&ensp;&ensp;&ensp;<a
                href="https://www.instagram.com/toxicangelwolfy/"
                >Instagram</a
              >&ensp;&ensp;&ensp;&ensp;<span class="splitter">|</span>
              &ensp;&ensp;&ensp;&ensp;<a
                href="https://trello.com/b/QLelcq6Z/toxic-angel-wolfy-creations-queues"
                >Trello</a
              >&ensp;&ensp;&ensp;<span class="splitter">|</span>
              &ensp;&ensp;&ensp;<a href="https://discord.gg/gzm29Nr"
                >Discord Server</a
              >
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="footer-copyright text-center py-2">
              Copyright &copy;2020 Toxic Angel Wolfy Creations<br />
              <div class="text-center pt-lg-2">
                <a
                  class="btn"
                  href="https://github.com/tylerhiggins/tawcreations2"
                >
                  <font-awesome-icon size="2x" :icon="['fab', 'github']" />
                </a>
                <a class="btn" href="https://bootstrap-vue.js.org/">
                  <font-awesome-icon size="2x" :icon="['fab', 'bootstrap']" />
                </a>
              </div>
              <div><a href="./sitemap.xml">Sitemap</a></div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  watch: {
    $route(to) {
      document.title = to.meta.title || "Toxic Angel Wolfy Creations";
    }
  }
};
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
a,
a:link,
a:visited,
a:hover,
a:active {
  color: white;
  margin-bottom: fill;
}
.nav_drop a {
  color: black;
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
.extraLinks {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
}
#navlogo {
  max-width: 40px;
  max-height: 46px;
}
</style>
