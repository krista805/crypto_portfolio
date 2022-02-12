<template>
    <b-row class="justify-content-center pt-4">
        <b-form @submit.prevent="onSubmit" inline>
            <b-form-group>
                <b-form-select v-model="form.selected" :options="form.options"></b-form-select>
            </b-form-group>
            <b-form-group>
                <b-form-input id="input-1" v-model="form.amount"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="success">Submit</b-button>
        </b-form>
      {{form.amount}}
    </b-row>
</template>

<script>
export default {
    name: 'AssetInput',
    data() {
    return {
        form: {
            amount:null,
            selected: null,
            options: [
                { value: null, text: 'Please select an option' },
                { value: 'bitcoin', text: 'Bitcoin' },
                { value: 'ethereum', text: 'Ethereum' }
            ]
        }
    }
    },
    methods: {
        onSubmit() {
            let getInput = this.form
            console.log(getInput)
            return getInput
        }
    }
}
</script>