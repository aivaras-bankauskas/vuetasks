<script setup lang="ts">
    import SectionLayout from '@/views/layouts/SectionLayout.vue';
    import ProjectTable from '@/components/tables/ProjectTable.vue';
</script>

<template>
    <main class="flex-auto text-color-light dark:text-color-dark">
        <div class="flex h-full flex-col py-12">
            <SectionLayout title="All Projects">
                <div class="not-prose mt-8 rounded-2xl overflow-x-auto xl:overflow-x-visible bg-light dark:bg-dark">
                    <div class="relative rounded-2xl p-4">
                        <ProjectTable />
                    </div>
                </div>
            </SectionLayout>
        </div>
    </main>
</template>
