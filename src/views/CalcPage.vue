<template>
  <div class="flex flex-col gap-2">
    <!-- Parameters -->
    <div
      v-if="Object.values(parameters).length"
      class="
        flex flex-row
        items-center
        justify-end
        gap-4
        py-2
        cursor-pointer
        transition
        duration-150
        ease-in-out
        hover:opacity-100
        opacity-50
      "
    >
      <!-- Parameters title -->
      <span class="text-indigo-200 text-opacity-75 text-sm"> Parameters </span>
      <!-- Parameters content -->
      <div>
        <!-- Individual parameter -->
        <div
          v-for="(parameter, name) in parameters"
          :key="name"
          class="flex flex-row gap-2 bg-indigo-100 rounded p-1 text-indigo-300"
          @click="selectInput('parameter-' + name)"
        >
          <label
            class="leading-5 pl-1 cursor-pointer"
            :for="'parameter-' + name"
            >{{ name }}</label
          >
          <input
            type="number"
            min="0"
            max="10"
            class="
              block
              appearance-none
              bg-white
              border border-indigo-200
              rounded
              text-center text-sm
              leading-5
              transition
              duration-150
              ease-in-out
              focus:outline-none
              focus:border-indigo-300
              focus:placeholder-gray-300
              focus:ring-2 focus:ring-indigo-200
              cursor-pointer
            "
            v-model="parameters[name]"
            :ref="'parameter-' + name"
            :name="'parameter-' + name"
            :placeholder="name"
          />
        </div>
      </div>
    </div>
    <!-- Equation -->
    <div class="flex flex-col gap-4" v-if="inputValues != {}">
      <!-- Input values -->
      <div class="flex flex-col gap-2">
        <input
          @click="selectInput('input-' + name)"
          type="number"
          min="0"
          class="
            block
            appearance-none
            bg-white
            border border-indigo-200
            rounded
            w-full
            py-3
            px-4
            text-indigo-300 text-right
            leading-5
            transition
            duration-300
            ease-in-out
            focus:outline-none
            focus:border-indigo-300
            focus:placeholder-gray-300
            focus:ring-2 focus:ring-indigo-200
            cursor-pointer
            selection:bg-teal-900
            selection:text-teal-400
          "
          :ref="'input-' + name"
          v-model.number="inputValues[name]"
          v-for="(input, name) in inputValues"
          :key="name"
          :placeholder="name"
        />
      </div>
      <hr class="appearance-none border-t-2 border-indigo-200 opacity-50" />
      <!-- Result -->
      <div
        class="
          block
          appearance-none
          bg-indigo-100
          border border-indigo-200
          rounded
          w-full
          p-4
          text-indigo-300 text-right text-3xl
          font-medium
          leading-10
        "
      >
        {{ handleResult }}
      </div>
      <!-- Debug -->
      <div
        class="
          block
          bg-gray-50
          border border-gray-200
          rounded
          w-full
          py-3
          px-4
          text-gray-600 text-right
          leading-5
        "
      >
        DEBUG <br />
        inputValues {{ inputValues }} parameters {{ parameters }} <br /><br />
        calcFunction<br />
        {{ calcFunction }}
      </div>
    </div>
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
      parameters: {},
    };
  },
  mounted() {
    // gets the calculator ID from vue router
    this.id = this.$route.params.calcId;

    // requests calc data from the server and assigns the required values to build the page
    fetch(`http://${setup.ipv4}:${setup.ports.db}/calcFunctions/${this.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.calcFunction = data.calcFunction;
        this.inputValues = data.inputs;
        this.parameters = data.parameters;
      });
  },
  methods: {
    jej(text) {
      console.log(text);
    },
    // selects a given inputRef
    selectInput(inputRef) {
      this.$refs[inputRef][0].select();
    },
  },
  computed: {
    // calculates the result of calcFunction using the inputValues
    calcResult: function () {
      return new Function("inputValues", this.calcFunction)(this.inputValues);
    },
    handleResult: function () {
      if (
        Object.values(this.inputValues).length > 0 &&
        Object.values(this.inputValues).reduce((acc, cur) => acc + cur) === ""
      ) {
        return "Fill in all values";
      } else if (this.calcFunction) {
        if (this.parameters.Precision || this.parameters.Precision === 0) {
          return this.calcResult.toFixed(this.parameters.Precision);
        }
        return this.calcResult;
      }
    },
  },
};
</script>

<style>
::-moz-selection {
  color: white;
  background: orange;
}

::selection {
  color: white;
  background: orange;
}
</style>
