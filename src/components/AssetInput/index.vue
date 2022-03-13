<template>
    <div>
        <b-row class="justify-content-center pt-4">
            <b-form inline>
                <b-form-group>
                    <b-form-select v-model="form.name" :options="coinTypes"></b-form-select>
                </b-form-group>
                <b-form-group>
                    <b-form-input id="input-1" v-model="form.amount"></b-form-input>
                </b-form-group>
                <b-button @click.prevent="onSubmit()" variant="success">Submit</b-button>
            </b-form>
            {{typeOfCoin}}
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
        coinTypes: [
            { value: null, text: 'Please select an option' }
        ],
    }
    },
    computed: {
        ...mapGetters([
            'getCrypto'
        ]),

        // coins() {
        //     return this.$store.state.coins
        // },

        typeOfCoin() {
            return this.cryptoOptions()
        },
    },
    methods: {
        ...mapActions(['fetchCrypto']),

        cryptoOptions() {
            let allCrypto = this.getCrypto
            allCrypto.forEach(item => (
                this.coinTypes.push({ 
                    value: item.name, 
                    text: item.name 
                })
            ))
        },

        generateId() {
            this.counter += 1
            this.form.id = this.counter
        },
        resetForm() {
            this.form = {
                amount:null,
                name: null,
                id: null
            }
        },
        onSubmit() {
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