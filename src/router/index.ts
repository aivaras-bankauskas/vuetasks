import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'dashboard',
		component: () => import('@/views/pages/DashboardPage.vue')
	},
	{
		path: '/all-members',
		name: 'all-members',
		component: () => import('@/views/pages/team/AllMembersPage.vue')
	},
	{
		path: '/my-team',
		name: 'my-team',
		component: () => import('@/views/pages/team/MyTeamPage.vue')
	}
];

const router = createRouter({
	history: createWebHistory('/'),
	routes
});

export default router;
