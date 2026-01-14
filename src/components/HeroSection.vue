<template>
  <section class="hero-section">
    <HeroContent />
  </section>
</template>

<script setup>
import HeroContent from './HeroContent.vue'
</script>

<style scoped>
.hero-section {
  background: url('@/assets/background.webp') center center/cover no-repeat;
  color: white;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .hero-section {
    width: 100vw;
    height: 100vh;
    padding: 3rem 1rem;
    background-size: cover;
    background-position: center center;
  }
}
</style>
