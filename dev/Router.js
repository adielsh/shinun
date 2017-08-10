/**
 * Created by Adiel on 15 נובמבר 2016.
 */
import HomePage from './views/HomePage.vue'
import VueRouter from 'vue-router'

const routes = [
    {path: '/', component: HomePage},
];
const router = new VueRouter({
    history: false,
    routes
});

router.beforeEach((to, from, next) => {
        next()
    }
)
export default router
