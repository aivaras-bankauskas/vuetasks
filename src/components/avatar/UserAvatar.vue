<script setup lang="ts">
    import { computed } from 'vue';
    import { useToggleStore } from '@/store/toggleStore';
    import UserPopupCard from '@/components/cards/UserPopupCard.vue';

    const props = defineProps<{
        data: {
            firstName: string;
            lastName: string;
            email: string;
            avatar: string;
        };
    }>();

    const toggleStore = useToggleStore();

    const fullName = computed(() => `${props.data.firstName} ${props.data.lastName}`);

    const toggleUserPopup = (): void => {
        toggleStore.toggleUserPopup();
    };
</script>

<template>
    <div
        :class="[
            'h-8 w-8 hover:ring-4 hover:ring-zinc-900/5 dark:hover:ring-white/5 rounded-full cursor-pointer',
            {
                'hidden xxs:hidden sm:flex': toggleStore.isSearchShown,
                'hidden xxs:flex lg:hidden': !toggleStore.isSearchShown
            }
        ]"
    >
        <RouterLink to="/account">
            <img class="h-8 w-8 rounded-full bg-gray-50" :src="props.data.avatar" :alt="fullName">
        </RouterLink>
    </div>
    <div class="hidden lg:flex h-8 w-8 hover:ring-4 hover:ring-zinc-900/5 dark:hover:ring-white/5 rounded-full cursor-pointer">
        <img class="h-8 w-8 rounded-full bg-gray-50" :src="props.data.avatar" :alt="fullName" tabindex="0" @click="toggleUserPopup">
    </div>
    <UserPopupCard v-if="toggleStore.isUserPopupOpen" :full-name="fullName" :email="props.data.email" :avatar="props.data.avatar" />
</template>
