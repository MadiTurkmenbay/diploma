import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Main from "@/views/Main.vue";
import Academy from "@/views/Academy.vue";
import Schedule from "@/views/Schedule.vue";
import Term from "@/views/Term.vue";
import ExamsSchedule from "@/views/ExamsSchedule.vue";
import Student from "@/views/profile/Student.vue";
import PersonalData from "@/views/profile/PersonalData.vue";
import CertificatePoints from "@/views/profile/CertificatePoints.vue";
import { useCookies } from "vue3-cookies";


const {cookies} = useCookies();
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/main',
            name: 'main',
            meta: { requiresAuth: true },
            component: Main,
        },
        {
            path: '/schedule',
            name: 'schedule',
            meta: { requiresAuth: true },
            component: Schedule,
        },
        {
            path: '/student',
            meta: { requiresAuth: true },
            children: [
                {path: '', name: 'profile', component: Student},
                {path: '/personal-data', name: 'personalData', component: PersonalData},
                {path: '/certificate-points', name: 'certificates', component: CertificatePoints}
            ],
        },
        {
            path: '/academy',
            meta: { requiresAuth: true },
            children: [
                {
                    path: '',
                    name: 'academy',
                    component: Academy,
                },
                {
                    path: '/term/:number',
                    name: 'term',
                    component: Term,
                }
            ]
        },
        {
            path: '/exams-schedule',
            meta: { requiresAuth: true },
            name: 'exams',
            component: ExamsSchedule,
        }
    ]
})

router.beforeEach((to, from) => {
    // if (to.meta.requiresAuth && !cookies.get('user')) {
    //     return {
    //         path: '/',
    //         query: { redirect: to.fullPath },
    //     }
    // }
})


export default router
