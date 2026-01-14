import { createRouter, createWebHistory } from 'vue-router'

// 导入视图组件
import Index from '../views/Index.vue'
import WorldView from '../views/WorldView.vue'
import OCView from '../views/OCView.vue'
import OCDetailView from '../views/OCDetailView.vue'
import CreationsView from '../views/CreationsView.vue'
import CreationDetailView from '../views/CreationDetailView.vue'

// 定义路由
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      title: '奇迹之地'
    }
  },
  {
    path: '/world',
    name: 'WorldView',
    component: WorldView,
    meta: {
      title: '奇迹之地 - 世界观设定'
    }
  },
  {
    path: '/oc',
    name: 'OCView',
    component: OCView,
    meta: {
      title: '奇迹之地 - 舰长 OC'
    }
  },
  {
    path: '/oc/:id',
    name: 'OCDetailView',
    component: OCDetailView,
    meta: {
      title: '奇迹之地 - OC 详情'
    }
  },
  {
    path: '/creations',
    name: 'CreationsView',
    component: CreationsView,
    meta: {
      title: '奇迹之地 - 二创合集'
    }
  },
  {
    path: '/creations/:id',
    name: 'CreationDetailView',
    component: CreationDetailView,
    meta: {
      title: '奇迹之地 - 二创详情'
    }
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory('/miracleland/'),
  routes
})

// 路由后置守卫 - 更新页面标题
router.afterEach((to) => {
  document.title = to.meta.title || '奇迹之地'
})

export default router