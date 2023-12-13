<script setup lang="ts">
    import { defineAsyncComponent, onMounted, onBeforeUnmount } from 'vue';
    import { useToggleNavigation } from '@/store/toggleNavigation';

    const HeaderLayout = defineAsyncComponent(() => import('@/views/layouts/HeaderLayout.vue'));
    const SidebarLayout = defineAsyncComponent(() => import('@/views/layouts/SidebarLayout.vue'));

    const toggleNavigation = useToggleNavigation();

    onBeforeUnmount(() => {
        window.removeEventListener('resize', checkScreenSize);
    });

    onMounted(() => {
        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();
    });

    const checkScreenSize = (): void => {
        if (window.innerWidth >= 1024) {
            toggleNavigation.closeNavigation();
            document.documentElement.classList.remove('overflow-hidden');
        }
    };
</script>

<template>
    <header class="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
        <div class="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-gray-light lg:px-6 lg:pb-8 lg:pt-3 lg:dark:border-white/10 xl:w-80">
            <HeaderLayout />
            <nav class="hidden lg:block">
                <SidebarLayout />
            </nav>
            <div
                :class="{ 'z-10 opacity-100': toggleNavigation.isNavigationOpen, 'z-0 opacity-0': !toggleNavigation.isNavigationOpen }"
                class="fixed inset-0 top-14 bg-zinc-400/5 backdrop-blur-sm dark:bg-black/5 transition-all duration-300 lg:hidden">
            </div>
            <nav
                :class="{ 'translate-x-0 duration-300 ease-out': toggleNavigation.isNavigationOpen, '-translate-x-full duration-300 ease-in': !toggleNavigation.isNavigationOpen }"
                class="fixed top-14 left-0 h-screen w-screen max-w-sm overflow-y-auto bg-light dark:bg-dark border-r border-gray-light dark:border-gray-dark z-10 transition-transform lg:hidden"
            >
                <SidebarLayout />
            </nav>
        </div>
    </header>
</template>
