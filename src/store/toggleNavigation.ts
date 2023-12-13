import { defineStore } from 'pinia';

export const useToggleNavigation = defineStore({
	id: 'toggleNavigation',
	state: () => ({
		isNavigationOpen: false
	}),
	actions: {
		toggleNavigation() {
			this.isNavigationOpen = !this.isNavigationOpen;
			if (this.isNavigationOpen) {
				document.body.classList.add('overflow-hidden');
			} else {
				document.body.classList.remove('overflow-hidden');
			}
		},
		closeNavigation() {
			this.isNavigationOpen = false;
			document.body.classList.remove('overflow-hidden');
		}
	}
});
