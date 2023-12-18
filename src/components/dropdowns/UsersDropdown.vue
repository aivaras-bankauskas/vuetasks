<script setup lang="ts">
    import ImageAvatar from '@/components/avatar/ImageAvatar.vue';
</script>

<template>
    <div class="z-10 max-h-60 mt-8 bg-transparent">
        <ul class="mt-2 max-h-56 w-48 overflow-auto rounded-md bg-light dark:bg-dark py-1 text-base shadow-lg ring-1 ring-secondary ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
            <li id="listbox-option-0" class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" role="option">
                <RouterLink class="link-hover" to="#">
                    <div class="flex items-center">
                        <ImageAvatar
                            class="h-5 w-5 flex-shrink-0"
                            img-source="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt-source="Lindsay Walton"
                            badge-position="w-1.5 h-1.5 absolute bottom-0 left-3.5"
                            online-status="5 min."
                            online-badge
                        />
                        <span class="font-normal ml-3 block truncate link-hover" title="Lindsay Walton">Lindsay Walton</span>
                    </div>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </RouterLink>
            </li>
            <li id="listbox-option-0" class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" role="option">
                <RouterLink class="link-hover" to="#">
                    <div class="flex items-center">
                        <ImageAvatar
                            class="h-5 w-5 flex-shrink-0"
                            img-source="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt-source="Tom Cook"
                            badge-position="w-1.5 h-1.5 absolute bottom-0 left-3.5"
                            online-status="online"
                            online-badge
                        />
                        <span class="font-normal ml-3 block truncate link-hover" title="Tom Cook">Tom Cook</span>
                    </div>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </RouterLink>
            </li>
            <li id="listbox-option-0" class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" role="option">
                <RouterLink class="link-hover" to="#">
                    <div class="flex items-center">
                        <ImageAvatar
                            class="h-5 w-5 flex-shrink-0"
                            img-source="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt-source="Courtney Henry"
                            badge-position="w-1.5 h-1.5 absolute bottom-0 left-3.5"
                            online-status="online"
                            online-badge
                        />
                        <span class="font-normal ml-3 block truncate link-hover" title="Courtney Henry">Courtney Henry</span>
                    </div>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </RouterLink>
            </li>
            <li id="listbox-option-0" class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" role="option">
                <RouterLink class="link-hover" to="#">
                    <div class="flex items-center">
                        <ImageAvatar
                            class="h-5 w-5 flex-shrink-0"
                            img-source="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                            alt-source="Devon Webb"
                            badge-position="w-1.5 h-1.5 absolute bottom-0 left-3.5"
                            online-status="15 min."
                            online-badge
                        />
                        <span class="font-normal ml-3 block truncate link-hover" title="Devon Webb">Devon Webb</span>
                    </div>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </RouterLink>
            </li>
            <li id="listbox-option-0" class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" role="option">
                <RouterLink class="link-hover" to="#">
                    <div class="flex items-center">
                        <ImageAvatar
                            class="h-5 w-5 flex-shrink-0"
                            img-source="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt-source="Arlene Mccoy"
                            badge-position="w-1.5 h-1.5 absolute bottom-0 left-3.5"
                            online-status="online"
                            online-badge
                        />
                        <span class="font-normal ml-3 block truncate link-hover" title="Arlene Mccoy">Arlene Mccoy</span>
                    </div>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </RouterLink>
            </li>
            <li id="listbox-option-0" class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" role="option">
                <RouterLink class="link-hover" to="#">
                    <div class="flex items-center">
                        <ImageAvatar
                            class="h-5 w-5 flex-shrink-0"
                            img-source="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt-source="Wade Cooper"
                            badge-position="w-1.5 h-1.5 absolute bottom-0 left-3.5"
                            online-status="online"
                            online-badge
                        />
                        <span class="font-normal ml-3 block truncate link-hover" title="Wade Cooper">Wade Cooper</span>
                    </div>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </RouterLink>
            </li>
            <li id="listbox-option-0" class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" role="option">
                <RouterLink class="link-hover" to="#">
                    <div class="flex items-center">
                        <ImageAvatar
                            class="h-5 w-5 flex-shrink-0"
                            img-source="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt-source="Hellen Schmidt"
                            badge-position="w-1.5 h-1.5 absolute bottom-0 left-3.5"
                            online-status="17 min."
                            online-badge
                        />
                        <span class="font-normal ml-3 block truncate link-hover" title="Wade Cooper">Wade Cooper</span>
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
