<script setup lang="ts">

    const emit = defineEmits(['toggleTheme']);

    const toggleTheme = (): void => {
        emit('toggleTheme');
    };
</script>

<template>
    <ul role="list" class="my-10 mx-6 lg:mx-0 pb-36 lg:pb-0">
        <li class="relative border-b lg:border-none border-gray-light dark:border-gray-dark pb-6">
            <h2 class="text-sm font-semibold text-gray-dark dark:text-gray-light">Navigation</h2>
            <div class="relative mt-3 pl-2">
                <div class="absolute inset-x-0 top-0 bg-dark/2.5 will-change-transform dark:bg-light/2.5" style="border-radius:8px;height:32px;top:0;opacity:0"></div>
                <div class="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-light/5"></div>
                <div class="absolute left-2 h-6 w-px bg-black dark:bg-light" style="top:4px;opacity:1"></div>
                <ul role="list" class="border-l border-transparent">
                    <li class="relative">
                        <RouterLink aria-current="page" class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900 dark:text-white" to="/">
                            <span class="truncate">Dashboard</span>
                        </RouterLink>
                    </li>
                    <li class="relative">
                        <div aria-current="page" class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900 dark:text-white">
                            <span class="truncate">Team</span>
                        </div>
                        <ul role="list" style="opacity:1">
                            <li>
                                <RouterLink class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/all-members">
                                    <span class="truncate">All Members</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/my-team">
                                    <span class="truncate">My Team</span>
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="relative">
                        <div aria-current="page" class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900 dark:text-white">
                            <span class="truncate">Projects</span>
                        </div>
                        <ul role="list" style="opacity:1">
                            <li>
                                <RouterLink class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/all-projects">
                                    <span class="truncate">All Projects</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/assigned-projects">
                                    <span class="truncate">Assigned to Me</span>
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="relative">
                        <div aria-current="page" class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900 dark:text-white">
                            <span class="truncate">Tasks</span>
                        </div>
                        <ul role="list" style="opacity:1">
                            <li>
                                <RouterLink class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/all-tasks">
                                    <span class="truncate">All Tasks</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/assigned-tasks">
                                    <span class="truncate">Assigned to Me</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/opened-tasks">
                                    <span class="truncate">Opened Tasks</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/in-progress-tasks">
                                    <span class="truncate">In Progress Tasks</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/closed-tasks">
                                    <span class="truncate">Closed Tasks</span>
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </li>
        <li class="relitive my-3 xxs:hidden">
            <RouterLink class="flex gap-x-3 justify-start items-center text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/account">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Account
            </RouterLink>
        </li>
        <li class="relitive my-3 md:hidden">
            <button type="button" class="flex gap-x-2 items-center justify-center rounded-md text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" aria-label="Toggle theme" @click="toggleTheme">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="h-6 w-6 stroke-zinc-600 hover:stroke-zinc-900 dark:hidden">
                    <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                    <path stroke-linecap="round" d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"></path>
                </svg>
                <span class="dark:hidden text-sm">Light Mode</span>
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="hidden h-6 w-6 stroke-zinc-400 hover:stroke-white dark:block">
                    <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"></path>
                </svg>
                <span class="hidden dark:block text-sm">Dark Mode</span>
            </button>
        </li>
        <li class="relitive my-3 lg:hidden">
            <RouterLink class="flex gap-x-3 justify-start items-center text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/documentation">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                Documentation
            </RouterLink>
        </li>
        <li class="relitive my-3 lg:hidden">
            <RouterLink class="flex gap-x-3 justify-start items-center text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/support">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                Support
            </RouterLink>
        </li>
        <li class="relitive flex gap-x-3 justify-start items-center mt-12 lg:hidden">
            <RouterLink class="flex gap-x-3 justify-start items-center text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" to="/sign-out">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
                Sign Out
            </RouterLink>
        </li>
    </ul>
</template>
