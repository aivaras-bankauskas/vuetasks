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

router.beforeEach((to, _from, next) => {
	document.title = `FlowForge | ${to.meta.title}`;
	next();
});

export default router;
