<template>
  <div id="app">
    <Home />
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
  }
};
</script>

<style lang="scss"></style>
