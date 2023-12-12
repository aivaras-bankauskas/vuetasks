<script setup lang="ts">

    defineProps<{
        isSearchbarShown: boolean,
    }>();

    const emit = defineEmits(['showSearchbar', 'hideSearchbar']);

    const showSearchbar = (): void => {
        emit('showSearchbar');
    };

    const hideSearchbar = (): void => {
        emit('hideSearchbar');
    };
</script>

<template>
    <div class="contents sm:hidden">
        <button v-if="isSearchbarShown" type="button" class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 ui-not-focus-visible:outline-none dark:hover:bg-light/5 lg:hidden" aria-label="Hide Searchbar" @click="hideSearchbar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 stroke-zinc-900 dark:stroke-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <button v-else type="button" class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 ui-not-focus-visible:outline-none dark:hover:bg-light/5 lg:hidden" aria-label="Show Searchbar" @click="showSearchbar">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="h-6 w-6 stroke-zinc-900 dark:stroke-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"></path>
            </svg>
        </button>
    </div>
</template>
