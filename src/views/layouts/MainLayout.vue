<script setup lang="ts">
    import { defineAsyncComponent, ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue';
    import eventBus from '@/events/eventBus';

    const HeaderNavigation = defineAsyncComponent(() => import('@/views/layouts/HeaderNavigation.vue'));
    const SidebarMenu = defineAsyncComponent(() => import('@/views/layouts/SidebarMenu.vue'));

    const isMenuOpen = ref(false);

    onBeforeUnmount(() => {
        window.removeEventListener('resize', checkScreenSize);
    });

    onMounted(() => {
        eventBus.on('toggleMenu', toggleMenu);
        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });

    onUnmounted(() => {
        eventBus.off('toggleMenu', toggleMenu);
    });

    const checkScreenSize = (): void => {
        if (window.innerWidth >= 1024) {
            isMenuOpen.value = false;
            document.documentElement.classList.remove('overflow-hidden');
        }
    };

    const toggleMenu = (): void => {
        isMenuOpen.value = !isMenuOpen.value;
        if (isMenuOpen.value) {
            document.documentElement.classList.add('overflow-hidden');
        } else {
            document.documentElement.classList.remove('overflow-hidden');
        }
    };

    const toggleTheme = (): void => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };
</script>

<template>
    <header class="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
        <div class="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-gray-light lg:px-6 lg:pb-8 lg:pt-3 lg:dark:border-white/10 xl:w-80">
            <HeaderNavigation :is-menu-open="isMenuOpen" @toggle-theme="toggleTheme" />
            <nav class="hidden lg:block">
                <SidebarMenu />
            </nav>
            <div
                :class="{ 'z-10 opacity-100': isMenuOpen, 'z-0 opacity-0': !isMenuOpen }"
                class="fixed inset-0 top-14 bg-zinc-400/5 backdrop-blur-sm dark:bg-black/5 transition-all duration-300 lg:hidden">
            </div>
            <nav
                :class="{ 'translate-x-0 duration-300 ease-out': isMenuOpen, '-translate-x-full duration-300 ease-in': !isMenuOpen }"
                class="fixed top-14 left-0 h-screen w-screen max-w-sm overflow-y-auto bg-light dark:bg-dark border-r border-gray-light dark:border-gray-dark z-10 transition-transform lg:hidden"
            >
                <SidebarMenu @toggle-theme="toggleTheme" />
            </nav>
        </div>
    </header>
</template>
