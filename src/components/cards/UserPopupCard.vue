<script setup lang="ts">
    import { useToggleStore } from '@/store/toggleStore';

    defineProps<{
        fullName: string;
        email: string;
        avatar: string;
    }>();

    const toggleStore = useToggleStore();

    const closeUserPopup = (): void => {
        toggleStore.closeUserPopup();
    };
</script>

<template>
    <div class="hidden lg:block absolute top-11 right-8 mt-2 rounded-md border border-gray-light dark:border-gray-dark bg-light dark:bg-dark" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
        <button type="button" class="absolute top-1 right-3 h-5 w-5 rounded-md transition hover:bg-zinc-900/5 ui-not-focus-visible:outline-none dark:hover:bg-light/5" aria-label="Close User Menu" @click="closeUserPopup">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 stroke-zinc-900 dark:stroke-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div class="flex items-center ml-4 mt-3">
            <img class="h-12 w-12 rounded-full" :src="avatar" alt="avatar">
            <div class="flex flex-col">
                <h4 class="block px-4 text-sm text-gray-dark dark:text-gray-light w-48 truncate">{{ fullName }}</h4>
                <a :href="`mailto:${email}`" class="block px-4 text-xs text-primary dark:text-gray-light w-48 truncate">{{ email }}</a>
            </div>
        </div>
        <div class="flex justify-between px-4 py-2">
            <RouterLink id="user-menu-profile" to="/account" class="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white" role="menuitem" tabindex="-1" @click="closeUserPopup">Account</RouterLink>
            <RouterLink id="user-menu-logout" to="/sign-out" class="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white" role="menuitem" tabindex="-1" @click="closeUserPopup">Sign Out</RouterLink>
        </div>
    </div>
</template>
