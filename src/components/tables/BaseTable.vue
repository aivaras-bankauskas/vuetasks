<script setup lang="ts">
    type Item = {
        [key: string]: unknown;
    };

    type Column = {
        key: string;
        title: string;
        slotName?: string;
    };

    defineProps({
        items: {
            type: Array as () => Item[],
            default: () => []
        },
        columns: {
            type: Array as () => Column[],
            default: () => []
        }
    });
</script>

<template>
    <table class="w-full text-sm text-left">
        <thead class="hidden lg:table-header-group text-sm border-b border-divider-light dark:border-divider-dark">
            <tr>
                <th v-for="(column, index) in columns" :key="index" scope="col" class="p-3">
                    {{ column.title }}
                </th>
                <th scope="col" class="p-3">
                    <span class="sr-only">Action</span>
                </th>
            </tr>
        </thead>
        <tbody class="divide-y divide-divider-light dark:divide-divider-dark">
            <tr v-for="(item, index) in items" :key="index">
                <td v-for="column in columns" :key="column.key" class="table-data-cell">
                    <slot :name="column.slotName || 'default'" :item="item">
                        {{ item[column.key] }}
                    </slot>
                </td>
                <td class="table-data-cell">
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
