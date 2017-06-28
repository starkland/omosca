// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMoment from 'vue-moment';
import moment from 'moment';

// Sentry
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

import App from './App';
import router from './router';
import Config from './assets/js/Config';

// ====

moment.locale('pt-br');

Vue.config.productionTip = false;

Vue.use(VueMoment, {
  moment,
});

Raven
  .config(Config.sentry_config)
  .addPlugin(RavenVue, Vue)
  .install();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
