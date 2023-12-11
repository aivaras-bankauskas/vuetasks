<script setup lang="ts">
    import { computed, ref, reactive } from 'vue';
    import UserPopupCard from '@/components/cards/UserPopupCard.vue';
    import HamburgerButton from '@/components/buttons/HamburgerButton.vue';

    defineProps<{
        isMenuOpen: boolean;
    }>();

    const emit = defineEmits(['toggleTheme']);

    const data = reactive({
        companyName: 'FlowForge',
        firstName: 'Aivaras',
        lastName: 'Bankauskas',
        email: 'aivarasbankauskas@gmail.com',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    });

    const isUserMenuOpen = ref(false);
    const isSearchbarShown = ref(false);

    const fullName = computed(() => `${data.firstName} ${data.lastName}`);

    const toggleTheme = (): void => {
        emit('toggleTheme');
    };

    const toggleUserMenu = (): void => {
        isUserMenuOpen.value = !isUserMenuOpen.value;
    };

    const showSearchbar = (): void => {
        isSearchbarShown.value = true;
    };

    const hideSearchbar = (): void => {
        isSearchbarShown.value = false;
    };

</script>

<template>
    <div class="hidden lg:flex">
        <RouterLink aria-label="Home" to="/">
            <span class="text-primary text-2xl">{{ data.companyName }}</span>
        </RouterLink>
    </div>
    <div class="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-4 px-4 border-b border-gray-light dark:border-gray-dark transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80 backdrop-blur-sm dark:backdrop-blur bg-light/[var(--bg-opacity-light)] dark:bg-dark/[var(--bg-opacity-dark)]">
        <div class="absolute inset-x-0 top-full h-px transition bg-zinc-900/7.5 dark:bg-light/7.5"></div>
        <div class="flex items-center gap-5 lg:hidden">
            <HamburgerButton :is-menu-open="isMenuOpen" />
            <RouterLink :class="{ 'hidden': isSearchbarShown }" class="sm:block lg:hidden" aria-label="Home" to="/">
                <span class="text-primary text-xl">{{ data.companyName }}</span>
            </RouterLink>
        </div>
        <div :class="{ 'hidden': !isSearchbarShown }" class="max-w-md flex-auto sm:block">
            <div class="relative">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="absolute text-gray-dark dark:text-gray-light left-2 top-1/2 h-6 w-6 stroke-current transform -translate-y-1/2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"></path>
                </svg>
                <input type="search" class="h-8 w-full rounded-xl bg-light pl-10 py-3 pr-3 text-zinc-500 dark:text-gray-light dark:placeholder-zinc-600 ring-1 ring-zinc-900/10 transition focus:outline-none focus:ring-1 focus:ring-gray-light dark:bg-light/5 dark:ring-inset dark:ring-white/10 lg:flex" placeholder="search something...">
            </div>
        </div>
        <div class="flex items-center gap-5">
            <nav class="hidden lg:block">
                <ul role="list" class="flex items-center gap-8">
                    <li><RouterLink class="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/documentation">Documentation</RouterLink></li>
                    <li><RouterLink class="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/support">Support</RouterLink></li>
                </ul>
            </nav>
            <div class="hidden lg:block md:h-5 md:w-px md:bg-gray-light md:dark:bg-gray-dark"></div>
            <div class="flex gap-4">
                <div class="contents sm:hidden">
                    <button v-if="isSearchbarShown" type="button" class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 ui-not-focus-visible:outline-none dark:hover:bg-light/5 lg:hidden" aria-label="Hide Searchbar" @click="hideSearchbar">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 stroke-zinc-900 dark:stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <button v-else type="button" class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 ui-not-focus-visible:outline-none dark:hover:bg-light/5 lg:hidden" aria-label="Show Searchbar" @click="showSearchbar">
                        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="h-6 w-6 stroke-zinc-900 dark:stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"></path>
                        </svg>
                    </button>
                </div>
                <button type="button" class="hidden md:flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-light/5" aria-label="Toggle theme" @click="toggleTheme">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="h-6 w-6 stroke-zinc-900 dark:hidden">
                        <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                        <path stroke-linecap="round" d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"></path>
                    </svg>
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="hidden h-6 w-6 stroke-white dark:block">
                        <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"></path>
                    </svg>
                </button>
                <button type="button" :class="{ 'hidden': isSearchbarShown }" class="sm:flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-light/5" aria-label="Notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-dark dark:text-gray-light">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                </button>
            </div>
            <div :class="{ 'hidden xxs:hidden sm:flex': isSearchbarShown }" class="hidden xxs:flex lg:hidden h-8 w-8 hover:ring-4 hover:ring-zinc-900/5 dark:hover:ring-white/5 rounded-full cursor-pointer">
                <RouterLink to="/account">
                    <img class="h-8 w-8 rounded-full bg-gray-50" :src="data.avatar" alt="Full Name">
                </RouterLink>
            </div>
            <div class="hidden lg:flex h-8 w-8 hover:ring-4 hover:ring-zinc-900/5 dark:hover:ring-white/5 rounded-full cursor-pointer">
                <img class="h-8 w-8 rounded-full bg-gray-50" :src="data.avatar" alt="Full Name" @click="toggleUserMenu">
            </div>
            <UserPopupCard v-if="isUserMenuOpen" :full-name="fullName" :email="data.email" :avatar="data.avatar" @toggle-user-menu="toggleUserMenu" />
        </div>
    </div>
</template>
