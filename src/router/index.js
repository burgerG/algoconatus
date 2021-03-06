import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CalcPage from '../views/CalcPage.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/calc/:calcId',
    name: 'CalcPage',
    component: CalcPage,
    props: true
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    setTimeout(() => {
      return { x: 0, y: 0 }
    }, 100);
  },
  routes,
});

export default router;
