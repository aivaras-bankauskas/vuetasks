<script setup lang="ts">
    defineProps<{
        taskTitle: string,
        taskDescription: string,
        projectName: string,
        status: string,
        priority: string,
    }>();
</script>

<template>
    <div class="w-full grid grid-cols-5 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-12 items-center gap-4">
        <p class="lg:col-span-2 2xl:col-span-1 text-sm font-semibold">{{ taskTitle }}</p>
        <p class="col-span-3 md:col-span-4 2xl:col-span-7 text-sm truncate">{{ taskDescription }}</p>
        <p class="hidden lg:block lg:col-span-2 2xl:col-span-1 text-sm truncate">{{ projectName }}</p>
        <p class="hidden sm:block lg:col-span-2 2xl:col-span-1 text-sm truncate">{{ status }}</p>
        <p class="hidden sm:block text-sm truncate">{{ priority }}</p>
        <RouterLink class="link hover:text-primary justify-self-end sm:pr-3 lg:pr-6 cols" to="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </RouterLink>
    </div>
</template>
