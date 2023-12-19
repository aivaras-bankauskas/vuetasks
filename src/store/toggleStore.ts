import { defineStore } from 'pinia';

export const useToggleStore = defineStore({
	id: 'toggle',
	state: () => ({
		isNavigationOpen: false,
		isSearchShown: {} as Record<string, boolean>
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
		showSearchInput(id: string) {
			this.isSearchShown[id] = true;
		},
		hideSearchInput(id: string) {
			this.isSearchShown[id] = false;
		},
		hideAllSearchInputs() {
			for (const key in this.isSearchShown) {
				this.isSearchShown[key] = false;
			}
		}
	}
});
