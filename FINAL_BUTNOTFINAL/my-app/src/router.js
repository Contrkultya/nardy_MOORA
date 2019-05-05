import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/form',
            component: Form
        },
    ],
    mode: 'history'
})