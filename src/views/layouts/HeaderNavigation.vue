<script setup lang="ts">
    import { computed, ref, reactive } from 'vue';
    import UserPopupCard from '@/components/cards/UserPopupCard.vue';
    import HamburgerIcon from '@/components/icons/HamburgerIcon.vue';
    import ThemeIcon from '@/components/icons/ThemeIcon.vue';
    import SearchIcon from '@/components/icons/SearchIcon.vue';
    import NotificationIcon from '@/components/icons/NotificationIcon.vue';

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
            <HamburgerIcon />
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
                <SearchIcon :is-searchbar-shown="isSearchbarShown" @show-searchbar="showSearchbar" @hide-searchbar="hideSearchbar" />
                <ThemeIcon class="hidden md:block" light-class="stroke-zinc-900" dark-class="stroke-white" />
                <NotificationIcon :is-searchbar-shown="isSearchbarShown" />
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
