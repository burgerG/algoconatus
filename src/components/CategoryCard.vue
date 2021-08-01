<template>
        <Card :color="color" :title="title">
          <div class="flex flex-col p-4">
            <slot></slot>
          </div>
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
