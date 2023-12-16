<script setup lang="ts">
    import SectionLayout from '@/views/layouts/SectionLayout.vue';
    import ProjectList from '@/components/lists/ProjectList.vue';
</script>

<template>
    <main class="flex-auto text-color-light dark:text-color-dark">
        <div class="flex h-full flex-col py-12">
            <SectionLayout title="All Projects">
                <div class="not-prose mt-8 rounded-2xl bg-light dark:bg-dark">
                    <ul role="list" class="divide-y divide-divider-light dark:divide-divider-dark px-4 py-2">
                        <li class="flex justify-between gap-x-6 py-5">
                            <ProjectList
                                project-name="GraphQL API"
                                category="API"
                                tasks="98"
                                status="In Progress"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <ProjectList
                                project-name="Marketing Website"
                                category="Fullstack"
                                tasks="72"
                                status="In Progress"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <ProjectList
                                project-name="Customer Portal"
                                category="WordPress"
                                tasks="25"
                                status="In Progress"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <ProjectList
                                project-name="Design System"
                                category="Design"
                                tasks="37"
                                status="In Progress"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <ProjectList
                                project-name="Mobile App"
                                category="App"
                                tasks="64"
                                status="In Progress"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <ProjectList
                                project-name="Marketing Campaign"
                                category="Frontend"
                                tasks="15"
                                status="In Progress"
                            />
                        </li>
                    </ul>
                </div>
            </SectionLayout>
        </div>
    </main>
</template>
