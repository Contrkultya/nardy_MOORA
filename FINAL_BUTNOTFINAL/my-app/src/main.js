import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/vuetify'
import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import {store} from './store'
import 'vuetify/dist/vuetify.min.css' 
import { VRadioGroup } from 'vuetify/lib';


Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(Router);

new Vue({
  router,
    store,
  render: h => h(App)
}).$mount('#app')


