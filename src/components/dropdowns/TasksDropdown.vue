<template>
    <div class="z-10 max-h-60 pt-3 bg-transparent">
        <ul class="mt-2 max-h-56 w-48 overflow-auto rounded-md bg-light dark:bg-dark py-1 text-base shadow-lg ring-1 ring-secondary ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
            <li id="listbox-option-0" class="text-gray-900 relative cursor-default select-none py-1 pl-3 pr-9" role="option">
                <RouterLink class="link-hover grid grid-cols-5" to="#">
                    <span class="col-span-2 font-semibold truncate" title="All">All</span>
                    <span class="col-span-2 block">12 tasks</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </RouterLink>
            </li>
            <li id="listbox-option-0" class="text-gray-900 relative cursor-default select-none py-1 pl-3 pr-9" role="option">
                <RouterLink class="link-hover grid grid-cols-5" to="#">
                    <span class="col-span-2 font-semibold truncate" title="Assigned To Me">Assigned To Me</span>
                    <span class="col-span-2 block">12 tasks</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </RouterLink>
            </li>
            <li id="listbox-option-0" class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" role="option">
                <RouterLink class="link-hover grid grid-cols-5" to="#">
                    <span class="col-span-2 font-semibold truncate" title="Open">Open</span>
                    <span class="col-span-2 block">12 tasks</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </RouterLink>
            </li>
            <li id="listbox-option-0" class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" role="option">
                <RouterLink class="link-hover grid grid-cols-5" to="#">
                    <span class="col-span-2 font-semibold truncate" title="Todo">Todo</span>
                    <span class="col-span-2 block">12 tasks</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </RouterLink>
            </li>
            <li id="listbox-option-0" class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" role="option">
                <RouterLink class="link-hover grid grid-cols-5" to="#">
                    <span class="col-span-2 font-semibold truncate" title="In Progress">In Progress</span>
                    <span class="col-span-2 block">12 tasks</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </RouterLink>
            </li>
            <li id="listbox-option-0" class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" role="option">
                <RouterLink class="link-hover grid grid-cols-5" to="#">
                    <span class="col-span-2 font-semibold truncate" title="Closed">Closed</span>
                    <span class="col-span-2 block">12 tasks</span>
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
