<script setup lang="ts">
    import SectionLayout from '@/views/layouts/SectionLayout.vue';
    import UserList from '@/components/lists/UserList.vue';
    import users from '@/data/mocks/userMock';
</script>

<template>
    <main class="flex-auto text-color-light dark:text-color-dark">
        <div class="flex h-full flex-col py-12">
            <SectionLayout
                title="Team"
                button-text="Add Member"
                search-id="teamSearch"
                is-actions
            >
                <div class="not-prose mt-8 rounded-2xl bg-light dark:bg-dark">
                    <ul role="list" class="divide-y divide-divider-light dark:divide-divider-dark px-4 py-2">
                        <li v-for="user in users" :key="user.id" class="flex justify-between gap-x-6 py-5">
                            <UserList
                                :image="user.avatar"
                                :first-name="user.firstName"
                                :last-name="user.lastName"
                                :email="user.email"
                                :position="user.position"
                                :online-status="user.onlineStatus"
                            />
                        </li>
                    </ul>
                </div>
            </SectionLayout>
        </div>
    </main>
</template>
