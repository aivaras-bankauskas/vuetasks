<script setup lang="ts">
    defineProps<{
        fullName: string;
        email: string;
        avatar: string;
    }>();
</script>

<template>
    <div class="z-10 max-h-60 py-2 bg-transparent">
        <div class="mt-2 max-h-56 w-64  overflow-auto rounded-md bg-light dark:bg-dark py-1 text-base shadow-lg ring-1 ring-secondary ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1">
            <div class="flex items-center ml-4 mt-3">
                <img class="h-12 w-12 rounded-full" :src="avatar" :alt="`${fullName}`">
                <div class="flex flex-col w-48">
                    <h4 class="block px-4 text-sm text-color-light dark:text-color-dark truncate" :title="fullName">{{ fullName }}</h4>
                    <a :href="`mailto:${email}`" class="block px-4 text-xs link-hover truncate" :title="email">{{ email }}</a>
                </div>
            </div>
            <nav class="flex justify-between px-4 py-2">
                <RouterLink to="/account" class="text-sm link-hover" role="menuitem">Account</RouterLink>
                <RouterLink to="/sign-out" class="text-sm link-hover" role="menuitem">Sign Out</RouterLink>
            </nav>
        </div>
    </div>
</template>
