import Vue from 'vue';
import Router from 'vue-router';

// Views
import Home from '@/views/Home';
import Evento from '@/views/Evento';
import RelatorioEventos from '@/views/Rel_eventos';

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

    {
      path: '/relatorio/eventos',
      name: 'RelatorioEventos',
      component: RelatorioEventos,
    },
  ],
});
