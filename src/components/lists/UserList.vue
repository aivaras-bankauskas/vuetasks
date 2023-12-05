<script setup lang="ts">
    import { computed } from 'vue';
    const props = defineProps<{
        image: string,
        firstName: string,
        lastName: string,
        email: string,
        position: string,
        onlineStatus: string,
    }>();

    const fullName = computed(() => `${props.firstName} ${props.lastName}`);
</script>

<template>
    <div class="flex min-w-0 gap-x-4">
        <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="image" :alt="fullName">
        <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-light">{{ fullName }}</p>
            <p class="mt-1 truncate text-xs leading-5 text-zinc-900 dark:text-zinc-400">{{ email }}</p>
        </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900 dark:text-gray-light">Director of Product</p>
        <div v-if="onlineStatus === 'online'" class="mt-1 flex items-center gap-x-1.5">
            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p class="text-xs leading-5 text-zinc-900 dark:text-zinc-400">Online</p>
        </div>
        <p v-else class="mt-1 text-xs leading-5 text-zinc-900 dark:text-zinc-400">Last seen <time datetime="2023-01-23T13:23Z">{{ onlineStatus }} ago</time></p>
    </div>
</template>
