import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from '@/layout';
import DataLayout from '@/layout/default-admin/container/main/modules/data-wrapper';

Vue.use(VueRouter);

// 静态路由配置
export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        meta: {
            title: '控制台',
            icon: 'el-icon-monitor'
        },
        children: [
            {
                path: 'dashboard',
                component: (resolve) => require(['@/views/dashboard/index'], resolve),
                name: 'Dashboard',
                meta: { title: '仪表盘', icon: 'el-icon-odometer', affix: true }
            }
        ]
    },
    // {
    //     path: '/test',
    //     component: Layout,
    //     meta: {
    //         title: '测试用的页面',
    //         icon: 'el-icon-setting',
    //         name: 'test',
    //     },
    //     component: (resolve) => require(['../views/sites/list'], resolve),
    // },
];

// 动态加载路由配置
export const asyncRoutes = [
    {
        path: '/components',
        name: 'Components',
        redirect: '/components/list',
        component: Layout,
        meta: {
            title: '组件管理',
            icon: 'el-icon-lock',
            roles: ['admin', 'editor']
        },
        children: [
            {
                path: 'list',
                name: 'ComponentsList',
                meta: {
                    title: '组件列表'
                },
                component: (resolve) => require(['@/views/components/list'], resolve)
            },
            {
                path: 'add',
                name: 'ComponentsAdd',
                meta: {
                    title: '添加组件',
                    roles: ['admin', 'editor']
                }, 
                component: (resolve) => require(['@/views/components/add'], resolve)
            },
        ]
    },
    {
        path: '/containers',
        name: 'Containers',
        redirect: '/containers/list',
        component: Layout,
        meta: {
            title: '区块管理',
            icon: 'el-icon-lock',
            roles: ['admin', 'editor']
        },
        children: [
            {
                path: 'list',
                name: 'ContainersList',
                meta: {
                    title: '区块列表'
                },
                component: (resolve) => require(['@/views/containers/list'], resolve)
            },
            {
                path: 'add',
                name: 'ContainersAdd',
                meta: {
                    title: '添加区块',
                    roles: ['admin', 'editor']
                }, 
                component: (resolve) => require(['@/views/containers/add'], resolve)
            },
        ]
    },
    {
        path: '/layouts',
        name: 'Layouts',
        redirect: '/layouts/list',
        component: Layout,
        meta: {
            title: '布局管理',
            icon: 'el-icon-lock',
            roles: ['admin', 'editor']
        },
        children: [
            {
                path: 'list',
                name: 'LayoutsList',
                meta: {
                    title: '布局列表'
                },
                component: (resolve) => require(['@/views/layouts/list'], resolve)
            },
            {
                path: 'add',
                name: 'LayoutsAdd',
                meta: {
                    title: '添加布局',
                    roles: ['admin', 'editor']
                }, 
                component: (resolve) => require(['@/views/layouts/add'], resolve)
            },
        ]
    },
    {
        path: '/pages',
        name: 'Pages',
        redirect: '/pages/list',
        component: Layout,
        meta: {
            title: '页面管理',
            icon: 'el-icon-lock',
            roles: ['admin', 'editor']
        },
        children: [
            {
                path: 'list',
                name: 'PagesList',
                meta: {
                    title: '页面列表'
                },
                component: (resolve) => require(['@/views/pages/list'], resolve)
            },
            {
                path: 'add',
                name: 'PagesAdd',
                meta: {
                    title: '添加页面',
                    roles: ['admin', 'editor']
                }, 
                component: (resolve) => require(['@/views/pages/add'], resolve)
            },
        ]
    },
    {
        path: '/modules',
        name: 'Modules',
        redirect: '/modules/list',
        component: Layout,
        meta: {
            title: '模块管理',
            icon: 'el-icon-lock',
            roles: ['admin', 'editor']
        },
        children: [
            {
                path: 'list',
                name: 'ModulesList',
                meta: {
                    title: '模块列表'
                },
                component: (resolve) => require(['@/views/modules/list'], resolve)
            },
            {
                path: 'add',
                name: 'ModulesAdd',
                meta: {
                    title: '添加模块',
                    roles: ['admin', 'editor']
                }, 
                component: (resolve) => require(['@/views/modules/add'], resolve)
            },
        ]
    },
    {
        path: '/sites',
        name: 'Sites',
        redirect: '/sites/list',
        component: Layout,
        meta: {
            title: '站点管理',
            icon: 'el-icon-lock',
            roles: ['editor']
        },
        children: [
            {
                path: 'list',
                name: 'SitesList',
                meta: {
                    title: '站点列表'
                },
                component: (resolve) => require(['@/views/sites/list'], resolve)
            },
            {
                path: 'add',
                name: 'SitesAdd',
                meta: {
                    title: '添加站点',
                    roles: ['editor']
                }, 
                component: (resolve) => require(['@/views/sites/add'], resolve)
            },
        ]
    },
    {
        path: '/data',
        name: 'data',
        meta: {
            title: '数据管理',
            icon: 'el-icon-lock'
        },
        component: Layout,
        children: [
            {
                path: 'mining',
                name: 'DataMining',
                component: DataLayout,
                meta: {
                    title: '数据挖掘'
                },
                children: [
                    {
                        path: 'portrait',
                        name: 'DataMiningPortrait',
                        meta: {
                            title: '用户肖像'
                        },
                        component: (resolve) => require(['@/views/data/mining/portrait'], resolve)
                    }
                ]

            }
        ]
    }


];

const RouterConfig = {
    mode: 'history',
    routes: constantRoutes
};
const router = new VueRouter(RouterConfig);


export default router