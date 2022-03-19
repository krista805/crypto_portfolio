<template>
    <div>
        <b-row class="justify-content-center pt-4">
            <!-- Look into implementing this: https://stackoverflow.com/questions/59543628/adding-img-attribute-to-options-in-b-select-component
            or scoped slots
            https://vue-select.org/guide/slots.html
             -->
            <b-form inline>
                <b-form-group>
                    <b-form-select v-model="form.name">
                        <option :value="null">
                            Please select an option
                        </option>
                        <option v-for="coin in coinList" :key="coin.id" :value="coin.name">
                            {{ coin.name }}
                        </option>
                    </b-form-select>
                </b-form-group>
                <b-form-group>
                    <b-form-input id="input-1" v-model="form.amount"></b-form-input>
                </b-form-group>
                <b-button @click.prevent="onSubmit()" variant="success">Submit</b-button>
            </b-form>
        </b-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: 'AssetInput',
    data() {
        return {
            counter: 0,
            form: null,
        }
    },
    computed: {
        ...mapGetters([
            'getCrypto'
        ]),

        coinList () {
            let coins = this.getCrypto
            return coins
        }
    },
    methods: {
        ...mapActions(['fetchCrypto']),
        
        usdPrice (coin) {
            for (let i = 0; i < this.coinList.length; i++) {
                if(coin === this.coinList[i].name ) {
                    this.form.price = this.coinList[i].current_price
                }
            }
        },

        generateId() {
            this.counter += 1
            this.form.id = this.counter
        },
        resetForm() {
            this.form = {
                amount:null,
                name: null,
                price: null,
                id: null
            }
        },
        onSubmit() {
            this.usdPrice(this.form.name)
            this.generateId()
            this.$emit('clicked', this.form)
            this.resetForm()
        }
    },
    
    created() {
        this.resetForm()  // <-- This is for the first one
    }
}
</script>