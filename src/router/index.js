import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import firebase from 'firebase'

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

//route guarding

router.beforeEach((to, from, next) => {
    var isAuthenticated = firebase.auth().currentUser;

    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else {
        next();
    }

});

export default router