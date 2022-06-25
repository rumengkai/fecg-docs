---
title: api 生成器
order: 2
nav:
  title: 生成器列表
  order: 2
---

# api 生成器

指令：

```
fe api
```

产物：

```ts
import request from 'utils/request';
import { Response } from './type';

export const feApi = async (param: { id: string }) => {
  return request<Response>({
    url: '/api/fe',
    method: 'POST',
    data: param,
  });
};
```
