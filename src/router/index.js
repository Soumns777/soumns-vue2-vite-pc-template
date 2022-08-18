import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册路由插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'testVantAutoImport'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },

  {
    path: '/element',
    name: 'element',
    component: () => import('@/views/element/index.vue'),
    redirect: {
      name: 'home1'
    },
    children: [
      {
        name: 'home1',
        path: '/home1',
        // meta: {
        //   title: '首页1'
        // },
        redirect: {
          name: 'home3'
        },
        component: () => import('@/views/element/home1.vue'),
        children: [
          {
            name: 'home2',
            path: '/home2',
            component: () => import('@/views/element/home2.vue'),
            meta: {
              title: '首页2'
            }
          },
          {
            name: 'home3',
            path: '/home3',
            component: () => import('@/views/element/home3.vue'),
            meta: {
              title: '首页3'
            }
          }
        ]
      }
    ]
  },

  {
    path: '/testUnocss',
    name: 'testUnocss',
    component: () => import('@/views/testUnocss/index.vue')
  },

  {
    path: '/testVantAutoImport',
    name: 'testVantAutoImport',
    component: () => import('@/views/testVantAutoImport/index.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
