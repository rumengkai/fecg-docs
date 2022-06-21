---
title: 发布须知
group:
  order: 0
  path: /notice
---

## 安装依赖

```
npm run install
```

## 本地开发

```
npm run start
```

## 打包

```
npm run build
```

## 发布到 npm

```
npm run release
```

### 注意：如果要在 npm.jd.com 上发包，需要将 package.json 中的 name 改成 "@jd/fecg-docs"

### 目前 name 是 "fecg-docs"，是因为文档中使用了 codesandbox 功能，codesandbox 中无法加载 @jd 的依赖
