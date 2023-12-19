import { computed, onMounted, onBeforeUnmount, ref } from 'vue';
import type { Ref } from 'vue';
import { useToggleStore } from '@/store/toggleStore';
import debounce from '@/core/utils/debounce';

type CheckScreenSize = {
    isMobileScreen: Ref<boolean>,
    isTabletScreen: Ref<boolean>,
    isDesktopScreen: Ref<boolean>
};

const useCheckScreenSize = (): CheckScreenSize => {
	const toggleStore = useToggleStore();
	const screenWidth = ref(window.innerWidth);

	const isMobileScreen = computed(() => screenWidth.value < 640);
	const isTabletScreen = computed(() => screenWidth.value >= 640 && screenWidth.value < 1024);
	const isDesktopScreen = computed(() => screenWidth.value >= 1024);

	const updateScreenWidth = (): void => {
		screenWidth.value = window.innerWidth;
	};

	const checkScreenSize = (): void => {
		if (isDesktopScreen.value) {
			toggleStore.closeNavigation();
			document.documentElement.classList.remove('overflow-hidden');
		} else if (isTabletScreen.value) {
			toggleStore.hideAllSearchInputs();
		}
	};

	const debouncedCheckScreenSize = debounce(() => {
		updateScreenWidth();
		checkScreenSize();
	}, 250);

	onMounted(() => {
		window.addEventListener('resize', debouncedCheckScreenSize);
		debouncedCheckScreenSize();
	});

	onBeforeUnmount(() => {
		window.removeEventListener('resize', debouncedCheckScreenSize);
	});

	return { isMobileScreen, isTabletScreen, isDesktopScreen };
};

export default useCheckScreenSize;
