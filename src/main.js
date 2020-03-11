import Vue from 'vue';

import Ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

import App from './App.vue';
import Router from "./router.js"

Vue.use(Ant);

new Vue({
    router: Router,
    render: a => a(App),
}).$mount('#app');
