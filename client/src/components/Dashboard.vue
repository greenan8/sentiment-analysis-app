<template>
  <div id="dashboard">
    <b-navbar class="is-primary" spaced shadow>
      <template slot="brand">
        <b-navbar-item @click="closeDashboard">
          <h1 class="title has-text-white">
            Urban Closet <br />
            <h2 class="subtitle has-text-light">Review Dashboard</h2>
          </h1>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item href="#" class="is-size-5" @click="closeDashboard">
          Home
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="container is-desktop" v-if="axiosDone">
      <h1 id="product" class="title">
        {{ product.charAt(0).toUpperCase() + product.slice(1) }}
      </h1>
      <div class="columns">
        <div class="column is-two-thirds">
          <div id="summary" class="card">
            <h1 class="title is-size-3 has-text-centered">
              Sentiment Summary
            </h1>
            <h2
              v-if="db[weekSelected].sentiment"
              class="is-size-1 has-text-centered has-text-success"
            >
              {{ db[weekSelected].percentage + ' Positive' }}
            </h2>
            <h2
              v-if="!db[weekSelected].sentiment"
              class="is-size-1 has-text-centered has-text-danger"
            >
              {{ db[weekSelected].percentage + ' Negative' }}
            </h2>
          </div>

          <div id="common" class="card">
            <h1 class="title is-size-3 has-text-centered">
              Common Themes
            </h1>
            <div class="columns">
              <div class="card column">
                <h2 class="title is-size-4 has-text-centered has-text-success">
                  Positive Keywords
                </h2>
                <ol>
                  <li
                    class="is-size-4"
                    v-for="word in db[weekSelected].posWords"
                    :key="word"
                  >
                    {{ word }}
                  </li>
                </ol>
              </div>
              <div class="card column">
                <h2 class="title is-size-4 has-text-centered has-text-danger">
                  Negative Keywords
                </h2>
                <ol>
                  <li
                    class="is-size-4"
                    v-for="word in db[weekSelected].negWords"
                    :key="word"
                  >
                    {{ word }}
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div id="sales" class="card">
            <h1 class="title is-size-3 has-text-centered">
              Sales
            </h1>
            <div class="columns">
              <div class="card column">
                <h2 class="title is-size-4 has-text-centered">
                  Sales This Week
                </h2>
                <h1 class="title is-size-2 has-text-centered has-text-primary">
                  {{ db[weekSelected].sales }}
                </h1>
              </div>
              <div class="card column">
                <h2 class="title is-size-4 has-text-centered">
                  Project Sales Next Week
                </h2>
                <h1 class="title is-size-2 has-text-centered has-text-primary">
                  {{ db[weekSelected].projectSales }}
                </h1>
              </div>
            </div>
          </div>
          <div id="graph" class="card">
            <b-tabs size="is-large" position="is-centered" class="block">
              <b-tab-item label="Sales Chart"
                ><Saleschart :db="db"
              /></b-tab-item>
              <b-tab-item label="Sentiment Chart"
                ><Sentimentchart :db="db"
              /></b-tab-item>
            </b-tabs>
          </div>
          <div id="input" class="card">
            <h1 class="title is-size-3 has-text-centered">
              Analyze a Comment
            </h1>
            <b-field label="">
              <b-input
                type="textarea"
                @change="clearResult"
                v-model="analyzeInput"
              ></b-input>
            </b-field>

            <b-field
              ><!-- Label left empty for spacing -->
              <p class="control">
                <button
                  class="button is-primary is-medium"
                  @click="getResult()"
                >
                  Send Comment
                </button>
              </p>
              <h2
                v-if="analyzeResult && analyzeResult.sentiment == 'Positive'"
                class="title is-size-4 has-text-right has-text-success result"
              >
                {{ (analyzeResult.prob * 100).toFixed(2) + '% Positive' }}
              </h2>
              <h2
                v-if="analyzeResult && analyzeResult.sentiment == 'Negative'"
                class="title is-size-4 has-text-right has-text-danger result"
              >
                {{ (analyzeResult.prob * 100).toFixed(2) + '% Negative' }}
              </h2>
            </b-field>
          </div>
        </div>
        <div class="column is-one-third">
          <div id="week" class="card">
            <b-field label="Select a week:">
              <b-select
                rounded
                expanded
                size="is-large"
                icon="calendar-question"
                v-model="weekSelected"
              >
                <option v-for="week in weeks()" :value="week" :key="week">
                  {{ week }}
                </option>
              </b-select>
            </b-field>
          </div>
          <div id="comments" class="card">
            <div
              v-for="comment in db[weekSelected].comments"
              :key="comment.id"
              class="card"
            >
              <h3 class="title is-size-5 is-marginless">
                Comment #{{ comment.id }}
              </h3>
              <h4 class="subtitle is-marginless">
                {{ comment.date }}
              </h4>
              <h5
                class="subtitle is-size-6 has-text-success"
                v-if="comment.sentiment"
              >
                {{ comment.percentage + ' Positive' }}
              </h5>
              <h5
                class="subtitle is-size-6 has-text-danger"
                v-if="!comment.sentiment"
              >
                {{ comment.percentage + ' Negative' }}
              </h5>

              <p>{{ comment.comment }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Saleschart from './Saleschart.vue';
import Sentimentchart from './Sentimentchart.vue';
export default {
  name: 'Dashboard',
  components: {
    Saleschart,
    Sentimentchart
  },
  props: {
    product: parent.product
  },
  data() {
    return {
      db: {},
      axiosDone: false,
      weekSelected: 'January 6th 2020',
      analyzeInput: null,
      analyzeResult: null
    };
  },
  mounted() {
    this.loadData(false);
  },
  methods: {
    closeDashboard() {
      this.$emit('close-dashboard');
    },
    weeks() {
      let db = this.db;
      return Object.keys(db).sort(function(keyA, keyB) {
        return db[keyA].week - db[keyB].week;
      });
    },
    loadData(reload) {
      axios
        .get('https://urban-closet.herokuapp.com/api/'.concat(this.product))
        .then(res => {
          this.db = res.data;
          this.axiosDone = true;
          reload ? this.$buefy.toast.open('Connected Successfully') : null;
        })
        .catch(() => {
          this.errored();
        });
    },
    errored() {
      this.$buefy.dialog.confirm({
        title: 'Error',
        message:
          'Seems like we had trouble connecting to the comment database!',
        type: 'is-danger',
        hasIcon: true,
        icon: 'times-circle',
        iconPack: 'fa',
        ariaRole: 'alertdialog',
        ariaModal: true,
        confirmText: 'Retry',
        onConfirm: () => {
          this.$buefy.toast.open('Retrying Connection');
          setTimeout(() => this.loadData(true), 500);
        },
        cancelText: 'Return Home',
        onCancel: () => this.closeDashboard()
      });
    },
    clearResult() {
      this.analyzeResult = null;
    },
    getResult() {
      axios
        .post(
          'https://urban-closet.herokuapp.com/api/classify',
          { text: this.analyzeInput },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then(res => (this.analyzeResult = res.data))
        .catch(() => {
          this.analyzeResult = 'Error';
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  padding: 3rem;
  .columns {
    display: flex;
  }

  #product {
    padding-left: 25px;
    margin-bottom: 0;
  }
  .card {
    padding: 2rem;
    margin: 1rem 1rem;
  }
  #common ol {
    margin-left: 3rem;
  }
  #comments {
    height: 89.3%;
    padding: 0.5rem;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  #input {
    .result {
      width: 75%;
    }
  }
}
</style>
