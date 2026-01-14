<template>
  <div class="creation-detail-page">
    <Navbar />
    <main class="main-content">
      <div class="container">

        <CreationShower :creation="creation" />

        <button @click="goBack" class="back-btn">
          ← 返回二创列表
        </button>
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
import CreationShower from '../components/CreationShower.vue'
import { mockCreationsData } from '../mock/creations.js'

const route = useRoute()
const router = useRouter()

const creation = ref(null)

const goBack = () => {
  router.push('/creations')
}

onMounted(() => {
  const creationId = route.params.id
  creation.value = mockCreationsData[creationId]
})
</script>

<style scoped>
.creation-detail-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 1rem 0.5rem;
  background-color: #fafafa;
}

.container {
  max-width: 1000px;
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
