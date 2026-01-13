<template>
  <div class="carousel-container">
    <div class="carousel">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-slide" v-for="(slide, index) in slides" :key="index">
          <div class="slide-content">{{ slide.title }}</div>
        </div>
      </div>
    </div>

    <!-- 轮播控制按钮 -->
    <button class="carousel-btn carousel-btn-prev" @click="prevSlide" aria-label="上一张">
      ❮
    </button>
    <button class="carousel-btn carousel-btn-next" @click="nextSlide" aria-label="下一张">
      ❯
    </button>

    <!-- 指示点 -->
    <div class="carousel-dots">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="currentIndex = index"
        :class="{ active: currentIndex === index }"
        class="dot"
        :aria-label="`跳转到第 ${index + 1} 张`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const autoPlayInterval = ref(null)

const slides = [
  {
    id: 1,
    title: '最新二创作品精选'
  },
  {
    id: 2,
    title: '热门视频合集'
  },
  {
    id: 3,
    title: '粉丝创意展示'
  },
  {
    id: 4,
    title: '本周精选作品'
  }
]

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
  resetAutoPlay()
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
  resetAutoPlay()
}

const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length
  }, 5000) // 5秒自动播放
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

const resetAutoPlay = () => {
  stopAutoPlay()
  startAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  overflow: hidden;
}

.carousel {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-content {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* 轮播控制按钮 */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  color: #333;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.carousel-btn:hover {
  background: rgba(255, 255, 255, 0.9);
  color: #667eea;
}

.carousel-btn-prev {
  left: 1rem;
}

.carousel-btn-next {
  right: 1rem;
}

/* 指示点 */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 0;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 0 0 8px 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #ddd;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover {
  background: #667eea;
  border-color: #667eea;
}

.dot.active {
  background: #667eea;
  border-color: #667eea;
}

@media (max-width: 768px) {
  .carousel {
    height: 200px;
  }

  .slide-content {
    font-size: 1.5rem;
  }

  .carousel-btn {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }
}
</style>
