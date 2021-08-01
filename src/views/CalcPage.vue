<template>
    <div 
        class="flex flex-col bg-blue-200 p-4"
        v-if="inputValues != {}"
    >
        <input
            type="number"
            class="m-2 border border-black"
            v-for="(input, name) in inputValues"
            :key="name"
            v-model.number="inputValues[name]"
            :placeholder="name"
        >
        <p>{{ calcResult(inputValues) }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: null,
            calcFunction: null,
            inputValues: {}
        }
    },
    mounted() {
        this.id = this.$route.params.calcId
        
        fetch(`http://localhost:3000/calcFunctions/${this.id}`)
            .then(res => res.json())
            .then(data => {
                this.calcFunction = data.calcFunction
                this.inputValues = data.inputs
                console.log(this.calcFunction, this.inputValues);
            })
    },
    computed: {
        calcResult: function() {
            // return this.inputValues.reduce((acc, cur) => { return acc+cur }, 0)
            return new Function('inputValues', this.calcFunction);
        }
        
    },
    

}
</script>
<style>

</style>