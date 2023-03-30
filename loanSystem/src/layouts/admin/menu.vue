
<template>
    <div class="admin-menu">
        <div class="menu w-[250px] bg-menu-container p-4">
            <!-- 菜单 -->
            <div class="container">
                <dl v-for="(menu, index) of menuService.menus.value" :key="index">
                    <dt @click="menuService.toggleParentMenu(menu)">
                        <section class="flex items-center">
                            <span class="text-md">{{ menu.title }}</span>
                        </section>
                        <section>
                            <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': menu.isClick }"></i>
                        </section>
                    </dt>
                    <dd :class="menu.isClick ? 'block' : 'hidden'">
                        <div :class="{ active: cmenu.isClick }" v-for="(cmenu, key) of menu.children" :key="key" @click="$router.push({ name: cmenu.route })">
                            <i :class="cmenu.icon" class="mr-2 text-lg"></i>
                            {{ cmenu.title }}
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="bg block md:hidden" @click="menuService.toggleState()"></div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { IMenu } from '#/menu';

import menuService from '@/composables/menu'
import { watch } from 'vue';
//使用composition api 管理 menu组件
const route = useRoute()
watch(route, () => menuService.setCurrentMenu(route), { immediate: true })
</script>


<style lang="scss" scoped>
.admin-menu {
    @apply z-20 h-full;

    .menu {
        @apply h-full duration-300;

        .container {
            dl {
                @apply text-gray-300 text-sm relative;

                dt {
                    color: #8DA0C4;
                    opacity: 0.6;
                    @apply text-sm mt-6 flex justify-between items-center cursor-pointer;
                }

                dd {
                    div {
                        color: #B3C0E7;
                        @apply py-2 pl-4 my-2 rounded-md cursor-pointer duration-300 flex items-center;

                        &.active {
                            color: white;
                            background: linear-gradient(45deg, #4F8AFF 0%, #4B5EFF 100%);
                        }
                        &:hover{
                            color: white;
                            background: linear-gradient(45deg, #4F8AFF 0%, #4B5EFF 100%);
                        }
                        i{
                            color: #858EBD;
                        }
                    }
                }
            }
        }
    }
}


@media screen and (min-width: 768px) {
    .admin-menu {
        @apply h-full;

        &.close {
            div.menu {


                width: auto;
                @apply flex flex-col items-center px-0;

                .logo {
                    @apply flex items-center mr-0;

                    span {
                        @apply hidden;
                    }
                }

                div.container {
                    dl {
                        @apply px-4;

                        dt {
                            @apply flex justify-center;

                            section {
                                i {
                                    @apply mr-0;
                                }

                                span {
                                    @apply hidden;
                                }

                                &:nth-of-type(2) {
                                    @apply hidden
                                }
                            }
                        }

                        dd {
                            @apply hidden;
                        }

                        &:hover {
                            dd {
                                display: block !important;
                                @apply absolute left-full top-[0px] w-[200px] bg-gray-700 text-violet-800;
                            }
                        }
                    }
                }

            }
        }
    }
}

@media screen and (max-width: 768px) {
    .admin-menu {
        @apply h-screen w-[200px] absolute top-0 left-0 z-[50];

        .menu {
            @apply h-full z-[50] absolute;

            .close {}

        }

        .bg {
            @apply bg-gray-800 opacity-75 w-screen h-screen z-[40] absolute left-0 top-0;
        }

        &.close {
            @apply hidden;
        }
    }

}</style>