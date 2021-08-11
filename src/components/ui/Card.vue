<template>
  <div
    :class="`dark:bg-${color}-700 bg-${color}-200 border dark:border-${color}-800 border-${color}-300 dark:text-${color}-800 text-${color}-300 rounded`"
  >
    <h1 class="pt-2 pr-2 pl-2 font-bold">{{ title }}</h1>
    <div :class="`dark:bg-${color}-700 bg-${color}-200`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["color", "title"],
};
</script>

<style>
</style>
