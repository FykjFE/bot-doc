---
id: proxying-api-requests-in-development
title: 开发时的跨域问题
---

在config目录下的`webpack.dev.config.js`文件中修改代理服务器
> E.g

```javascript
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.coindesk.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
```