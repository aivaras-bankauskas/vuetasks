<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import BaseButton from '@/components/buttons/BaseButton.vue';
    import navigationRoutes from '@/router/navigation.ts';

    const route = useRoute();

    const navigation = computed(() => navigationRoutes.map(route => route.children ? route.children : [route]).flat());

    const currentIndex = computed(() => navigation.value.findIndex(routeObj => routeObj.path === route.path));

    const previousRoute = computed(() => {
        const prevIndex = currentIndex.value - 1;
        const prevRouteObj = prevIndex >= 0 ? navigation.value[prevIndex] : navigation.value[navigation.value.length - 1];

        return {
            path: prevRouteObj.path,
            title: prevRouteObj.meta?.title || 'Previous'
        };
    });

    const nextRoute = computed(() => {
        const nextIndex = currentIndex.value + 1;
        const nextRouteObj = nextIndex < navigation.value.length ? navigation.value[nextIndex] : navigation.value[0];

        return {
            path: nextRouteObj.path,
            title: nextRouteObj.meta?.title || 'Next'
        };
    });
</script>

<template>
    <footer class="hidden xxs:block fixed bottom-0 right-0 w-full lg:pl-64 xl:pl-72 bg-body-light dark:bg-body-dark">
        <div class="flex justify-between md:justify-center items-center md:gap-14 py-4 lg:pb-10 px-4 sm:px-6 lg:px-8">
            <RouterLink :to="previousRoute.path" aria-label="Previous: [Description of Previous Page]">
                <BaseButton type="button" :button-text="(previousRoute.title as string)" class="footer-button link-hover" :title="previousRoute.title">
                    <template #frontIcon>
                        <div class="h-5 w-5">
                            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="h-5 w-5 -ml-1 rotate-180 moz-mt-fix">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                            </svg>
                        </div>
                    </template>
                </BaseButton>
            </RouterLink>
            <RouterLink :to="nextRoute.path" aria-label="Next: [Description of Next Page]">
                <BaseButton type="button" :button-text="(nextRoute.title as string)" class="footer-button link-hover" :title="nextRoute.title">
                    <template #backIcon>
                        <div class="h-5 w-5">
                            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="h-5 w-5 -mr-1 moz-mt-fix">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                            </svg>
                        </div>
                    </template>
                </BaseButton>
            </RouterLink>
        </div>
    </footer>
</template>

<style scoped>
    .footer-base-button {
        @apply w-36 pt-1 pb-1.5 px-4 text-sm font-medium transition rounded-full;
        display: flex;
        align-items: center;
    }

    .footer-button-backgound {
        @apply bg-light dark:bg-dark lg:hover:bg-light/50 lg:dark:hover:bg-dark/70 focus:bg-light dark:focus:bg-dark;
    }

    .footer-button {
        @apply footer-base-button footer-button-backgound;
    }

    @-moz-document url-prefix() {
        .moz-mt-fix {
            margin-top: 1px;
        }
    }
</style>
