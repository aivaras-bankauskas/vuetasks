import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'dashboard',
		component: () => import('@/views/pages/dashboard/DashboardPage.vue')
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
	},
	{
		path: '/all-projects',
		name: 'all-projects',
		component: () => import('@/views/pages/projects/AllProjectsPage.vue')
	}
];

const router = createRouter({
	history: createWebHistory('/'),
	routes
});

export default router;
