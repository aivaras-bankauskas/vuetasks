<template>
    <ul role="list">
        <li class="relative my-10 lg:mt-16 pl-8 lg:pl-0 pb-8">
            <h2 class="text-xs font-semibold text-gray-dark dark:text-gray-light">Navigation</h2>
            <div class="relative mt-3 pl-2">
                <div class="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5" style="border-radius:8px;height:32px;top:0;opacity:0"></div>
                <div class="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                <div class="absolute left-2 h-6 w-px bg-black dark:bg-white" style="top:4px;opacity:1"></div>
                <ul role="list" class="border-l border-transparent">
                    <li class="relative">
                        <a aria-current="page" class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900 dark:text-white" href="/">
                            <span class="truncate">Dashboard</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a aria-current="page" class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900 dark:text-white" href="/teams">
                            <span class="truncate">Team</span>
                        </a>
                        <ul role="list" style="opacity:1">
                            <li>
                                <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#all_members">
                                    <span class="truncate">All Members</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#member_groups">
                                    <span class="truncate">Member Groups</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="relative">
                        <a aria-current="page" class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900 dark:text-white" href="/projects">
                            <span class="truncate">Projects</span>
                        </a>
                        <ul role="list" style="opacity:1">
                            <li>
                                <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#all_projects">
                                    <span class="truncate">All Projects</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#project_categories">
                                    <span class="truncate">Project Categories</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#project_categories">
                                    <span class="truncate">Assigned to Me</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="relative">
                        <a aria-current="page" class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900 dark:text-white" href="/issues">
                            <span class="truncate">Issues</span>
                        </a>
                        <ul role="list" style="opacity:1">
                            <li>
                                <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#all_issues">
                                    <span class="truncate">All Issues</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#all_issues">
                                    <span class="truncate">Assigned to Me</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#open_issues">
                                    <span class="truncate">Open Issues</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#in_progress_issues">
                                    <span class="truncate">In Progress Issues</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/#closed_issues">
                                    <span class="truncate">Closed Issues</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>
