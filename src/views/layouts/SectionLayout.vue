<script setup lang="ts">
    import { computed } from 'vue';
    import { useToggleStore } from '@/store/toggleStore';
    import SearchInput from '@/components/inputs/SearchInput.vue';
    import SearchIcon from '@/components/icons/SearchIcon.vue';
    import BaseButton from '@/components/buttons/BaseButton.vue';

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        isActions: {
            type: Boolean,
            default: false
        },
        buttonText: {
            type: String,
            default: 'Create'
        },
        searchId: {
            type: String,
            default: ''
        }
    });

    const toggleStore = useToggleStore();

    const titleToLowerCase = computed(() => props.title.toLowerCase());
</script>

<template>
    <section class="mb-16">
        <nav class="flex justify-between items-center scroll-mt-24 pb-3 border-b border-divider-light dark:border-divider-dark">
            <h2 :class="{ 'hidden': toggleStore.isSearchShown[searchId] }">{{ title }}</h2>
            <div v-if="isActions" :class="{ 'w-full': toggleStore.isSearchShown[searchId] }" class="flex justify-between items-center gap-4">
                <div :class="{ 'hidden': !toggleStore.isSearchShown[searchId] }" class="sm:block max-w-full sm:max-w-xs flex-auto">
                    <SearchInput :placeholder="`Search in ${titleToLowerCase}...`" input-class="border border-divider-light dark:border-divider-dark" />
                </div>
                <SearchIcon :search-id="searchId" />
                <RouterLink  :to="`/${titleToLowerCase}/create`" :class="{ 'hidden': toggleStore.isSearchShown[searchId] }">
                    <BaseButton type="button" :button-text="buttonText" class="btn-primary px-5 py-1 font-medium rounded-md text-sm text-white" />
                </RouterLink>
            </div>
        </nav>
        <slot />
    </section>
</template>
