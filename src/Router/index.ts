import AppLayout from '@/layout/AppLayout.vue'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('@/pages/auth/Login.vue')
        },
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/Home',
                    name: 'Home',
                    meta: { breadcrumb: 'Home' },
                    component: () => import('@/views/StockTaking/List.vue')
                },
                {
                    path: '/StockTaking/List',
                    name: 'StockTakingList',
                    meta: { module: 'Inventory', breadcrumb: 'Stock Taking' },
                    component: () => import('@/views/StockTaking/List.vue')
                },
                {
                    path: '/StockTaking/Detail/:id',
                    name: 'StockTakingDetail',
                    meta: { module: 'Inventory', breadcrumb: 'Stock Taking Detail' },
                    component: () => import('@/views/StockTaking/Detail.vue'),
                    props: true,
                },
                {
                    path: '/StockTaking/Maintain/:id',
                    name: 'StockTakingMaintain',
                    meta: { module: 'Inventory', breadcrumb: 'Add/Edit Stock Taking' },
                    component: () => import('@/views/StockTaking/Maintain.vue'),
                    props: true,
                },
                {
                    path: '/StockTaking/Maintain/',
                    name: 'AddStockTaking',
                    meta: { module: 'Inventory', breadcrumb: 'Add/Edit Stock Taking' },
                    component: () => import('@/views/StockTaking/Maintain.vue'),
                    props: true,
                }
            ]
        }
    ]
});

export default router;