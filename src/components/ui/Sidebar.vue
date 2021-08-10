<template>
  <div class="sm:flex flex-col gap-2 pt-8 pl-8">
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="{ name: link }"
      class="
        cursor-pointer
        bg-gray-50
        border border-gray-200
        hover:border-transparent
        hover:bg-white
        transition
        duration-300
        rounded-r
        p-2
        py-3
        text-center text-gray-400
        leading-5
      "
      >{{ link }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      links: ["Home", "Home", "Home", "Home", "Home", "Home"],
    };
  },
};
</script>

<style>
</style>
