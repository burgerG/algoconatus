<template>
  <div class="sm:flex flex-col gap-2 pt-8 pl-8">
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="{ name: link }"
      class="
        cursor-pointer
        bg-transparent
        border
        dark:border-gray-800
        border-gray-200
        hover:border-transparent
        hover:bg-white
        dark:hover:bg-gray-900
        transition
        duration-300
        rounded-sm
        p-2
        py-3
        text-center text-gray-400
        leading-5
      "
      >{{ link }}</router-link
    >

    <div class="group relative flex flex-wrap w-full">
      <input
        type="text"
        v-model="searchText"
        ref="searchInput"
        :class="`
              block
              appearance-none
              dark:bg-gray-800
              bg-white
              border dark:border-blueGray-500
              border-blueGray-300
              rounded
              w-full
              py-3
              px-4
              text-blueGray-300 text-center
              leading-5
              transition
              duration-300
              ease-in-out
              dark:focus:placeholder-gray-700
              focus:placeholder-gray-300
              focus:outline-none
              focus:border-blueGray-300
              focus:ring-2 focus:ring-blueGray-200
              cursor-pointer
              selection:bg-blueGray-300
              selection:text-blueGray-500`"
        placeholder="Search"
      />
      <span
        v-if="!searchText"
        class="
          h-full
          absolute
          right-0
          p-3
          transition
          duration-300
          ease-in-out
          group-hover:opacity-75
          opacity-40
          cursor-pointer
        "
        @click="$refs.searchInput.select()"
      >
        <svg
          class="w-6 h-6 stroke-current text-blueGray-500"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </span>
      <span
        v-else
        class="
          h-full
          absolute
          right-0
          p-3
          transition
          duration-300
          ease-in-out
          group-hover:opacity-75
          opacity-40
          cursor-pointer
        "
        @click="clearSearch"
      >
        <svg
          class="w-6 h-6 stroke-current text-blueGray-500"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  name: "Sidebar",
  data() {
    return {
      links: ["Home"],
      searchText: "",
    };
  },
  created() {
    eventBus.$on("clearSearch", () => {
      this.clearSearch();
    });
  },
  methods: {
    clearSearch: function () {
      this.searchText = "";
    },
  },
  watch: {
    searchText: function (value) {
      eventBus.$emit("search", value);
    },
  },
};
</script>

<style>
</style>
