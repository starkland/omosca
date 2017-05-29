// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMoment from 'vue-moment';
import moment from 'moment';

import App from './App';
import router from './router';

moment.locale('pt-br');

Vue.config.productionTip = false;

Vue.use(VueMoment, {
  moment,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
