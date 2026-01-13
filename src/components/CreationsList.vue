<template>
  <div class="creations-container">
    <!-- 轮播组件 -->
    <CreationsCarousel />

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
      <div class="list-header">
        <div class="col-title">名称</div>
        <div class="col-author">作者</div>
        <div class="col-category">类别</div>
        <div class="col-date">时间</div>
      </div>
      <div class="creation-item" v-for="creation in filteredCreations" :key="creation.id">
        <div class="col-title">{{ creation.title }}</div>
        <div class="col-author">{{ creation.author }}</div>
        <div class="col-category">
          <span class="category-tag">{{ creation.category }}</span>
        </div>
        <div class="col-date">{{ creation.date }}</div>
      </div>
    </div>

    <!-- 空状态提示 -->
    <div v-if="filteredCreations.length === 0" class="empty-state">
      <p>该分类下暂无内容</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CreationsCarousel from './CreationsCarousel.vue'

const categories = ['全部', '视频', '歌曲', '手工', '照片', '绘画']
const activeCategory = ref('全部')

// 示例数据，后续会从 WordPress API 获取
const creations = ref([
  {
    id: 1,
    title: '二创视频 1',
    author: '创作者A',
    category: '视频',
    date: '2024-01-10'
  },
  {
    id: 2,
    title: '同人歌曲',
    author: '创作者B',
    category: '歌曲',
    date: '2024-01-08'
  },
  {
    id: 3,
    title: '手工制作',
    author: '创作者C',
    category: '手工',
    date: '2024-01-05'
  },
  {
    id: 4,
    title: '粉丝照片集',
    author: '创作者D',
    category: '照片',
    date: '2024-01-03'
  },
  {
    id: 5,
    title: '同人绘画',
    author: '创作者E',
    category: '绘画',
    date: '2024-01-01'
  },
  {
    id: 6,
    title: '宣传视频',
    author: '创作者F',
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
.creations-container {
  width: 100%;
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
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.list-header {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1.2fr;
  gap: 1rem;
  padding: 1.2rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: bold;
  border-bottom: 2px solid #f0f0f0;
}

.creation-item {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1.2fr;
  gap: 1rem;
  padding: 1.2rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
  align-items: center;
  transition: background-color 0.3s ease;
}

.creation-item:hover {
  background-color: #f9f9f9;
}

.creation-item:last-child {
  border-bottom: none;
}

.col-title {
  font-weight: 500;
  color: #333;
  word-break: break-word;
}

.col-author {
  color: #666;
}

.col-category {
  display: flex;
  justify-content: center;
}

.col-date {
  text-align: right;
  color: #999;
  font-size: 0.9rem;
}

.category-tag {
  display: inline-block;
  background: #f0f0f0;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #667eea;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 3rem;
  color: #999;
}
</style>
