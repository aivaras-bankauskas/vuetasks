import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'dashboard',
		component: () => import('@/views/pages/dashboard/DashboardPage.vue')
	},
	{
		path: '/team',
		name: 'team',
		component: () => import('@/views/pages/team/TeamPage.vue')
	},
	{
		path: '/projects',
		name: 'projects',
		component: () => import('@/views/pages/projects/ProjectsPage.vue')
	}
];

const router = createRouter({
	history: createWebHistory('/'),
	routes
});

export default router;
