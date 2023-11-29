<script setup lang="ts">
    import { onMounted } from 'vue';

    onMounted(() => {
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });

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
    <div class="w-full">
        <div class="h-full lg:ml-72 xl:ml-80">
            <header class="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
                <div class="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-gray-light lg:px-6 lg:pb-8 lg:pt-3 lg:dark:border-white/10 xl:w-80">
                    <div class="hidden lg:flex">
                        <a aria-label="Home" href="/">
                            <span class="text-primary dark:text-white text-2xl">FlowForge</span>
                        </a>
                    </div>
                    <div class="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80 backdrop-blur-sm dark:backdrop-blur bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]" style="--bg-opacity-light:0.5;--bg-opacity-dark:0.2">
                        <div class="absolute inset-x-0 top-full h-px transition bg-zinc-900/7.5 dark:bg-white/7.5"></div>
                        <div class="hidden lg:block lg:max-w-md lg:flex-auto">
                            <div class="relative">
                                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="absolute left-2 top-1/2 h-5 w-5 stroke-current transform -translate-y-1/2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"></path>
                                </svg>
                                <input type="search" class="h-8 w-full rounded-xl bg-white pl-10 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition focus:outline-none focus:ring-1 focus:ring-gray-light dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 lg:flex" placeholder="Find something...">
                            </div>
                        </div>
                        <div class="flex items-center gap-5 lg:hidden">
                            <button type="button" class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5" aria-label="Toggle navigation">
                                <svg viewBox="0 0 10 9" fill="none" stroke-linecap="round" aria-hidden="true" class="w-2.5 stroke-zinc-900 dark:stroke-white">
                                    <path d="M.5 1h9M.5 8h9M.5 4.5h9"></path>
                                </svg>
                            </button>
                            <a aria-label="Home" href="/">
                                <svg viewBox="0 0 99 24" aria-hidden="true" class="h-6">
                                    <path class="fill-primary" d="M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z"></path>
                                    <path class="fill-zinc-900 dark:fill-white" d="M26.538 18h2.654v-3.999h2.576c2.672 0 4.456-1.723 4.456-4.333V9.65c0-2.61-1.784-4.333-4.456-4.333h-5.23V18Zm4.58-10.582c1.52 0 2.416.8 2.416 2.241v.018c0 1.441-.896 2.25-2.417 2.25h-1.925V7.418h1.925ZM38.051 18h2.566v-5.414c0-1.371.923-2.206 2.382-2.206.396 0 .791.061 1.178.15V8.287a3.843 3.843 0 0 0-.958-.123c-1.257 0-2.136.615-2.443 1.661h-.159V8.323h-2.566V18Zm11.55.202c2.979 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.773-5.036-2.953 0-4.772 1.916-4.772 5.036v.018c0 3.146 1.793 5.036 4.772 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.144-3.023 1.354 0 2.145 1.134 2.145 3.023v.018c0 1.907-.782 3.023-2.145 3.023Zm10.52 1.846c.492 0 .967-.053 1.283-.114v-1.907a6.057 6.057 0 0 1-.755.044c-.87 0-1.24-.387-1.24-1.257v-4.544h1.995V8.323H59.41V6.012h-2.592v2.311h-1.495v1.934h1.495v5.133c0 1.88.949 2.645 3.304 2.645Zm7.287.167c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.954 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023Zm10.767 2.013c2.522 0 4.034-1.353 4.297-3.463l.01-.053h-2.374l-.017.036c-.229.966-.853 1.467-1.908 1.467-1.37 0-2.135-1.08-2.135-3.04v-.018c0-1.934.755-3.006 2.135-3.006 1.099 0 1.74.615 1.908 1.556l.008.017h2.391v-.026c-.228-2.162-1.749-3.56-4.315-3.56-3.033 0-4.738 1.837-4.738 5.019v.017c0 3.217 1.714 5.054 4.738 5.054Zm10.257 0c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.953 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.371 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023ZM95.025 18h2.566V4.623h-2.566V18Z"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="flex items-center gap-5">
                            <nav class="hidden md:block">
                                <ul role="list" class="flex items-center gap-8">
                                    <li><a class="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/">API</a></li>
                                    <li><a class="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="#">Documentation</a></li>
                                    <li><a class="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="#">Support</a></li>
                                </ul>
                            </nav>
                            <div class="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
                            <div class="flex gap-4">
                                <div class="contents lg:hidden">
                                    <button type="button" class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 ui-not-focus-visible:outline-none dark:hover:bg-white/5 lg:hidden" aria-label="Find something...">
                                        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="h-5 w-5 stroke-zinc-900 dark:stroke-white">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"></path>
                                        </svg>
                                    </button>
                                </div>
                                <button type="button" class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5" aria-label="Toggle theme" @click="toggleTheme">
                                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="h-5 w-5 stroke-zinc-900 dark:hidden">
                                        <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                                        <path stroke-linecap="round" d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"></path>
                                    </svg>
                                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="hidden h-5 w-5 stroke-white dark:block">
                                        <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="hidden min-[416px]:contents">
                                <a class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-xl ring-1 ring-primary pb-1 pt-0.5 px-3 text-primary hover:bg-primary hover:text-white dark:text-white dark:ring-1 dark:ring-white dark:hover:bg-gray-light dark:hover:text-black dark:hover:ring-gray-light" href="#">Sign in</a>
                            </div>
                        </div>
                    </div>
                    <nav class="hidden lg:mt-16 lg:block">
                        <ul role="list">
                            <li class="relative mt-6 md:mt-0">
                                <h2 class="text-xs font-semibold text-gray-dark dark:text-gray-light">Navigation</h2>
                                <div class="relative mt-3 pl-2">
                                    <div class="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5" style="border-radius:8px;height:32px;top:0;opacity:0"></div>
                                    <div class="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                                    <div class="absolute left-2 h-6 w-px bg-primary" style="top:4px;opacity:1"></div>
                                    <ul role="list" class="border-l border-transparent">
                                        <li class="relative">
                                            <a aria-current="page" class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900 dark:text-white" href="/">
                                                <span class="truncate">Dashboard</span>
                                            </a>
                                        </li>
                                        <li class="relative">
                                            <a aria-current="page" class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900 dark:text-white" href="/teams">
                                                <span class="truncate">Team</span>
                                            </a>
                                            <ul role="list" style="opacity:1">
                                                <li>
                                                    <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#all_members">
                                                        <span class="truncate">All Members</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#member_groups">
                                                        <span class="truncate">Member Groups</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="relative">
                                            <a aria-current="page" class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900 dark:text-white" href="/projects">
                                                <span class="truncate">Projects</span>
                                            </a>
                                            <ul role="list" style="opacity:1">
                                                <li>
                                                    <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#all_projects">
                                                        <span class="truncate">All Projects</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#project_categories">
                                                        <span class="truncate">Project Categories</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="relative">
                                            <a aria-current="page" class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900 dark:text-white" href="/issues">
                                                <span class="truncate">Issues</span>
                                            </a>
                                            <ul role="list" style="opacity:1">
                                                <li>
                                                    <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#all_issues">
                                                        <span class="truncate">All Issues</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#open_issues">
                                                        <span class="truncate">Open Issues</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#in_progress_issues">
                                                        <span class="truncate">In Progress Issues</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#closed_issues">
                                                        <span class="truncate">Closed Issues</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
                                <a class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-primary dark:text-white dark:hover:bg-primary w-full" href="#">
                                    Sign Out
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div class="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
                <main class="flex-auto">
                    <article class="flex h-full flex-col pb-10 pt-12">
                        <div class="flex-auto prose dark:prose-invert [html_:where(&amp;&gt;*)]:mx-auto [html_:where(&amp;&gt;*)]:max-w-2xl [html_:where(&amp;&gt;*)]:lg:mx-[calc(50%-min(50%,theme(maxWidth.lg)))] [html_:where(&amp;&gt;*)]:lg:max-w-3xl">
                            <div class="xl:max-w-none">
                                <h2 id="resources" class="scroll-mt-24">
                                    <a class="group text-inherit no-underline hover:text-inherit dark:text-white" href="#projects">Projects</a>
                                </h2>
                                <div class="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-gray-light pt-10 dark:border-gray-dark sm:grid-cols-2 xl:grid-cols-4">
                                    <div class="group relative flex rounded-2xl border border-gray-light dark:border-gray-dark transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
                                        <div class="relative rounded-2xl px-4 pb-4 pt-16">
                                            <div class="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-gray-light dark:ring-gray-dark backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-gray-dark dark:bg-zinc-800 dark:text-zinc-400 dark:ring-white/15 dark:group-hover:bg-zinc-800 dark:group-hover:ring-gray-light">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                                                </svg>
                                            </div>
                                            <h3 class="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
                                                <a href="/project-1"><span class="absolute inset-0 rounded-2xl"></span>Project 1</a>
                                            </h3>
                                            <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Learn about the contact model and how to create, retrieve, update, delete, and list contacts.</p>
                                        </div>
                                    </div>
                                    <div class="group relative flex rounded-2xl border border-gray-light dark:border-gray-dark transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
                                        <div class="relative rounded-2xl px-4 pb-4 pt-16">
                                            <div class="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-gray-light dark:ring-gray-dark backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-gray-dark dark:bg-zinc-800 dark:text-zinc-400 dark:ring-white/15 dark:group-hover:bg-zinc-800 dark:group-hover:ring-gray-light">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                                                </svg>
                                            </div>
                                            <h3 class="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
                                                <a href="/project-1"><span class="absolute inset-0 rounded-2xl"></span>Project 2</a>
                                            </h3>
                                            <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Learn about the contact model and how to create, retrieve, update, delete, and list contacts.</p>
                                        </div>
                                    </div>
                                    <div class="group relative flex rounded-2xl border border-gray-light dark:border-gray-dark transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
                                        <div class="relative rounded-2xl px-4 pb-4 pt-16">
                                            <div class="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-gray-light dark:ring-gray-dark backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-gray-dark dark:bg-zinc-800 dark:text-zinc-400 dark:ring-white/15 dark:group-hover:bg-zinc-800 dark:group-hover:ring-gray-light">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                                                </svg>
                                            </div>
                                            <h3 class="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
                                                <a href="/project-1"><span class="absolute inset-0 rounded-2xl"></span>Project 3</a>
                                            </h3>
                                            <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Learn about the contact model and how to create, retrieve, update, delete, and list contacts.</p>
                                        </div>
                                    </div>
                                    <div class="group relative flex rounded-2xl border border-gray-light dark:border-gray-dark transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
                                        <div class="relative rounded-2xl px-4 pb-4 pt-16">
                                            <div class="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-gray-light dark:ring-gray-dark backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-gray-dark dark:bg-zinc-800 dark:text-zinc-400 dark:ring-white/15 dark:group-hover:bg-zinc-800 dark:group-hover:ring-gray-light">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                                                </svg>
                                            </div>
                                            <h3 class="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
                                                <a href="/project-1"><span class="absolute inset-0 rounded-2xl"></span>Project 4</a>
                                            </h3>
                                            <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Learn about the contact model and how to create, retrieve, update, delete, and list contacts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="my-16 xl:max-w-none">
                                <h2 id="guides" class="scroll-mt-24">
                                    <a class="group text-inherit no-underline hover:text-inherit dark:text-gray-light" href="#guides">Team</a>
                                </h2>
                                <div class="not-prose mt-4 border-t border-gray-light pt-10 dark:border-gray-dark">
                                    <ul role="list" class="divide-y divide-gray-light dark:divide-gray-dark">
                                        <li class="flex justify-between gap-x-6 py-5">
                                            <div class="flex min-w-0 gap-x-4">
                                                <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                                <div class="min-w-0 flex-auto">
                                                    <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-light">Leslie Alexander</p>
                                                    <p class="mt-1 truncate text-xs leading-5 text-zinc-900 dark:text-zinc-400">leslie.alexander@example.com</p>
                                                </div>
                                            </div>
                                            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p class="text-sm leading-6 text-gray-900 dark:text-gray-light">Co-Founder / CEO</p>
                                                <p class="mt-1 text-xs leading-5 text-zinc-900 dark:text-zinc-400">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
                                            </div>
                                        </li>
                                        <li class="flex justify-between gap-x-6 py-5">
                                            <div class="flex min-w-0 gap-x-4">
                                                <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                                <div class="min-w-0 flex-auto">
                                                    <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-light">Michael Foster</p>
                                                    <p class="mt-1 truncate text-xs leading-5 text-zinc-900 dark:text-zinc-400">michael.foster@example.com</p>
                                                </div>
                                            </div>
                                            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p class="text-sm leading-6 text-gray-900 dark:text-gray-light">Co-Founder / CTO</p>
                                                <p class="mt-1 text-xs leading-5 text-zinc-900 dark:text-zinc-400">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
                                            </div>
                                        </li>
                                        <li class="flex justify-between gap-x-6 py-5">
                                            <div class="flex min-w-0 gap-x-4">
                                                <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                                <div class="min-w-0 flex-auto">
                                                    <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-light">Dries Vincent</p>
                                                    <p class="mt-1 truncate text-xs leading-5 text-zinc-900 dark:text-zinc-400">dries.vincent@example.com</p>
                                                </div>
                                            </div>
                                            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p class="text-sm leading-6 text-gray-900 dark:text-gray-light">Business Relations</p>
                                                <div class="mt-1 flex items-center gap-x-1.5">
                                                    <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                                                        <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                                    </div>
                                                    <p class="text-xs leading-5 text-zinc-900 dark:text-zinc-400">Online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="flex justify-between gap-x-6 py-5">
                                            <div class="flex min-w-0 gap-x-4">
                                                <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                                <div class="min-w-0 flex-auto">
                                                    <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-light">Lindsay Walton</p>
                                                    <p class="mt-1 truncate text-xs leading-5 text-zinc-900 dark:text-zinc-400">lindsay.walton@example.com</p>
                                                </div>
                                            </div>
                                            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p class="text-sm leading-6 text-gray-900 dark:text-gray-light">Front-end Developer</p>
                                                <p class="mt-1 text-xs leading-5 text-zinc-900 dark:text-zinc-400">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
                                            </div>
                                        </li>
                                        <li class="flex justify-between gap-x-6 py-5">
                                            <div class="flex min-w-0 gap-x-4">
                                                <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                                <div class="min-w-0 flex-auto">
                                                    <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-light">Courtney Henry</p>
                                                    <p class="mt-1 truncate text-xs leading-5 text-zinc-900 dark:text-zinc-400">courtney.henry@example.com</p>
                                                </div>
                                            </div>
                                            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p class="text-sm leading-6 text-gray-900 dark:text-gray-light">Designer</p>
                                                <p class="mt-1 text-xs leading-5 text-zinc-900 dark:text-zinc-400">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
                                            </div>
                                        </li>
                                        <li class="flex justify-between gap-x-6 py-5">
                                            <div class="flex min-w-0 gap-x-4">
                                                <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                                <div class="min-w-0 flex-auto">
                                                    <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-light">Tom Cook</p>
                                                    <p class="mt-1 truncate text-xs leading-5 text-zinc-900 dark:text-zinc-400">tom.cook@example.com</p>
                                                </div>
                                            </div>
                                            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p class="text-sm leading-6 text-gray-900 dark:text-gray-light">Director of Product</p>
                                                <div class="mt-1 flex items-center gap-x-1.5">
                                                    <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                                                        <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                                    </div>
                                                    <p class="text-xs leading-5 text-zinc-900 dark:text-zinc-400">Online</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>
                </main>
                <footer class="mx-auto w-full space-y-10 pb-16">
                    <div class="ml-auto flex justify-between gap-3">
                        <a class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300" aria-label="Next: Quickstart" href="/quickstart">
                            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="mt-0.5 h-5 w-5 -ml-1 rotate-180">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                            </svg>
                            Previous
                        </a>
                        <a class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300" aria-label="Next: Quickstart" href="/quickstart">
                            Next
                            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="mt-0.5 h-5 w-5 -mr-1">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-gray-dark sm:flex-row">
                        <p class="text-xs text-zinc-600 dark:text-zinc-400">© Copyright <!-- -->2024<!-- -->. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>
