<template>
    <b-row class="total">
        <b-col cols="6" class="total__value">
            <div class="title text-left">
                <h2 class="text-uppercase">Portfolio Value</h2>
                <span class="number">${{usdTotal}}</span>
            </div>
        </b-col>
        <b-col cols="6" class="total__assets text-right">
            <div class="border border-primary rounded-circle pt-2">
                <span class="number pt-2">{{assetTotal}}</span><br><span class="text text-uppercase">Assets</span>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'PortfolioSummary',
    props: ['assetTotal', 'usdTotal'],
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>