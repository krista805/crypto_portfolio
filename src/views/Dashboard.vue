<template>
  <b-container>
    <div class="dashboard">
      <HelloWorld msg=""/>
      <PortfolioSummary :asset-total="assetTotal" :usd-total="usdTotal" />
      <AssetList :crypto-list="items" :usd-total="usdTotal" />
      <AssetInput @clicked="onClickChild"/>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PortfolioSummary from '../components/PortfolioSummary/index.vue'
import AssetList from '../components/AssetList/index.vue'
import AssetInput from '../components/AssetInput/index.vue'

export default {
  name: 'Dashboard',
  components: {
    HelloWorld,
    PortfolioSummary,
    AssetList,
    AssetInput
  },
  data() {
    return {
      items: [],
    }
  },
  computed: {
    assetTotal() {
      return this.calculateAssetTotal()
    },

    usdTotal() {
      return this.items.reduce(function(a, c){
        return parseFloat((a + Number((c.amount*c.price) || 0)).toFixed(2))
      }, 0)
    }
  },
  mounted() {
    this.$store.dispatch("fetchCrypto");
  },
  methods: {
    onClickChild (val) {
      this.items.push(val)
    },

    calculateAssetTotal(){
      if (!this.items.length) {
        return 'No assets'
      }

      let result = this.items.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.name === value.name
        ))
      )
      return result.length
    }
  },
}
</script>

<style>
  .logo {
    max-width:25px;
  }
</style>