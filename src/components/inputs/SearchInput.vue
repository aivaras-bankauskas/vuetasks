<script setup lang="ts">
    defineProps<{
        inputClass: string;
    }>();
</script>

<template>
    <div class="relative">
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="search-icon link">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"></path>
        </svg>
        <input type="search" class="search-input link" :class="inputClass" placeholder="Search something..." aria-label="Search">
    </div>
</template>

<style scoped>
.search-icon {
    @apply absolute left-2 top-1/2 h-6 w-6 stroke-current transform -translate-y-1/2;
}
.search-input {
    @apply h-8 w-full pl-10 py-3 pr-3 rounded-lg bg-light dark:bg-dark placeholder-color-light/30 dark:placeholder-color-dark/30;
}
</style>
