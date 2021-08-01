<template>
  <div class="p-10 bg-blue-100">
    <div
      class="bg-gray-300 p-8 rounded text-white text-center font-extrabold flex flex-col space-y-4">
      <CategoryCard
        v-for="category in categories"
        :color="category.color"
        :key="category.id"
        :title="category.title"
      >
        <router-link 
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-1"
          v-for="calc in category.content"
          :key="calc.id"
          :to="{name: 'CalcPage', params: {calcId: calc.id}}"
          >
            {{calc.title}}
        </router-link>
      </CategoryCard>
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
