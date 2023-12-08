<script setup lang="ts">
    import NavbarLink from '@/components/links/NavbarLink.vue';

    const emit = defineEmits(['toggleTheme']);

    const toggleTheme = (): void => {
        emit('toggleTheme');
    };
</script>

<template>
    <ul role="list" class="my-10 mx-6 lg:mx-0 pb-36 lg:pb-0 text-zinc-600 dark:text-zinc-400">
        <li class="relative border-b lg:border-none border-gray-light dark:border-gray-dark pb-6">
            <h2 class="text-sm font-semibold text-gray-dark dark:text-gray-light">Navigation</h2>
            <div class="relative mt-3">
                <ul role="list" class="border-l border-zinc-900/10 dark:border-light/5 m-0 p-0">
                    <li class="relative">
                        <div class="navbar-text"><span class="truncate">Dashboard</span></div>
                        <ul role="list">
                            <NavbarLink title="Dashboard" link-to="/" />
                        </ul>
                    </li>
                    <li class="relative">
                        <div class="navbar-text"><span class="truncate">Team</span></div>
                        <ul role="list">
                            <NavbarLink title="All Members" link-to="/all-members" />
                            <NavbarLink title="My Team" link-to="/my-team" />
                        </ul>
                    </li>
                    <li class="relative">
                        <div aria-current="page" class="navbar-text"><span class="truncate">Projects</span></div>
                        <ul role="list">
                            <NavbarLink title="All Projects" link-to="/all-projects" />
                            <NavbarLink title="Assigned to Me" link-to="/assigned-projects" />
                        </ul>
                    </li>
                    <li class="relative">
                        <div aria-current="page" class="navbar-text"><span class="truncate">Tasks</span></div>
                        <ul role="list">
                            <NavbarLink title="All Tasks" link-to="/all-tasks" />
                            <NavbarLink title="Assigned to Me" link-to="/assigned-tasks" />
                            <NavbarLink title="Opened Tasks" link-to="/opened-tasks" />
                            <NavbarLink title="In Progress Tasks" link-to="/in-progress-tasks" />
                            <NavbarLink title="Closed Tasks" link-to="/closed-tasks" />
                        </ul>
                    </li>
                </ul>
            </div>
        </li>
        <li class="xxs:hidden relitive my-3">
            <RouterLink class="flex gap-x-3 justify-start items-center text-sm leading-5 hover:text-primary" to="/account">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Account</span>
            </RouterLink>
        </li>
        <li class="md:hidden relitive my-3 cursor-pointer">
            <div class="flex gap-x-3 justify-start items-center text-sm leading-5 hover:text-primary" @click="toggleTheme">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 dark:hidden">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                <span class="dark:hidden text-sm">Light Theme</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 hidden dark:block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                <span class="hidden dark:block text-sm">Dark Theme</span>
            </div>
        </li>
        <li class="lg:hidden relitive my-3">
            <RouterLink class="flex gap-x-3 justify-start items-center text-sm leading-5 hover:text-primary" to="/documentation">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                <span>Documentation</span>
            </RouterLink>
        </li>
        <li class="lg:hidden relitive my-3">
            <RouterLink class="flex gap-x-3 justify-start items-center text-sm leading-5 hover:text-primary" to="/support">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <span>Support</span>
            </RouterLink>
        </li>
        <li class="lg:hidden relitive mt-12 text-danger hover:text-danger-light">
            <RouterLink class="flex gap-x-3 justify-start items-center text-sm leading-5" to="/sign-out">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
                <span>Sign Out</span>
            </RouterLink>
        </li>
    </ul>
</template>
