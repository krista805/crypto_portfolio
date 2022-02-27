<template>
    <b-row class="justify-content-center pt-4">
        <b-form inline>
            <b-form-group>
                <b-form-select v-model="form.name" :options="options"></b-form-select>
            </b-form-group>
            <b-form-group>
                <b-form-input id="input-1" v-model="form.amount"></b-form-input>
            </b-form-group>
            <b-button @click.prevent="onSubmit()" variant="success">Submit</b-button>
        </b-form>
    </b-row>
</template>

<script>
export default {
    name: 'AssetInput',
    data() {
    return {
        counter: 0,
        form: null,
        options: [
            { value: null, text: 'Please select an option' },
            { value: 'bitcoin', text: 'Bitcoin' },
            { value: 'ethereum', text: 'Ethereum' },
            { value: 'cardano', text: 'Cardano' },
            { value: 'solana', text: 'Solana' }
        ],
    }
    },
    methods: {
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