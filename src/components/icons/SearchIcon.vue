<script setup lang="ts">
    import { useToggleStore } from '@/store/toggleStore';

    const props = defineProps<{
        searchId: string;
    }>();

    const toggleStore = useToggleStore();

    const showSearchbar = (): void => {
        toggleStore.showSearchInput(props.searchId);
    };

    const hideSearchbar = (): void => {
        toggleStore.hideSearchInput(props.searchId);
    };
</script>

<template>
    <div class="contents sm:hidden">
        <button v-if="toggleStore.isSearchShown[searchId]" type="button" class="h-6 w-6 lg:hidden flex items-center justify-center rounded-md transition hover:bg-black/5 dark:hover:bg-white/10" aria-label="Hide Searchbar" @click="hideSearchbar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 stroke-color-light dark:stroke-color-dark">
                <title>Hide Searchbar</title>
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <button v-else type="button" class="h-6 w-6 lg:hidden flex items-center justify-center rounded-md transition hover:bg-black/5 dark:hover:bg-white/10" aria-label="Show Searchbar" @click="showSearchbar">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="h-6 w-6 stroke-color-light dark:stroke-color-dark">
                <title>Show Searchbar</title>
                <path stroke-linecap="round" stroke-linejoin="round" d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"></path>
            </svg>
        </button>
    </div>
</template>
