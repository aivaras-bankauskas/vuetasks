<script setup lang="ts">
    import { useToggleStore } from '@/store/toggleStore';

    const toggleStore = useToggleStore();

    const toggleNavigation = (): void => {
        toggleStore.toggleNavigation();
    };
</script>

<template>
    <button type="button" class="h-6 w-6 flex items-center justify-center rounded-md transition hover:bg-black/5 dark:hover:bg-white/10" aria-label="Toggle navigation" @click="toggleNavigation">
        <svg v-if="!toggleStore.isNavigationOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-color-light dark:stroke-color-dark">
            <title>Hamburger Menu</title>
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-color-light dark:stroke-color-dark">
            <title>Close Menu</title>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
</template>
