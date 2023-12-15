<script setup lang="ts">
    defineProps<{
        title: string
    }>();
</script>

<template>
    <section class="mb-16 xl:max-w-none">
        <h2 class="scroll-mt-24 pb-3 border-b border-divider-light dark:border-divider-dark">{{ title }}</h2>
        <slot />
    </section>
</template>
