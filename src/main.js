import Vue from 'vue'

// import VueBus from './utils/vue-bus'

import ElementUI from 'element-ui'
import './style/element-variables.scss'

import router from './router/index'
import store from './store'
import './permission'


import App from '../App';

// Vue.use(VueBus);
Vue.use(ElementUI);

new Vue({
    el: '#app',
    router: router,
    // 使用vuex
    store: store,
    render: h => {
        return h(App)
    }
});


