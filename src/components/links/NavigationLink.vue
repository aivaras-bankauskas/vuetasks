<script setup lang="ts">
    import { useToggleStore } from '@/store/toggleStore';
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
            default: ''
        },
        baseClass: {
            type: String,
            default: 'flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7'
        },
        textColor: {
            type: String,
            default: 'text-inherit hover:text-primary'
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

    const borderClass = computed(() => {
        return props.showBorderIfActive ? 'border-l border-primary dark:border-primary' : '';
    });

    const closeNavigation = (): void => {
        toggleStore.closeNavigation();
    };
</script>

<template>
    <li :class="listClass" @click="closeNavigation">
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
