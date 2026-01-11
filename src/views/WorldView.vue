<template>
  <div class="world-view-page">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-container">
        <h1 class="site-title">奇迹之地</h1>
        <ul class="nav-links">
          <li><router-link to="/" class="nav-link">首页</router-link></li>
          <li><router-link to="/world" class="nav-link active">世界观</router-link></li>
          <li><router-link to="/oc" class="nav-link">舰长 OC</router-link></li>
          <li><router-link to="/creations" class="nav-link">二创合集</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- 主要内容 -->
    <main class="main-content">
      <div class="content-container">
        <!-- 九运角色介绍 -->
        <section class="jiuyun-section">
          <h2>九运角色介绍</h2>
          <div class="jiuyun-content">
            <div class="media-container">
              <div class="placeholder-media">九运形象</div>
            </div>
            <div class="text-content">
              <h3>九运设定</h3>
              <p>
                九运是「奇迹之地」世界观中的重要角色，拥有独特的故事背景和性格特征。
                本网站致力于展现九运丰富的人设设定和相关的粉丝二创内容。
              </p>
              <p>
                通过图片轮播、视频播放等多媒体形式，为观众呈现一个立体、生动的角色形象。
              </p>
            </div>
          </div>
        </section>

        <!-- 奇迹之地背景介绍 -->
        <section class="world-section">
          <h2>奇迹之地背景介绍</h2>
          <div class="world-content">
            <p>
              「奇迹之地」是一个充满奇幻色彩的世界观设定，融合了多种文化元素和创意想象。
              在这个世界中，九运与众多舰长角色共同演绎着精彩的故事。
            </p>
            <p>
              该网站作为一个内容展示平台，汇集了官方设定资料和粉丝创作成果，
              为广大爱好者提供了一个了解和分享的空间。
            </p>
            <p>
              我们欢迎每一位粉丝参与其中，分享你们的想象和创意。
            </p>
          </div>
        </section>
      </div>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <p>&copy; 2026 奇迹师九运</p>
      <p>本网站为粉丝制作</p>
    </footer>
  </div>
</template>

<script setup>
// 奇迹之地介绍页逻辑
</script>

<style scoped>
.world-view-page {
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
  padding: 3rem 1rem;
  background-color: #fafafa;
}

.content-container {
  max-width: 1000px;
  margin: 0 auto;
}

/* 九运介绍区域 */
.jiuyun-section {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.jiuyun-section h2 {
  color: #667eea;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #667eea;
  padding-bottom: 0.5rem;
}

.jiuyun-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.media-container {
  width: 100%;
}

.placeholder-media {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

.text-content h3 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.text-content p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 1rem;
}

/* 世界观背景介绍 */
.world-section {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.world-section h2 {
  color: #667eea;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #667eea;
  padding-bottom: 0.5rem;
}

.world-content p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1rem;
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

  .jiuyun-content {
    grid-template-columns: 1fr;
  }

  .jiuyun-section h2,
  .world-section h2 {
    font-size: 1.5rem;
  }

  .placeholder-media {
    height: 200px;
  }
}
</style>