import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import navigationRoutes from './navigation';

const routes: Array<RouteRecordRaw> = [
	...navigationRoutes
];

const router = createRouter({
	history: createWebHistory('/'),
	routes
});

export default router;
