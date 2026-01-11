<template>
  <div class="index-page">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-container">
        <h1 class="site-title">奇迹之地</h1>
        <ul class="nav-links">
          <li><router-link to="/" class="nav-link active">首页</router-link></li>
          <li><router-link to="/world" class="nav-link">世界观</router-link></li>
          <li><router-link to="/oc" class="nav-link">舰长 OC</router-link></li>
          <li><router-link to="/creations" class="nav-link">二创合集</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- 主要内容区 -->
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

    <!-- 页脚 -->
    <footer class="footer">
      <p>&copy; 2026 奇迹师九运</p>
      <p>本网站为粉丝制作</p>
    </footer>
  </div>
</template>

<script setup>
// 欢迎页逻辑
</script>

<style scoped>
.index-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 导航栏样式 */
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
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
  max-width: 800px;
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.parallax-content {
  max-width: 800px;
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

/* 页脚 */
.footer {
  background-color: #f5f5f5;
  color: #666;
  text-align: center;
  padding: 2rem 1rem;
  border-top: 1px solid #ddd;
}

.footer p {
  margin: 0.5rem 0;
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