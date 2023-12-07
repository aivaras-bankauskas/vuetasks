<script setup lang="ts">
    import { defineAsyncComponent, ref, onMounted, onBeforeUnmount } from 'vue';

    const SidebarMenu = defineAsyncComponent(() => import('@/views/layouts/SidebarMenu.vue'));

    const isMenuOpen = ref(false);

    onBeforeUnmount(() => {
        window.removeEventListener('resize', checkScreenSize);
    });

    onMounted(() => {
        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
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
            <div class="hidden lg:flex">
                <a aria-label="Home" href="/">
                    <span class="text-primary dark:text-white text-2xl">FlowForge</span>
                </a>
            </div>
            <div class="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-4 px-4 border-b border-gray-light dark:border-gray-dark transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80 backdrop-blur-sm dark:backdrop-blur bg-white/[var(--bg-opacity-light)] dark:bg-zinc-800/[var(--bg-opacity-dark)]">
                <div class="absolute inset-x-0 top-full h-px transition bg-zinc-900/7.5 dark:bg-white/7.5"></div>
                <div class="hidden lg:block lg:max-w-md lg:flex-auto">
                    <div class="relative">
                        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="absolute text-gray-dark dark:text-gray-light left-2 top-1/2 h-6 w-6 stroke-current transform -translate-y-1/2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"></path>
                        </svg>
                        <input type="search" class="h-8 w-full rounded-xl bg-white pl-10 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition focus:outline-none focus:ring-1 focus:ring-gray-light dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 lg:flex" placeholder="Find something...">
                    </div>
                </div>
                <div class="flex items-center gap-5 lg:hidden">
                    <button type="button" class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5" aria-label="Toggle navigation" @click="toggleMenu">
                        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-zinc-900 dark:stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-zinc-900 dark:stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <a aria-label="Home" href="/">
                        <span class="text-primary dark:text-white text-xl">FlowForge</span>
                    </a>
                </div>
                <div class="flex items-center gap-5">
                    <nav class="hidden lg:block">
                        <ul role="list" class="flex items-center gap-8">
                            <li><a class="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="#">Documentation</a></li>
                            <li><a class="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="#">Support</a></li>
                        </ul>
                    </nav>
                    <div class="hidden lg:block md:h-5 md:w-px md:bg-gray-light md:dark:bg-gray-dark"></div>
                    <div class="flex gap-4">
                        <div class="contents lg:hidden">
                            <button type="button" class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 ui-not-focus-visible:outline-none dark:hover:bg-white/5 lg:hidden" aria-label="Find something...">
                                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="h-6 w-6 stroke-zinc-900 dark:stroke-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"></path>
                                </svg>
                            </button>
                        </div>
                        <button type="button" class="hidden md:flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5" aria-label="Toggle theme" @click="toggleTheme">
                            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="h-6 w-6 stroke-zinc-900 dark:hidden">
                                <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                                <path stroke-linecap="round" d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"></path>
                            </svg>
                            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="hidden h-6 w-6 stroke-white dark:block">
                                <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"></path>
                            </svg>
                        </button>
                        <button type="button" class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5" aria-label="Notifications">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-dark dark:text-gray-light">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>
                    </div>
                    <div class="hidden xxs:flex h-8 w-8 hover:ring-4 hover:ring-zinc-900/5 dark:hover:ring-white/5 rounded-full cursor-pointer">
                        <img class="h-8 w-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="fullName">
                    </div>
                </div>
            </div>
            <nav class="hidden lg:block">
                <SidebarMenu />
            </nav>
            <div
                :class="{ 'z-10 opacity-100': isMenuOpen, 'z-0 opacity-0': !isMenuOpen }"
                class="fixed inset-0 top-14 bg-zinc-400/5 backdrop-blur-sm dark:bg-black/5 transition-all duration-300 lg:hidden">
            </div>
            <nav
                :class="{ 'translate-x-0 duration-300 ease-out': isMenuOpen, '-translate-x-full duration-300 ease-in': !isMenuOpen }"
                class="fixed top-14 left-0 h-screen w-screen max-w-sm overflow-y-auto bg-white dark:bg-zinc-800 border-r border-gray-light dark:border-gray-dark z-10 transition-transform lg:hidden"
            >
                <SidebarMenu @toggle-theme="toggleTheme" />
            </nav>
        </div>
    </header>
</template>
