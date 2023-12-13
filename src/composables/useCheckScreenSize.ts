import { onMounted, onBeforeUnmount } from 'vue';
import { useToggleStore } from '@/store/toggleStore';
import debounce from '@/core/utils/debounce';

const useCheckScreenSize = (): void => {
	const toggleStore = useToggleStore();

	const checkScreenSize = (): void => {
		if (window.innerWidth < 1024) {
			toggleStore.closeUserPopup();
		}
		if (window.innerWidth >= 640) {
			toggleStore.hideSearchInput();
		}
		if (window.innerWidth >= 1024) {
			toggleStore.closeNavigation();
			document.documentElement.classList.remove('overflow-hidden');
		}
	};

	const debouncedCheckScreenSize = debounce(checkScreenSize, 100);

	onMounted(() => {
		window.addEventListener('resize', debouncedCheckScreenSize);
		checkScreenSize();
	});

	onBeforeUnmount(() => {
		window.removeEventListener('resize', debouncedCheckScreenSize);
	});
};

export default useCheckScreenSize;
