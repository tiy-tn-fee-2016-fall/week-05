import 'whatwg-fetch';
import Vue from 'vue/dist/vue';

const app = new Vue({
  el: '.app',

  data() {
    return {
      name: '',
      pokemon: null,
      currentSelection: null,
    };
  },

  mounted() {
    fetch('http://pokeapi.co/api/v2/pokemon')
      .then((r) => r.json())
      .then((data) => {
        this.pokemon = data.results;

        this.choosePokemon(data.results[0]);
      });
  },

  methods: {
    choosePokemon(pokemon) {
      fetch(pokemon.url)
        .then((r) => r.json())
        .then((data) => {
          this.currentSelection = data;
        });
    },
  },
});
