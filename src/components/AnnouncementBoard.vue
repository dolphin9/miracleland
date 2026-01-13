<template>
  <div class="announcement-board">
    <div class="announcement-header">
      <span class="announcement-icon">📢</span>
      <h3>公告栏</h3>
    </div>
    <div class="announcement-content">
      <div 
        v-for="(announcement, index) in announcements" 
        :key="index" 
        class="announcement-item"
      >
        <div class="announcement-date">{{ announcement.date }}</div>
        <div class="announcement-text" v-html="announcement.content"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 示例公告数据，后续可从 API 获取
const announcements = ref([
  {
    date: '2026-01-13',
    content: '<strong>欢迎来到二创合集！</strong><p>这里收录了粉丝们精心制作的各类二创作品。</p>'
  },
  {
    date: '2026-01-10',
    content: '<p>新增<span style="color: #667eea; font-weight: bold;">绘画</span>分类，欢迎投稿！</p>'
  },
  {
    date: '2026-01-05',
    content: '<p>本周<em>精选作品</em>已更新，快来看看吧~</p><ul><li>视频作品 3 个</li><li>歌曲作品 2 个</li></ul>'
  }
])
</script>

<style scoped>
.announcement-board {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.announcement-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.announcement-icon {
  font-size: 1.2rem;
}

.announcement-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.announcement-content {
  flex: 1;
  padding: 0.75rem;
  overflow-y: auto;
  max-height: 280px;
}

.announcement-item {
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
}

.announcement-item:last-child {
  border-bottom: none;
}

.announcement-date {
  font-size: 0.75rem;
  color: #999;
  margin-bottom: 0.5rem;
}

.announcement-text {
  font-size: 0.9rem;
  color: #333;
  line-height: 1.6;
}

.announcement-text :deep(p) {
  margin: 0.25rem 0;
}

.announcement-text :deep(ul) {
  margin: 0.5rem 0;
  padding-left: 1.2rem;
}

.announcement-text :deep(li) {
  margin: 0.25rem 0;
}

.announcement-text :deep(strong) {
  color: #667eea;
}

/* 滚动条样式 */
.announcement-content::-webkit-scrollbar {
  width: 4px;
}

.announcement-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.announcement-content::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 2px;
}

.announcement-content::-webkit-scrollbar-thumb:hover {
  background: #999;
}
</style>
