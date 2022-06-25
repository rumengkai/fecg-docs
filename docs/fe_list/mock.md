---
title: mock 生成器
order: 3
---

# mock 生成器

指令：

```
fe mock
```

产物：

```ts
export default {
  'get|/api/fe': {
    code: 200,
    message: 'success',
    data: {
      'data|8': [
        {
          id: '@id',
          name: '@cname',
          category: '@string',
          datatime: '@datetime',
        },
      ],
    },
  },
};
```
