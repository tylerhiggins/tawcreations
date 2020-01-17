<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="#">Prices</b-nav-item>
          <b-nav-item to="/tos">Terms of Service</b-nav-item>
        </b-navbar-nav>
       </b-collapse>
    </b-navbar>
    <router-view />
    <footer id="footer">
      <div class="footer-copyright text-center py-3">Copyright &copy;2020 Toxic Angel Wolfy Creations<br>
        Website Created by Tyler Higgins<br>
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
</style>
