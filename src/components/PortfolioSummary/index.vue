<template>
    <b-row class="total">
        <b-col cols="6" class="total__value">
            <div class="value">
                <span>${{value}}</span>
            </div>
        </b-col>
        <b-col cols="6" class="total__assets">
            <div class="assets">
                <span class="border border-primary rounded-circle">{{assetTotal}}</span>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'PortfolioSummary',
    props: ['assetTotal'],
    data() {
        return {
            value: '12,216.72'
            // assetTotal: '5'
        }
    }
}
</script>