<script setup lang="ts">

    defineProps<{
        title: string;
        linkTo: string;
    }>();
</script>

<template>
    <li><RouterLink class="text-sm leading-5 text-zinc-600 transition hover:text-primary dark:text-zinc-400 dark:hover:text-primary" :to="linkTo">{{ title }}</RouterLink></li>
</template>

<style scoped>
    .navbar-header-link {
        @apply text-sm leading-5 text-zinc-600 transition hover:text-primary dark:text-zinc-400 dark:hover:text-primary;
    }
</style>
