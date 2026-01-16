# MiracleLand 工程文档

**项目名称：** MiracleLand - 奇迹之地官方网站  
**文档版本：** v1.2  
**最后更新：** 2026-01-17  
**作者：** 东方家在东方吗  
**更新说明：** 更新项目结构和关键文件说明，补充完整的组件列表和视图列表

---

## 目录

1. [项目概述](#项目概述)
2. [技术栈](#技术栈)
3. [项目结构](#项目结构)
4. [开发环境搭建](#开发环境搭建)
5. [核心功能](#核心功能)
6. [API 设计](#api-设计)
7. [开发规范](#开发规范)
8. [常见问题](#常见问题)
9. [部署指南](#部署指南)

---

## 项目概述

### 项目背景

MiracleLand 是奇迹师九运的官方网站，致力于：
- 介绍「奇迹之地」的世界观和背景故事
- 展示九运的角色设定和舰长 OC
- 聚合和展示粉丝创作的二创内容（视频、歌曲、手工、照片、绘画等）

### 项目定位

**内容展示型网站**，强调世界观呈现、角色设定与创作内容的长期扩展，提供沉浸式的用户体验。

### 核心特点

- ✅ 响应式设计，完美适配桌面端和移动端
- ✅ 模块化架构，易于维护和扩展
- ✅ 多媒体展示，支持图片、视频、音频等内容类型
- ✅ 前后端分离，灵活的内容管理

---

##  技术栈

### 前端技术

| 技术 | 版本 | 用途 | 状态 |
|------|------|------|------|
| Vue | 3.5.24 | 核心框架 | ✅ 使用中 |
| Vite | 7.2.4 | 构建工具 | ✅ 使用中 |
| Vue Router | 4.6.4 | 路由管理 | ✅ 使用中 |
| Sass | 1.97.2 | CSS 预处理器 | ✅ 已安装（未使用） |
| TypeScript | 5.9.3 | 类型检查 | ✅ 已安装（未使用） |
| Axios | - | HTTP 请求 | ⏳ 待安装 |
| Pinia | - | 状态管理 | ⏳ 待安装 |

### 后端技术

| 技术 | 用途 |
|------|------|
| WordPress 6.x+ | Headless CMS |
| PHP 7.4+ | 服务器端语言 |
| MySQL 5.7+ | 数据库 |
| REST API | 数据接口 |

### 部署环境

- **操作系统：** Ubuntu 22.04 LTS
- **Web 服务器：** Nginx 1.24+
- **管理面板：** 宝塔面板
- **域名与 SSL：** 支持 HTTPS

---

## 项目结构

```
MiracleLand/
├── src/                          # 源代码目录
│   ├── assets/                   # 静态资源（图片、字体等）
│   ├── components/               # 可复用组件（13个）
│   │   ├── Navbar.vue            # ✅ 导航栏组件
│   │   ├── Footer.vue            # ✅ 页脚组件
│   │   ├── HeroSection.vue       # ✅ Hero 区域组件
│   │   ├── HeroContent.vue       # ✅ Hero 内容组件
│   │   ├── JiuyunSection.vue     # ✅ 九运角色介绍组件
│   │   ├── WorldSection.vue      # ✅ 奇迹之地背景组件
│   │   ├── AnnouncementBoard.vue # ✅ 公告栏组件（富文本支持）
│   │   ├── OCCard.vue            # ✅ OC 卡片组件
│   │   ├── OCDetail.vue          # ✅ OC 详情展示组件
│   │   ├── CreationsList.vue     # ✅ 二创列表组件
│   │   ├── CreationsCarousel.vue # ✅ 二创轮播组件
│   │   ├── CreationShower.vue    # ✅ 二创展示组件
│   │   └── MediaPlayer.vue       # ✅ 媒体播放器组件
│   ├── views/                    # 页面组件（6个）
│   │   ├── Index.vue             # ✅ 首页（欢迎页）
│   │   ├── WorldView.vue         # ✅ 世界观介绍页
│   │   ├── OCView.vue            # ✅ 舰长OC列表页（模拟数据）
│   │   ├── OCDetailView.vue      # ✅ OC详情页（动态路由）
│   │   ├── CreationsView.vue     # ✅ 二创合集页（模拟数据）
│   │   └── CreationDetailView.vue # ✅ 二创详情页（动态路由）
│   ├── mock/                     # 模拟数据
│   │   ├── ocList.js             # ✅ OC 列表模拟数据
│   │   └── creations.js          # ✅ 二创列表模拟数据
│   ├── router/                   # 路由配置
│   │   └── index.js              # ✅ 路由定义（6个路由，含动态路由）
│   ├── services/                 # API 服务（待创建）
│   │   └── api.js                # API 调用封装（计划）
│   ├── stores/                   # Pinia 状态管理（待创建）
│   │   ├── ocStore.js            # OC 数据管理（计划）
│   │   └── creationStore.js      # 创作数据管理（计划）
│   ├── App.vue                   # 根组件
│   ├── main.js                   # 入口文件
│   └── style.css                 # 全局样式
├── public/                       # 公开资源
│   └── _redirects                # Netlify 重定向配置
├── .github/                      # GitHub 工作流
├── dist/                         # 构建输出目录
├── index.html                    # HTML 模板
├── vite.config.js                # Vite 配置
├── vercel.json                   # Vercel 部署配置
├── package.json                  # 项目配置
├── README.md                     # 项目说明
├── project.md                    # 工程规划
├── TODO.md                       # 开发计划
├── DEPLOY.md                     # 部署文档
└── ENGINEERING.md                # 本文件（v1.2）
```

### 关键文件说明

#### `src/router/index.js`
路由配置文件，定义了 6 个路由（✅ 已实现）：

**基础路由：**
- `/` → Index.vue - 首页（欢迎页）
- `/world` → WorldView.vue - 世界观介绍页
- `/oc` → OCView.vue - 舰长 OC 列表页
- `/creations` → CreationsView.vue - 二创合集页

**动态路由：**
- `/oc/:id` → OCDetailView.vue - OC 详情页（✅ 已实现）
- `/creations/:id` → CreationDetailView.vue - 二创详情页（✅ 已实现）

**路由特性：**
- 支持动态参数传递（:id）
- 每个路由配置 meta 信息（页面标题）
- 自动滚动到顶部行为

#### `src/views/`
存放页面级组件，每个文件对应一个独立的页面。

**已实现的页面（共 6 个）：**
- `Index.vue` - 首页（完整，含Hero区域和公告栏）
- `WorldView.vue` - 世界观页（完整，含九运介绍和世界观背景）
- `OCView.vue` - OC 列表页（使用模拟数据，网格布局）
- `OCDetailView.vue` - OC 详情页（✅ 已完成，支持动态路由）
- `CreationsView.vue` - 二创合集页（使用模拟数据，含分类筛选）
- `CreationDetailView.vue` - 二创详情页（✅ 已完成，支持动态路由）

**数据源：**
当前所有页面使用 `src/mock/` 目录下的模拟数据，后续将对接 WordPress REST API。

#### `src/components/`
存放可复用的组件，如导航栏、页脚、布局组件等。

**当前状态：** 已完成关键组件化重构，共 13 个组件。

**布局组件：**
- `Navbar.vue` - 导航栏（粘性定位，响应式）
- `Footer.vue` - 页脚（版权信息）
- `HeroSection.vue` - Hero 区域容器
- `HeroContent.vue` - Hero 内容展示

**内容组件：**
- `JiuyunSection.vue` - 九运角色介绍（双栏布局）
- `WorldSection.vue` - 奇迹之地背景介绍
- `AnnouncementBoard.vue` - 公告栏（支持富文本和响应式）

**OC 相关组件：**
- `OCCard.vue` - OC 卡片（用于列表展示）
- `OCDetail.vue` - OC 详细信息展示

**二创相关组件：**
- `CreationsList.vue` - 二创列表展示
- `CreationsCarousel.vue` - 二创轮播组件
- `CreationShower.vue` - 二创内容展示
- `MediaPlayer.vue` - 媒体播放器（视频/音频）

**组件特性：**
- 完全模块化，高度可复用
- 使用 Vue 3 Composition API
- 响应式设计，适配多端
- 统一的样式规范

#### `src/mock/`
存放模拟数据，用于前端开发阶段。

**已创建的文件：**
- `ocList.js` - OC 列表模拟数据（包含多个舰长 OC 信息）
- `creations.js` - 二创列表模拟数据（包含多种类型的创作）

**数据结构：**
- 模拟真实 API 返回的数据格式
- 包含完整的字段（id, name, type, description, url 等）
- 便于后期无缝切换到真实 API

#### `src/services/`（待创建）
存放 API 调用和数据服务逻辑。

**计划创建：** Phase 3 中创建 `api.js` 文件，统一管理 WordPress REST API 调用。

#### `src/stores/`（待创建）
存放 Pinia 状态管理 store。

**计划创建：**
- `ocStore.js` - 管理 OC 数据状态
- `creationStore.js` - 管理创作数据状态

---

## 开发环境搭建

### 前置要求

- Node.js 16.0+ 或 18.0+
- npm 8.0+ 或 yarn 3.0+
- Git
- VS Code（推荐）

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone <repository-url>
   cd MiracleLand
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```
   项目将在 `http://localhost:5173` 启动（默认端口）

4. **构建生产版本**
   ```bash
   npm run build
   ```
   生成的文件将输出到 `dist/` 目录

5. **本地预览生产版本**
   ```bash
   npm run preview
   ```

### 编辑器配置

推荐使用 VS Code，需要安装以下扩展：
- Vue Language Features (Volar)
- Prettier - Code formatter
- ESLint
- Sass (Dart Sass)

---

## 核心功能

### 页面功能详解

#### 1. 欢迎页 (Index)

**路由：** `/`

**功能模块：**
- 站点主标题「奇迹之地」（含开场动画）
- 粘性导航栏
- Hero 区域（含 CTA 按钮）
- 视差滚动背景区域
- Footer

**响应式适配：**
- 桌面端（≥ 769px）：完整布局
- 平板端（481-768px）：导航栏竖排，按钮竖排
- 移动端（≤ 480px）：极简布局，字体缩小

**关键类名：**
```
.navbar, .nav-container, .nav-links, .nav-link
.hero-section, .hero-title, .hero-subtitle, .cta-buttons
.btn, .btn-primary, .btn-secondary
.parallax-section
.footer
```

---

#### 2. 世界观介绍页 (WorldView)

**路由：** `/world`

**功能模块：**
- 导航栏
- 九运角色介绍部分
  - 左：媒体容器（图片/视频占位符）
  - 右：文字介绍
- 奇迹之地背景介绍部分
  - 单栏文字内容
- Footer

**响应式适配：**
- 桌面端（≥ 769px）：双栏布局
- 移动端（≤ 768px）：改为单栏纵向排列

**内容占位符：**
目前使用渐变色占位符，后续将接入真实图片/视频资源。

---

#### 3. 舰长 OC 展示页 (OCView)

**路由：** `/oc`

**功能模块：**
- 导航栏
- OC 名片列表
  - 头像（首字母圆形代表）
  - 名字
  - 舰长 ID
  - 查看详情按钮
- Footer

**响应式适配：**
- 桌面端（≥ 769px）：多列网格布局
- 移动端（≤ 768px）：单列布局

**示例数据：**
目前包含 6 条示例 OC 数据，后续会从 WordPress API 动态获取。

---

#### 4. 二创合集页 (CreationsView)

**路由：** `/creations`

**功能模块：**
- 导航栏
- 分类筛选按钮
  - 全部
  - 视频
  - 歌曲
  - 手工
  - 照片
  - 绘画
- 二创内容列表
  - 缩略图（含分类标识）
  - 标题
  - 描述
  - 元信息（分类标签、日期）
- 空状态提示
- Footer

**响应式适配：**
- 桌面端（≥ 769px）：多列网格布局
- 移动端（≤ 768px）：单列布局

**交互功能：**
- 点击分类按钮实时筛选内容
- 悬停卡片有上升效果

---

### 通用设计元素

#### 色彩方案
- **主色调：** 紫色渐变 (#667eea → #764ba2)
- **背景色：** #fafafa
- **文本色：** #333（主文本），#666（副文本），#999（辅助文本）
- **边框色：** #ddd

#### 字体
- **标题字体：** -apple-system, BlinkMacSystemFont, Segoe UI, Roboto（系统字体栈）
- **正文字体：** 同上

#### 间距规范
- **基础间距单位：** 1rem = 16px
- **常用间距：** 0.5rem, 1rem, 1.5rem, 2rem, 3rem

#### 动画效果
- **页面切换：** 淡入淡出（0.3s）
- **开场标题：** 从上滑入（0.8s）
- **副标题：** 从下滑入（0.8s）
- **卡片悬停：** 上升 + 阴影增强（0.3s）

---
## API 设计

### 当前状态

⚠️ **重要提示：** 当前项目仍在使用 **硬编码的模拟数据**，API 集成尚未实现。

**必要前置条件：**
- 安装 Axios: `npm install axios`
- 安装 Pinia: `npm install pinia`

### WordPress REST API 接口规划

#### 1. 获取世界观数据
**端点：** `GET /wp-json/wp/v2/pages?slug=world`

**响应示例：**
```json
{
  "id": 1,
  "title": "奇迹之地世界观",
  "content": "...",
  "featured_media": 123
}
```

#### 2. 获取 OC 数据
**端点：** `GET /wp-json/wp/v2/oc`（自定义文章类型）

**响应示例：**
```json
[
  {
    "id": 1,
    "title": "舰长一",
    "oc_id": "舰长001",
    "description": "...",
    "avatar": "url",
    "story": "..."
  }
]
```

#### 3. 获取二创数据
**端点：** `GET /wp-json/wp/v2/creations`（自定义文章类型）

**查询参数：**
- `category=video|song|handmade|photo|painting`
- `per_page=10`
- `page=1`

**响应示例：**
```json
[
  {
    "id": 1,
    "title": "二创作品",
    "category": "video",
    "description": "...",
    "date": "2024-01-10",
    "media_url": "url"
  }
]
```

---

## 开发规范

### 命名规范

#### Vue 组件
- 使用 PascalCase（大驼峰）命名
- 文件名与组件名保持一致
- 示例：`HeaderNav.vue`, `FooterSection.vue`

#### 样式类名
- 使用 kebab-case（小写中划线）
- 遵循 BEM 命名规范
- 示例：`.nav-bar`, `.nav-bar__item`, `.nav-bar--active`

#### 变量和函数
- 变量：camelCase（小驼峰）
- 常量：UPPER_SNAKE_CASE
- 示例：`userData`, `MAX_ITEMS = 20`

### 代码风格

#### Vue 单文件组件结构
```vue
<template>
  <!-- HTML 模板 -->
</template>

<script setup>
// JavaScript 逻辑
</script>

<style scoped>
/* 组件样式 */
</style>
```

#### CSS/SCSS 组织
```scss
// 1. 变量和函数
$primary-color: #667eea;

// 2. 基础样式
.container {
  /* ... */
}

// 3. 响应式媒体查询
@media (max-width: 768px) {
  .container {
    /* ... */
  }
}
```

### Git 提交规范

提交信息格式：`<type>: <subject>`

**类型（type）：**
- `feat:` 新功能
- `fix:` 修复 bug
- `docs:` 文档更新
- `style:` 代码样式调整
- `refactor:` 代码重构
- `perf:` 性能优化
- `test:` 添加测试
- `chore:` 构建工具、依赖更新等

**示例：**
```
feat: 添加 OC 详情页功能
fix: 修复移动端导航栏显示问题
docs: 更新 API 文档
```

---

## 常见问题

### Q: 如何添加新页面？

**A:** 按以下步骤添加：

1. 在 `src/views/` 创建新组件，如 `NewPage.vue`
2. 在 `src/router/index.js` 中导入并添加路由
3. 在导航栏中添加链接

示例：
```javascript
// router/index.js
import NewPage from '../views/NewPage.vue'

const routes = [
  {
    path: '/newpage',
    name: 'NewPage',
    component: NewPage,
    meta: { title: '新页面' }
  }
]
```

### Q: 如何修改样式主题色？

**A:** 修改 `src/App.vue` 或各页面的 `<style>` 块中的颜色变量。建议在全局样式中定义 CSS 变量：

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --bg-color: #fafafa;
}
```

### Q: 如何接入 WordPress API？

**A:** 

1. **第一步：安装依赖**
   ```bash
   npm install axios pinia
   ```

2. **第二步：在 `src/main.js` 中初始化 Pinia**
   ```javascript
   import { createPinia } from 'pinia'
   import { createApp } from 'vue'
   import App from './App.vue'

   const app = createApp(App)
   app.use(createPinia())  // 添加这一行
   app.mount('#app')
   ```

3. **第三步：创建 `src/services/api.js` 文件**
   ```javascript
   import axios from 'axios'

   const API_BASE = import.meta.env.VITE_API_BASE || 'https://your-wordpress.com/wp-json/wp/v2'

   export const getWorld = () => axios.get(`${API_BASE}/pages?slug=world`)
   export const getOCs = () => axios.get(`${API_BASE}/oc`)
   export const getCreations = (category) => 
     axios.get(`${API_BASE}/creations?category=${category}`)
   ```

4. **第四步：创建 Pinia Store（`src/stores/ocStore.js`）**
   ```javascript
   import { defineStore } from 'pinia'
   import { ref } from 'vue'
   import { getOCs } from '../services/api'

   export const useOCStore = defineStore('oc', () => {
     const ocs = ref([])
     const loading = ref(false)
     const error = ref(null)

     const fetchOCs = async () => {
       loading.value = true
       try {
         const response = await getOCs()
         ocs.value = response.data
       } catch (e) {
         error.value = e.message
       } finally {
         loading.value = false
       }
     }

     return { ocs, loading, error, fetchOCs }
   })
   ```

5. **第五步：在 View 中使用（以 OCView.vue 为例）**
   ```javascript
   import { useOCStore } from '../stores/ocStore'
   import { onMounted } from 'vue'

   const ocStore = useOCStore()
   
   onMounted(() => {
     ocStore.fetchOCs()
   })
   ```

**重要提醒：** 在开发过程中，根据 WordPress 实际配置修改 `VITE_API_BASE` 环境变量。

### Q: 如何处理加载状态和错误？

**A:** 使用 Vue 3 响应式数据：

```javascript
import { ref } from 'vue'

const data = ref(null)
const loading = ref(false)
const error = ref(null)

const fetchData = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await api.getData()
    data.value = response.data
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}
```

---

## 部署指南

### 生产构建

1. **构建项目**
   ```bash
   npm run build
   ```
   生成 `dist/` 文件夹

2. **验证构建**
   ```bash
   npm run preview
   ```

### 部署到 Ubuntu 服务器

#### 使用宝塔面板

1. 在宝塔面板创建新网站
2. 上传 `dist/` 文件夹内容到网站根目录
3. 配置 Nginx 反向代理（如需要）

#### 手动部署

1. **连接到服务器**
   ```bash
   ssh user@your-server.com
   ```

2. **部署文件**
   ```bash
   scp -r dist/ user@your-server.com:/var/www/miracleland/
   ```

3. **配置 Nginx**
   ```nginx
   server {
       listen 80;
       server_name miracleland.com www.miracleland.com;
       
       root /var/www/miracleland;
       index index.html;
       
       # SPA 路由处理
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       # 静态资源缓存
       location ~* \.(js|css|png|jpg|gif|ico|woff2)$ {
           expires 30d;
       }
   }
   ```

4. **启用 HTTPS**
   使用 Let's Encrypt 和 Certbot：
   ```bash
   certbot --nginx -d miracleland.com
   ```

### 环境变量配置

创建 `.env` 文件：
```
VITE_API_BASE=https://api.miracleland.com
VITE_ENV=production
```

在代码中使用：
```javascript
const apiBase = import.meta.env.VITE_API_BASE
```

### 性能优化建议

- ✅ 启用 Gzip 压缩
- ✅ 使用 CDN 加速静态资源
- ✅ 图片优化和懒加载
- ✅ 代码分割和动态导入
- ✅ 缓存策略配置

---

## 维护和支持

### 常见维护任务

1. **更新依赖**
   ```bash
   npm update
   npm audit
   ```

2. **清理缓存**
   ```bash
   npm cache clean --force
   ```

3. **备份数据库**
   - WordPress 数据库定期备份
   - 使用宝塔面板自动备份功能

### 监控和日志

- 配置 Nginx 日志监控
- 使用 WordPress 插件记录用户活动
- 设置错误告警机制

### 联系方式

- 技术支持：[support email]
- Bug 报告：GitHub Issues
- 功能建议：[feedback form]

---

## 附录

### 快速命令参考

```bash
# 开发
npm run dev              # 启动开发服务器
npm run build            # 构建生产版本
npm run preview          # 预览生产版本

# 依赖管理
npm install              # 安装依赖
npm install <package>    # 安装新包
npm uninstall <package>  # 卸载包

# 代码质量
npm run lint             # 代码检查
npm run format           # 代码格式化
```

### 推荐阅读

- [Vue 3 官方文档](https://vuejs.org/)
- [Vue Router 官方文档](https://router.vuejs.org/)
- [Vite 官方文档](https://vitejs.dev/)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)

---

*此文档持续更新中，最后修改于 2026-01-12*

### 文档变更历史

| 版本 | 日期 | 修改说明 |
|------|------|----------|
| v1.1 | 2026-01-12 | 根据实现状态更新，新增「实现状态」、「已知问题与技术债务」、「下一步行动计划」章节 |
| v1.0 | 2026-01-10 | 初始版本，项目规划与计划 |