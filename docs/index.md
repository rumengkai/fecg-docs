---
title: fecg - 代码生成器
order: 1
hero:
  title: 代码快速生成器
  desc: 一种代码快速生成的工具，协助你在开发中快速的完成一些繁琐的工作。
  actions:
    - text: 快速开始
      link: /components/
footer: Open-source MIT Licensed | Copyright © 2021-present
---

![](https://raw.githubusercontent.com/rumengkai/fecg/main/public/use_demo.gif)

## 关于

在中后台系统开发中，我们早已习惯了基于 antd 等基础组件搭建我们的页面。然而这些基础组件很难直接满足我们的业务需求，实际项目开发中往往包含大量重复的业务场景。这些业务场景很多都是大同小异的，有些是有一定业务逻辑的组件（员工选择器、表单等），另一些是由基础组件和业务组件组合成的列表、模块，还有一些是页面布局、视觉规范、项目工程化等。

fecg（Front end code generator）工具就是用来解决在相似业务场景下，摆脱查找复制粘贴等繁琐工作，进一步降低中后台系统开发成本。

## 如何安装

```bash
npm install fecg -g
```

## 如何使用

下面的命令会列出目前所有可用的生成器，可以通过交互式方式来选择你使用的功能，都有详细的提示。

```bash
$ fe
❯ list - 列表页面
  form - 表单页面
  page - 空白页面
  api - 生成 api 文件
  mock - 生成单个 mock 文件
  openapi - 根据swagger openapi3 生成 server
```

你也可以通过 fe \<generatorName\> name 的形式来使用对应的生成器。 --dir 参数代表输出文件的路径

```bash
$ fe list basic-table userList --dir src/pages
✔  ++ ./src/pages/userList/index.tsx
```

或者使用 fe -h 查看帮助

```bash
$ fe -h

Usage:
  $ fe                 Select from a list of available generators
  $ fe <name>          Run a generator registered under that name
  $ fe <name> [input]  Run the generator with input data to bypass prompts

Options:
  -h, --help             Show this help display
  -t, --show-type-names  Show type names instead of abbreviations
  -i, --init             Generate a basic plopfile.js
  -v, --version          Print current version
  -f, --force            Run the generator forcefully
  -d, --dir              Enter folder path

 ------------------------------------------------------


Examples:
  $ fe
  $ fe list
  $ fe list basic-table
  $ fe list basic-table userList --dir src/pages
```

## 配合 vscode 插件使用：[fecg-vscode](https://marketplace.visualstudio.com/items?itemName=rumengkai.fecg)

![](https://raw.githubusercontent.com/rumengkai/fecg/main/public/fecg-vscode.png)

![](https://raw.githubusercontent.com/rumengkai/fecg/main/public/use_demo_vscode.gif)

## 配置文件

> 注意：如果要使用 [openapi](./openapi/) 功能，需要在项目根路径增加配置文件：fecg.config.js

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

<!-- ## 反馈请访问 [GitHub](https://github.com/)。 -->
