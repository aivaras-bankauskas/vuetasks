<script setup lang="ts">
    import { useToggleNavigation } from '@/store/toggleNavigation';

    defineProps<{
        title: string,
        linkTo: string,
    }>();

    const toggleNavigation = useToggleNavigation();

    const toggleMenu = (): void => {
        toggleNavigation.closeNavigation();
    };
</script>

<template>
    <li @click="toggleMenu">
        <RouterLink
            class="hover:text-primary flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7"
            active-class="text-primary dark:text-primary border-l border-primary dark:border-primary"
            exact-active-class="text-primary dark:text-primary border-l border-primary dark:border-primary"
            :to="linkTo"
        >
            <span class="truncate">{{ title }}</span>
        </RouterLink>
    </li>
</template>
