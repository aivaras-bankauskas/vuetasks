<script setup lang="ts">
    defineProps<{
        data: {
            companyName: string;
        },
        spanClass: string;
    }>();
</script>

<template>
    <RouterLink
        aria-label="Go to dashboard"
        class="sm:block text-primary dark:text-primary"
        active-class="text-primary dark:text-primary"
        to="/"
    >
        <span :class="spanClass">{{ data.companyName }}</span>
    </RouterLink>
</template>
