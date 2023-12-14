<script setup lang="ts">
    defineProps<{
        title: string,
        description: string,
        linkTo: string,
    }>();
</script>

<template>
    <article class="group relative flex rounded-2xl bg-light dark:bg-dark transition-shadow hover:shadow-md shadow-black/40 dark:shadow-white/20">
        <div class="relative rounded-2xl px-4 pb-4 pt-16">
            <div class="flex h-9 w-9 items-center justify-center rounded-full text-color-light/70 dark:text-color-dark/50 ring-1 ring-color-light/40 dark:ring-color-dark/40 transition duration-300 group-hover:ring-color-light dark:group-hover:ring-color-dark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" aria-hidden="true">
                    <title>Project</title>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                </svg>
            </div>
            <header>
                <h3 class="mt-4 text-sm font-semibold leading-7 text-color-light dark:text-color-dark">
                    <router-link :to="linkTo">
                        <span class="absolute inset-0 rounded-2xl"></span>
                        {{ title }}
                    </router-link>
                </h3>
            </header>
            <section>
                <p class="mt-1 text-sm text-color-light/70 dark:text-color-dark/50">{{ description }}</p>
            </section>
        </div>
    </article>
</template>
