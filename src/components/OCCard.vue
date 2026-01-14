<template>
  <div class="oc-card">
    <div class="card-avatar">
      {{ oc.name.charAt(0) }}
    </div>
    <div class="card-info">
      <h3>{{ oc.name }}</h3>
      <p class="oc-id">舰长 ID: {{ oc.id }}</p>
      <button @click="viewDetail" class="view-btn">查看详情</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  oc: {
    type: Object,
    required: true
  }
})

const viewDetail = () => {
  router.push(`/oc/${props.oc.routeId}`)
}
</script>

<style scoped>
.oc-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 1.5rem;
  text-align: center;
}

.oc-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

.card-info h3 {
  color: #333;
  font-size: 1.3rem;
  margin: 1rem 0 0.5rem 0;
}

.oc-id {
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.view-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.3s ease;
}

.view-btn:hover {
  opacity: 0.9;
}
</style>
