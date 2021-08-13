<template>
  <div class="rounded text-center text-white">
    <div class="flex flex-col gap-4" v-if="filteredCategories.length">
      <CategoryCard
        v-for="category in filteredCategories"
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
    <div v-else>
      <CategoryCard
        id="category-card-what-a-shame"
        color="blueGray"
        title="WHAT A SHAME BRO"
      >
        We haven't designed the perfect calculator for you yet :(
      </CategoryCard>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
import setup from "../../setup.json";
import CategoryCard from "../components/CategoryCard.vue";

export default {
  name: "Home",
  data() {
    return {
      categories: [],
      filterInput: "",
    };
  },
  components: {
    CategoryCard,
  },
  created() {
    eventBus.$on("search", (data) => {
      this.filterInput = data;
    });
  },
  mounted() {
    fetch(`http://${setup.ipv4}:${setup.ports.db}/categories`)
      .then((res) => res.json())
      .then((data) => (this.categories = data));
  },
  methods: {
    filterTitle: function (title) {
      return title.toLowerCase().includes(this.filterInput.toLowerCase());
    },
    filterCategoryContent: function (content) {
      return content.filter((calc) => {
        return this.filterTitle(calc.title);
      });
    },
  },
  computed: {
    // TODO: Check if this is the best way to do it
    filteredCategories: function () {
      let filteredCategories = JSON.parse(JSON.stringify(this.categories));
      let toSplice = [];
      filteredCategories.map((category, index) => {
        if (!this.filterTitle(category.title)) {
          filteredCategories[index].content = this.filterCategoryContent(
            category.content
          );
          if (filteredCategories[index].content.length === 0) {
            toSplice.push(index);
          }
        }
      });
      toSplice.forEach((targetIndex, index) =>
        filteredCategories.splice(targetIndex - index, 1)
      );
      return filteredCategories;
    },
  },
  filters: {
    formatId: function (value) {
      return value.toLowerCase().replace(" ", "-");
    },
  },
};
</script>
