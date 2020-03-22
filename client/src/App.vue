<template>
  <div id="app">
    <Home @open-dashboard="openDashboard" v-if="!dashboardSelected" />
    <Dashboard v-if="dashboardSelected" />
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
      dashboardSelected: false
    };
  },
  methods: {
    openDashboard: function() {
      this.dashboardSelected = true;
    }
  }
};
</script>

<style lang="scss"></style>
