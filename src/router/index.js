import Vue from 'vue';
import Router from 'vue-router';

// Views
import Home from '@/views/Home';
import Evento from '@/views/Evento';
import Relatorios from '@/views/Relatorios';
import Login from '@/views/Login';

// Assets
import LocalStorage from '../assets/js/LocalStorage';

const storage = new LocalStorage('user_info');

function validateRoute(next) {
  const userInfo = storage.get();

  if (!userInfo) {
    next({ path: '/' });
  } else {
    next(true);
  }
}

Vue.use(Router);

export default new Router({
  mode: 'history', // removes the # from URL
  saveScrollPosition: true,
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
      beforeEnter: (to, from, next) => {
        validateRoute(next);
      },
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/relatorios',
      name: 'Relatorios',
      component: Relatorios,
      beforeEnter: (to, from, next) => {
        validateRoute(next);
      },
    },
  ],
});
