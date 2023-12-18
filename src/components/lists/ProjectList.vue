<script setup lang="ts">
    import ImageAvatar from '../avatar/ImageAvatar.vue';
    import UsersDropdown from '@/components/dropdowns/UsersDropdown.vue';
    import TasksDropdown from '@/components/dropdowns/TasksDropdown.vue';

    defineProps<{
        projectName: string,
        category: string,
        tasks: string,
        status: string,
    }>();
</script>

<template>
    <div class="w-full grid grid-cols-3 xxs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 items-center gap-4">
        <p class="xxs:col-span-2 text-sm font-semibold">{{ projectName }}</p>
        <p class="hidden md:block text-sm truncate">{{ category }}</p>
        <div class="relative group">
            <RouterLink class="text-sm truncate link hover:text-primary justify-self-center" to="#project-tasks">
                <span>{{ tasks }} tasks</span>
                <TasksDropdown class="absolute top-0 left-0 hidden lg:group-hover:block lg:hover:block" />
            </RouterLink>
        </div>
        <div class="relative group hidden lg:block">
            <RouterLink class="flex -space-x-3 rtl:space-x-reverse justify-self-center" to="#project-users">
                <ImageAvatar
                    class="h-8 w-8 inline-block rounded-full ring-2 ring-secondary/40 group-hover:ring-primary"
                    img-source="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt-source="Lindsay Walton"
                />
                <ImageAvatar
                    class="h-8 w-8 inline-block rounded-full ring-2 ring-secondary/40 group-hover:ring-primary"
                    img-source="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt-source="Tom Cook"
                />
                <ImageAvatar
                    class="h-8 w-8 inline-block rounded-full ring-2 ring-secondary/40 group-hover:ring-primary"
                    img-source="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt-source="Courtney Henry"
                />
                <ImageAvatar
                    class="h-8 w-8 hidden xl:inline-block rounded-full ring-2 ring-secondary/40 group-hover:ring-primary"
                    img-source="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt-source="Devon Webb"
                />
                <ImageAvatar
                    class="h-8 w-8 hidden 2xl:inline-block rounded-full ring-2 ring-secondary/40 group-hover:ring-primary"
                    img-source="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt-source="Arlene Mccoy"
                />
            </RouterLink>
            <UsersDropdown class="absolute top-0 left-0 hidden lg:group-hover:block lg:hover:block" />
        </div>
        <p class="hidden sm:block text-sm truncate justify-self-center">{{ status }}</p>
        <RouterLink class="link hover:text-primary justify-self-end sm:pr-3 lg:pr-6" to="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </RouterLink>
    </div>
</template>
