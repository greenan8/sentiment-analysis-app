<template>
  <div id="home">
    <b-navbar class="is-primary" spaced shadow>
      <template slot="brand">
        <b-navbar-item>
          <h1 class="title is has-text-white">
            Urban Closet <br />
            <h2 class="subtitle has-text-light">Review Dashboard</h2>
          </h1>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <b-field>
            <b-input
              placeholder="Search..."
              type="search"
              icon="magnify"
              size="is-medium"
              v-model="search"
            >
            </b-input>
          </b-field>
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="container is-fullhd">
      <div class="columns is-desktop is-multiline">
        <div
          v-for="p in filteredProducts"
          :key="p.name"
          class="column is-one-third"
        >
          <div class="card" @click="openDashboard">
            <figure class="image is-1by1">
              <img :src="require(`@/assets/img/${p.file}`)" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {},
  data() {
    return {
      search: '',
      products: [
        { name: 'sweater', file: 'sweater.png' },
        { name: 'pants', file: 'pants.png' },
        { name: 'handbag', file: 'handbag.png' },
        { name: 'shoe', file: 'shoes.png' },
        { name: 'shirt', file: 'shirt.png' },
        { name: 'dress', file: 'dress.png' }
      ]
    };
  },
  methods: {
    openDashboard() {
      this.$emit('open-dashboard');
    }
  },
  computed: {
    filteredProducts() {
      if (!this.search) return this.products;
      else return this.products.filter(p => p.name.startsWith(this.search));
    }
  }
};
</script>

// show: function(this.search){ return !search ||
p.name.startsWith(search.toLowerCase())
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#home .container {
  padding: 3rem;
}
#home .container .card {
  padding: 2rem;
  margin: 1rem 0;
}
#home .container .card figure {
  margin: 0 auto;
}

#home .container .card {
  transition: transform 0.5s;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 2s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.15);
    content: '';
    opacity: 0;
    z-index: -1;
  }

  &:hover,
  &:focus {
    transform: scale3d(1.006, 1.006, 1);

    &::after {
      opacity: 1;
    }
  }
}
</style>
