import Vue from 'vue/dist/vue';

export default Vue.extend({
  props: ['info'],

  template: `
  <li class="pokemon-data__stats-item">
    <span class="stats-label">{{ info.stat.name }}</span>

    <div class="stats-bar">
      <span class="stats-bar__fill"
        v-bind:style="{flexBasis: info.base_stat / 150 * 100 + '%'}">
        {{ info.base_stat }}
      </span>
    </div>
  </li>`,
});
