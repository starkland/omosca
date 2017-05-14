import Vue from 'vue';
import Router from 'vue-router';

// Views
import Home from '@/views/Home';
import Evento from '@/views/Evento';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/evento',
      name: 'Evento',
      component: Evento,
    },
  ],
});
