<script setup lang="ts">
    import { ref, reactive } from 'vue';
    import UserAvatar from '@/components/avatar/UserAvatar.vue';
    import SearchInput from '@/components/inputs/SearchInput.vue';
    import HamburgerIcon from '@/components/icons/HamburgerIcon.vue';
    import ThemeIcon from '@/components/icons/ThemeIcon.vue';
    import SearchIcon from '@/components/icons/SearchIcon.vue';
    import NotificationIcon from '@/components/icons/NotificationIcon.vue';

    const data = reactive({
        companyName: 'FlowForge',
        firstName: 'Tom',
        lastName: 'Cook',
        email: 'tom.cook@example.com',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    });

    const isSearchbarShown = ref(false);

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
            <SearchInput />
        </div>
        <div class="flex items-center gap-5">
            <nav class="hidden lg:block">
                <ul role="list" class="flex items-center gap-8">
                    <li><RouterLink class="navbar-header-link" to="/documentation">Documentation</RouterLink></li>
                    <li><RouterLink class="navbar-header-link" to="/support">Support</RouterLink></li>
                </ul>
            </nav>
            <div class="hidden lg:block md:h-5 md:w-px md:bg-gray-light md:dark:bg-gray-dark"></div>
            <div class="flex gap-4">
                <SearchIcon :is-searchbar-shown="isSearchbarShown" @show-searchbar="showSearchbar" @hide-searchbar="hideSearchbar" />
                <ThemeIcon class="theme-icon-class" light-class="stroke-zinc-900" dark-class="stroke-white" />
                <NotificationIcon :is-searchbar-shown="isSearchbarShown" />
            </div>
            <UserAvatar :is-searchbar-shown="isSearchbarShown" :data="data" />
        </div>
    </div>
</template>

<style scoped>
    .navbar-header-link {
        @apply text-sm leading-5 text-zinc-600 transition hover:text-primary dark:text-zinc-400 dark:hover:text-primary;
    }
    .theme-icon-class {
        @apply hidden md:flex items-center justify-center h-6 w-6 rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-light/5;
    }
</style>
