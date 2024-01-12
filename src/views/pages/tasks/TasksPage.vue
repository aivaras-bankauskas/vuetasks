<script setup lang="ts">
    import { reactive } from 'vue';
    import SectionLayout from '@/views/layouts/SectionLayout.vue';
    import BaseTable from '@/components/tables/BaseTable.vue';
    import tasks from '@/data/mocks/taskMock';

    const tableData = reactive(tasks);

    // const tableData = reactive([
    //     {
    //         id: 1,
    //         name: 'TRF-168',
    //         description: 'Create a new GraphQL API for the project management app.',
    //         project: 'TerraFirma',
    //         status: 'In Progress',
    //         priority: 'High'
    //     }
    // ]);

    const tableColumns = [
        { key: 'name', title: 'Name' },
        { key: 'description', title: 'Description' },
        { key: 'project', title: 'Project' },
        { key: 'status', title: 'Status' },
        { key: 'priority', title: 'Priority' }
    ];
</script>

<template>
    <main class="flex-auto text-color-light dark:text-color-dark">
        <div class="flex h-full flex-col py-12">
            <SectionLayout
                title="Tasks"
                button-text="Create Task"
                search-id="tasksSearch"
                is-actions
            >
                <div class="not-prose mt-8 rounded-2xl overflow-x-auto xl:overflow-x-visible bg-light dark:bg-dark">
                    <div class="relative rounded-2xl p-4">
                        <BaseTable :items="tableData" :columns="tableColumns" />
                    </div>
                </div>
            </SectionLayout>
        </div>
    </main>
</template>
