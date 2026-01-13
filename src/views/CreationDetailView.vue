<template>
  <div class="creation-detail-page">
    <Navbar />
    <main class="main-content">
      <div class="content-container">
        <!-- 返回按钮 -->
        <button @click="goBack" class="back-btn">
          ← 返回二创列表
        </button>

        <div v-if="creation" class="creation-detail">
          <!-- 主体内容区 - 居中展示 -->
          <div class="media-section">
            <!-- 视频 -->
            <div v-if="creation.category === '视频' && creation.videoUrl" class="media-container video-container">
              <iframe 
                :src="creation.videoUrl" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                class="video-player"
              ></iframe>
            </div>

            <!-- 音频/歌曲 -->
            <div v-else-if="creation.category === '歌曲' && creation.audioUrl" class="media-container audio-container">
              <div class="audio-cover">
                <img v-if="creation.coverImage" :src="creation.coverImage" :alt="creation.title" />
                <div v-else class="audio-placeholder">🎵</div>
              </div>
              <audio controls class="audio-player">
                <source :src="creation.audioUrl" type="audio/mpeg">
                您的浏览器不支持音频播放。
              </audio>
            </div>

            <!-- 图片（照片、绘画、手工等） -->
            <div v-else-if="creation.imageUrl" class="media-container image-container">
              <img :src="creation.imageUrl" :alt="creation.title" class="main-image" />
            </div>

            <!-- 占位符 -->
            <div v-else class="media-container placeholder-container">
              <div class="placeholder-content">
                <span class="placeholder-icon">{{ getCategoryIcon(creation.category) }}</span>
                <p>{{ creation.title }}</p>
              </div>
            </div>
          </div>

          <!-- 信息标签区 -->
          <div class="info-section">
            <h1 class="creation-title">{{ creation.title }}</h1>
            
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
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const route = useRoute()
const router = useRouter()

const creation = ref(null)

// 示例数据，后续会从 WordPress API 获取
const mockCreationsData = {
  '1': {
    id: 1,
    title: '星辰的时空冒险',
    author: '创作者A',
    category: '视频',
    date: '2024-01-10',
    videoUrl: '', // B站/YouTube 嵌入链接
    description: '<p>这是一部关于星辰舰长的精彩冒险视频，展现了她使用时空感知能力拯救团队的故事。</p><p>视频包含精美的特效和感人的配乐，时长约 10 分钟。</p>',
    tags: ['原创', '剧情向', '推荐'],
    ocId: '001',
    ocName: '星辰'
  },
  '2': {
    id: 2,
    title: '奇迹之声',
    author: '创作者B',
    category: '歌曲',
    date: '2024-01-08',
    audioUrl: '', // 音频文件链接
    coverImage: '',
    description: '<p>献给幻音舰长的原创歌曲，旋律优美动听。</p><p>歌词描述了奇迹之地的美丽与神秘，充满了对冒险的向往。</p>',
    tags: ['原创曲', '治愈系', '同人音乐'],
    ocId: '003',
    ocName: '幻音'
  },
  '3': {
    id: 3,
    title: '炽焰手办制作过程',
    author: '创作者C',
    category: '手工',
    date: '2024-01-05',
    imageUrl: '',
    description: '<p>历时一个月完成的炽焰舰长手办制作全过程记录。</p><p>从泥塑到上色，每一步都倾注了心血，还原度极高！</p>',
    tags: ['手办', 'DIY', '制作过程'],
    ocId: '002',
    ocName: '炽焰'
  },
  '4': {
    id: 4,
    title: '流光速度瞬间摄影',
    author: '创作者D',
    category: '照片',
    date: '2024-01-03',
    imageUrl: '',
    description: '<p>使用高速摄影捕捉流光舰长移动的瞬间。</p><p>照片展现了速度的美感和动态的张力。</p>',
    tags: ['摄影', '高速摄影', 'COSER'],
    ocId: '005',
    ocName: '流光'
  },
  '5': {
    id: 5,
    title: '寒霜舰长同人插画',
    author: '创作者E',
    category: '绘画',
    date: '2024-01-01',
    imageUrl: '',
    description: '<p>数位板绘制的寒霜舰长全身立绘。</p><p>冷色调的配色完美诠释了角色的冰冷气质，细节丰富，光影到位。</p>',
    tags: ['插画', '数位板', '同人绘'],
    ocId: '004',
    ocName: '寒霜'
  },
  '6': {
    id: 6,
    title: '奇迹之地宣传视频',
    author: '创作者F',
    category: '视频',
    date: '2023-12-28',
    videoUrl: '',
    description: '<p>精心制作的奇迹之地世界观宣传视频。</p><p>包含所有舰长的精彩片段和世界观介绍，气势恢宏。</p>',
    tags: ['宣传', '混剪', '燃向'],
    ocId: null,
    ocName: null
  },
  '7': {
    id: 7,
    title: '暮光魔法阵绘制',
    author: '创作者G',
    category: '绘画',
    date: '2023-12-25',
    imageUrl: '',
    description: '<p>以暮光舰长为灵感创作的魔法阵设计图。</p><p>融合了光暗双属性元素，充满神秘感。</p>',
    tags: ['概念设计', '魔法阵', '原创设定'],
    ocId: '006',
    ocName: '暮光'
  }
}

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

const goBack = () => {
  router.push('/creations')
}

const goToOC = (ocId) => {
  if (ocId) {
    router.push(`/oc/${ocId}`)
  }
}

onMounted(() => {
  const creationId = route.params.id
  creation.value = mockCreationsData[creationId]
})
</script>

<style scoped>
.creation-detail-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem 1rem;
  background-color: #fafafa;
}

.content-container {
  max-width: 1000px;
  margin: 0 auto;
}

/* 返回按钮 */
.back-btn {
  background: white;
  border: 2px solid #667eea;
  color: #667eea;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: #667eea;
  color: white;
}

.creation-detail {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

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
  .main-content {
    padding: 1rem 0.5rem;
  }

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
