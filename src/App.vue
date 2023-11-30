<script setup lang="ts">
    import HeaderLayout from '@/views/layouts/HeaderLayout.vue';
    import FooterLayout from '@/views/layouts/FooterLayout.vue';
</script>

<template>
    <div class="w-full">
        <div class="h-full lg:ml-72 xl:ml-80">
            <HeaderLayout />
            <div class="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
                <RouterView />
                <FooterLayout />
            </div>
        </div>
    </div>
</template>
