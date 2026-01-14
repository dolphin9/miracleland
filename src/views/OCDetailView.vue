<template>
  <div class="oc-detail-page">
    <Navbar />
    <main class="main-content">
      <div class="container">
        <!-- 返回按钮 -->
        <button @click="goBack" class="back-btn">
          ← 返回 OC 列表
        </button>
        
        <OCDetail :oc="oc" :relatedCreations="relatedCreations" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import OCDetail from '../components/OCDetail.vue'
import { mockOCData, mockOCRelatedCreations } from '../mock/ocList.js'

const route = useRoute()
const router = useRouter()

const oc = ref(null)
const relatedCreations = ref([])

const goBack = () => {
  router.push('/oc')
}

onMounted(() => {
  const ocId = route.params.id
  
  // 加载 OC 数据
  oc.value = mockOCData[ocId]
  
  // 加载相关二创（筛选包含该 OC ID 的作品）
  if (oc.value) {
    relatedCreations.value = mockOCRelatedCreations.filter(
      creation => creation.ocId === ocId
    )
  }
})
</script>

<style scoped>
.oc-detail-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem 1rem;
  background-color: #fafafa;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

/* 返回按钮 */
.back-btn {
  background: white;
  border: 2px solid #667eea;
  color: #667eea;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: #667eea;
  color: white;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    padding: 1rem 0.5rem;
  }
}
</style>
