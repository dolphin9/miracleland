<template>
  <div class="index-page">

    <main class="main-content">
      <HeroSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import HeroSection from '@/components/HeroSection.vue'
// 欢迎页逻辑
</script>

<style scoped>
.index-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 主要内容 */
.main-content {
  flex: 2;
  height:100dvh;
}

.hero-section {
  flex:2;
  aspect-ratio: 5 / 3;
}
</style>