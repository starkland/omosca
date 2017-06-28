import Vue from 'vue';
import Router from 'vue-router';

// Views
import Home from '@/views/Home';
import Termos from '@/views/Termos';
import Dashboard from '@/views/Dashboard';
import Evento from '@/views/Evento';
import EventoInterno from '@/views/EventoInterno';
import RelatoriosEvt from '@/views/Relatorios_event';
import RelatoriosNews from '@/views/Relatorios_news';
import Perfil from '@/views/Perfil';
import Configuracoes from '@/views/Configuracoes';
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
      path: '/termos',
      name: 'Termos',
      component: Termos,
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        validateRoute(next);
      },
    },

    {
      path: '/dashboard/evento/novo',
      name: 'Evento',
      component: Evento,
      beforeEnter: (to, from, next) => {
        validateRoute(next);
      },
    },

    {
      path: '/dashboard/evento/:id',
      name: 'EventoInterno',
      component: EventoInterno,
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
      path: '/dashboard/relatorios/eventos',
      name: 'RelatoriosEventos',
      component: RelatoriosEvt,
      beforeEnter: (to, from, next) => {
        validateRoute(next);
      },
    },

    {
      path: '/dashboard/relatorios/newsletter',
      name: 'RelatoriosNewsletter',
      component: RelatoriosNews,
      beforeEnter: (to, from, next) => {
        validateRoute(next);
      },
    },

    {
      path: '/dashboard/perfil/me',
      name: 'Perfil',
      component: Perfil,
      beforeEnter: (to, from, next) => {
        validateRoute(next);
      },
    },

    {
      path: '/dashboard/perfil/configuracoes',
      name: 'Configuracoes',
      component: Configuracoes,
      beforeEnter: (to, from, next) => {
        validateRoute(next);
      },
    },
  ],
});
