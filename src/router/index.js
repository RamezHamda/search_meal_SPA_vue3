import {createRouter , createWebHistory} from 'vue-router'
import defaultLayout from '../components/DefaultLayout.vue'
const routes = [
    {
        path: '/',
        name: 'default',
        component: defaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../View/Home.vue')},
            {
                path: '/name/:name?',
                name: 'mealByName',
                component: () => import('../View/MealsByName.vue')
            },
            {
                path: '/letter/:letter?',
                name: 'mealByLetter',
                component: () => import('../View/MealsByLetter.vue')
            },
            {
                path: "/ingredients",
                name: "ingredients",
                component: () => import("../View/Ingredients.vue"),
              },
            {
                path: '/ingredient/:ingredient?',
                name: 'mealByingredient',
                component: () => import('../View/MealsByingredient.vue')
            },
            {
                path:'/meal/:id',
                name: 'mealDetails',
                component: () => import('../View/MealDetails.vue')
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
    },
    {
        path: '/guest',
        name: 'guest',
        component: () => import('../components/GuestLayout.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router