# MiracleLand 部署指南

## 构建完成 ✅

项目已成功构建，`dist` 目录包含所有生产文件。

## 部署选项

### 1. 静态网站托管 (推荐)

#### Vercel
```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

#### Netlify
```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 部署
netlify deploy --prod --dir=dist
```

#### GitHub Pages
1. 在 `vite.config.js` 中添加 `base: '/仓库名/'`
2. 推送到 GitHub
3. 在仓库设置中启用 GitHub Pages，选择 `gh-pages` 分支

### 2. 传统服务器部署

将 `dist` 文件夹中的所有文件上传到服务器的 web 根目录（如 `/var/www/html`）

#### Nginx 配置示例
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 3. 本地预览

```bash
npm run preview
```

## 注意事项

1. **路由配置**: 项目使用 Vue Router 的 history 模式，需要服务器配置支持 SPA
2. **环境变量**: 如需配置不同环境，创建 `.env.production` 文件
3. **资源路径**: 确保 `vite.config.js` 中的 `base` 配置正确

## 文件清单

- `index.html` - 入口 HTML
- `assets/` - CSS、JS 和图片资源
- `vite.svg` - 网站图标

总大小: ~8.4 MB (主要是背景图片)
