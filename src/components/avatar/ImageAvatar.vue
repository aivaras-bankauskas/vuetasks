<script setup lang="ts">
    import OnlineStatusBadge from '../badges/OnlineStatusBadge.vue';

    defineProps({
        imgSource: {
            type: String,
            required: true
        },
        altSource: {
            type: String,
            required: true
        },
        onlineBadge: {
            type: Boolean,
            required: false,
            default: false
        },
        onlineStatus: {
            type: String,
            required: false,
            default: 'online'
        },
        badgePosition: {
            type: String,
            required: false,
            default: 'w-2.5 h-2.5 absolute bottom-0 left-9'
        }
    });
</script>

<template>
    <div class="relative">
        <img class="rounded-full" :src="imgSource" :alt="altSource">
        <OnlineStatusBadge v-if="onlineBadge" :online-status="onlineStatus" :position-class="badgePosition" />
    </div>
</template>
