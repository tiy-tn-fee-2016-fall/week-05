import 'whatwg-fetch';
import Vue from 'vue/dist/vue';
import StatBar from './components/stat-bar';

const app = new Vue({
  el: '.app',

  components: {
    // Allows us to use <stat-bar> in our application template
    StatBar,
  },

  data() {
    return {
      name: '',
      pokemon: null,
      currentSelection: null,
      loading: false,
    };
  },

  mounted() {
    this.loading = true;
    fetch('http://pokeapi.co/api/v2/pokemon')
      .then((r) => r.json())
      .then((data) => {
        this.loading = false;
        this.pokemon = data.results;

        this.choosePokemon(data.results[0]);
      });
  },

  methods: {
    choosePokemon(pokemon) {
      this.loading = true;
      fetch(pokemon.url)
        .then((r) => r.json())
        .then((data) => {
          this.loading = false;
          this.currentSelection = data;
        });
    },
  },
});
