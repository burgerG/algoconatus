<template>
        <Card :color="color" :title="title">
          testing slot
        </Card>
</template>

<script>
import Card from './ui/Card.vue';

export default {
  name: 'CategoryCard',
  components: { Card },
  props: ['color', 'title'],
};
</script>
