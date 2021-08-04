<template>
  <div class="flex flex-col p-4" v-if="inputValues != {}">
    <input
      type="number"
      class="m-2 border border-black"
      v-for="(input, name) in inputValues"
      :key="name"
      v-model.number="inputValues[name]"
      :placeholder="name"
    />
    <p>{{ calcResult }}</p>
  </div>
</template>

<script>
import setup from "../../setup.json";
export default {
  data() {
    return {
      id: null,
      calcFunction: null,
      inputValues: {},
    };
  },
  mounted() {
    this.id = this.$route.params.calcId;

    fetch(`http://${setup.ipv4}:${setup.ports.db}/calcFunctions/${this.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.calcFunction = data.calcFunction;
        this.inputValues = data.inputs;
      });
  },
  computed: {
    calcResult: function () {
      if (
        Object.values(this.inputValues).length > 0 &&
        Object.values(this.inputValues).reduce((acc, cur) => acc + cur) === 0
      ) {
        return "Fill in all values";
      }
      return new Function("inputValues", this.calcFunction)(this.inputValues);
    },
  },
};
</script>
<style>
</style>
