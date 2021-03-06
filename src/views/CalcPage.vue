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
      <span
        :class="`dark:text-${calcColor}-800 text-${calcColor}-200 text-opacity-75 text-sm`"
      >
        Parameters
      </span>
      <!-- Parameters content -->
      <div>
        <!-- Individual parameter -->
        <div
          v-for="(parameter, name) in parameters"
          :key="name"
          :class="`flex flex-row gap-2 dark:bg-${calcColor}-900 bg-${calcColor}-100 rounded p-1 dark:text-${calcColor}-600 text-${calcColor}-300`"
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
            :class="`
              block
              appearance-none
              dark:bg-gray-800
              bg-white
              border border-${calcColor}-200
              rounded
              text-center text-sm
              leading-5
              transition
              duration-150
              ease-in-out
              focus:outline-none
              focus:border-${calcColor}-300
              focus:placeholder-gray-300
              focus:ring-2 focus:ring-${calcColor}-200
              cursor-pointer selection:bg-${calcColor}-300
            selection:text-${calcColor}-500`"
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
          :class="`
            block
            appearance-none
            dark:bg-gray-800
            bg-white
            border border-${calcColor}-200
            rounded
            w-full
            py-3
            px-4
            text-${calcColor}-300 text-right
            leading-5
            transition
            duration-300
            ease-in-out
            focus:outline-none
            focus:border-${calcColor}-300
            focus:placeholder-gray-300
            focus:ring-2 focus:ring-${calcColor}-200
            cursor-pointer
            selection:bg-${calcColor}-300
            selection:text-${calcColor}-500`"
          :ref="'input-' + name"
          v-model.number="inputValues[name]"
          v-for="(input, name) in inputValues"
          :key="name"
          :placeholder="name"
        />
      </div>
      <hr
        :class="`appearance-none border-t-2 border-${calcColor}-200 opacity-50`"
      />
      <!-- Result -->
      <div
        :class="`
          block
          appearance-none
          dark:bg-${calcColor}-900
          bg-${calcColor}-100
          dark:border border-${calcColor}-500
          border border-${calcColor}-200
          rounded
          w-full
          p-4
          truncate
          text-${calcColor}-300 text-right text-3xl
          font-medium
          leading-10`"
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
import { eventBus } from "../main";
import setup from "../../setup.json";
export default {
  props: {
    calcId: {
      type: Number,
      required: true,
    },
    calcColor: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      calcFunction: null,
      inputValues: {},
      parameters: {},
    };
  },
  created() {
    eventBus.$emit("clearSearch");
  },
  mounted() {
    // requests calc data from the server and assigns the required values to build the page
    fetch(`http://${setup.ipv4}:${setup.ports.db}/calcFunctions/${this.calcId}`)
      .then((res) => res.json())
      .then((data) => {
        this.calcFunction = data.calcFunction;
        this.inputValues = data.inputs;
        this.parameters = data.parameters;
      });
  },
  methods: {
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
