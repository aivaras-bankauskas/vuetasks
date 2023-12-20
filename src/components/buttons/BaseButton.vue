<script setup lang="ts">
    defineProps<{
        type: 'button' | 'submit' | 'reset';
        buttonText: string;
    }>();
</script>

<template>
    <button :type="type">
        <slot name="frontIcon" />
        {{ buttonText }}
        <slot name="backIcon" />
    </button>
</template>
