import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import navigationRoutes from './navigation';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'root',
		redirect: { name: 'dashboard' }
	},
	...navigationRoutes
];

const router = createRouter({
	history: createWebHistory('/'),
	routes
});

export default router;
