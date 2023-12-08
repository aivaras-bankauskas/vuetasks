<script setup lang="ts">

    defineProps<{
        title: string,
        linkTo: string,
    }>();

</script>

<template>
    <li>
        <RouterLink
            class="hover:text-primary flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7"
            active-class="text-primary dark:text-primary border-l border-primary dark:border-primary"
            :to="linkTo"
        >
            <span class="truncate">{{ title }}</span>
        </RouterLink>
    </li>
</template>
