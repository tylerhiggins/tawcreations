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
            <b-nav-form class="pl-sm-2" target="_self" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
              <input type="hidden" name="cmd" value="_s-xclick">
              <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </b-nav-form>
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
