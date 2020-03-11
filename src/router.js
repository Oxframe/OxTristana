import Vue from 'vue';
import VueRouter from "vue-router";
import Demo from "./components/demo/Demo.vue";
import Test from './components/test/Test.vue'

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [{
        name: "Demo",
        path: "/demo",
        component: Demo
    },
        {
            name: "Test",
            path: "/Test",
            component: Test
        }
    ]
});

export default router;