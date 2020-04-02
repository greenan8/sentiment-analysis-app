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
          id: 'sales-line'
        },
        xaxis: {
          categories: this.getCategories()
        }
      },
      series: [
        {
          name: 'Actual Sales',
          data: this.getActualSeries()
        },
        {
          name: 'Projected Sale',
          data: this.getProjectedSeries()
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
      c.push('03-09');
      return c;
    },
    getActualSeries() {
      let s = [];
      let db = this.db;
      let keys = Object.keys(db).sort(function(keyA, keyB) {
        return db[keyA].week - db[keyB].week;
      });
      keys.forEach(key => {
        s.push(db[key].sales);
      });
      s.push(null);
      return s;
    },
    getProjectedSeries() {
      let s = [null];
      let db = this.db;
      let keys = Object.keys(db).sort(function(keyA, keyB) {
        return db[keyA].week - db[keyB].week;
      });
      keys.forEach(key => {
        s.push(db[key].sales);
      });
      return s;
    }
  }
};
</script>
