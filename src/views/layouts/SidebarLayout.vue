<script setup lang="ts">
    import NavigationLink from '@/components/links/NavigationLink.vue';
    import ThemeIcon from '@/components/icons/ThemeIcon.vue';
</script>

<template>
    <ul role="list" class="my-10 mx-6 lg:mx-0 pb-36 lg:pb-0 link">
        <li class="relative border-b lg:border-none border-divider-light dark:border-divider-dark pb-6">
            <h2 class="text-sm font-semibold">Navigation</h2>
            <div class="relative mt-3">
                <ul role="list" class="border-l border-divider-light dark:border-divider-dark m-0 p-0">
                    <li class="relative">
                        <div class="navbar-text"><span class="truncate">Dashboard</span></div>
                        <ul role="list">
                            <NavigationLink title="Dashboard" link-to="/" show-border-if-active />
                        </ul>
                    </li>
                    <li class="relative">
                        <div aria-current="page" class="navbar-text"><span class="truncate">Projects</span></div>
                        <ul role="list">
                            <NavigationLink title="Projects" link-to="/projects" show-border-if-active />
                        </ul>
                    </li>
                    <li class="relative">
                        <div aria-current="page" class="navbar-text"><span class="truncate">Tasks</span></div>
                        <ul role="list">
                            <NavigationLink title="Tasks" link-to="/tasks" show-border-if-active />
                        </ul>
                    </li>
                    <li class="relative">
                        <div class="navbar-text"><span class="truncate">Team</span></div>
                        <ul role="list">
                            <NavigationLink title="Team" link-to="/team" show-border-if-active />
                        </ul>
                    </li>
                </ul>
            </div>
        </li>
        <NavigationLink title="Account" link-to="/account" list-class="xxs:hidden my-3" base-class="flex gap-x-3 justify-start items-center text-sm leading-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </NavigationLink>
        <ThemeIcon class="md:hidden w-full flex gap-x-3 justify-start items-center text-sm my-3 hover:text-primary">
            <span class="hidden dark:block text-sm">Dark Theme</span>
            <span class="dark:hidden text-sm">Light Theme</span>
        </ThemeIcon>
        <NavigationLink title="API" link-to="/api" list-class="lg:hidden my-3" base-class="flex gap-x-3 justify-start items-center text-sm leading-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>
        </NavigationLink>
        <NavigationLink title="Documentation" link-to="/documentation" list-class="lg:hidden my-3" base-class="flex gap-x-3 justify-start items-center text-sm leading-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
        </NavigationLink>
        <NavigationLink title="Sign Out" link-to="/sign-out" list-class="lg:hidden mt-10" base-class="flex gap-x-3 justify-start items-center text-sm leading-5" text-color="text-danger hover:text-danger-light" active-text="text-danger">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
        </NavigationLink>
    </ul>
</template>

<style scoped>
.navbar-text {
    @apply flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-color-light dark:text-color-dark;
}
.navbar-upper-link {
    @apply flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7;
}
</style>
