<script setup lang="ts">

    defineProps<{
        title: string,
        linkTo: string,
    }>();
</script>

<template>
    <RouterLink class="flex gap-x-3 justify-start items-center text-sm leading-5" :to="linkTo">
        <slot />
        <span>{{ title }}</span>
    </RouterLink>
</template>
