import { RouteRecordRaw } from 'vue-router';

const navigationRoutes: RouteRecordRaw[] = [
	{
		path: '',
		name: 'dashboardGroup',
		meta: { title: 'Dashboard' },
		children: [
			{
				path: '/dashboard',
				name: 'dashboard',
				component: () => import('@/views/pages/dashboard/DashboardPage.vue'),
				meta: { title: 'Dashboard' }
			}
		]
	},
	{
		path: '',
		name: 'projectsGroup',
		meta: { title: 'Projects' },
		children: [
			{
				path: '/projects',
				name: 'projects',
				component: () => import('@/views/pages/projects/ProjectsPage.vue'),
				meta: { title: 'Projects' }
			}
		]
	},
	{
		path: '',
		name: 'tasksGroup',
		meta: { title: 'Tasks' },
		children: [
			{
				path: '/tasks',
				name: 'tasks',
				component: () => import('@/views/pages/tasks/TasksPage.vue'),
				meta: { title: 'Tasks' }
			}
		]
	},
	{
		path: '',
		name: 'teamGroup',
		meta: { title: 'Team' },
		children: [
			{
				path: '/team',
				name: 'team',
				component: () => import('@/views/pages/team/TeamPage.vue'),
				meta: { title: 'Team' }
			}
		]
	}
];

export default navigationRoutes;
