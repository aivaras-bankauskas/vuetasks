<script setup lang="ts">
    import { computed, ref } from 'vue';
    import UserPopupCard from '@/components/cards/UserPopupCard.vue';

    const props = defineProps<{
        data: {
            companyName: string;
            firstName: string;
            lastName: string;
            email: string;
            avatar: string;
        };
        isSearchbarShown: boolean;
    }>();

    const isUserMenuOpen = ref(false);

    const fullName = computed(() => `${props.data.firstName} ${props.data.lastName}`);

    const toggleUserMenu = (): void => {
        isUserMenuOpen.value = !isUserMenuOpen.value;
    };
</script>

<template>
    <div :class="{ 'hidden xxs:hidden sm:flex': isSearchbarShown }" class="hidden xxs:flex lg:hidden h-8 w-8 hover:ring-4 hover:ring-zinc-900/5 dark:hover:ring-white/5 rounded-full cursor-pointer">
        <RouterLink to="/account">
            <img class="h-8 w-8 rounded-full bg-gray-50" :src="data.avatar" alt="Full Name">
        </RouterLink>
    </div>
    <div class="hidden lg:flex h-8 w-8 hover:ring-4 hover:ring-zinc-900/5 dark:hover:ring-white/5 rounded-full cursor-pointer">
        <img class="h-8 w-8 rounded-full bg-gray-50" :src="data.avatar" alt="Full Name" @click="toggleUserMenu">
    </div>
    <UserPopupCard v-if="isUserMenuOpen" :full-name="fullName" :email="data.email" :avatar="data.avatar" @toggle-user-menu="toggleUserMenu" />
</template>
