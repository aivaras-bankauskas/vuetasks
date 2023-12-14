<script setup lang="ts">
    import ProjectCard from '@/components/cards/ProjectCard.vue';
    import UserList from '@/components/lists/UserList.vue';
</script>

<template>
    <main class="flex-auto text-color-light dark:text-color-dark">
        <div class="flex h-full flex-col pb-10 pt-12">
            <section class="mb-16 xl:max-w-none">
                <h2 class="scroll-mt-24 pb-3 border-b border-divider-light dark:border-divider-dark">Projects</h2>
                <div class="not-prose mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    <ProjectCard
                        title="Project 1"
                        description="Learn about the contact model and how to create, retrieve, update, delete, and list contacts."
                        link-to="/project-1"
                    />
                    <ProjectCard
                        title="Project 2"
                        description="Learn about the contact model and how to create, retrieve, update, delete, and list contacts."
                        link-to="/project-2"
                    />
                    <ProjectCard
                        title="Project 3"
                        description="Learn about the contact model and how to create, retrieve, update, delete, and list contacts."
                        link-to="/project-3"
                    />
                    <ProjectCard
                        title="Project 4"
                        description="Learn about the contact model and how to create, retrieve, update, delete, and list contacts."
                        link-to="/project-4"
                    />
                </div>
            </section>
            <section class="mb-10 xl:max-w-none">
                <h2 class="scroll-mt-24 pb-3 border-b border-divider-light dark:border-divider-dark">Team</h2>
                <div class="not-prose mt-4 rounded-2xl bg-light dark:bg-dark">
                    <ul role="list" class="divide-y divide-divider-light dark:divide-divider-dark px-4 py-2">
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                first-name="Leslie"
                                last-name="Alexander"
                                email="leslie.alexander@example.com"
                                position="Co-Founder / CEO"
                                online-status="3h"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                first-name="Michael"
                                last-name="Foster"
                                email="michael.foster@example.com"
                                position="Co-Founder / CTO"
                                online-status="20min"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                first-name="Dries"
                                last-name="Vincent"
                                email="dries.vincent@example.com"
                                position="Business Relations"
                                online-status="online"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                first-name="Lindsay"
                                last-name="Walton"
                                email="lindsay.walton@example.com"
                                position="Front-end Developer"
                                online-status="8h"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                first-name="Courtney"
                                last-name="Henry"
                                email="courtney.henry@example.com"
                                position="Designer"
                                online-status="5min"
                            />
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <UserList
                                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                first-name="Tom"
                                last-name="Cook"
                                email="tom.cook@example.com"
                                position="Director of Product"
                                online-status="online"
                            />
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </main>
</template>
