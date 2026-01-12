<template>
  <div class="world-view-page">
    <Navbar />
    <!-- 主要内容 -->
    <main class="main-content">
      <div class="content-container">
        <!-- 九运角色介绍 -->
        <JiuyunSection />

        <!-- 奇迹之地背景介绍 -->
        <WorldSection />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import JiuyunSection from '../components/JiuyunSection.vue'
import WorldSection from '../components/WorldSection.vue'
// 奇迹之地介绍页逻辑
</script>

<style scoped>
.world-view-page {
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
  max-width: 1000px;
  margin: 0 auto;
}

</style>