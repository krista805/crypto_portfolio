<template>
  <b-container>
    <div class="dashboard">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <PortfolioValue />
      <AssetList />

      <b-form-group>
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <b-form-input id="input-1" v-model="amount"></b-form-input>
      </b-form-group>
      {{amount}}
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PortfolioValue from '../components/PortfolioValue/index.vue'
import AssetList from '../components/AssetList/index.vue'

export default {
  name: 'Dashboard',
  components: {
    HelloWorld,
    PortfolioValue,
    AssetList
},
  data() {
    return {
      amount: null,
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'bitcoin', text: 'Bitcoin' },
        { value: 'ethereum', text: 'Ethereum' }
      ]
    }
  }
}
</script>
