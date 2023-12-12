<template>
    <div class="relative">
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="search-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"></path>
        </svg>
        <input type="search" class="search-input" placeholder="search something...">
    </div>
</template>

<style scoped>
.search-icon {
    @apply absolute text-zinc-500 dark:text-gray-light left-2 top-1/2 h-6 w-6 stroke-current transform -translate-y-1/2;
}
.search-input {
    @apply h-8 w-full rounded-xl bg-light pl-10 py-3 pr-3 text-zinc-500 dark:text-gray-light dark:placeholder-zinc-600 ring-1 ring-zinc-900/10 transition focus:outline-none focus:ring-1 focus:ring-gray-light dark:bg-light/5 dark:ring-inset dark:ring-white/10 lg:flex;
}
</style>
