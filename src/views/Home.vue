<template>
  <div class="p-10 bg-blue-100">
    <div class="bg-blue-300 rounded text-white text-center font-extrabold">
      <h1>Categoria</h1>
      <div
        class="
          grid grid-cols-3
          gap-4
          p-4
          bg-blue-500
          rounded-sm
          text-white text
          center
        "
      >
        <div class="bg-blue-200 rounded text-white">Calc2</div>
        <div class="bg-blue-200 rounded text-white">Calc2</div>
        <div class="bg-blue-200 rounded text-white">Calc3</div>
        <div class="bg-blue-200 rounded text-white">Calc4</div>
      </div>
      <HelloWorld msg="Welcome to Your Vue.js App" style="display: none" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
