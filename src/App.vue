<template>
  <div id="app" class="grid grid-cols-6 h-screen">
    <Sidebar />
    <router-view class="col-span-5" />
  </div>
</template>

<script>
import Sidebar from "./components/ui/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>
