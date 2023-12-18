<script setup lang="ts">
    import SectionLayout from '@/views/layouts/SectionLayout.vue';
    import TaskList from '@/components/lists/TaskList.vue';
</script>

<template>
    <main class="flex-auto text-color-light dark:text-color-dark">
        <div class="flex h-full flex-col py-12">
            <SectionLayout title="All Tasks">
                <div class="not-prose mt-8 rounded-2xl bg-light dark:bg-dark">
                    <ul role="list" class="divide-y divide-divider-light dark:divide-divider-dark px-4 py-2">
                        <li class="flex justify-between gap-x-6 py-5">
                            <TaskList
                                task-title="GRA-123"
                                task-description="Create a new GraphQL API for the project management app. And then, create a new project for the API. And then, create a new task for the project."
                                project-name="GraphQL API"
                                status="In Progress"
                                priority="High"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <TaskList
                                task-title="GRA-124"
                                task-description="Create a new GraphQL API for the project management app. And then, create a new project for the API. And then, create a new task for the project."
                                project-name="GraphQL API"
                                status="In Progress"
                                priority="High"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <TaskList
                                task-title="GRA-125"
                                task-description="Create a new GraphQL API for the project management app. And then, create a new project for the API. And then, create a new task for the project."
                                project-name="GraphQL API"
                                status="In Progress"
                                priority="High"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <TaskList
                                task-title="GRA-126"
                                task-description="Create a new GraphQL API for the project management app. And then, create a new project for the API. And then, create a new task for the project."
                                project-name="GraphQL API"
                                status="In Progress"
                                priority="High"
                            />
                        </li>
                    </ul>
                </div>
            </SectionLayout>
        </div>
    </main>
</template>
