<template>
  <div class="content-container">
    <div v-if="oc" class="oc-detail">
      <!-- 三栏布局 -->
      <div class="detail-grid">
        <!-- 左栏：舰长全身形象 -->
        <div class="image-section">
          <div class="oc-image-wrapper">
            <img v-if="oc.fullImage" :src="oc.fullImage" :alt="oc.name" class="oc-full-image" />
            <div v-else class="placeholder-image">
              <span>{{ oc.name.charAt(0) }}</span>
            </div>
          </div>
          <div class="oc-basic-info">
            <h1>{{ oc.name }}</h1>
            <p class="oc-id">舰长 ID: {{ oc.id }}</p>
          </div>
        </div>

        <!-- 中栏：舰长故事与设定 -->
        <div class="story-section">
          <h2>舰长故事</h2>
          <div class="story-content" v-html="oc.story"></div>
          
          <h2>角色设定</h2>
          <div class="settings-content">
            <div v-if="oc.age" class="setting-item">
              <span class="label">年龄：</span>
              <span class="value">{{ oc.age }}</span>
            </div>
            <div v-if="oc.personality" class="setting-item">
              <span class="label">性格：</span>
              <span class="value">{{ oc.personality }}</span>
            </div>
            <div v-if="oc.abilities" class="setting-item">
              <span class="label">特殊能力：</span>
              <span class="value">{{ oc.abilities }}</span>
            </div>
            <div v-if="oc.likes" class="setting-item">
              <span class="label">喜好：</span>
              <span class="value">{{ oc.likes }}</span>
            </div>
            <div v-if="oc.background" class="setting-item full-width">
              <span class="label">背景：</span>
              <div class="value" v-html="oc.background"></div>
            </div>
          </div>
        </div>

        <!-- 右栏：相关二创链接 -->
        <div class="creations-section">
          <h2>相关二创</h2>
          <div v-if="relatedCreations.length > 0" class="creations-list">
            <a 
              v-for="creation in relatedCreations" 
              :key="creation.id" 
              :href="`/creations/${creation.id}`"
              class="creation-link"
            >
              <span class="creation-type">{{ creation.category }}</span>
              <span class="creation-title">{{ creation.title }}</span>
              <span class="creation-author">by {{ creation.author }}</span>
            </a>
          </div>
          <div v-else class="no-creations">
            <p>暂无相关二创作品</p>
          </div>
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
defineProps({
  oc: {
    type: Object,
    default: null
  },
  relatedCreations: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.content-container {
  max-width: 1400px;
  margin: 0 auto;
}

/* 三栏布局 */
.detail-grid {
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  gap: 2rem;
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

/* 左栏：形象区 */
.image-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.oc-image-wrapper {
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.oc-full-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 5rem;
  font-weight: bold;
}

.oc-basic-info {
  text-align: center;
  width: 100%;
}

.oc-basic-info h1 {
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.oc-id {
  color: #999;
  font-size: 0.9rem;
}

/* 中栏：故事与设定 */
.story-section {
  padding: 0 1rem;
}

.story-section h2 {
  color: #667eea;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #667eea;
}

.story-content {
  line-height: 1.8;
  color: #333;
  margin-bottom: 2rem;
}

.story-content :deep(p) {
  margin-bottom: 1rem;
}

.settings-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.setting-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.setting-item.full-width {
  grid-column: 1 / -1;
  flex-direction: column;
}

.setting-item .label {
  font-weight: bold;
  color: #667eea;
  white-space: nowrap;
}

.setting-item .value {
  color: #666;
}

/* 右栏：相关二创 */
.creations-section {
  border-left: 2px solid #eee;
  padding-left: 1.5rem;
}

.creations-section h2 {
  color: #667eea;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.creations-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.creation-link {
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  background: #f9f9f9;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.creation-link:hover {
  background: #f0f0f0;
  border-left-color: #667eea;
  transform: translateX(4px);
}

.creation-type {
  display: inline-block;
  background: #667eea;
  color: white;
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  margin-bottom: 0.3rem;
  align-self: flex-start;
}

.creation-title {
  color: #333;
  font-weight: 500;
  margin-bottom: 0.2rem;
}

.creation-author {
  color: #999;
  font-size: 0.85rem;
}

.no-creations {
  text-align: center;
  padding: 2rem 0;
  color: #999;
}

.loading-state {
  text-align: center;
  padding: 4rem;
  color: #999;
}

/* 响应式设计 - 小屏 */
@media (max-width: 1024px) {
  .detail-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .creations-section {
    border-left: none;
    border-top: 2px solid #eee;
    padding-left: 0;
    padding-top: 1.5rem;
  }

  .settings-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .detail-grid {
    padding: 1rem;
  }

  .oc-basic-info h1 {
    font-size: 1.5rem;
  }

  .story-section {
    padding: 0;
  }

  .story-section h2 {
    font-size: 1.3rem;
  }
}
</style>
