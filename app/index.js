import 'whatwg-fetch';
import Vue from 'vue/dist/vue';

const app = new Vue({
  el: '.app',

  data() {
    const model = {
      name: 'Hello from Javascript',

      pokemon: [
        'Pikachu',
        'Bulbasaur',
        'Charmander',
        'Squirtle',
      ],
    };

    setTimeout(() => {
      alert('Charmander is evolving!!!');

      this.pokemon = this.pokemon.map((p) => {
        if (p === 'Charmander') {
          return 'Charmeleon';
        }

        return p;
      });
    }, 5000);

    return model;
  },
});
