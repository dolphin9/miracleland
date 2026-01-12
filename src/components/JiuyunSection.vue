<template>
  <section class="jiuyun-section">
    <h2>九运角色介绍</h2>
    <div class="jiuyun-content">
      <div class="media-container">
        <div class="placeholder-media">九运形象</div>
      </div>
      <div class="text-content">
        <h3>九运设定</h3>
        <p>
          这是一段九运的介绍，
        </p>
        <p>
          咕咕咕嘎嘎嘎。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// 无需逻辑
</script>

<style scoped>
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

@media (max-width: 768px) {
  .jiuyun-content {
    grid-template-columns: 1fr;
  }

  .jiuyun-section h2 {
    font-size: 1.5rem;
  }

  .placeholder-media {
    height: 200px;
  }
}
</style>
