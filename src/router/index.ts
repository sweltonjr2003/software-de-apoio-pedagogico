import { createWebHashHistory, createRouter } from 'vue-router'

//Layouts
import DefaultLayout from '../components/layouts/DefaultLayout.vue'

// Views
import HomeView from '../views/HomeView.vue'
import FeedView from '../views/FeedView.vue'
import LoginView from '../views/LoginView.vue'

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: DefaultLayout,
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: HomeView,
                },
                {
                    path: '/feed',
                    name: 'Feed',
                    component: FeedView,
                },
            ],
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginView,
        },
    ],
})
