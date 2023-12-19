<script setup lang="ts">
    import SectionLayout from '@/views/layouts/SectionLayout.vue';
    import UserList from '@/components/lists/UserList.vue';
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
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                first-name="Leslie"
                                last-name="Foster"
                                email="leslie.foster@example.com"
                                position="Co-Founder / CEO"
                                online-status="online"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                first-name="Michael"
                                last-name="Foster"
                                email="michael.foster@example.com"
                                position="Co-Founder / CTO"
                                online-status="20 min."
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                first-name="Dries"
                                last-name="Vincent"
                                email="dries.vincent@example.com"
                                position="Project Manager"
                                online-status="online"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                first-name="Lindsay"
                                last-name="Walton"
                                email="lindsay.walton@example.com"
                                position="Project Manager"
                                online-status="5 min."
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                first-name="Tom"
                                last-name="Cook"
                                email="tom.cook@example.com"
                                position="UI/UX Designer"
                                online-status="online"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                first-name="Courtney"
                                last-name="Henry"
                                email="courtney.henry@example.com"
                                position="DevOps Engineer"
                                online-status="online"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80"
                                first-name="Devon"
                                last-name="Webb"
                                email="devon.webb@example.com"
                                position="Backend Developer"
                                online-status="15 min."
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                first-name="Arlene"
                                last-name="Mccoy"
                                email="arlene.mccoy@example.com"
                                position="Backend Developer"
                                online-status="online"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                first-name="Wade"
                                last-name="Cooper"
                                email="wade.cooper@example.com"
                                position="Frontend Developer"
                                online-status="online"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                first-name="Hellen"
                                last-name="Schmidt"
                                email="hellen.schmidt@example.com"
                                position="Frontend Developer"
                                online-status="17 min."
                            />
                        </li>
                    </ul>
                </div>
            </SectionLayout>
        </div>
    </main>
</template>
