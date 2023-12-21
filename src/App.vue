<script setup lang="ts">
    import MainLayout from '@/views/layouts/MainLayout.vue';
    import FooterLayout from '@/views/layouts/FooterLayout.vue';
</script>

<template>
    <div class="w-full">
        <div class="h-full lg:ml-64 xl:ml-72">
            <MainLayout />
            <div class="relative h-full pt-14 px-4 sm:px-6 lg:px-8">
                <RouterView />
                <FooterLayout />
            </div>
        </div>
    </div>
</template>
