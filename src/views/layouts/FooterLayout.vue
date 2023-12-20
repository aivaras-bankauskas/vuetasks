<script setup lang="ts">
    import { computed } from 'vue';
    import BaseButton from '@/components/buttons/BaseButton.vue';

    const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
    <footer class="mx-auto w-full space-y-10 pb-16">
        <div class="ml-auto flex justify-between gap-3">
            <RouterLink
                aria-label="Previous: [Description of Previous Page]"
                to="#"
            >
                <BaseButton type="button" button-text="Previous" class="footer-button link-hover" title="Previous">
                    <template #frontIcon>
                        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="mt-0.5 h-5 w-5 -ml-1 rotate-180">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                        </svg>
                    </template>
                </BaseButton>
            </RouterLink>
            <RouterLink
                aria-label="Next: [Description of Next Page]"
                to="#"
            >
                <BaseButton type="button" button-text="Next" class="footer-button link-hover" title="Next">
                    <template #backIcon>
                        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="mt-0.5 h-5 w-5 -mr-1">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                        </svg>
                    </template>
                </BaseButton>
            </RouterLink>
        </div>
        <div class="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-gray-dark sm:flex-row">
            <p class="text-xs link">© Copyright {{ currentYear }}. All rights reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
    .footer-button {
        @apply flex gap-1 py-1 px-5 text-sm font-medium transition rounded-full bg-light dark:bg-dark hover:bg-light/50 dark:hover:bg-dark/70 focus:ring-2 focus:ring-light focus:dark:ring-dark;
    }
</style>
