<script setup lang="ts">
    import TasksDropdown from '@/components/dropdowns/TasksDropdown.vue';
    import UsersDropdown from '@/components/dropdowns/UsersDropdown.vue';
    import ImageAvatar from '@/components/avatar/ImageAvatar.vue';
</script>

<template>
    <table class="w-full text-sm text-left">
        <thead class="hidden lg:table-header-group text-sm border-b border-divider-light dark:border-divider-dark">
            <tr>
                <th scope="col" class="p-3">
                    Name
                </th>
                <th scope="col" class="p-3">
                    Key
                </th>
                <th scope="col" class="p-3">
                    Category
                </th>
                <th scope="col" class="p-3">
                    Tasks
                </th>
                <th scope="col" class="p-3">
                    Team
                </th>
                <th scope="col" class="p-3">
                    Status
                </th>
                <th scope="col" class="p-3">
                    <span class="sr-only">Action</span>
                </th>
            </tr>
        </thead>
        <tbody class="divide-y divide-divider-light dark:divide-divider-dark">
            <tr>
                <th class="py-5 px-1 sm:px-3">
                    GraphQL API
                </th>
                <td class="hidden sm:table-cell table-data-cell">
                    GRP
                </td>
                <td class="hidden sm:table-cell table-data-cell">
                    API
                </td>
                <td class="table-data-cell">
                    <div class="relative group">
                        <RouterLink class="text-sm link hover:text-primary justify-self-center" to="#project-tasks">
                            <span>92 tasks</span>
                            <TasksDropdown class="absolute top-4 left-0 hidden xl:group-hover:block xl:hover:block" />
                        </RouterLink>
                    </div>
                </td>
                <td class="hidden sm:table-cell table-data-cell">
                    <div class="relative group">
                        <RouterLink class="flex -space-x-3 rtl:space-x-reverse justify-self-center" to="#project-users">
                            <ImageAvatar
                                class="h-8 w-8 inline-block rounded-full ring-2 ring-secondary/40 group-hover:ring-primary"
                                img-source="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                alt-source="Lindsay Walton"
                            />
                            <ImageAvatar
                                class="h-8 w-8 inline-block rounded-full ring-2 ring-secondary/40 group-hover:ring-primary"
                                img-source="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt-source="Tom Cook"
                            />
                            <ImageAvatar
                                class="h-8 w-8 inline-block rounded-full ring-2 ring-secondary/40 group-hover:ring-primary"
                                img-source="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt-source="Courtney Henry"
                            />
                            <ImageAvatar
                                class="h-8 w-8 rounded-full ring-2 ring-secondary/40 group-hover:ring-primary"
                                img-source="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                alt-source="Devon Webb"
                            />
                        </RouterLink>
                        <UsersDropdown class="absolute top-0 left-0 hidden lg:group-hover:block lg:hover:block" />
                    </div>
                </td>
                <td class="hidden xs:table-cell table-data-cell">
                    In progress
                </td>
                <td class="py-5 px-1 sm:px-3 text-right">
                    <RouterLink class="link hover:text-primary flex justify-end" to="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </RouterLink>
                </td>
            </tr>
        </tbody>
    </table>
</template>
