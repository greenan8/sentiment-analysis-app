<template>
  <div id="home">
    <b-navbar class="is-primary" spaced shadow>
      <template slot="brand">
        <b-navbar-item>
          <h1 class="title has-text-white">
            Urban Closet <br />
            <h2 class="subtitle has-text-light">Review Dashboard</h2>
          </h1>
        </b-navbar-item>
      </template>

      <template slot="end">
        <div class="search">
          <b-input
            placeholder="Search..."
            type="search"
            rounded
            icon="magnify"
            size="is-large"
            v-model="search"
          >
          </b-input>
        </div>
      </template>
    </b-navbar>

    <div class="container is-fullhd">
      <div class="field">
        <b-tag
          v-if="isTagActive"
          type="is-danger"
          size="is-medium"
          closable
          aria-close-label="Close tag"
          @close="isTagActive = false"
        >
          This is an MVP for Urban Closet. The only working product is the
          sweater.
        </b-tag>
      </div>

      <div class="columns is-multiline">
        <div
          v-for="p in filteredProducts"
          :key="p.name"
          class="column is-one-third"
        >
          <div class="card" @click="openDashboard(p.name)">
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
      isTagActive: true,
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
    openDashboard(product) {
      this.$emit('open-dashboard', product);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#home {
  nav {
    .navbar-end .search {
      margin-right: 3vw;
      width: 35vw;
    }
    .field {
      width: 100%;
    }
    @media (max-width: 1024px) {
      .navbar-end .search {
        width: 94%;
        margin: 0 3%;
      }
    }
  }

  .container {
    padding: 3rem;
  }

  .card {
    padding: 2rem;
    margin: 1rem 0;

    figure {
      margin: 0 auto;
    }

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
}
</style>
