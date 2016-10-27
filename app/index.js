import 'whatwg-fetch';
import Vue from 'vue/dist/vue';

const app = new Vue({
  el: '.app',

  data() {
    return {
      name: 'Hello from Javascript',

      pokemon: [
        'Pikachu',
        'Bulbasaur',
        'Charmander',
        'Squirtle',
      ],
    };
  },
});
