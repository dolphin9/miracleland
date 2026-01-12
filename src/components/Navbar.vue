<template>
  <nav class="navbar">
    <div class="nav-container">
      <h1 class="site-title">奇迹之地</h1>
      <ul class="nav-links">
        <li><router-link to="/" class="nav-link">首页</router-link></li>
        <li><router-link to="/world" class="nav-link">世界观</router-link></li>
        <li><router-link to="/oc" class="nav-link">舰长 OC</router-link></li>
        <li><router-link to="/creations" class="nav-link">二创合集</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// 无需逻辑
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.site-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}
.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
.nav-link:hover,
.nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
}
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }
  .site-title {
    font-size: 1.5rem;
  }
  .nav-links {
    gap: 1rem;
    justify-content: center;
  }
}
</style>
