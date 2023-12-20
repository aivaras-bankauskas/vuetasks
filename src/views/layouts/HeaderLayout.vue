<script setup lang="ts">
    import { reactive } from 'vue';
    import { useToggleStore } from '@/store/toggleStore';
    import UserAvatar from '@/components/avatar/UserAvatar.vue';
    import SearchInput from '@/components/inputs/SearchInput.vue';
    import HamburgerIcon from '@/components/icons/HamburgerIcon.vue';
    import ThemeIcon from '@/components/icons/ThemeIcon.vue';
    import SearchIcon from '@/components/icons/SearchIcon.vue';
    import NotificationIcon from '@/components/icons/NotificationIcon.vue';
    import CompanyNameLink from '@/components/links/CompanyNameLink.vue';
    import NavigationLink from '@/components/links/NavigationLink.vue';

    const data = reactive({
        companyName: 'FlowForge',
        firstName: 'Tom',
        lastName: 'Cook',
        email: 'tom.cook@example.com',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        onlineStatus: 'online'
    });

    const toggleStore = useToggleStore();
    const searchId = 'headerSearch';

    const closeNavigation = (): void => {
        toggleStore.closeNavigation();
    };

    const closeSearch = (): void => {
        toggleStore.hideAllSearchInputs();
    };

    const closeSearchAndNavigation = (): void => {
        closeNavigation();
        closeSearch();
    };
</script>

<template>
    <div class="hidden lg:flex">
        <CompanyNameLink :data="data" span-class="text-2xl" />
    </div>
    <div class="fixed inset-x-0 top-0 z-50 h-14 flex justify-between items-center gap-4 px-4 sm:px-6 lg:left-64 lg:z-30 lg:px-8 xl:left-72 transition nav-background link">
        <div class="flex items-center gap-5 lg:hidden">
            <HamburgerIcon @click="closeSearch" />
            <CompanyNameLink
                :data="data"
                :class="{ 'hidden': toggleStore.isSearchShown[searchId] }"
                span-class="text-xl"
                @click="closeNavigation"
            />
        </div>
        <div :class="{ 'hidden': !toggleStore.isSearchShown[searchId] }" class="max-w-md flex-auto sm:block">
            <SearchInput placeholder="Search something..." input-class="border border-body-light dark:border-body-dark/50" />
        </div>
        <div class="flex items-center gap-5">
            <nav class="hidden lg:block">
                <ul role="list" class="flex items-center gap-8">
                    <NavigationLink title="API" link-to="/api" class="text-sm leading-5 hover:text-primary" />
                    <NavigationLink title="Documentation" link-to="/documentation" class="text-sm leading-5 hover:text-primary" />
                </ul>
            </nav>
            <div class="hidden lg:block md:h-5 md:w-px md:bg-divider-light md:dark:bg-divider-dark"></div>
            <div class="flex gap-4">
                <SearchIcon :search-id="searchId" @click="closeNavigation" />
                <ThemeIcon class="theme-icon-class" light-class="stroke-color-light" dark-class="stroke-color-dark" />
                <NotificationIcon :class="{ 'hidden': toggleStore.isSearchShown[searchId] }" @click="closeNavigation" />
            </div>
            <UserAvatar class="hidden xxs:block" :data="data" @click="closeSearchAndNavigation" />
        </div>
    </div>
</template>

<style scoped>
    .nav-background {
        @apply shadow-md shadow-black/5 dark:shadow-white/5 backdrop-blur-sm dark:backdrop-blur bg-white/[var(--bg-opacity-light)] dark:bg-black/[var(--bg-opacity-dark)];
    }
    .theme-icon-class {
        @apply hidden md:flex items-center justify-center h-6 w-6 rounded-md transition hover:bg-black/5 dark:hover:bg-white/10;
    }
</style>
