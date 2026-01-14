<template>
  <div class="media-section">
    <!-- 视频 -->
    <div v-if="category === '视频' && videoUrl" class="media-container video-container">
      <iframe 
        :src="videoUrl" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        class="video-player"
      ></iframe>
    </div>

    <!-- 音频/歌曲 -->
    <div v-else-if="category === '歌曲' && audioUrl" class="media-container audio-container">
      <div class="audio-cover">
        <img v-if="coverImage" :src="coverImage" :alt="title" />
        <div v-else class="audio-placeholder">🎵</div>
      </div>
      <audio controls class="audio-player">
        <source :src="audioUrl" type="audio/mpeg">
        您的浏览器不支持音频播放。
      </audio>
    </div>

    <!-- 图片（照片、绘画、手工等） -->
    <div v-else-if="imageUrl" class="media-container image-container">
      <img :src="imageUrl" :alt="title" class="main-image" />
    </div>

    <!-- 占位符 -->
    <div v-else class="media-container placeholder-container">
      <div class="placeholder-content">
        <span class="placeholder-icon">{{ getCategoryIcon(category) }}</span>
        <p>{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: String,
    default: ''
  },
  videoUrl: {
    type: String,
    default: ''
  },
  audioUrl: {
    type: String,
    default: ''
  },
  coverImage: {
    type: String,
    default: ''
  },
  imageUrl: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})

const getCategoryIcon = (category) => {
  const icons = {
    '视频': '🎬',
    '歌曲': '🎵',
    '手工': '✂️',
    '照片': '📷',
    '绘画': '🎨'
  }
  return icons[category] || '📄'
}
</script>

<style scoped>
/* 媒体区域 */
.media-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
}

.media-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 视频容器 */
.video-container {
  aspect-ratio: 16/9;
  background: #000;
}

.video-player {
  width: 100%;
  height: 100%;
}

/* 音频容器 */
.audio-container {
  flex-direction: column;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  gap: 2rem;
}

.audio-cover {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.audio-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.audio-placeholder {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
}

.audio-player {
  width: 100%;
  max-width: 500px;
}

/* 图片容器 */
.image-container {
  padding: 2rem;
  background: #f5f5f5;
}

.main-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 占位符 */
.placeholder-container {
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.placeholder-content {
  text-align: center;
  color: white;
}

.placeholder-icon {
  font-size: 5rem;
  display: block;
  margin-bottom: 1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .audio-cover {
    width: 200px;
    height: 200px;
  }

  .audio-container {
    padding: 2rem 1rem;
  }

  .image-container {
    padding: 1rem;
  }
}
</style>
