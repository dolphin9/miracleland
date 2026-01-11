<template>
  <div class="creations-view-page">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-container">
        <h1 class="site-title">奇迹之地</h1>
        <ul class="nav-links">
          <li><router-link to="/" class="nav-link">首页</router-link></li>
          <li><router-link to="/world" class="nav-link">世界观</router-link></li>
          <li><router-link to="/oc" class="nav-link">舰长 OC</router-link></li>
          <li><router-link to="/creations" class="nav-link active">二创合集</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- 主要内容 -->
    <main class="main-content">
      <div class="content-container">
        <h2>二创合集</h2>

        <!-- 分类筛选 -->
        <div class="categories">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            :class="{ active: activeCategory === category }"
            class="category-btn"
          >
            {{ category }}
          </button>
        </div>

        <!-- 二创内容列表 -->
        <div class="creations-list">
          <div class="creation-item" v-for="creation in filteredCreations" :key="creation.id">
            <div class="creation-thumbnail">
              {{ creation.title.charAt(0) }}
            </div>
            <div class="creation-info">
              <h3>{{ creation.title }}</h3>
              <p class="description">{{ creation.description }}</p>
              <div class="meta-info">
                <span class="category-tag">{{ creation.category }}</span>
                <span class="date">{{ creation.date }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 空状态提示 -->
        <div v-if="filteredCreations.length === 0" class="empty-state">
          <p>该分类下暂无内容</p>
        </div>
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
import { ref, computed } from 'vue'

const categories = ['全部', '视频', '歌曲', '手工', '照片', '绘画']
const activeCategory = ref('全部')

// 示例数据，后续会从 WordPress API 获取
const creations = ref([
  {
    id: 1,
    title: '二创视频 1',
    description: '一部精心制作的视频作品',
    category: '视频',
    date: '2024-01-10'
  },
  {
    id: 2,
    title: '同人歌曲',
    description: '改编版本的精美歌曲',
    category: '歌曲',
    date: '2024-01-08'
  },
  {
    id: 3,
    title: '手工制作',
    description: '手工DIY作品展示',
    category: '手工',
    date: '2024-01-05'
  },
  {
    id: 4,
    title: '粉丝照片集',
    description: '精美的摄影作品',
    category: '照片',
    date: '2024-01-03'
  },
  {
    id: 5,
    title: '同人绘画',
    description: '精心绘制的艺术作品',
    category: '绘画',
    date: '2024-01-01'
  },
  {
    id: 6,
    title: '宣传视频',
    description: '官方宣传视频二创版本',
    category: '视频',
    date: '2023-12-28'
  }
])

const filteredCreations = computed(() => {
  if (activeCategory.value === '全部') {
    return creations.value
  }
  return creations.value.filter(creation => creation.category === activeCategory.value)
})
</script>

<style scoped>
.creations-view-page {
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

/* 分类筛选 */
.categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.category-btn {
  padding: 0.6rem 1.2rem;
  border: 2px solid #ddd;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  color: #666;
}

.category-btn:hover {
  border-color: #667eea;
  color: #667eea;
}

.category-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
}

/* 二创列表 */
.creations-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.creation-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.creation-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.creation-thumbnail {
  width: 100%;
  height: 150px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
}

.creation-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.creation-info h3 {
  color: #333;
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
}

.description {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 1rem 0;
  flex: 1;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category-tag {
  display: inline-block;
  background: #f0f0f0;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #667eea;
}

.date {
  font-size: 0.8rem;
  color: #999;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 3rem;
  color: #999;
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

  .content-container h2 {
    font-size: 1.5rem;
  }

  .categories {
    justify-content: center;
  }

  .creations-list {
    grid-template-columns: 1fr;
  }
}
</style>