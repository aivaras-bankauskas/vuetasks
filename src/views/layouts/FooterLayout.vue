<template>
    <footer class="mx-auto w-full space-y-10 pb-16">
        <div class="ml-auto flex justify-between gap-3">
            <RouterLink
                class="footer-button link-hover"
                aria-label="Previous: [Description of Previous Page]"
                to="#"
            >
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="mt-0.5 h-5 w-5 -ml-1 rotate-180">
                    <title>Previous</title>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                </svg>
                <span>Previous</span>
            </RouterLink>
            <RouterLink
                class="footer-button link-hover"
                aria-label="Next: [Description of Next Page]"
                to="#"
            >
                <span>Next</span>
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="mt-0.5 h-5 w-5 -mr-1">
                    <title>Next</title>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                </svg>
            </RouterLink>
        </div>
        <div class="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-gray-dark sm:flex-row">
            <p class="text-xs text-zinc-600 dark:text-zinc-400">© Copyright <!-- -->2024<!-- -->. All rights reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
    .footer-button {
        @apply inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full py-1 px-3 bg-light dark:bg-dark hover:bg-light/50 dark:hover:bg-dark/70 focus:ring-2 focus:ring-light focus:dark:ring-dark;
    }
</style>
