<template>
  <div class="oc-view-page">
    <Navbar />
    <!-- 主要内容 -->
    <main class="main-content">
      <div class="content-container">
        <h2>舰长 OC 展示</h2>
        <div class="oc-list">
          <!-- OC 名片列表 -->
          <OCCard v-for="oc in ocList" :key="oc.id" :oc="oc" />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import OCCard from '../components/OCCard.vue'
import { mockOCList } from '../mock/ocList.js'

const ocList = ref(mockOCList)
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