<template>
  <div class="index-page">
    <Navbar />
    <main class="main-content">
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

      <!-- 视差滚动背景效果区域 -->
      <section class="parallax-section">
        <div class="parallax-content">
          <h3>奇迹之地官方网站</h3>
          <p>一个展示世界观、舰长 OC 和粉丝二创的平台</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
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
  flex: 1;
}

/* Hero 区域 */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 1rem;
  text-align: center;
}

.hero-content {
  max-width: 1000px;
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

/* 视差滚动区域 */
.parallax-section {
  background: linear-gradient(to bottom, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  padding: 6rem 1rem;
  text-align: center;
  min-height: 400px;
}

.parallax-content {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}

.parallax-content h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.parallax-content p {
  font-size: 1rem;
  color: #666;
}

/* 动画 */
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

/* 响应式设计 */
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