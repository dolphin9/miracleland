# MiracleLand 工程文档

**项目名称：** MiracleLand - 奇迹之地官方网站  
**文档版本：** v1.1  
**最后更新：** 2026-01-12  
**作者：** 东方家在东方吗  
**更新说明：** 根据实现状态更新，补充已知问题、技术债务和实际依赖信息

---

## 目录

1. [项目概述](#项目概述)
2. [实现状态](#实现状态)
3. [技术栈](#技术栈)
4. [项目结构](#项目结构)
5. [开发环境搭建](#开发环境搭建)
6. [核心功能](#核心功能)
7. [已知问题与技术债务](#已知问题与技术债务)
8. [API 设计](#api-设计)
9. [开发规范](#开发规范)
10. [常见问题](#常见问题)
11. [部署指南](#部署指南)

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

## 实现状态

### 开发进度总结

**当前版本：** Phase 1 基本完成，Phase 2 部分完成

**最后更新：** 2026-01-12

#### Phase 1: 基础架构（90% 完成）

- ✅ Vue 3 + Vite 项目初始化
- ✅ Vue Router 4 配置和4个主路由设置
- ✅ 响应式页面框架搭建
- ✅ 全局样式和色彩方案定义
- ⚠️ Layout 组件提取（导航栏/页脚重复代码待重构）

#### Phase 2: 核心页面开发（70% 完成）

- ✅ 首页（Index）完成
- ✅ 世界观页面（WorldView）完成
- ✅ OC 列表页面（OCView）完成（使用模拟数据）
- ✅ 二创合集页面（CreationsView）完成（使用模拟数据）
- ❌ OC 详情页面（需要动态路由）
- ❌ 二创详情页面（需要动态路由）

#### Phase 3: 后端集成（0% 完成，已阻塞）

- ❌ Axios 依赖安装（已规划）
- ❌ API 服务封装
- ❌ WordPress 数据接入
- ❌ 动态数据加载和错误处理

#### Phase 4: 优化与增强（0% 完成）

- ❌ 移动端动画优化
- ❌ 高级筛选功能
- ❌ 加载状态指示器
- ❌ OC-创作关联展示

#### Phase 5: 测试与部署（0% 完成）

- ❌ 单元测试
- ❌ 集成测试
- ❌ 部署流程验证
- ❌ 性能监控设置

### 已安装依赖 vs 计划依赖

| 依赖 | 状态 | 版本 | 用途 |
|------|------|------|------|
| Vue | ✅ 已安装 | 3.5.24 | 核心框架 |
| Vite | ✅ 已安装 | 7.2.4 | 构建工具 |
| Vue Router | ✅ 已安装 | 4.6.4 | 路由管理 |
| Sass | ✅ 已安装 | 1.97.2 | CSS 预处理器 |
| TypeScript | ✅ 已安装 | 5.9.3 | 类型检查（未使用） |
| Axios | ⏳ 待安装 | - | HTTP 请求 |
| Pinia | ⏳ 待安装 | - | 状态管理 |

### 功能完成度统计

```
前端框架搭建        ████████░░  90%
UI/UX 设计          ████████░░  85%
响应式适配          █████████░  95%
数据模型设计        ████░░░░░░  40%
后端 API 集成       ░░░░░░░░░░   0%
错误处理机制        ░░░░░░░░░░   0%
性能优化            ░░░░░░░░░░   0%
整体项目            ████░░░░░░  40%
```

---

## 技术栈

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
│   ├── assets/                   # 静态资源
│   │   └── (保留供图片、字体等)
│   ├── components/               # 可复用组件（待创建）
│   │   ├── HeaderNav.vue         # 导航栏（计划重构）
│   │   └── Footer.vue            # 页脚（计划重构）
│   ├── views/                    # 页面组件
│   │   ├── Index.vue             # ✅ 欢迎页
│   │   ├── WorldView.vue         # ✅ 世界观介绍页
│   │   ├── OCView.vue            # ✅ 舰长OC展示页（模拟数据）
│   │   ├── CreationsView.vue     # ✅ 二创合集页（模拟数据）
│   │   ├── OCDetail.vue          # ❌ OC详情页（待创建）
│   │   └── CreationDetail.vue    # ❌ 二创详情页（待创建）
│   ├── router/                   # 路由配置
│   │   └── index.js              # ✅ 路由定义（4个主路由）
│   ├── services/                 # API 服务（待创建）
│   │   └── api.js                # API 调用封装（计划）
│   ├── stores/                   # Pinia 状态管理（待创建）
│   │   ├── ocStore.js            # OC 数据管理（计划）
│   │   └── creationStore.js      # 创作数据管理（计划）
│   ├── App.vue                   # 根组件
│   ├── main.js                   # 入口文件
│   └── style.css                 # 全局样式（待优化为 CSS 变量）
├── public/                       # 公开资源
├── index.html                    # HTML 模板
├── vite.config.js                # Vite 配置
├── package.json                  # 项目配置
├── README.md                     # 项目说明
├── project.md                    # 工程规划
├── TODO.md                       # 开发计划
└── ENGINEERING.md                # 本文件（v1.1）
```

### 关键文件说明

#### `src/router/index.js`
路由配置文件，定义了 4 个主要路由（✅ 已实现）：
- `/` → Index.vue - 欢迎页
- `/world` → WorldView.vue - 世界观介绍页
- `/oc` → OCView.vue - 舰长 OC 展示页
- `/creations` → CreationsView.vue - 二创合集页

**计划扩展：** 在 Phase 2 完成后添加动态路由
- `/oc/:id` → OCDetail.vue - OC 详情页
- `/creations/:id` → CreationDetail.vue - 创作详情页

#### `src/views/`
存放页面级组件，每个文件对应一个独立的页面。

**已实现的页面：**
- Index.vue - 首页（完整）
- WorldView.vue - 世界观页（完整）
- OCView.vue - OC 列表页（使用模拟数据）
- CreationsView.vue - 创作列表页（使用模拟数据）

**计划创建的页面：**
- OCDetail.vue - OC 详情页（需动态路由）
- CreationDetail.vue - 创作详情页（需动态路由）

#### `src/components/`
存放可复用的组件，如导航栏、页脚、布局组件等。

**当前状态：** 该目录存在但为空。导航栏和页脚代码当前在各个 View 文件中重复定义，
建议在 Phase 2 完成后进行重构，提取为独立的 `HeaderNav.vue` 和 `Footer.vue` 组件。

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

## 已知问题与技术债务

### 高优先级问题

#### 1. 代码重复（导航栏和页脚）
- **描述：** 导航栏和页脚代码在 Index.vue, WorldView.vue, OCView.vue, CreationsView.vue 中重复定义
- **影响：** 维护成本高，修改导航栏需要更新 4 个文件
- **解决方案：** 提取为 `HeaderNav.vue` 和 `Footer.vue` 组件，在各 View 中引入使用
- **优先级：** 高
- **预计工作量：** 2-3 小时

#### 2. 硬编码样式值
- **描述：** 颜色、间距、尺寸等设计值直接写在组件 `<style>` 块中，未提取为 CSS 变量
- **示例：** `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **影响：** 主题更新困难，代码可读性降低
- **解决方案：** 在 `src/style.css` 中定义全局 CSS 变量，在组件中使用 `var()`
- **优先级：** 中
- **预计工作量：** 1-2 小时

#### 3. 缺少 API 集成层
- **描述：** OCView 和 CreationsView 使用硬编码的模拟数据，缺少 Axios 和 API 服务层
- **影响：** 无法连接 WordPress 后端，数据不可动态更新
- **依赖：** Axios 和 Pinia 未安装
- **解决方案：** 
  1. 运行 `npm install axios pinia`
  2. 创建 `src/services/api.js` 文件
  3. 在 Pinia store 中管理 OC 和 Creation 数据
  4. 修改 OCView 和 CreationsView 以使用 store 数据
- **优先级：** 高
- **预计工作量：** 3-4 小时

#### 4. 缺少详情页路由
- **描述：** OC 和 Creation 卡片有"查看详情"按钮，但目标路由不存在
- **当前状态：** 按钮存在但无功能
- **解决方案：** 需要创建：
  - `src/views/OCDetail.vue` 组件
  - `src/views/CreationDetail.vue` 组件
  - `/oc/:id` 和 `/creations/:id` 动态路由
- **优先级：** 高
- **预计工作量：** 3-4 小时

### 中优先级问题

#### 5. TypeScript 未使用
- **描述：** TypeScript (5.9.3) 已安装但项目使用纯 JavaScript
- **建议：** 可选的优化项。如需类型安全，建议在下一个 Phase 迁移
- **预计工作量：** 4-6 小时（全量迁移）

#### 6. 缺少错误处理和加载状态
- **描述：** API 调用时没有错误处理、超时处理或加载指示器
- **影响：** 用户体验差，调试困难
- **解决方案：** 在 API 服务层添加错误处理，在组件中添加加载状态管理
- **优先级：** 中
- **预计工作量：** 2 小时

#### 7. Sass 已安装但未使用
- **描述：** Sass (1.97.2) 在 package.json 中但所有样式使用纯 CSS
- **建议：** 可选。建议统一使用 CSS 变量而非 SCSS 变量

### 低优先级问题

#### 8. 缺少单元测试和集成测试
- **描述：** 项目中未配置测试框架（Vitest 或 Jest）
- **优先级：** 低
- **预计工作量：** 4-5 小时（Phase 5）

#### 9. 部署流程未验证
- **描述：** 部署指南存在，但实际生产构建和部署未测试
- **优先级：** 低
- **预计工作量：** 1-2 小时（Phase 5）

### 建议修复顺序

1. **立即处理：** 问题 1、2（提升代码质量）
2. **Phase 3 前：** 问题 3、4（解锁 API 集成）
3. **Phase 4：** 问题 6（优化用户体验）
4. **可选：** 问题 5、7（技术优化）
5. **Phase 5：** 问题 8、9（测试和部署）

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