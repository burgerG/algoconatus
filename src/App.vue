<template>
  <div
    id="app"
    class="grid grid-cols-8 h-full bg-gray-50 select-none"
    style="min-width: 220px"
  >
    <Sidebar class="hidden sm:flex col-span-2" />
    <transition name="fade" mode="out-in">
      <router-view class="sm:col-span-6 col-span-full p-4 sm:p-8" />
    </transition>
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

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

// flex flex-col gap-2 sm:col-span-6 col-span-full p-4 sm:p-8

// flex flex-col gap-4 sm:col-span-6 col-span-full p-4 sm:p-8
