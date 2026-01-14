<template>
  <div class="content-container"> 
    <div v-if="creation" class="creation-detail">
      <h1 class="creation-title">{{ creation.title }}</h1>
      <!-- 主体内容区 - 居中展示 -->
      <MediaPlayer 
        :category="creation.category"
        :videoUrl="creation.videoUrl"
        :audioUrl="creation.audioUrl"
        :coverImage="creation.coverImage"
        :imageUrl="creation.imageUrl"
        :title="creation.title"
      />

      <!-- 信息标签区 -->
      <div class="info-section">            
        <div class="info-tags">
          <div class="info-tag">
            <span class="tag-label">👤 作者</span>
            <span class="tag-value">{{ creation.author }}</span>
          </div>
          
          <div class="info-tag">
            <span class="tag-label">📁 分类</span>
            <span class="tag-value category-badge">{{ creation.category }}</span>
          </div>
          
          <div class="info-tag">
            <span class="tag-label">📅 时间</span>
            <span class="tag-value">{{ creation.date }}</span>
          </div>
          
          <div v-if="creation.ocName" class="info-tag">
            <span class="tag-label">🎭 相关 OC</span>
            <span class="tag-value oc-link" @click="goToOC(creation.ocId)">{{ creation.ocName }}</span>
          </div>
        </div>

        <div v-if="creation.description" class="description-section">
          <h2>作品简介</h2>
          <div class="description-content" v-html="creation.description"></div>
        </div>

        <div v-if="creation.tags && creation.tags.length > 0" class="tags-section">
          <span class="tag-chip" v-for="tag in creation.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>

    <!-- 加载或错误状态 -->
    <div v-else class="loading-state">
      <p>加载中...</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import MediaPlayer from './MediaPlayer.vue'

const router = useRouter()

defineProps({
  creation: {
    type: Object,
    default: null
  }
})

const goToOC = (ocId) => {
  if (ocId) {
    router.push(`/oc/${ocId}`)
  }
}
</script>

<style scoped>
.content-container {
  max-width: 1000px;
  margin: 0 auto;
}

.creation-detail {
  background: rgba(255, 255, 255, 0);
  border-radius: 8px;
  overflow: hidden;
}

/* 信息区域 */
.info-section {
  padding: 2rem;
}

.creation-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.info-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
}

.info-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f9f9f9;
  padding: 0.6rem 1rem;
  border-radius: 6px;
}

.tag-label {
  font-weight: bold;
  color: #666;
  font-size: 0.9rem;
}

.tag-value {
  color: #333;
}

.category-badge {
  background: #667eea;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
}

.oc-link {
  color: #667eea;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.oc-link:hover {
  color: #764ba2;
}

/* 简介区域 */
.description-section {
  margin-top: 2rem;
}

.description-section h2 {
  color: #667eea;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.description-content {
  line-height: 1.8;
  color: #555;
}

.description-content :deep(p) {
  margin-bottom: 1rem;
}

/* 标签区域 */
.tags-section {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #f0f0f0;
}

.tag-chip {
  background: #e8eaf6;
  color: #667eea;
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
}

.loading-state {
  text-align: center;
  padding: 4rem;
  color: #999;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .info-section {
    padding: 1.5rem 1rem;
  }

  .creation-title {
    font-size: 1.5rem;
  }

  .info-tags {
    flex-direction: column;
    align-items: stretch;
  }

  .info-tag {
    justify-content: space-between;
  }
}
</style>
