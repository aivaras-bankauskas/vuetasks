<script setup lang="ts">
    defineProps<{
        data: {
            companyName: string;
        };
        linkTo: string;
        spanClass: string;
    }>();
</script>

<template>
    <RouterLink aria-label="Home" :to="linkTo">
        <span class="text-primary" :class="spanClass">{{ data.companyName }}</span>
    </RouterLink>
</template>
