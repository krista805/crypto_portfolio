<template>
  <b-container>
    <div class="dashboard">
      <HelloWorld msg="Welcome to Your Portfolio"/>
      <PortfolioValue />
      <AssetList :getInput="getInput" />
      <AssetInput @clicked="onClickChild"/>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PortfolioValue from '../components/PortfolioValue/index.vue'
import AssetList from '../components/AssetList/index.vue'
import AssetInput from '../components/AssetInput/index.vue'

export default {
  name: 'Dashboard',
  components: {
    HelloWorld,
    PortfolioValue,
    AssetList,
    AssetInput
  },
  data() {
    return {
      getInput: null
    }
  },
  methods: {
    onClickChild (val) {
      this.getInput = val;
      // console.log(val) // someValue
    }
  }
}
</script>
