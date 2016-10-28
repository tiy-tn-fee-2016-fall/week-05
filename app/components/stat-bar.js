import Vue from 'vue/dist/vue';

export default Vue.extend({
  props: ['info'],

  data() {
    return {
      extraPoints: 0,
    };
  },

  methods: {
    increment() {
      this.extraPoints ++;
    },
  },

  template: `
  <li class="pokemon-data__stats-item">
    <span class="stats-label">{{ info.stat.name }}</span>

    <div class="stats-bar">
      <span class="stats-bar__fill"
        v-bind:style="{flexBasis: (info.base_stat + extraPoints) / 150 * 100 + '%'}">
        {{ info.base_stat }}
        <template v-if="extraPoints">
          (+{{ extraPoints }})
        </template>
      </span>
    </div>

    <button className="btn" v-on:click="increment">+</button>
  </li>`,
});
