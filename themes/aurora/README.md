# Hexo Theme Aurora

A premium aviation-themed Hexo blog theme with modern design, inspired by Apple's Bento grid layout.

## Preview

**Live Demo**: [https://buaa.spotterblog.cn/hexo-theme-aurora-demo/](https://buaa.spotterblog.cn/hexo-theme-aurora-demo/)

## Features

- **Bento Grid Homepage** - Apple WWDC-style card layout with randomized arrangement
- **Dark Mode** - Auto-detects system preference, manual toggle, persisted in localStorage
- **Full-Text Search** - Built-in search with Cmd/Ctrl+K shortcut, no plugins needed
- **Reading Progress Bar** - Scroll progress indicator on article pages
- **Table of Contents** - Sticky sidebar TOC with active heading tracking
- **Responsive Design** - 3 breakpoints (1024/768/380px), mobile hamburger menu
- **Auto-hiding Navbar** - Glassmorphism header, hides on scroll down
- **Back to Top** - Smooth scroll back-to-top button
- **Code Copy** - One-click code block copy buttons
- **Scroll Reveal Animations** - Staggered entrance animations via IntersectionObserver
- **Card Glow Effect** - Mouse-tracking radial glow on bento cards
- **Post Navigation** - Previous/next article links
- **Word Count** - CJK-aware word counter
- **SEO** - Open Graph meta tags, semantic HTML
- **Print Styles** - Clean print output
- **Zero Dependencies** - No npm plugins required beyond stock Hexo

## Installation

```bash
cd your-hexo-blog
git clone https://github.com/MessiXiang/hexo-theme-aurora.git themes/aurora
```

Then set in your blog's `_config.yml`:

```yaml
theme: aurora
```

## Configuration

See `_config.yml` in the theme directory for all available options:

```yaml
# Navigation
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
  Search: /search

# Author info
author:
  name: Your Name
  avatar_emoji: "🧑‍🚀"
  bio: "Your bio"
  github: https://github.com/your-username

# Features (all toggleable)
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

Create these source pages for Categories and Tags to work:

```bash
hexo new page categories
hexo new page tags
```

Then edit `source/categories/index.md`:
```yaml
---
title: Categories
type: categories
layout: categories
---
```

And `source/tags/index.md`:
```yaml
---
title: Tags
type: tags
layout: tags
---
```

## License

MIT
