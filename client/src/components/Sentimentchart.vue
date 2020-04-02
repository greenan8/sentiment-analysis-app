<template>
  <div class="sales">
    <apexcharts
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'Saleschart',
  props: {
    db: parent.db
  },
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: 'sentiment-line'
        },
        xaxis: {
          categories: this.getCategories()
        }
      },
      series: [
        {
          name: 'Sentiment',
          data: this.getSeries()
        }
      ]
    };
  },
  methods: {
    getCategories() {
      let c = [];
      let db = this.db;
      let keys = Object.keys(db).sort(function(keyA, keyB) {
        return db[keyA].week - db[keyB].week;
      });
      keys.forEach(key => {
        const date = db[key].shortform.split('-');
        c.push(date[1] + '-' + date[2]);
      });
      return c;
    },
    getSeries() {
      let s = [];
      let db = this.db;
      let keys = Object.keys(db).sort(function(keyA, keyB) {
        return db[keyA].week - db[keyB].week;
      });
      keys.forEach(key => {
        let p = parseInt(db[key].percentage) / 100;
        db[key].sentiment ? s.push(p) : s.push(-p);
      });
      return s;
    }
  }
};
</script>
