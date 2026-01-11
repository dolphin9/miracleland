import { createRouter, createWebHistory } from 'vue-router'

// 导入视图组件
import Index from '../views/Index.vue'
import WorldView from '../views/WorldView.vue'
import OCView from '../views/OCView.vue'
import CreationsView from '../views/CreationsView.vue'

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
    path: '/creations',
    name: 'CreationsView',
    component: CreationsView,
    meta: {
      title: '奇迹之地 - 二创合集'
    }
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由后置守卫 - 更新页面标题
router.afterEach((to) => {
  document.title = to.meta.title || '奇迹之地'
})

export default router