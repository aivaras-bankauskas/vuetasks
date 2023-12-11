<template>
    <footer class="mx-auto w-full space-y-10 pb-16">
        <div class="ml-auto flex justify-between gap-3">
            <RouterLink class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-dark/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-dark dark:hover:bg-dark dark:hover:text-zinc-300" aria-label="Next: Quickstart" to="/next">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="mt-0.5 h-5 w-5 -ml-1 rotate-180">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                </svg>
                Previous
            </RouterLink>
            <RouterLink class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-dark/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-dark dark:hover:bg-dark dark:hover:text-zinc-300" aria-label="Next: Quickstart" to="/previous">
                Next
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="mt-0.5 h-5 w-5 -mr-1">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                </svg>
            </RouterLink>
        </div>
        <div class="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-gray-dark sm:flex-row">
            <p class="text-xs text-zinc-600 dark:text-zinc-400">© Copyright <!-- -->2024<!-- -->. All rights reserved.</p>
        </div>
    </footer>
</template>
