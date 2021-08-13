import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import 'tailwindcss/tailwind.css';

Vue.config.productionTip = false;

export const eventBus = new Vue();
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

