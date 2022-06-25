---
title: openapi
order: 1
nav:
  title: openapi
  order: 3
---

## 一种根据 openapi 自动生成 api、ts 类型、mock 等相关代码的工具

### 如何使用

```bash
$ fe openapi

✔  openapiGenerator
[openAPI]: ✅ 成功生成 service 文件
[openAPI]: ✅ 生成 mock 文件成功
```

> 注意：如果要使用 openapi 功能，需要在项目根路径增加配置文件：fecg.config.js

```js
module.exports = {
  // 如果要使用openapi功能，需要配置openapi信息
  openapi: {
    schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json', // schema 地址
    requestLibPath: "import request from '@/utils/request';", // 请求头设置
    serversPath: './src/servers', // server文件输出目录
    mockFolder: './src/mock/api', // mock文件输出目录
    // apiPrefix: '',  // api请求地址前缀
  },
};
```
