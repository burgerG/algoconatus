<template>
  <div class="p-10 bg-blue-100">
    <div
      class="bg-gray-300 p-8 rounded text-white text-center font-extrabold flex flex-col space-y-4">
      <CategoryCard
        :color="category.color"
        v-for="category in categories"
        :key="category.id"
        :title="category.title"
      />
    </div>
  </div>
</template>

<script>
import CategoryCard from "../components/CategoryCard.vue";

export default {
  name: "Home",
  data() {
    return {
      categories: [],
    };
  },
  components: {
    CategoryCard,
  },
  mounted() {
    fetch('http://localhost:3000/categories')
      .then(res => res.json())
      .then(data => this.categories = data)
  },
};
</script>
