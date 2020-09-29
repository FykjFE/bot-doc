---
id: global-components
title: 全局组件
---

`src/components`目录下组件已自动全局注册，使用大驼峰命名。

```bash
#bad
hello-world.vue

#good
HelloWorld.vue
```
使用时使用连字符
```bash
<hello-world></hello-world>
```