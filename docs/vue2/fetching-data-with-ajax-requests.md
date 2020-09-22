---
id: fetching-data-with-ajax-requests
title: 请求数据
---

利用`axios`来请求数据服务器

 在`services`文件夹中创建对应文件`demo.service.ts`
```javascript
import http from '../utils/http';

export const GET_LIST = (params: Record<string, any>): Promise<Res<any>> => {
  return http('get', '/v1/bpi/currentprice.json', { params });
};
export const POST_LIST = (data: Record<string, any>): Promise<Res<any>> => {
  return http('post', '/v1/bpi/currentprice.json', { data });
};
```

bot 推荐以大写及请求类型开头方式命名