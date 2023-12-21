<script setup lang="ts">
    defineProps<{
        type: 'button' | 'submit' | 'reset';
        buttonText: string;
    }>();
</script>

<template>
    <button :type="type">
        <slot name="frontIcon" />
        <span class="truncate">{{ buttonText }}</span>
        <slot name="backIcon" />
    </button>
</template>
