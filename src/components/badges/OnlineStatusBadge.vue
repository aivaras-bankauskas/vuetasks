<script setup lang="ts">
    defineProps<{
        onlineStatus: string;
        positionClass: string;
    }>();
</script>

<template>
    <span
        :class="[
            positionClass,
            onlineStatus === 'online'
                ? 'bg-success'
                : 'bg-light dark:bg-dark border-2 border-secondary'
        ]"
        class="ring-2 ring-light dark:ring-dark rounded-full"
    >
    </span>
</template>
