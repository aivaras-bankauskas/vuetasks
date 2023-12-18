<script setup lang="ts">
    import { computed } from 'vue';
    import ImageAvatar from './ImageAvatar.vue';
    import AccountDropdown from '../dropdowns/AccountDropdown.vue';

    const props = defineProps<{
        data: {
            firstName: string,
            lastName: string,
            email: string,
            avatar: string,
            onlineStatus: string,
        }
    }>();

    const onlineStatus = computed(() => props.data.onlineStatus);

    const fullName = computed(() => `${props.data.firstName} ${props.data.lastName}`);
</script>

<template>
    <div
        class="relative group hover:ring-4 hover:ring-black/5 dark:hover:ring-white/20 rounded-full cursor-pointer"
    >
        <RouterLink to="/account">
            <ImageAvatar
                class="h-8 w-8"
                :img-source="props.data.avatar"
                :alt-source="fullName"
                :online-status="onlineStatus"
                badge-position="w-2 h-2 absolute bottom-0 left-6"
                online-badge
            />
        </RouterLink>
        <AccountDropdown
            class="absolute top-6 right-0 hidden lg:group-hover:block lg:hover:block"
            :full-name="fullName"
            :email="props.data.email"
            :avatar="props.data.avatar"
        />
    </div>
</template>
