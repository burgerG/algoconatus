<template>
  <div :class="[`bg-${color}-400`, 'text-white', 'rounded']">
      <h1>{{ title }}</h1>
      <div :class="[`bg-${color}-200`]">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['color', 'title'],
};
</script>

<style>

</style>
