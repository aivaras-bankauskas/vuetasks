<script setup lang="ts">
    import { useToggleNavigation } from '@/store/toggleNavigation';
    import { computed } from 'vue';

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        linkTo: {
            type: String,
            required: true
        },
        listClass: {
            type: String,
            required: false,
            default: ''
        },
        baseClass: {
            type: String,
            required: false,
            default: 'flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7'
        },
        textColor: {
            type: String,
            required: false,
            default: 'text-inherit hover:text-primary'
        },
        activeText: {
            type: String,
            required: false,
            default: 'text-primary dark:text-primary'
        },
        showBorderIfActive: {
            type: Boolean,
            required: false,
            default: false
        }
    });

    const toggleNavigation = useToggleNavigation();

    const borderClass = computed(() => {
        return props.showBorderIfActive ? 'border-l border-primary dark:border-primary' : '';
    });

    const toggleMenu = (): void => {
        toggleNavigation.closeNavigation();
    };
</script>

<template>
    <li :class="listClass" @click="toggleMenu">
        <RouterLink
            :class="[baseClass, textColor]"
            :active-class="`${activeText} ${borderClass}`"
            :exact-active-class="`${activeText} ${borderClass}`"
            :to="linkTo"
        >
            <slot />
            <span>{{ title }}</span>
        </RouterLink>
    </li>
</template>
