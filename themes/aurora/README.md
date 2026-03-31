# Hexo Theme Aurora

![Hexo](https://img.shields.io/badge/Hexo-%3E%3D6.0-blue?logo=hexo&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)
![Version](https://img.shields.io/badge/Version-v1.0.0-orange)
![GitHub stars](https://img.shields.io/github/stars/MessiXiang/hexo-theme-aurora?style=social)
![Demo](https://img.shields.io/website?url=https%3A%2F%2Fbuaa.spotterblog.cn%2Fhexo-theme-aurora-demo%2F&label=Demo)

A premium aviation-themed Hexo blog theme with modern design, inspired by Apple's Bento grid layout.

**Live Demo**: [https://buaa.spotterblog.cn/hexo-theme-aurora-demo/](https://buaa.spotterblog.cn/hexo-theme-aurora-demo/)

## Features

- **Bento Grid Homepage** — Apple WWDC-style card layout with randomized arrangement
- **Flexible Card System** — 5 sizes × 6 visual styles, fully configurable per card
- **Dark Mode** — Auto-detects system preference, manual toggle, persisted in localStorage
- **Full-Text Search** — Built-in search with Cmd/Ctrl+K shortcut, no plugins needed
- **Reading Progress Bar** — Scroll progress indicator on article pages
- **Table of Contents** — Sticky sidebar TOC with active heading tracking
- **Responsive Design** — 3 breakpoints (1024/768/380px), mobile hamburger menu
- **Auto-hiding Navbar** — Glassmorphism header, hides on scroll down
- **Scroll Reveal Animations** — Staggered entrance animations via IntersectionObserver
- **Code Copy** — One-click code block copy buttons
- **SEO** — Open Graph meta tags, semantic HTML
- **Zero Dependencies** — No npm plugins required beyond stock Hexo

## Installation

```bash
cd your-hexo-blog
git clone https://github.com/MessiXiang/hexo-theme-aurora.git themes/aurora
```

Set in your blog's `_config.yml`:

```yaml
theme: aurora
```

## Configuration

See `_config.yml` in the theme directory for all options.

### Bento Cards

Each card supports independent size and visual style:

```yaml
# Size:   large (2×2) | wide (2×1) | tall (1×2) | square (1×1) | mini (1×1 compact)
# Style:  glass | gradient-pink | gradient-blue | gradient-purple | gradient-dark | solid
# Status: done (green) | plan (orange) | new (blue) | none (hidden)

bento:
  - title: "Card Title"
    subtitle: "Description text"
    link: /some-path/
    size: large
    style: glass
    icon: "🛫"
    label: "LABEL TEXT"
    status: done
  - title: "Custom Color"
    subtitle: "Override with any CSS gradient"
    link: /another/
    size: square
    style: glass
    color: "linear-gradient(135deg, #ff6b6b, #ffa500)"
    label: "CUSTOM"
    status: new
```

### Other Options

```yaml
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
  Search: /search

author:
  name: Your Name
  handle: "@yourhandle"
  avatar_emoji: "🧑‍🚀"
  bio: "Your bio"
  github: https://github.com/your-username

features:
  dark_mode: true
  back_to_top: true
  toc: true
  search: true
  reading_progress: true
  post_nav: true
  code_copy: true
```

## Required Pages

```bash
hexo new page categories
hexo new page tags
```

Edit `source/categories/index.md`:
```yaml
---
title: Categories
type: categories
layout: categories
---
```

Edit `source/tags/index.md`:
```yaml
---
title: Tags
type: tags
layout: tags
---
```

## License

MIT

---

# Hexo Theme Aurora

![Hexo](https://img.shields.io/badge/Hexo-%3E%3D6.0-blue?logo=hexo&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)
![Version](https://img.shields.io/badge/Version-v1.0.0-orange)
![GitHub stars](https://img.shields.io/github/stars/MessiXiang/hexo-theme-aurora?style=social)
![Demo](https://img.shields.io/website?url=https%3A%2F%2Fbuaa.spotterblog.cn%2Fhexo-theme-aurora-demo%2F&label=Demo)

一款以航空为主题的高端 Hexo 博客主题，灵感源自 Apple Bento 网格布局。

**在线演示**：[https://buaa.spotterblog.cn/hexo-theme-aurora-demo/](https://buaa.spotterblog.cn/hexo-theme-aurora-demo/)

## 特性

- **Bento 网格首页** — Apple WWDC 风格卡片布局，每次加载随机排列
- **灵活的卡片系统** — 5 种尺寸 × 6 种视觉风格，每张卡片独立配置
- **深色模式** — 自动检测系统偏好，手动切换，localStorage 持久化
- **全文搜索** — 内置搜索，支持 Cmd/Ctrl+K 快捷键，无需额外插件
- **阅读进度条** — 文章页面滚动进度指示器
- **目录导航** — 固定侧边栏 TOC，自动高亮当前标题
- **响应式设计** — 3 个断点 (1024/768/380px)，移动端汉堡菜单
- **自动隐藏导航栏** — 毛玻璃效果，向下滚动时自动隐藏
- **滚动揭示动画** — 基于 IntersectionObserver 的交错入场动画
- **代码一键复制** — 代码块复制按钮
- **SEO** — Open Graph 元标签，语义化 HTML
- **零依赖** — 无需安装任何 npm 插件

## 安装

```bash
cd your-hexo-blog
git clone https://github.com/MessiXiang/hexo-theme-aurora.git themes/aurora
```

在博客根目录的 `_config.yml` 中设置：

```yaml
theme: aurora
```

## 配置

所有选项详见主题目录下的 `_config.yml`。

### Bento 卡片

每张卡片支持独立的尺寸和视觉风格：

```yaml
# 尺寸 (size):  large (2×2) | wide (2×1) | tall (1×2) | square (1×1) | mini (1×1 紧凑)
# 风格 (style): glass | gradient-pink | gradient-blue | gradient-purple | gradient-dark | solid
# 状态 (status): done (绿) | plan (橙) | new (蓝) | none (隐藏)

bento:
  - title: "卡片标题"
    subtitle: "描述文字"
    link: /some-path/
    size: large
    style: glass
    icon: "🛫"
    label: "标签文字"
    status: done
  - title: "自定义颜色"
    subtitle: "用任意 CSS 渐变覆盖预设"
    link: /another/
    size: square
    style: glass
    color: "linear-gradient(135deg, #ff6b6b, #ffa500)"
    label: "自定义"
    status: new
```

### 其他选项

```yaml
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
  Search: /search

author:
  name: 你的名字
  handle: "@你的ID"
  avatar_emoji: "🧑‍🚀"
  bio: "你的简介"
  github: https://github.com/your-username

features:
  dark_mode: true
  back_to_top: true
  toc: true
  search: true
  reading_progress: true
  post_nav: true
  code_copy: true
```

## 必需页面

```bash
hexo new page categories
hexo new page tags
```

编辑 `source/categories/index.md`：
```yaml
---
title: Categories
type: categories
layout: categories
---
```

编辑 `source/tags/index.md`：
```yaml
---
title: Tags
type: tags
layout: tags
---
```

## 许可证

MIT
