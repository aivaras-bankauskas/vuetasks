import { defineStore } from 'pinia';

export const useToggleStore = defineStore({
	id: 'toggle',
	state: () => ({
		isNavigationOpen: false,
		isSearchShown: false
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
		},
		showSearchInput() {
			this.isSearchShown = true;
		},
		hideSearchInput() {
			this.isSearchShown = false;
		}
	}
});
