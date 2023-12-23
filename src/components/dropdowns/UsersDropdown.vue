<script setup lang="ts">
    import { PropType } from 'vue';
    import ImageAvatar from '@/components/avatar/ImageAvatar.vue';
    import User from '@/data/models/userModel';

    defineProps({
        users: {
            type: Array as PropType<User[]>,
            default: () => []
        }
    });
</script>

<template>
    <div class="z-10 max-h-60 pt-8 bg-transparent">
        <ul
            class="mt-2 max-h-56 w-48 overflow-auto rounded-md bg-light dark:bg-dark py-1 text-base shadow-lg ring-1 ring-secondary ring-opacity-5 focus:outline-none sm:text-sm"
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
        >
            <li
                v-for="user in users"
                :id="`listbox-option-${user.id}`"
                :key="user.id"
                class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                role="option"
            >
                <RouterLink class="link-hover" to="#">
                    <div class="flex items-center">
                        <ImageAvatar
                            class="h-7 w-7 flex-shrink-0"
                            :img-source="user.avatar"
                            :alt-source="`${user.firstName} ${user.lastName}`"
                            badge-position="w-1.5 h-1.5 absolute bottom-0 left-5"
                            :online-status="user.onlineStatus"
                            online-badge
                        />
                        <span
                            class="font-normal ml-3 block truncate link-hover"
                            :title="`${user.firstName} ${user.lastName} | ${user.position}`">
                            {{ user.firstName }} {{ user.lastName }}
                        </span>
                    </div>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
