---
id: folder-structure
title: 目录结构
---

创建后，您的项目应如下所示:
```bash
├─public #webpack不会编译此目录
└─src
    ├─assets #静态资源
    │  └─scss #公共样式
    ├─components #全局注册组件
    ├─directive #全局指令
    ├─filters #全局过滤器
    ├─plugins #全局插件
    ├─prototype #全局方法
    ├─router #路由
    ├─services #接口controller定义
    ├─store #store文件夹
    │  └─modules #各个模块
    ├─utils #工具类
    └─views #页面
```
