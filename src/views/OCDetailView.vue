<template>
  <div class="oc-detail-page">
    <Navbar />
    <main class="main-content">
      <div class="content-container">
        <!-- 返回按钮 -->
        <button @click="goBack" class="back-btn">
          ← 返回 OC 列表
        </button>

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

const oc = ref(null)
const relatedCreations = ref([])

// 示例数据，后续会从 WordPress API 获取
const mockOCData = {
  '001': {
    id: '舰长001',
    name: '星辰',
    fullImage: '', // 后续替换为实际图片 URL
    story: `
      <p>星辰是奇迹之地最早的探索者之一，来自遥远的星域。</p>
      <p>她拥有感知时空波动的能力，能够在关键时刻预见危险，引导团队避开险境。</p>
      <p>尽管性格内向，但她对同伴有着深厚的情感，总是在默默守护着大家。</p>
    `,
    age: '23 岁',
    personality: '沉静、敏感、富有洞察力',
    abilities: '时空感知、预知危险',
    likes: '观星、阅读古籍、独处思考',
    background: '<p>曾是星际考古学家，在一次遗迹探索中意外获得了时空感知能力，从此加入奇迹之地的冒险团队。</p>'
  },
  '002': {
    id: '舰长002',
    name: '炽焰',
    fullImage: '',
    story: `
      <p>炽焰是团队中的战斗担当，拥有操控火焰的强大能力。</p>
      <p>她热情开朗，总是第一个冲在前线保护队友。</p>
      <p>虽然看似大大咧咧，但在关键时刻异常冷静可靠。</p>
    `,
    age: '25 岁',
    personality: '热情、勇敢、义气',
    abilities: '火焰操控、高温抗性',
    likes: '格斗训练、烹饪美食、冒险挑战',
    background: '<p>出身于火山星球的战士家族，从小接受严格战斗训练，后加入奇迹之地寻找更强大的对手。</p>'
  },
  '003': {
    id: '舰长003',
    name: '幻音',
    fullImage: '',
    story: `
      <p>幻音是一位天才音乐家，她的歌声拥有治愈心灵的魔力。</p>
      <p>在奇迹之地的旅程中，她用音乐抚慰受伤的同伴，也用旋律化解敌意。</p>
      <p>她相信音乐能够连接所有生命，是宇宙最美好的语言。</p>
    `,
    age: '21 岁',
    personality: '温柔、浪漫、理想主义',
    abilities: '音波治疗、情感共鸣',
    likes: '作曲、演奏、收集古老乐器',
    background: '<p>来自艺术星球，曾是著名的宫廷乐师，为了追寻传说中的"宇宙和声"而踏上旅程。</p>'
  },
  '004': {
    id: '舰长004',
    name: '寒霜',
    fullImage: '',
    story: `
      <p>寒霜是团队的策略家，擅长冷静分析和制定作战计划。</p>
      <p>她掌控冰雪之力，能够在瞬间冻结敌人或创造防御屏障。</p>
      <p>虽然表面冷漠，但内心关心每一位队友的安危。</p>
    `,
    age: '26 岁',
    personality: '冷静、理性、完美主义',
    abilities: '冰雪操控、绝对零度',
    likes: '战术研究、下棋、冰雕创作',
    background: '<p>曾是星际联盟的战术顾问，因不满官僚体制而选择独立，后被奇迹之地的理念吸引加入。</p>'
  },
  '005': {
    id: '舰长005',
    name: '流光',
    fullImage: '',
    story: `
      <p>流光是速度型战士，能够以接近光速移动。</p>
      <p>他性格活泼幽默，总是给团队带来欢笑和活力。</p>
      <p>虽然有时显得不够成熟，但在危急关头从不退缩。</p>
    `,
    age: '22 岁',
    personality: '活泼、乐观、冲动',
    abilities: '超高速移动、反应力增强',
    likes: '极限运动、竞速游戏、恶作剧',
    background: '<p>出生于重力异常的高速星球，从小习惯高速移动，梦想成为宇宙最快的冒险者。</p>'
  },
  '006': {
    id: '舰长006',
    name: '暮光',
    fullImage: '',
    story: `
      <p>暮光是神秘的魔法师，掌握着光暗双属性魔法。</p>
      <p>她总是带着一本古老的魔法书，能够召唤各种魔法生物协助战斗。</p>
      <p>性格神秘莫测，但对于认可的伙伴绝对信任。</p>
    `,
    age: '不明',
    personality: '神秘、睿智、独立',
    abilities: '光暗魔法、生物召唤',
    likes: '研究魔法、收集魔法书、夜晚散步',
    background: '<p>来历成谜，据说曾是古代魔法帝国的后裔，为了寻找失落的魔法知识而游历各地。</p>'
  }
}

const mockCreationsData = [
  { id: 1, title: '星辰的冒险', author: '创作者A', category: '视频', ocId: '001' },
  { id: 2, title: '时空之歌', author: '创作者B', category: '歌曲', ocId: '001' },
  { id: 3, title: '炽焰战记', author: '创作者C', category: '绘画', ocId: '002' },
  { id: 4, title: '火焰之舞', author: '创作者D', category: '视频', ocId: '002' },
  { id: 5, title: '幻音演奏会', author: '创作者E', category: '照片', ocId: '003' }
]

const goBack = () => {
  router.push('/oc')
}

onMounted(() => {
  const ocId = route.params.id
  
  // 加载 OC 数据
  oc.value = mockOCData[ocId]
  
  // 加载相关二创（筛选包含该 OC ID 的作品）
  if (oc.value) {
    relatedCreations.value = mockCreationsData.filter(
      creation => creation.ocId === ocId
    )
  }
})
</script>

<style scoped>
.oc-detail-page {
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
  max-width: 1400px;
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
  .main-content {
    padding: 1rem 0.5rem;
  }

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
