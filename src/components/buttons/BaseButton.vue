<script setup lang="ts">
    defineProps<{
        type: 'button' | 'submit' | 'reset';
        buttonText: string;
    }>();
</script>

<template>
    <button :type="type" class="flex justify-center items-center gap-1">
        <slot name="frontIcon" />
        <span class="truncate">{{ buttonText }}</span>
        <slot name="backIcon" />
    </button>
</template>
