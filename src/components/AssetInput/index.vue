<template>
    <b-row class="justify-content-center pt-4">
        <b-form @submit.prevent="onSubmit" inline>
            <b-form-group>
                <b-form-select v-model="form.selected" :options="options"></b-form-select>
            </b-form-group>
            <b-form-group>
                <b-form-input id="input-1" v-model="form.amount"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="success">Submit</b-button>
        </b-form>
    </b-row>
</template>

<script>
export default {
    name: 'AssetInput',
    data() {
    return {
        options: [
            { value: null, text: 'Please select an option' },
            { value: 'bitcoin', text: 'Bitcoin' },
            { value: 'ethereum', text: 'Ethereum' },
            { value: 'cardano', text: 'Cardano' },
            { value: 'solana', text: 'Solana' }
        ],
        form: 
        {
            amount:null,
            selected: null
        },
        
    }
    },
    methods: {
        onSubmit() {
            let getInput = this.form
            this.$emit('clicked', getInput)
        }
    }
}
</script>