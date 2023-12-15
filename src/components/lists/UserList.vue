<script setup lang="ts">
    import { computed } from 'vue';
    import OnlineStatusBadge from '../badges/OnlineStatusBadge.vue';

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
        <div class="relative">
            <img class="h-12 w-12 flex-none rounded-full" :src="image" :alt="fullName">
            <OnlineStatusBadge :online-status="onlineStatus" position-class="w-2.5 h-2.5 absolute bottom-0 left-9" />
        </div>
        <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-color-light dark:text-color-dark">{{ fullName }}</p>
            <p class="mt-1 truncate text-xs leading-5 link-hover">{{ email }}</p>
        </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-color-light dark:text-color-dark">{{ position }}</p>
        <p v-if="onlineStatus === 'online'" class="mt-1 text-xs leading-5 link">Active Now</p>
        <p v-else class="mt-1 text-xs leading-5 link">Last seen <time :datetime="onlineStatus">{{ onlineStatus }} ago</time></p>
    </div>
</template>
