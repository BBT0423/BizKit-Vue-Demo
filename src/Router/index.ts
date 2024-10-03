import AppLayout from '@/layout/AppLayout.vue'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'List',
                    component: () => import('@/views/StockTaking/List.vue')
                },
                {
                    path: '/StockTaking/List',
                    name: 'StockTakingList',
                    component: () => import('@/views/StockTaking/List.vue')
                },
                {
                    path: '/StockTaking/Detail/:id',
                    name: 'StockTakingDetail',
                    component: () => import('@/views/StockTaking/Detail.vue'),
                    props: true,
                },
                {
                    path: '/StockTaking/Maintain/:id',
                    name: 'StockTakingMaintain',
                    component: () => import('@/views/StockTaking/Maintain.vue'),
                    props: true,
                },
            ]
        }
    ]
});

export default router;