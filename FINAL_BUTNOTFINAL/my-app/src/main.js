import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/vuetify'
import App from './App.vue'
import {store} from './store'
import 'vuetify/dist/vuetify.min.css' 
import { VRadioGroup } from 'vuetify/lib';


Vue.config.productionTip = false
Vue.use(Vuex);

new Vue({
    store,
  render: h => h(App)
}).$mount('#app')


