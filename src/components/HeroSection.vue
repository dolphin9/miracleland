<template>
  <section class="hero-section">
    <div class="hero-content">
      <h2 class="hero-title">欢迎来到奇迹之地</h2>
      <p class="hero-subtitle">探索九运的故事，感受二创的魅力</p>
      <div class="cta-buttons">
        <router-link to="/world" class="btn btn-primary">开始探索</router-link>
        <router-link to="/creations" class="btn btn-secondary">查看二创</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// 无需逻辑
</script>

<style scoped>
.hero-section {
  background: url('@/assets/background.png') center center/cover no-repeat;
  color: white;
  padding: 6rem 1rem;
  text-align: center;
}
.hero-content {
  margin: 0 auto;
}
.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: slideInDown 0.8s ease-out;
}
.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: slideInUp 0.8s ease-out;
}
.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn {
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: inline-block;
}
.btn-primary {
  background-color: white;
  color: #667eea;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}
.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .cta-buttons {
    flex-direction: column;
  }
  .btn {
    width: 100%;
  }
}
</style>
