<template>
        <Card
        :color="color"
        :title="title"
        :content="calcsList"
      />
</template>

<script>
import Card from './ui/Card.vue';

export default {
  name: 'CategoryCard',
  components: { Card },
  props: ['color', 'title', 'calcsList'],
};
</script>
