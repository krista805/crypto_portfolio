<template>
    <b-row>
        <b-table hover :items="cryptoList" :fields="fields">
            <template #cell(name)="data">

                {{ data.item.name }}

            </template>
            <template #cell(amount)="data">

                {{ data.item.amount }}
            </template>

            <template #cell(actions)="row">
                <b-button variant="danger" @click="deleteRow(row.index)">Delete</b-button>
            </template>
        </b-table>
    </b-row>
</template>


<script>
export default {
    name: 'AssetList',
    props: {
        cryptoList: Array
    },

    data() {
        return {
            fields: [
                {
                    key: 'name',
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
                },
                { 
                    key: 'actions', 
                }
            ],
            // items: [
            //     { asset: 'Bitcoin', amount: '0.223', current_usd: '$4,000'},
            //     { asset: 'Ethereum', amount: '2.923', current_usd: '$8,000'},
            //     { asset: 'Cardano', amount: '2224', current_usd: '$2,450'},
            //     { asset: 'Solana', amount: '31.23', current_usd: '$5,270'},
            //     { asset: 'Polkadot', amount: '29.2244', current_usd: '$1,200'}
            // ],
        }
    },

    methods: {
        deleteRow(index) {
            this.cryptoList.splice(index, 1);
        }
    }
}
</script>