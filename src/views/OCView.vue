<template>
  <div class="oc-view-page">
    <Navbar />
    <!-- 主要内容 -->
    <main class="main-content">
      <div class="content-container">
        <h2>舰长 OC 展示</h2>
        <div class="oc-list">
          <!-- OC 名片列表 -->
          <div class="oc-card" v-for="oc in ocList" :key="oc.id">
            <div class="card-avatar">
              {{ oc.name.charAt(0) }}
            </div>
            <div class="card-info">
              <h3>{{ oc.name }}</h3>
              <p class="oc-id">舰长 ID: {{ oc.id }}</p>
              <button @click="viewOCDetail(oc.routeId)" class="view-btn">查看详情</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const router = useRouter()

// 示例数据，后续会从 WordPress API 获取
const ocList = ref([
  { id: '舰长001', name: '1', routeId: '001' },
  { id: '舰长002', name: '2', routeId: '002' },
  { id: '舰长003', name: '3', routeId: '003' },
  { id: '舰长004', name: '4', routeId: '004' },
  { id: '舰长005', name: '5', routeId: '005' },
  { id: '舰长006', name: '6', routeId: '006' }
])

const viewOCDetail = (routeId) => {
  router.push(`/oc/${routeId}`)
}
</script>

<style scoped>
.oc-view-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 主要内容 */
.main-content {
  flex: 1;
  padding: 3rem 1rem;
  background-color: #fafafa;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
}

.content-container h2 {
  color: #667eea;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: 3px solid #667eea;
  padding-bottom: 1rem;
}

/* OC 列表 */
.oc-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.oc-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 1.5rem;
  text-align: center;
}

.oc-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

.card-info h3 {
  color: #333;
  font-size: 1.3rem;
  margin: 1rem 0 0.5rem 0;
}

.oc-id {
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.view-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.3s ease;
}

.view-btn:hover {
  opacity: 0.9;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .site-title {
    font-size: 1.5rem;
  }

  .nav-links {
    gap: 1rem;
    justify-content: center;
  }

  .content-container h2 {
    font-size: 1.5rem;
  }

  .oc-list {
    grid-template-columns: 1fr;
  }
}
</style>