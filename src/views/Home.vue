<template>
  <div class="p-10 bg-blue-100">
    <div
      class="bg-gray-300 p-8 rounded text-white text-center font-extrabold flex flex-col space-y-4">
      <CategoryCard color="red" title="test1" calcsList="abacate" />
      <CategoryCard color="green" title="test2" calcsList="eh" />
      <CategoryCard color="blue" title="test3" calcsList="ruim" />
    </div>
  </div>
</template>

<script>
import CategoryCard from "../components/CategoryCard.vue";

export default {
  name: "Home",
  components: {
    CategoryCard,
  },
};
</script>
