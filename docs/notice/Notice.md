---
title: 开发须知
nav:
  title: 开发须知
  order: 6
group:
  order: 0
  path: /notice
---

## 目录结构

```
.
├── package.json
├── public
├── docs                    // 文档
│   ├── components
│   │    ├── fe-pages
│   │    ├── form.md
│   │    └── list.md
│   ├── notice
│   └── index.md
└── src
    └── templates
    │    ├── form                // 文档中 demo 代码块
    │    │   ├── advanced-form   // 模板资产
    │    │   │   └── index.tsx
    │    │   ├── basic-form
    │    │   │   └── index.tsx
    │    │   └── step-form
    │    │       └── index.tsx
    │    ├── list
    │    │   ├── basic-table
    │    │   │   └── index.tsx
    │    │   ├── edit-table
    │    │   │   └── index.tsx
    │    │   └── sort-table
    │    │       ├── index.less
    │    │       └── index.tsx
    │    └── page
    │        ├── index.less
    │        └── index.tsx
    │   .
    │   .
    ├── config
    ├── styles
    ├── utils
    └── index.ts
```

## dumi 笔记

```
---
title: 自定义页面名称
nav:
  path: /自定义导航路由
  title: 自定义导航名称
  order: 控制导航顺序，数字越小越靠前，默认以路径长度和字典序排序
group:
  path: /自定义分组路由，注意，分组路由 = 导航路由 + 自己
  title: 自定义分组名称
  order: 控制分组顺序，数字越小越靠前，默认以路径长度和字典序排序
---
```

## md 文件中写代码尽量使用下面方式，不然在 codesandbox 无法正常预览

```
<code src="/path/to/Demo.tsx"></code>
```
