<script setup lang="ts">
    import { reactive } from 'vue';
    import SectionLayout from '@/views/layouts/SectionLayout.vue';
    import BaseTable from '@/components/tables/BaseTable.vue';
    import UsersDropdown from '@/components/dropdowns/UsersDropdown.vue';
    import ImageAvatar from '@/components/avatar/ImageAvatar.vue';
    import projects from '@/data/mocks/projectMock';
    import User from '@/data/models/userModel';

    const tableData = reactive(projects);

    const tableColumns = [
        { key: 'name', title: 'Name' },
        { key: 'key', title: 'Key' },
        { key: 'category', title: 'Category' },
        { key: 'tasks', title: 'Tasks', slotName: 'tasks' },
        { key: 'users', title: 'Team', slotName: 'users' },
        { key: 'status', title: 'Status' }
    ];
</script>

<template>
    <main class="flex-auto text-color-light dark:text-color-dark">
        <div class="flex h-full flex-col py-12">
            <SectionLayout
                title="Projects"
                button-text="Add Project"
                search-id="projectsSearch"
                is-actions
            >
                <div class="not-prose mt-8 rounded-2xl overflow-x-auto xl:overflow-x-visible bg-light dark:bg-dark">
                    <div class="relative rounded-2xl p-4">
                        <BaseTable :items="tableData" :columns="tableColumns">
                            <template #tasks="{ item }">
                                <div class="relative group">
                                    <RouterLink class="text-sm link hover:text-primary justify-self-center" to="#project-tasks">
                                        <span>{{ item.tasks }} tasks</span>
                                    </RouterLink>
                                </div>
                            </template>
                            <template #users="{ item }">
                                <div class="relative group">
                                    <RouterLink class="flex -space-x-3 rtl:space-x-reverse justify-self-center" to="#project-users">
                                        <ImageAvatar
                                            v-for="user in (item.users as User[]).slice(0, 4)" :key="user.id"
                                            class="h-8 w-8 inline-block rounded-full ring-2 ring-secondary/40 group-hover:ring-primary"
                                            :img-source="user.avatar"
                                            :alt-source="`${user.firstName} ${user.lastName}`"
                                        />
                                    </RouterLink>
                                    <UsersDropdown :users="(item.users as User[])" class="absolute top-0 left-0 hidden lg:group-hover:block lg:hover:block" />
                                </div>
                            </template>
                        </BaseTable>
                    </div>
                </div>
            </SectionLayout>
        </div>
    </main>
</template>
