<template>
    <table class="w-full text-sm text-left rtl:text-right">
        <thead class="hidden lg:table-header-group text-sm border-b border-divider-light dark:border-divider-dark">
            <tr>
                <th scope="col" class="p-3">
                    Name
                </th>
                <th scope="col" class="p-3">
                    Description
                </th>
                <th scope="col" class="p-3">
                    Project
                </th>
                <th scope="col" class="p-3">
                    Status
                </th>
                <th scope="col" class="p-3">
                    Priority
                </th>
                <th scope="col" class="p-3">
                    <span class="sr-only">Action</span>
                </th>
            </tr>
        </thead>
        <tbody class="divide-y divide-divider-light dark:divide-divider-dark">
            <tr>
                <th class="py-5 px-1 sm:px-3">
                    GRA-123
                </th>
                <td class="table-data-cell">
                    Create a new GraphQL API for the project management app.
                </td>
                <td class="hidden lg:table-cell table-data-cell">
                    GraphQL API
                </td>
                <td class="hidden sm:table-cell table-data-cell">
                    In Progress
                </td>
                <td class="hidden sm:table-cell table-data-cell">
                    High
                </td>
                <td class="py-5 px-1 sm:px-3 text-right">
                    <RouterLink class="link hover:text-primary" to="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </RouterLink>
                </td>
            </tr>
        </tbody>
    </table>
</template>
