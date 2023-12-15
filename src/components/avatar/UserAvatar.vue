<script setup lang="ts">
    import { computed } from 'vue';
    import { useToggleStore } from '@/store/toggleStore';
    import OnlineStatusBadge from '@/components/badges/OnlineStatusBadge.vue';
    import UserPopupCard from '@/components/cards/UserPopupCard.vue';

    const props = defineProps<{
        data: {
            firstName: string,
            lastName: string,
            email: string,
            avatar: string,
            onlineStatus: string,
        }
    }>();

    const toggleStore = useToggleStore();
    const onlineStatus = computed(() => props.data.onlineStatus);

    const fullName = computed(() => `${props.data.firstName} ${props.data.lastName}`);

    const toggleUserPopup = (): void => {
        toggleStore.toggleUserPopup();
    };
</script>

<template>
    <div
        :class="[
            'h-8 w-8 hover:ring-4 hover:ring-black/5 dark:hover:ring-white/20 rounded-full cursor-pointer',
            {
                'hidden xxs:hidden sm:flex': toggleStore.isSearchShown,
                'hidden xxs:flex lg:hidden': !toggleStore.isSearchShown
            }
        ]"
    >
        <RouterLink to="/account">
            <div class="relative">
                <img class="h-8 w-8 rounded-full" :src="props.data.avatar" :alt="fullName">
                <OnlineStatusBadge :online-status="onlineStatus" position-class="w-2 h-2 absolute bottom-0 left-6" />
            </div>
        </RouterLink>
    </div>
    <div class="h-8 w-8 hidden lg:flex hover:ring-4 hover:ring-black/5 dark:hover:ring-white/20 rounded-full cursor-pointer">
        <div class="relative">
            <img class="h-8 w-8 rounded-full" :src="props.data.avatar" :alt="fullName" tabindex="0" @click="toggleUserPopup">
            <OnlineStatusBadge :online-status="onlineStatus" position-class="w-2 h-2 absolute bottom-0 left-6" />
        </div>
    </div>
    <UserPopupCard v-if="toggleStore.isUserPopupOpen" :full-name="fullName" :email="props.data.email" :avatar="props.data.avatar" />
</template>
