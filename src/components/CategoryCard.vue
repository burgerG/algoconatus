<template>
  <Card :color="color" :title="title">
    <div class="flex flex-col gap-2 sm:gap-4 p-4 sm:p-8 pt-2 sm:pt-2">
      <slot></slot>
    </div>
  </Card>
</template>

<script>
import Card from "./ui/Card.vue";

export default {
  name: "CategoryCard",
  components: { Card },
  props: ["color", "title"],
};
</script>
