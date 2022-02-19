<template>
    <b-row>
        <b-table hover :items="cryptoList" :fields="fields">
            <template #cell(selected)="data">

                {{ data.item.selected }}

            </template>
            <template #cell(amount)="data">

                {{ data.item.amount }}

            </template>
        </b-table>
        <!-- <div v-if="getInput">
            <p>{{getInput.selected}}</p>
            <p>{{getInput.amount}}</p>
        </div> -->
    </b-row>
</template>


<script>
export default {
    name: 'AssetList',
    // props: ['getInput'],
    props: {
        cryptoList: Array
    },

    data() {
        return {
            fields: [
            {
                key: 'selected',
                label: 'Asset',
                sortable: true
            },
            {
                key: 'amount',
                sortable: true
            },
            {
                key: 'current_usd',
                sortable: true,
            },
            {
                key: 'allocation',
                sortable: false,
            }
            ],
            // items: [
            //     { asset: 'Bitcoin', amount: '0.223', current_usd: '$4,000'},
            //     { asset: 'Ethereum', amount: '2.923', current_usd: '$8,000'},
            //     { asset: 'Cardano', amount: '2224', current_usd: '$2,450'},
            //     { asset: 'Solana', amount: '31.23', current_usd: '$5,270'},
            //     { asset: 'Polkadot', amount: '29.2244', current_usd: '$1,200'}
            // ],
            items: []
        }
    },
    methods: {
        addCrypto(getInput) {
            const asset = this.items.slice()
            asset.push({
                asset: getInput.selected, 
                amount: getInput.amount
            })
            return asset
        }
    }
}
</script>