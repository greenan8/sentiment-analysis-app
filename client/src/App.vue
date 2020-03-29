<template>
  <div id="app">
    <Home @open-dashboard="openDashboard($event)" v-if="!dashboardSelected" />
    <Dashboard
      @close-dashboard="closeDashboard"
      :product="product"
      v-if="dashboardSelected"
    />
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Dashboard from './components/Dashboard.vue';

export default {
  name: 'App',
  components: {
    Home,
    Dashboard
  },
  data() {
    return {
      dashboardSelected: false,
      product: null
    };
  },
  methods: {
    openDashboard(product) {
      this.dashboardSelected = true;
      this.product = product;
    },
    closeDashboard() {
      this.dashboardSelected = false;
    }
  }
};
</script>

<style lang="scss">
// Import Bulma's core
@import '~bulma/sass/utilities/_all';

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  'primary': (
    #4099ff,
    findColorInvert(#4099ff)
  )
);

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';

html {
  background: $light;
}
</style>
