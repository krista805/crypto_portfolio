<template>
    <b-row>
        <b-table hover :items="cryptoList" :fields="fields">
            <template #cell(name)="data">

                <img class="logo mr-1" :src="data.item.logo"/> {{ data.item.name }}

            </template>
            <template #cell(amount)="data">

                {{ data.item.amount }}
            </template>

            <template #cell(current_usd)="data">
                {{data.item.usdPrice}}
            </template>

            <template #cell(allocation)="data">
               {{calculateAllocation(data.item.usdPrice)}}
            </template>

            <template #cell(actions)="data">
                <b-button variant="danger" @click="deleteRow(data.item.id)">Delete</b-button>
            </template>
        </b-table>
    </b-row>
</template>


<script>
import { mapActions } from "vuex"
export default {
    name: 'AssetList',
    props: {
        cryptoList: Array,
        usdTotal: Number
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

            rowValue: null
        }
    },
    methods: {
        ...mapActions(["fetchCrypto"]),
        
        calculateAllocation(val) {
            // Inputs are: Usd total of row and total of entire column
            return Math.round(val / this.usdTotal * 100)
        },

        deleteRow(id) {
            const removeById = this.cryptoList.map(item => item.id).indexOf(id);
            (removeById >= 0) && this.cryptoList.splice(removeById, 1);
        }
    }
}
</script>