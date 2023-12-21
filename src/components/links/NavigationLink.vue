<script setup lang="ts">
    import { useToggleStore } from '@/store/toggleStore';
    import useCheckScreenSize from '@/composables/useCheckScreenSize';
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
        activeText: {
            type: String,
            default: 'text-primary dark:text-primary'
        },
        showBorderIfActive: {
            type: Boolean,
            default: false
        }
    });

    const toggleStore = useToggleStore();
    const { isDesktopScreen } = useCheckScreenSize();

    const borderClass = computed(() => {
        return props.showBorderIfActive ? 'border-l border-primary dark:border-primary' : '';
    });

    const closeNavigation = (): void => {
        if (!isDesktopScreen.value) {
            toggleStore.closeNavigation();
        }
    };
</script>

<template>
    <RouterLink
        :active-class="`${activeText} ${borderClass}`"
        :to="linkTo"
        tabindex="0"
        @click="closeNavigation"
    >
        <slot />
        <span class="truncate">{{ title }}</span>
    </RouterLink>
</template>
