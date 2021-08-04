<template>
  <div
    id="app"
    class="grid grid-cols-8 h-full bg-gray-100"
    style="min-width: 220px"
  >
    <Sidebar class="hidden sm:flex col-span-2" />
    <router-view class="sm:col-span-6 col-span-full" />
  </div>
</template>

<script>
import Sidebar from "@/components/ui/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>
