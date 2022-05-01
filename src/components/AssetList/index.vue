<template>
    <b-row>
        <b-col cols="12">
            <h2 class="text-uppercase text-left">Overview</h2>
        </b-col>
        <b-table hover :items="cryptoList" :fields="fields">
            <template #cell(name)="data">
                <div class="table__asset first">
                    <span :class="setVariantColor(data.item.allocation)" class="ticker"></span>
                     <img class="logo mr-1" :src="data.item.logo"/> {{ data.item.name }}
                </div>

            </template>
            <template #cell(amount)="data">

                {{ data.item.amount }}
            </template>

            <template #cell(current_usd)="data">
                {{data.item.usdPrice}}
            </template>

            <template #cell(allocation)="data">
               {{data.item.allocation}}
               <b-progress :value="data.item.allocation" :variant="setVariantColor(data.item.allocation)"></b-progress>
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
                    tdClass: 'align-middle',
                    sortable: true
                },
                {
                    key: 'amount',
                    tdClass: 'align-middle',
                    sortable: true
                },
                {
                    key: 'current_usd',
                    tdClass: 'align-middle',
                    sortable: true,
                },
                {
                    key: 'allocation',
                    tdClass: 'align-middle',
                    sortable: true,
                },
                { 
                    key: 'actions', 
                    tdClass: 'align-middle'
                }
            ],
            variantColor: null
        }
    },
    methods: {
        ...mapActions(["fetchCrypto"]),

        setVariantColor(allocation) {
            return allocation >= 50 ? 'success'
            : allocation < 50 && allocation > 20 ? 'info'
            : 'warning'
        },

        deleteRow(id) {
            const removeById = this.cryptoList.map(item => item.id).indexOf(id);
            (removeById >= 0) && this.cryptoList.splice(removeById, 1);
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>