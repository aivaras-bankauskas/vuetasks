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
    <div @click="toggleMenu">
        <RouterLink
            class="flex gap-x-3 justify-start items-center text-sm leading-5"
            active-class="text-primary dark:text-primary"
            exact-active-class="text-primary dark:text-primary"
            :to="linkTo"
        >
            <slot />
            <span>{{ title }}</span>
        </RouterLink>
    </div>
</template>
