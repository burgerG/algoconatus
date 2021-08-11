<template>
  <div class="rounded text-white text-center flex flex-col gap-4">
    <CategoryCard
      v-for="category in categories"
      :id="`category-card-${category.title}` | formatId"
      :color="category.color"
      :key="category.id"
      :title="category.title"
    >
      <router-link
        :id="`${category.title}-calc-button-${calc.title}` | formatId"
        :class="`bg-${category.color}-500 hover:bg-${category.color}-600 transition duration-300 text-${category.color}-100 p-4 rounded`"
        v-for="calc in category.content"
        :key="calc.id"
        :to="{
          name: 'CalcPage',
          params: { calcId: calc.id, calcColor: category.color },
        }"
      >
        {{ calc.title }}
      </router-link>
    </CategoryCard>
  </div>
</template>

<script>
import setup from "../../setup.json";
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
    fetch(`http://${setup.ipv4}:${setup.ports.db}/categories`)
      .then((res) => res.json())
      .then((data) => (this.categories = data));
  },
  filters: {
    formatId: function (value) {
      return value.toLowerCase().replace(" ", "-");
    },
  },
};
</script>
