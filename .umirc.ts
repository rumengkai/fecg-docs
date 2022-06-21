import { defineConfig } from 'dumi';

const repo = 'fecg-docs';

export default defineConfig({
  mfsu: {},
  // 网站描述配置
  mode: 'site',
  title: '代码生成器',
  favicon: `/${repo}/images/favicon.ico`,
  logo: `/${repo}/images/photos.svg`,
  description: `${repo} 代码生成器`,

  base: `/${repo}/`, // 打包路径配置
  publicPath: `/${repo}/`, // 打包文件时，引入地址生成 publicPath/xxx.js
  outputPath: 'docs-dist',
  exportStatic: {}, // 对每隔路由输出html
  dynamicImport: {}, // 动态导入
  styles: [`.__dumi-default-previewer-demo { overflow-x: scroll; }`],

  hash: true, //加hash配置，清除缓存
  manifest: {
    // 内部发布系统规定必须配置
    fileName: 'manifest.json',
  },

  // 主题
  theme: {
    '@c-primary': '#16c35f',
  },
});
